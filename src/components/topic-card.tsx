import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Topic } from '@/types/grammar';

interface TopicCardProps {
  topic: Topic;
  done: number;
  hasContent: boolean;
  onPress: () => void;
}

export function TopicCard({ topic, done, hasContent, onPress }: TopicCardProps) {
  const pct = topic.units.length ? Math.round((done / topic.units.length) * 100) : 0;

  return (
    <Card onPress={hasContent ? onPress : undefined} style={!hasContent && styles.locked}>
      <View style={styles.header}>
        <ThemedText style={styles.icon}>{topic.icon}</ThemedText>
        {!hasContent && (
          <ThemedText type="label" themeColor="textSecondary">
            Próximamente
          </ThemedText>
        )}
      </View>
      <ThemedText type="cardTitle">{topic.name}</ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {topic.units.length} unidades · {done} completadas
      </ThemedText>
      {hasContent && <ProgressBar percent={pct} />}
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 26,
  },
  locked: {
    opacity: 0.55,
  },
});
