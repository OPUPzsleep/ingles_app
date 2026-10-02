import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NivelUnidades } from '@/components/nivel-unidades';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ProgressBar } from '@/components/ui/progress-bar';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { INFO_NIVEL } from '@/data/grammar/niveles';
import { esNivel, progresoDeNivel } from '@/lib/grammar';
import { useEstiloHorizontal } from '@/hooks/use-horizontal';

/** Un nivel del recorrido: sus unidades en orden y, al final, su quiz. */
export default function NivelScreen() {
  const estiloHorizontal = useEstiloHorizontal(1000);
  const { nivel: param } = useLocalSearchParams<{ nivel: string }>();
  const router = useRouter();
  const { doneUnits } = useProgress();
  const nivel = esNivel(param) ? param : null;
  const { hechas, total } = nivel ? progresoDeNivel(nivel, doneUnits) : { hechas: 0, total: 0 };

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: nivel ? `Nivel ${nivel}` : 'Nivel' }} />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ScrollView contentContainerStyle={[styles.content, estiloHorizontal]}>
          {!nivel ? (
            <ThemedText themeColor="textSecondary">No se encontró este nivel.</ThemedText>
          ) : (
            <>
              <ThemedText type="subtitle">
                {INFO_NIVEL[nivel].icono} Nivel {nivel} · {INFO_NIVEL[nivel].nombre}
              </ThemedText>
              <ThemedText themeColor="textSecondary">{INFO_NIVEL[nivel].resumen}</ThemedText>
              <ProgressBar percent={total > 0 ? Math.round((hechas / total) * 100) : 0} />
              <ThemedText type="small" themeColor="textSecondary" style={styles.progreso}>
                {hechas} de {total} unidades estudiadas
              </ThemedText>
              <NivelUnidades nivel={nivel} onSelectUnit={(num) => router.push(`/unidad/${num}`)} />
            </>
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
    gap: Spacing.two,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  progreso: {
    marginBottom: Spacing.two,
  },
});
