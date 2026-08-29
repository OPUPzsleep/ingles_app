import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { TopicCard } from '@/components/topic-card';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { TOPICS } from '@/data/grammar/topics';
import { topicProgress } from '@/lib/grammar';

export default function AprenderScreen() {
  const router = useRouter();
  const { doneUnits } = useProgress();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView contentContainerStyle={styles.content}>
          <ThemedText type="subtitle">Aprender</ThemedText>
          <ThemedText themeColor="textSecondary">Elige un tema para empezar</ThemedText>

          {TOPICS.map((topic) => {
            const { done, hasContent } = topicProgress(topic.name, doneUnits);
            return (
              <TopicCard
                key={topic.name}
                topic={topic}
                done={done}
                hasContent={hasContent}
                onPress={() => router.push(`/tema/${encodeURIComponent(topic.name)}`)}
              />
            );
          })}
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
    padding: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.four,
    gap: Spacing.three,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
});
