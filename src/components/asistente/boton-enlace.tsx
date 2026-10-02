import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import type { Enlace } from '@/lib/asistente/tipos';

interface BotonEnlaceProps {
  enlace: Enlace;
  onAbrir: (ruta: string) => void;
}

/** Un botón con forma de píldora que lleva a otra parte de la app. */
export function BotonEnlace({ enlace, onAbrir }: BotonEnlaceProps) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={() => onAbrir(enlace.ruta)}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.boton,
        { backgroundColor: theme.backgroundSelected, borderColor: theme.border },
        pressed && styles.pulsado,
      ]}>
      <ThemedText type="smallBold">{enlace.etiqueta}</ThemedText>
    </Pressable>
  );
}

/** Varios botones seguidos, que pasan a otra línea si no caben. */
export function FilaDeEnlaces({ enlaces, onAbrir }: { enlaces: Enlace[]; onAbrir: (ruta: string) => void }) {
  return (
    <View style={styles.fila}>
      {enlaces.map((enlace) => (
        <BotonEnlace key={enlace.ruta + enlace.etiqueta} enlace={enlace} onAbrir={onAbrir} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  boton: {
    alignSelf: 'flex-start',
    maxWidth: '100%',
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: Radius.pill,
    borderWidth: 1,
  },
  pulsado: {
    opacity: 0.7,
  },
  fila: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
});
