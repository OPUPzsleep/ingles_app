import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Radius } from '@/constants/theme';
import { CefrLevel, Topic } from '@/types/grammar';

interface TopicCardProps {
  topic: Topic;
  done: number;
  hasContent: boolean;
  onPress: () => void;
  /** Unidades de este tema que están en o por debajo del nivel del usuario. */
  atLevelCount?: number;
  /** Nivel más bajo presente en este tema (ej. el punto de entrada real). */
  minLevel?: CefrLevel | null;
}

export function TopicCard({
  topic,
  done,
  hasContent,
  onPress,
  atLevelCount,
  minLevel,
}: TopicCardProps) {
  const pct = topic.units.length ? Math.round((done / topic.units.length) * 100) : 0;
  const readyForYou = hasContent && !!atLevelCount && atLevelCount > 0;

  return (
    <Card onPress={hasContent ? onPress : undefined} style={!hasContent && styles.locked}>
      <View style={styles.header}>
        <ThemedText style={styles.icon}>{topic.icon}</ThemedText>
        {!hasContent ? (
          <ThemedText type="label" themeColor="textSecondary">
            Próximamente
          </ThemedText>
        ) : (
          !!minLevel && (
            <View style={[styles.levelBadge, readyForYou && styles.levelBadgeActive]}>
              <ThemedText type="label" themeColor={readyForYou ? 'primary' : 'textSecondary'}>
                Desde {minLevel}
              </ThemedText>
            </View>
          )
        )}
      </View>
      <ThemedText type="cardTitle">{topic.name}</ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {topic.units.length} unidades · {done} completadas
        {typeof atLevelCount === 'number' ? ` · ${atLevelCount} a tu nivel` : ''}
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
  levelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: Radius.pill,
    opacity: 0.7,
  },
  levelBadgeActive: {
    opacity: 1,
  },
});
