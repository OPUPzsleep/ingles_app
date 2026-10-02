import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';

import { abrirRuta } from '@/components/asistente/abrir-ruta';
import { Bloques } from '@/components/asistente/bloques';
import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { useSubirConElTeclado } from '@/hooks/use-subir-con-el-teclado';
import { precalentar } from '@/lib/asistente/indice';
import { responder } from '@/lib/asistente/motor';
import { SUGERENCIAS_INICIALES } from '@/lib/asistente/sugerencias';
import type { Respuesta } from '@/lib/asistente/tipos';
import { contarDificiles } from '@/lib/practice';
import { useTheme } from '@/hooks/use-theme';

interface Mensaje {
  id: number;
  autor: 'yo' | 'app';
  texto?: string;
  respuesta?: Respuesta;
}

/** El primer mensaje: qué es y qué sabe hacer, con preguntas de ejemplo para tocar. */
const BIENVENIDA: Mensaje = {
  id: 1,
  autor: 'app',
  respuesta: {
    bloques: [
      {
        tipo: 'texto',
        texto:
          '¡Hola! 👋 Soy el asistente de la app. Te contesto con lo que hay en las unidades, la gramática, el vocabulario y las frases.\nFunciono sin internet ni inteligencia artificial: solo sé lo que está aquí. Prueba con una de estas preguntas o escribe la tuya:',
      },
    ],
    sugerencias: SUGERENCIAS_INICIALES.slice(0, 6),
  },
};

/** Una conversación con el asistente: preguntas a la derecha, respuestas a la izquierda y preguntas sugeridas para seguir. */
export function Chat() {
  const router = useRouter();
  const theme = useTheme();
  const { doneUnits, userLevel, srs } = useProgress();
  // El teclado del teléfono tapa lo de abajo: la barra de escribir sube lo que haga falta.
  const contenedor = useRef<View>(null);
  const subir = useSubirConElTeclado(contenedor);

  const [mensajes, setMensajes] = useState<Mensaje[]>([BIENVENIDA]);
  const [escrito, setEscrito] = useState('');
  const scroll = useRef<ScrollView>(null);
  const posiciones = useRef<Record<number, number>>({});
  const siguienteId = useRef(2);
  const ultimoDoc = useRef<string | undefined>(undefined);

  useEffect(() => {
    // El índice de búsqueda se arma un instante después de abrir, para que la primera pregunta no se sienta lenta.
    const espera = setTimeout(precalentar, 150);
    return () => clearTimeout(espera);
  }, []);

  const enviar = (texto: string) => {
    const pregunta = texto.trim();
    if (!pregunta) return;
    const respuesta = responder(pregunta, { doneUnits, userLevel, dificiles: contarDificiles(srs) }, ultimoDoc.current);
    if (respuesta.docId) ultimoDoc.current = respuesta.docId;

    const idPregunta = siguienteId.current++;
    const idRespuesta = siguienteId.current++;
    setMensajes((actuales) => [
      ...actuales,
      { id: idPregunta, autor: 'yo', texto: pregunta },
      { id: idRespuesta, autor: 'app', respuesta },
    ]);
    setEscrito('');
    // Se sube hasta la pregunta, para leer la respuesta desde su principio aunque sea larga.
    setTimeout(() => scroll.current?.scrollTo({ y: Math.max(0, (posiciones.current[idPregunta] ?? 0) - Spacing.two), animated: true }), 120);
  };

  const ultimo = mensajes[mensajes.length - 1];

  return (
    <View ref={contenedor} style={[styles.contenedor, { paddingBottom: subir }]}>
      <ScrollView ref={scroll} contentContainerStyle={styles.lista} keyboardShouldPersistTaps="handled">
        {mensajes.map((mensaje) => (
          <View
            key={mensaje.id}
            onLayout={(evento) => (posiciones.current[mensaje.id] = evento.nativeEvent.layout.y)}
            style={styles.mensaje}>
            {mensaje.autor === 'yo' ? (
              <View style={[styles.pregunta, { backgroundColor: theme.primary }]}>
                <ThemedText themeColor="onPrimary">{mensaje.texto}</ThemedText>
              </View>
            ) : (
              mensaje.respuesta && <Bloques bloques={mensaje.respuesta.bloques} onAbrir={(ruta) => abrirRuta(router, ruta)} />
            )}
          </View>
        ))}

        {ultimo.autor === 'app' && !!ultimo.respuesta && ultimo.respuesta.sugerencias.length > 0 && (
          <View style={styles.sugerencias}>
            {ultimo.respuesta.sugerencias.map((sugerencia) => (
              <Pressable
                key={sugerencia}
                onPress={() => enviar(sugerencia)}
                accessibilityRole="button"
                style={({ pressed }) => [
                  styles.sugerencia,
                  { backgroundColor: theme.backgroundSelected, borderColor: theme.border },
                  pressed && styles.pulsado,
                ]}>
                <ThemedText type="small">{sugerencia}</ThemedText>
              </Pressable>
            ))}
          </View>
        )}
      </ScrollView>

      <View style={[styles.barra, { backgroundColor: theme.background, borderColor: theme.border }]}>
        <View style={styles.entrada}>
          <TextInput
            value={escrito}
            onChangeText={setEscrito}
            onSubmitEditing={() => enviar(escrito)}
            blurOnSubmit={false}
            returnKeyType="send"
            placeholder="Escribe tu pregunta…"
            placeholderTextColor={theme.textSecondary}
            accessibilityLabel="Escribe tu pregunta"
            autoCapitalize="sentences"
            style={[styles.campo, { backgroundColor: theme.backgroundSelected, color: theme.text, borderColor: theme.border }]}
          />
          <Pressable
            onPress={() => enviar(escrito)}
            disabled={!escrito.trim()}
            accessibilityRole="button"
            accessibilityLabel="Enviar"
            style={({ pressed }) => [
              styles.enviar,
              { backgroundColor: theme.primary },
              (!escrito.trim() || pressed) && styles.pulsado,
            ]}>
            <ThemedText type="smallBold" themeColor="onPrimary">
              Enviar
            </ThemedText>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

/** Ancho máximo de la conversación: en pantalla ancha se centra en una columna cómoda de leer. */
const ANCHO_MAXIMO = 820;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  lista: {
    padding: Spacing.three,
    gap: Spacing.three,
    width: '100%',
    maxWidth: ANCHO_MAXIMO,
    alignSelf: 'center',
  },
  mensaje: {
    gap: Spacing.two,
  },
  pregunta: {
    alignSelf: 'flex-end',
    maxWidth: '85%',
    borderRadius: Radius.medium,
    borderBottomRightRadius: Radius.small / 2,
    paddingVertical: Spacing.two + Spacing.one,
    paddingHorizontal: Spacing.three,
  },
  sugerencias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  // Una pregunta larga con letra grande pasa a dos líneas en vez de salirse de la pantalla.
  sugerencia: {
    maxWidth: '100%',
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: Radius.pill,
    borderWidth: 1,
  },
  pulsado: {
    opacity: 0.6,
  },
  barra: {
    padding: Spacing.three,
    borderTopWidth: 1,
  },
  entrada: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    width: '100%',
    maxWidth: ANCHO_MAXIMO,
    alignSelf: 'center',
  },
  campo: {
    flex: 1,
    borderWidth: 1,
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two + Spacing.one,
    fontSize: 16,
  },
  enviar: {
    paddingVertical: Spacing.two + Spacing.one,
    paddingHorizontal: Spacing.four,
    borderRadius: Radius.pill,
  },
});
