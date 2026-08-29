import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { QuizSession } from '@/components/quiz-session';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { buildTopicQuizPool } from '@/lib/grammar';

export default function QuizTemaScreen() {
  const { topic: topicParam } = useLocalSearchParams<{ topic: string }>();
  const topicName = decodeURIComponent(topicParam ?? '');
  const router = useRouter();

  const pool = useMemo(() => buildTopicQuizPool(topicName), [topicName]);

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: `Quiz · ${topicName}` }} />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ThemedView style={styles.content}>
          <QuizSession pool={pool} modeLabel={topicName} onExit={() => router.back()} />
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
