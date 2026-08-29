import { StyleSheet, View } from 'react-native';

import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { PronunTip } from '@/types/grammar';

export function PronunciationCard({ tip }: { tip: PronunTip }) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.box,
        { backgroundColor: theme.backgroundSelected, borderLeftColor: theme.primary },
      ]}>
      <ThemedText type="label" themeColor="primary">
        {tip.head}
      </ThemedText>
      <ThemedText style={styles.body}>{tip.body}</ThemedText>
      <View style={styles.chips}>
        {tip.examples.map((ex, i) => (
          <View
            key={i}
            style={[styles.chip, { backgroundColor: theme.backgroundElement, borderColor: theme.border }]}>
            <ThemedText type="small" style={styles.chipText}>
              {ex}
            </ThemedText>
            <SpeakButton text={ex} size={13} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderLeftWidth: 3,
    borderRadius: Radius.small,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  body: {
    lineHeight: 22,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
    borderRadius: Radius.small,
    borderWidth: 1,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
  },
  chipText: {
    fontFamily: 'monospace',
  },
});
