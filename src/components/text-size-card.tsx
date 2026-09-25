import { StyleSheet, View } from 'react-native';

import { TextSizeControl } from '@/components/text-size-control';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Spacing } from '@/constants/theme';

export function TextSizeCard() {
  return (
    <Card>
      <View style={styles.row}>
        <View style={styles.text}>
          <ThemedText type="cardTitle">🔠 Tamaño de letra</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            Toca el % para volver al tamaño normal.
          </ThemedText>
        </View>
      </View>
      <TextSizeControl showPercent />
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  text: {
    flex: 1,
    gap: Spacing.half,
  },
});
