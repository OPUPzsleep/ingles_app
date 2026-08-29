import { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Spacing } from '@/constants/theme';
import { useSettings } from '@/context/settings-context';
import { useTheme } from '@/hooks/use-theme';

export function ReminderCard() {
  const { reminderEnabled, setReminderEnabled } = useSettings();
  const [deniedMessage, setDeniedMessage] = useState(false);
  const theme = useTheme();

  const onToggle = async (value: boolean) => {
    setDeniedMessage(false);
    const ok = await setReminderEnabled(value);
    if (!ok) setDeniedMessage(true);
  };

  return (
    <Card>
      <View style={styles.row}>
        <View style={styles.text}>
          <ThemedText type="cardTitle">🔔 Recordatorio diario</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            Un aviso todos los días a las 19:00 para practicar.
          </ThemedText>
        </View>
        <Switch
          value={reminderEnabled}
          onValueChange={onToggle}
          trackColor={{ true: theme.primary, false: theme.backgroundSelected }}
        />
      </View>
      {deniedMessage && (
        <ThemedText type="small" themeColor="danger">
          Activa las notificaciones en Ajustes del sistema para usar el recordatorio.
        </ThemedText>
      )}
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
