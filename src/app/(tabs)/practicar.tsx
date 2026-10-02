import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Cuadricula } from '@/components/cuadricula';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { useSettings } from '@/context/settings-context';
import { useIsWide } from '@/hooks/use-is-wide';
import { contarDificiles, TITULOS_MODO, type Modo } from '@/lib/practice';
import { useEstiloHorizontal, useHorizontal } from '@/hooks/use-horizontal';

const OPCIONES: { modo: Modo; descripcion: string }[] = [
  {
    modo: 'dia',
    descripcion: '10 ejercicios mezclados en unos 5 minutos: tarjetas, verbos, dictado y ordenar frases.',
  },
  { modo: 'verbos', descripcion: 'Escribe el pasado, el participio o el -ing. Sobre todo verbos irregulares.' },
  { modo: 'dictado', descripcion: 'Escucha una frase y escríbela. Entrenas el oído y la ortografía.' },
  { modo: 'ordenar', descripcion: 'Ordena las palabras revueltas de una frase, con la traducción como pista.' },
];

export default function PracticarScreen() {
  const horizontal = useHorizontal();
  const estiloHorizontal = useEstiloHorizontal(1000);
  const router = useRouter();
  const isWide = useIsWide();
  const { srs } = useProgress();
  const { focusModeEnabled } = useSettings();
  const [verTodo, setVerTodo] = useState(false);

  const dificiles = contarDificiles(srs);
  // Modo TDAH: una sola opción a la vez; el resto queda detrás de "Ver más".
  const soloUna = focusModeEnabled && !verTodo;
  const opciones = soloUna ? OPCIONES.slice(0, 1) : OPCIONES;

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        {/* Modo TDAH con una sola tarjeta: columna angosta y centrada, no media pantalla vacía. */}
        <ScrollView contentContainerStyle={[styles.content, isWide && !soloUna && styles.contentAncho, estiloHorizontal]}>
          <ThemedText type="subtitle">Practicar</ThemedText>
          {!horizontal && (
            <ThemedText themeColor="textSecondary">
              Sesiones cortas de 10 ejercicios. Lo que falles se repite pronto.
            </ThemedText>
          )}

          {/* En pantalla ancha las tarjetas van en cuadrícula; en celular, una debajo de otra. */}
          <Cuadricula minColumna={horizontal ? 340 : 440}>
            {opciones.map(({ modo, descripcion }) => (
              <Card key={modo} style={styles.celda} onPress={() => router.push(`/practica/${modo}`)}>
                <ThemedText type="cardTitle">{TITULOS_MODO[modo]}</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {descripcion}
                </ThemedText>
              </Card>
            ))}

            {!soloUna && (
              <Card key="dificil" style={styles.celda} onPress={() => router.push('/practica/dificil')}>
                <ThemedText type="cardTitle">{TITULOS_MODO.dificil}</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {dificiles > 0
                    ? `Tienes ${dificiles} ${dificiles === 1 ? 'pendiente' : 'pendientes'}: lo que más te cuesta, primero.`
                    : 'Nada difícil por ahora 🎉 Lo que falles aparecerá aquí.'}
                </ThemedText>
              </Card>
            )}

            {!soloUna && (
              <Card key="mapa" style={styles.celda} onPress={() => router.push('/tiempos')}>
                <ThemedText type="cardTitle">🗺️ Mapa de tiempos verbales</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  Los 13 tiempos en un cuadro: cómo se forma cada uno, cuándo se usa y ejemplos.
                </ThemedText>
              </Card>
            )}
          </Cuadricula>

          {focusModeEnabled && (
            <Button variant="ghost" onPress={() => setVerTodo((v) => !v)}>
              {verTodo ? '🙈 Mostrar menos' : '👀 Ver más ejercicios'}
            </Button>
          )}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    padding: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.four,
    gap: Spacing.three,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  contentAncho: {
    maxWidth: 1180,
    padding: Spacing.four,
  },
  // Llena su celda de la cuadrícula (y mide lo mismo de alto que la de al lado).
  celda: {
    flex: 1,
  },
});
