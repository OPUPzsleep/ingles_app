import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { QuizSession } from '@/components/quiz-session';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { buildUnitQuizPool, etiquetaDeUnidad, getUnit } from '@/lib/grammar';
import { useEstiloHorizontal } from '@/hooks/use-horizontal';

export default function QuizUnidadScreen() {
  const estiloHorizontal = useEstiloHorizontal(760);
  const { num: numParam } = useLocalSearchParams<{ num: string }>();
  const num = Number(numParam);
  const router = useRouter();
  const { markUnitDone } = useProgress();

  const unit = getUnit(num);
  const pool = useMemo(() => buildUnitQuizPool(num), [num]);

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: `Quiz · ${etiquetaDeUnidad(num)}` }} />
      <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
        <ThemedView style={[styles.content, estiloHorizontal]}>
          <QuizSession
            pool={pool}
            modeLabel={`${etiquetaDeUnidad(num)}: ${unit?.title ?? ''}`}
            onFinish={() => markUnitDone(num)}
            onExit={() => router.back()}
          />
        </ThemedView>
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
    flex: 1,
    padding: Spacing.three,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
});
