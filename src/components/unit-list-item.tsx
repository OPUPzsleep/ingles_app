import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

interface UnitListItemProps {
  num: number;
  title: string;
  done: boolean;
  onPress: () => void;
}

export function UnitListItem({ num, title, done, onPress }: UnitListItemProps) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.row,
        { backgroundColor: theme.backgroundElement, borderColor: theme.border },
        pressed && styles.pressed,
      ]}>
      <View
        style={[
          styles.numBadge,
          { backgroundColor: done ? theme.successMuted : theme.backgroundSelected },
        ]}>
        <ThemedText type="smallBold" themeColor={done ? 'success' : 'text'}>
          {num}
        </ThemedText>
      </View>
      <ThemedText style={styles.title}>{title}</ThemedText>
      {done && <ThemedText themeColor="success">✓</ThemedText>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    padding: Spacing.three,
    borderRadius: Radius.medium,
    borderWidth: 1,
  },
  pressed: {
    opacity: 0.8,
  },
  numBadge: {
    width: 32,
    height: 32,
    borderRadius: Radius.small,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
  },
});
