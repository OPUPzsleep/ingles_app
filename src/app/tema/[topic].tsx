import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { TopicUnits } from '@/components/topic-units';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { getTopic } from '@/lib/grammar';

export default function TemaScreen() {
  const { topic: topicParam } = useLocalSearchParams<{ topic: string }>();
  const topicName = decodeURIComponent(topicParam ?? '');
  const router = useRouter();
  const topic = getTopic(topicName);

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: topicName }} />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ScrollView contentContainerStyle={styles.content}>
          <ThemedText type="subtitle">
            {topic?.icon} {topicName}
          </ThemedText>

          <TopicUnits topicName={topicName} onSelectUnit={(num) => router.push(`/unidad/${num}`)} />
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
});
