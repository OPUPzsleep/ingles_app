import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

interface TemaQuizItemProps {
  tema: string;
  preguntas: number;
  /** Mejor resultado (porcentaje) de este quiz, si ya se hizo. */
  mejor?: number;
  /** El quiz es el examen de un bloque del curso (con preguntas propias), no un repaso de las unidades. */
  examen?: boolean;
  onPress: () => void;
}

/** La fila que cierra un tema dentro de un nivel: su quiz. Se ve como las filas de unidad, pero con 🎯 y el nombre en color. */
export function TemaQuizItem({ tema, preguntas, mejor, examen = false, onPress }: TemaQuizItemProps) {
  const theme = useTheme();
  const hecho = mejor !== undefined;
  const titulo = examen ? `Examen del ${tema}` : `Quiz de ${tema}`;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${titulo}, ${preguntas} preguntas`}
      style={({ pressed }) => [
        styles.row,
        { backgroundColor: theme.backgroundElement, borderColor: theme.border },
        pressed && styles.pressed,
      ]}>
      <View style={[styles.insignia, { backgroundColor: hecho ? theme.successMuted : theme.backgroundSelected }]}>
        <ThemedText type="smallBold">🎯</ThemedText>
      </View>
      <View style={styles.textos}>
        <ThemedText themeColor="primary">{titulo}</ThemedText>
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
