import { Fragment, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { ContrastCard as ContrastCardData, ContrastSide } from '@/types/grammar';

function highlighted(side: ContrastSide, color: string): ReactNode {
  if (!side.highlight) return side.example;
  const idx = side.example.indexOf(side.highlight);
  if (idx === -1) return side.example;
  return (
    <Fragment>
      {side.example.slice(0, idx)}
      <ThemedText type="small" style={{ color, fontWeight: '700' }}>
        {side.highlight}
      </ThemedText>
      {side.example.slice(idx + side.highlight.length)}
    </Fragment>
  );
}

export function ContrastCard({ data }: { data: ContrastCardData }) {
  const theme = useTheme();

  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: theme.successMuted }]}>
          <ThemedText type="label" themeColor="success">
            {data.left.label}
          </ThemedText>
          <ThemedText type="small" style={styles.body}>
            {highlighted(data.left, theme.success)}
          </ThemedText>
        </View>
        <View style={[styles.box, { backgroundColor: theme.primaryMuted }]}>
          <ThemedText type="label" themeColor="primary">
            {data.right.label}
          </ThemedText>
          <ThemedText type="small" style={styles.body}>
            {highlighted(data.right, theme.primary)}
          </ThemedText>
        </View>
      </View>
      {!!data.caption && (
        <View style={[styles.caption, { backgroundColor: theme.warningMuted }]}>
          <ThemedText type="small" style={styles.body}>
            💡 {data.caption}
          </ThemedText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: Spacing.two },
  row: { flexDirection: 'row', gap: Spacing.two },
  box: { flex: 1, borderRadius: Radius.small, padding: Spacing.three, gap: Spacing.one },
  caption: { borderRadius: Radius.small, padding: Spacing.three, gap: Spacing.one },
  body: { lineHeight: 21 },
});
