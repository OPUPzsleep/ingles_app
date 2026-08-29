import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { QuizSession } from '@/components/quiz-session';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { getUnit, buildUnitQuizPool } from '@/lib/grammar';

export default function QuizUnidadScreen() {
  const { num: numParam } = useLocalSearchParams<{ num: string }>();
  const num = Number(numParam);
  const router = useRouter();
  const { markUnitDone } = useProgress();

  const unit = getUnit(num);
  const pool = useMemo(() => buildUnitQuizPool(num), [num]);

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: `Quiz · Unit ${num}` }} />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ThemedView style={styles.content}>
          <QuizSession
            pool={pool}
            modeLabel={`Unit ${num}: ${unit?.title ?? ''}`}
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
    padding: Spacing.four,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
});
