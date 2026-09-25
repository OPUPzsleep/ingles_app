import { Text, TextStyle, StyleProp } from 'react-native';

import type { ThemeColor } from '@/constants/theme';
import { useScaledTextStyle } from '@/hooks/use-scaled-text-style';
import { useTheme } from '@/hooks/use-theme';

function splitWord(word: string): { bold: string; rest: string } {
  if (word.length <= 1) return { bold: word, rest: '' };
  // Regla simple de "bionic reading": resalta un poco menos de la mitad de
  // cada palabra, para que el ojo complete el resto solo. Ayuda a algunas
  // personas a mantener el enfoque en textos largos.
  const boldLen = Math.max(1, Math.ceil(word.length * 0.4));
  return { bold: word.slice(0, boldLen), rest: word.slice(boldLen) };
}

interface BionicTextProps {
  text: string;
  themeColor?: ThemeColor;
  style?: StyleProp<TextStyle>;
}

/** Texto con la primera parte de cada palabra en negrita, estilo "bionic reading". */
export function BionicText({ text, themeColor = 'text', style }: BionicTextProps) {
  const theme = useTheme();
  const tokens = text.split(/(\s+)/);
  const scaledStyle = useScaledTextStyle([{ color: theme[themeColor] }, style]);

  return (
    <Text style={scaledStyle}>
      {tokens.map((token, i) => {
        if (token === '' || /^\s+$/.test(token)) return token;
        const { bold, rest } = splitWord(token);
        return (
          <Text key={i}>
            <Text style={[styles.bold, { color: theme.focusAccent }]}>{bold}</Text>
            {rest}
          </Text>
        );
      })}
    </Text>
  );
}

const styles = {
  bold: { fontWeight: '700' as const },
};
