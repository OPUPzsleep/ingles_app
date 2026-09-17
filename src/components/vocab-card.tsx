import { StyleSheet, View } from 'react-native';

import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Spacing } from '@/constants/theme';
import { VocabEntry } from '@/types/grammar';

interface VocabCardProps {
  entry: VocabEntry;
  footer?: string;
  onPress?: () => void;
}

export function VocabCard({ entry, footer, onPress }: VocabCardProps) {
  return (
    <Card onPress={onPress} style={styles.card}>
      <View style={styles.row}>
        <ThemedText type="smallBold" style={styles.word}>
          {entry.w}
        </ThemedText>
        <SpeakButton text={entry.w} size={14} />
      </View>
      <View style={styles.row}>
        <ThemedText type="small" themeColor="primary" style={styles.ipa}>
          {entry.ipa}
        </ThemedText>
        {!!entry.aprox && (
          <ThemedText type="small" themeColor="textSecondary">
            [{entry.aprox}]
          </ThemedText>
        )}
      </View>
      <ThemedText type="small" themeColor="textSecondary">
        {entry.def}
      </ThemedText>
      {!!entry.ex && (
        <View style={styles.row}>
          <ThemedText type="small" style={styles.example}>
            &quot;{entry.ex}&quot;
          </ThemedText>
          <SpeakButton text={entry.ex} size={14} />
        </View>
      )}
      {!!footer && (
        <ThemedText type="small" themeColor="primary">
          → {footer}
        </ThemedText>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: Spacing.one,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  word: {
    flex: 1,
  },
  ipa: {
    fontFamily: 'monospace',
  },
  example: {
    flex: 1,
    fontStyle: 'italic',
  },
});
