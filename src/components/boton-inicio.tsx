import { useRouter, useSegments } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';

import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

/**
 * Lleva a la pestaña Inicio desde donde se esté. Cada caso necesita su propia acción del router:
 * - Hay pantallas encima de las pestañas (una unidad abierta desde un nivel): se cierran todas con `dismissTo`.
 * - Ya se está dentro de las pestañas (la unidad que se ve en el panel de Aprender en pantalla ancha):
 *   solo hay que cambiar de pestaña con `navigate` (`dismissTo` no hace nada ahí).
 * - La pantalla se abrió sola, sin pestañas debajo (dirección directa en la web): se reemplaza por el Inicio.
 */
export function useIrAlInicio() {
  const router = useRouter();
  const segmentos = useSegments();

  return () => {
    if (router.canDismiss()) router.dismissTo('/');
    else if (segmentos[0] === '(tabs)') router.navigate('/');
    else router.replace('/');
  };
}

/**
 * Botón 🏠 para el encabezado de una pantalla: mismo tamaño y estilo que A− / A+.
 * Usa <Text> directo (no ThemedText) para que el botón no cambie de tamaño con la letra.
 */
export function BotonInicio() {
  const theme = useTheme();
  const irAlInicio = useIrAlInicio();

  return (
    <Pressable
      onPress={irAlInicio}
      hitSlop={6}
      accessibilityRole="button"
      accessibilityLabel="Ir al inicio"
      style={({ pressed }) => [
        styles.btn,
        { borderColor: theme.border, backgroundColor: theme.backgroundElement },
        pressed && styles.pressed,
      ]}>
      <Text style={styles.icono}>🏠</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    minWidth: 40,
    height: 36,
    paddingHorizontal: Spacing.two,
    borderRadius: Radius.small,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icono: {
    fontSize: 17,
  },
  pressed: {
    opacity: 0.7,
  },
});
