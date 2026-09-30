import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import type { Rating } from '@/lib/grading';

const FONDOS = { 2: 'successMuted', 1: 'warningMuted', 0: 'dangerMuted' } as const;

/** Cuadro de resultado tras corregir: el fondo cambia según acertaste, casi o fallaste. */
export function FeedbackBox({
  rating,
  titulo,
  children,
}: {
  rating: Rating;
  titulo: string;
  children?: ReactNode;
}) {
  const theme = useTheme();

  return (
    <View style={[styles.box, { backgroundColor: theme[FONDOS[rating]] }]}>
      <ThemedText type="smallBold">{titulo}</ThemedText>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: Radius.small,
    padding: Spacing.three,
    gap: Spacing.two,
  },
});
