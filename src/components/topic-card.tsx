import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Radius, Spacing } from '@/constants/theme';
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
  /** Versión de una sola línea para listas laterales: caben el doble de temas en pantalla. */
  compact?: boolean;
}

export function TopicCard({
  topic,
  done,
  hasContent,
  onPress,
  atLevelCount,
  minLevel,
  compact = false,
}: TopicCardProps) {
  const pct = topic.units.length ? Math.round((done / topic.units.length) * 100) : 0;
  const readyForYou = hasContent && !!atLevelCount && atLevelCount > 0;

  if (compact) {
    return (
      <Card onPress={hasContent ? onPress : undefined} style={[styles.compacta, !hasContent && styles.locked]}>
        <View style={styles.filaCompacta}>
          <ThemedText style={styles.iconoCompacto}>{topic.icon}</ThemedText>
          <View style={styles.textoCompacto}>
            <ThemedText type="smallBold" numberOfLines={1}>
              {topic.name}
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary" numberOfLines={1}>
              {hasContent
                ? `${done}/${topic.units.length} unidades${typeof atLevelCount === 'number' ? ` · ${atLevelCount} a tu nivel` : ''}`
                : 'Próximamente'}
            </ThemedText>
          </View>
          {hasContent && !!minLevel && (
            <ThemedText type="label" themeColor={readyForYou ? 'primary' : 'textSecondary'}>
              {minLevel}
            </ThemedText>
          )}
        </View>
        {hasContent && <ProgressBar percent={pct} />}
      </Card>
    );
  }

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
  compacta: {
    padding: Spacing.three,
    gap: Spacing.two,
  },
  filaCompacta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  iconoCompacto: {
    fontSize: 22,
  },
  textoCompacto: {
    flex: 1,
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
