import { StyleSheet, View } from 'react-native';

import { BionicText } from '@/components/bionic-text';
import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useSettings } from '@/context/settings-context';
import { useTheme } from '@/hooks/use-theme';
import { ExplainBlock as ExplainBlockData } from '@/types/grammar';

export function ExplainBlock({ block }: { block: ExplainBlockData }) {
  const theme = useTheme();
  const { focusModeEnabled } = useSettings();

  return (
    <View
      style={[
        styles.box,
        { borderLeftColor: focusModeEnabled ? theme.focusAccent : theme.primary },
      ]}>
      <ThemedText type="label" themeColor="primary">
        {block.head}
      </ThemedText>
      {focusModeEnabled ? (
        <BionicText text={block.body} style={styles.body} />
      ) : (
        <ThemedText style={styles.body}>{block.body}</ThemedText>
      )}
      {!!block.note && (
        <View style={styles.note}>
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
    borderLeftWidth: 4,
    paddingLeft: Spacing.three,
    paddingVertical: Spacing.one,
    gap: Spacing.two,
  },
  body: {
    lineHeight: 22,
  },
  note: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    paddingTop: Spacing.one,
  },
  noteText: {
    flex: 1,
    fontStyle: 'italic',
  },
});
