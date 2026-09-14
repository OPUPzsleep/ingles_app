import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { GrammarFormula as GrammarFormulaData, SyntaxRole } from '@/types/grammar';

export function GrammarFormula({ formulas }: { formulas: GrammarFormulaData[] }) {
  const theme = useTheme();

  const colorFor = (role?: SyntaxRole) => {
    if (role === 'subject') return { bg: theme.primaryMuted, fg: theme.primary };
    if (role === 'verb') return { bg: theme.successMuted, fg: theme.success };
    if (role === 'object') return { bg: theme.warningMuted, fg: theme.warning };
    return { bg: theme.backgroundSelected, fg: theme.textSecondary };
  };

  return (
    <View style={styles.wrap}>
      {formulas.map((formula, i) => (
        <View key={i} style={styles.row}>
          {!!formula.label && (
            <ThemedText type="smallBold" themeColor="textSecondary">
              {formula.label}
            </ThemedText>
          )}
          <View style={styles.chips}>
            {formula.chips.map((chip, j) => {
              const { bg, fg } = colorFor(chip.role);
              return (
                <View key={j} style={[styles.chip, { backgroundColor: bg, borderColor: fg }]}>
                  <ThemedText type="smallBold" style={{ color: fg }}>
                    {chip.text}
                  </ThemedText>
                </View>
              );
            })}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: Spacing.three },
  row: { gap: Spacing.one },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.two },
  chip: {
    borderRadius: Radius.pill,
    borderWidth: 1,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
  },
});
