import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

import { Radius, Spacing } from '@/constants/theme';
import { useTextScale } from '@/context/settings-context';
import { useTheme } from '@/hooks/use-theme';

/** Campo de texto de las prácticas: sigue el tema y el tamaño de letra elegidos, sin autocorrector. */
export function PracticeInput({ style, ...props }: TextInputProps) {
  const theme = useTheme();
  const scale = useTextScale();

  return (
    <TextInput
      placeholderTextColor={theme.textSecondary}
      autoCapitalize="none"
      autoCorrect={false}
      spellCheck={false}
      {...props}
      style={[
        styles.input,
        {
          backgroundColor: theme.backgroundSelected,
          color: theme.text,
          borderColor: theme.border,
          fontSize: 18 * scale,
        },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: Radius.medium,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
  },
});
