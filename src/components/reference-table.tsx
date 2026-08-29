import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { ReferenceTable as ReferenceTableData } from '@/types/grammar';

export function ReferenceTable({ table }: { table: ReferenceTableData }) {
  const theme = useTheme();

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={[styles.table, { borderColor: theme.border }]}>
        <View style={[styles.row, { backgroundColor: theme.primaryMuted }]}>
          {table.cols.map((col, i) => (
            <ThemedText key={i} type="label" themeColor="primary" style={styles.cell}>
              {col}
            </ThemedText>
          ))}
        </View>
        {table.rows.map((row, i) => (
          <View
            key={i}
            style={[
              styles.row,
              i < table.rows.length - 1 && { borderBottomWidth: 1, borderBottomColor: theme.border },
            ]}>
            {row.map((cell, j) => (
              <ThemedText key={j} type="small" style={styles.cell}>
                {cell}
              </ThemedText>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  table: {
    borderRadius: Radius.small,
    borderWidth: 1,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    minWidth: 130,
    padding: Spacing.two,
  },
});
