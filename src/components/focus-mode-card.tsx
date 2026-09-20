import { StyleSheet, Switch, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Spacing } from '@/constants/theme';
import { useSettings } from '@/context/settings-context';
import { useTheme } from '@/hooks/use-theme';

export function FocusModeCard() {
  const { focusModeEnabled, setFocusModeEnabled } = useSettings();
  const theme = useTheme();

  return (
    <Card>
      <View style={styles.row}>
        <View style={styles.text}>
          <ThemedText type="cardTitle">⚡ Modo TDAH</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            Menos opciones a la vez, un temporizador de sesión corta y menos
            distracciones en pantalla.
          </ThemedText>
        </View>
        <Switch
          value={focusModeEnabled}
          onValueChange={setFocusModeEnabled}
          trackColor={{ true: theme.primary, false: theme.backgroundSelected }}
        />
      </View>
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
