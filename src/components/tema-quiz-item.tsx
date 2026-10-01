import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

interface TemaQuizItemProps {
  tema: string;
  preguntas: number;
  /** Mejor resultado (porcentaje) de este quiz, si ya se hizo. */
  mejor?: number;
  onPress: () => void;
}

/** La fila que cierra un tema dentro de un nivel: su quiz. Se ve como las filas de unidad, pero con 🎯 y el nombre en color. */
export function TemaQuizItem({ tema, preguntas, mejor, onPress }: TemaQuizItemProps) {
  const theme = useTheme();
  const hecho = mejor !== undefined;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Quiz de ${tema}, ${preguntas} preguntas`}
      style={({ pressed }) => [
        styles.row,
        { backgroundColor: theme.backgroundElement, borderColor: theme.border },
        pressed && styles.pressed,
      ]}>
      <View style={[styles.insignia, { backgroundColor: hecho ? theme.successMuted : theme.backgroundSelected }]}>
        <ThemedText type="smallBold">🎯</ThemedText>
      </View>
      <View style={styles.textos}>
        <ThemedText themeColor="primary">{`Quiz de ${tema}`}</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {hecho ? `${preguntas} preguntas · Tu mejor resultado: ${mejor}%` : `${preguntas} preguntas`}
        </ThemedText>
      </View>
      {hecho && <ThemedText themeColor="success">✓</ThemedText>}
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
  insignia: {
    width: 32,
    height: 32,
    borderRadius: Radius.small,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textos: {
    flex: 1,
  },
});
