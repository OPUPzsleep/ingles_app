import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Radius, Spacing } from '@/constants/theme';
import {
  TEXT_SCALE_MAX,
  TEXT_SCALE_MIN,
  TEXT_SCALE_STEP,
  useSettings,
} from '@/context/settings-context';
import { useTheme } from '@/hooks/use-theme';

/**
 * Botones A− / A+ para achicar o agrandar la letra de toda la app.
 * Usa <Text> directo (no ThemedText) para que los propios botones no cambien de tamaño.
 */
export function TextSizeControl({ showPercent = false }: { showPercent?: boolean }) {
  const theme = useTheme();
  const { textScale, setTextScale } = useSettings();

  const canShrink = textScale > TEXT_SCALE_MIN + 0.001;
  const canGrow = textScale < TEXT_SCALE_MAX - 0.001;

  const btn = (label: string, fontSize: number, enabled: boolean, onPress: () => void) => (
    <Pressable
      onPress={onPress}
      disabled={!enabled}
      hitSlop={6}
      accessibilityLabel={label === 'A−' ? 'Achicar letra' : 'Agrandar letra'}
      style={({ pressed }) => [
        styles.btn,
        { borderColor: theme.border, backgroundColor: theme.backgroundElement },
        pressed && styles.pressed,
        !enabled && styles.disabled,
      ]}>
      <Text style={[styles.btnText, { color: theme.text, fontSize }]}>{label}</Text>
    </Pressable>
  );

  return (
    <View style={styles.row}>
      {btn('A−', 13, canShrink, () => setTextScale(textScale - TEXT_SCALE_STEP))}
      {showPercent && (
        <Pressable onPress={() => setTextScale(1)} hitSlop={6}>
          <Text style={[styles.percent, { color: theme.textSecondary }]}>
            {Math.round(textScale * 100)}%
          </Text>
        </Pressable>
      )}
      {btn('A+', 17, canGrow, () => setTextScale(textScale + TEXT_SCALE_STEP))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  btn: {
    minWidth: 40,
    height: 36,
    paddingHorizontal: Spacing.two,
    borderRadius: Radius.small,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontWeight: '700',
  },
  percent: {
    fontSize: 14,
    fontWeight: '600',
    minWidth: 44,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  disabled: {
    opacity: 0.35,
  },
});
