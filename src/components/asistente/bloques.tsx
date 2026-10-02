import { StyleSheet, View } from 'react-native';

import { BotonEnlace, FilaDeEnlaces } from '@/components/asistente/boton-enlace';
import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { VerbRow } from '@/components/verb-row';
import { TarjetaFrase } from '@/components/vocabulario/tarjeta-frase';
import { TarjetaPalabra } from '@/components/vocabulario/tarjeta-palabra';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import type { Bloque } from '@/lib/asistente/tipos';

interface BloquesProps {
  bloques: Bloque[];
  onAbrir: (ruta: string) => void;
}

/** Lo que contesta el asistente, bloque por bloque: texto, explicaciones, fichas de tiempos, palabras, verbos, frases y botones. */
export function Bloques({ bloques, onAbrir }: BloquesProps) {
  return (
    <View style={styles.columna}>
      {bloques.map((bloque, i) => (
        <BloqueView key={i} bloque={bloque} onAbrir={onAbrir} />
      ))}
    </View>
  );
}

function BloqueView({ bloque, onAbrir }: { bloque: Bloque; onAbrir: (ruta: string) => void }) {
  const theme = useTheme();

  switch (bloque.tipo) {
    case 'texto':
      return (
        <View style={[styles.burbuja, { backgroundColor: theme.backgroundElement, borderColor: theme.border }]}>
          <ThemedText>{bloque.texto}</ThemedText>
        </View>
      );

    case 'explicacion':
      return (
        <Card style={styles.tarjeta}>
          <ThemedText type="label" themeColor="textSecondary">
            {bloque.fuente}
          </ThemedText>
          <ThemedText type="cardTitle">{bloque.titulo}</ThemedText>
          <ThemedText>{bloque.cuerpo}</ThemedText>
          {!!bloque.nota && (
            <ThemedText type="small" themeColor="textSecondary" style={styles.nota}>
              {bloque.nota}
            </ThemedText>
          )}
          <BotonEnlace enlace={bloque.enlace} onAbrir={onAbrir} />
        </Card>
      );

    case 'tiempo':
      return (
        <Card style={styles.tarjeta}>
          <ThemedText type="cardTitle">{bloque.titulo}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            Fórmula: <ThemedText type="smallBold">{bloque.formula}</ThemedText> · {bloque.modelo}
          </ThemedText>
          <ThemedText type="label" themeColor="textSecondary">
            Cuándo se usa
          </ThemedText>
          {bloque.cuando.map((uso) => (
            <ThemedText key={uso} type="small">
              • {uso}
            </ThemedText>
          ))}
          <ThemedText type="small" themeColor="textSecondary">
            Suele ir con: {bloque.senales.join(' · ')}
          </ThemedText>
          <View style={[styles.ojo, { backgroundColor: theme.warningMuted, borderColor: theme.warning }]}>
            <ThemedText type="small">⚠️ {bloque.ojo}</ThemedText>
          </View>
          {bloque.ejemplos.map(([en, es], i) => (
            <View key={`${i}-${en}`} style={styles.ejemplo}>
              <View style={styles.textoEjemplo}>
                <ThemedText type="smallBold">{en}</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {es}
                </ThemedText>
              </View>
              <SpeakButton text={en} size={18} />
            </View>
          ))}
          <FilaDeEnlaces enlaces={bloque.enlaces} onAbrir={onAbrir} />
        </Card>
      );

    case 'palabra':
      return <TarjetaPalabra entrada={bloque.entrada} pie={bloque.pie} />;

    case 'verbo':
      return <VerbRow verbo={bloque.verbo} abierto />;

    case 'frases':
      return (
        <View style={styles.columna}>
          <ThemedText type="smallBold">{bloque.titulo}</ThemedText>
          {bloque.frases.map((frase, i) => (
            <TarjetaFrase key={`${i}-${frase.en}`} frase={frase} />
          ))}
          {!!bloque.enlace && <BotonEnlace enlace={bloque.enlace} onAbrir={onAbrir} />}
        </View>
      );

    case 'enlaces':
      return (
        <View style={styles.columna}>
          {!!bloque.titulo && (
            <ThemedText type="small" themeColor="textSecondary">
              {bloque.titulo}
            </ThemedText>
          )}
          <FilaDeEnlaces enlaces={bloque.enlaces} onAbrir={onAbrir} />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  columna: {
    gap: Spacing.two,
  },
  burbuja: {
    alignSelf: 'flex-start',
    maxWidth: '100%',
    borderWidth: 1,
    borderRadius: Radius.medium,
    borderTopLeftRadius: Radius.small / 2,
    paddingVertical: Spacing.two + Spacing.one,
    paddingHorizontal: Spacing.three,
  },
  tarjeta: {
    padding: Spacing.three,
    gap: Spacing.two,
  },
  nota: {
    fontStyle: 'italic',
  },
  ojo: {
    borderLeftWidth: 3,
    borderRadius: Radius.small,
    padding: Spacing.two,
  },
  ejemplo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  textoEjemplo: {
    flex: 1,
  },
});
