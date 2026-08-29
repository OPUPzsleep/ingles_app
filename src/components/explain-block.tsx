import { StyleSheet, View } from 'react-native';

import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { ExplainBlock as ExplainBlockData } from '@/types/grammar';

export function ExplainBlock({ block }: { block: ExplainBlockData }) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.box,
        { backgroundColor: theme.backgroundSelected, borderLeftColor: theme.primary },
      ]}>
      <ThemedText type="label" themeColor="primary">
        {block.head}
      </ThemedText>
      <ThemedText style={styles.body}>{block.body}</ThemedText>
      {!!block.note && (
        <View style={[styles.note, { backgroundColor: theme.backgroundElement, borderColor: theme.border }]}>
          <ThemedText type="small" style={styles.noteText}>
            {block.note}
          </ThemedText>
          <SpeakButton text={block.note} />
        </View>
      )}
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
  note: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    borderRadius: Radius.small,
    borderWidth: 1,
    padding: Spacing.two,
  },
  noteText: {
    flex: 1,
    fontStyle: 'italic',
  },
});
