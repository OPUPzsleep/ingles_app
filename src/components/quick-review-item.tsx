import { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

interface QuickReviewItemProps {
  question: string;
  answer: string;
}

/** Pregunta de repaso: la respuesta aparece al tocarla (recuerdo activo). */
export function QuickReviewItem({ question, answer }: QuickReviewItemProps) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <Pressable
      onPress={() => setOpen((o) => !o)}
      style={({ pressed }) => [
        styles.item,
        { borderLeftColor: open ? theme.success : theme.border },
        pressed && styles.pressed,
      ]}>
      <ThemedText type="smallBold">❓ {question}</ThemedText>
      {open ? (
        <ThemedText type="small" style={styles.answer}>
          {answer}
        </ThemedText>
      ) : (
        <ThemedText type="small" themeColor="textSecondary">
          Toca para ver la respuesta
        </ThemedText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    borderLeftWidth: 4,
    paddingLeft: Spacing.three,
    paddingVertical: Spacing.two,
    gap: Spacing.one,
  },
  answer: {
    lineHeight: 22,
  },
  pressed: {
    opacity: 0.7,
  },
});
