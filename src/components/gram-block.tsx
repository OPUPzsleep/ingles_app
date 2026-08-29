import { StyleSheet, View } from 'react-native';

import { ReferenceTable } from '@/components/reference-table';
import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { GramBlock as GramBlockData } from '@/types/gramatica';

export function GramBlock({ block }: { block: GramBlockData }) {
  const theme = useTheme();

  if (block.type === 'def') {
    return (
      <View style={[styles.box, { backgroundColor: theme.primaryMuted }]}>
        {!!block.heading && (
          <ThemedText type="label" themeColor="primary">
            {block.heading}
          </ThemedText>
        )}
        <ThemedText style={styles.body}>{block.body}</ThemedText>
      </View>
    );
  }

  if (block.type === 'example') {
    return (
      <View style={[styles.box, { backgroundColor: theme.backgroundSelected }]}>
        <ThemedText style={styles.example}>{block.text}</ThemedText>
        {!!block.transl && (
          <ThemedText type="small" themeColor="textSecondary">
            {block.transl}
          </ThemedText>
        )}
      </View>
    );
  }

  if (block.type === 'compare') {
    return (
      <View style={styles.compareRow}>
        <View style={[styles.compareBox, { backgroundColor: theme.successMuted }]}>
          <ThemedText type="label" themeColor="success">
            {block.esLabel}
          </ThemedText>
          <ThemedText type="small" style={styles.body}>
            {block.esBody}
          </ThemedText>
        </View>
        <View style={[styles.compareBox, { backgroundColor: theme.primaryMuted }]}>
          <ThemedText type="label" themeColor="primary">
            {block.enLabel}
          </ThemedText>
          <ThemedText type="small" style={styles.body}>
            {block.enBody}
          </ThemedText>
        </View>
      </View>
    );
  }

  if (block.type === 'tip') {
    return (
      <View style={[styles.box, { backgroundColor: theme.warningMuted }]}>
        <ThemedText type="small" style={styles.body}>
          💡 {block.body}
        </ThemedText>
      </View>
    );
  }

  if (block.type === 'warn') {
    return (
      <View style={[styles.box, { backgroundColor: theme.dangerMuted }]}>
        <ThemedText type="small" style={styles.body}>
          ⚠️ {block.body}
        </ThemedText>
      </View>
    );
  }

  return <ReferenceTable table={{ cols: block.cols, rows: block.rows }} />;
}

const styles = StyleSheet.create({
  box: {
    borderRadius: Radius.small,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  body: {
    lineHeight: 21,
  },
  example: {
    fontStyle: 'italic',
    lineHeight: 22,
  },
  compareRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  compareBox: {
    flex: 1,
    borderRadius: Radius.small,
    padding: Spacing.three,
    gap: Spacing.one,
  },
});
