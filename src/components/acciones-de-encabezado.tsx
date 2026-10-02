import { useRouter } from 'expo-router';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BotonInicio, useIrAlInicio } from '@/components/boton-inicio';
import { TextSizeControl } from '@/components/text-size-control';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

/**
 * Botón ← de las pantallas que se abren encima de las pestañas: vuelve a la anterior y, si no hay anterior (dirección
 * directa en la web, enlace de otra pantalla), lleva al Inicio. Mismo tamaño y estilo que 🏠 y A− / A+.
 */
export function BotonAtras() {
  const theme = useTheme();
  const router = useRouter();
  const irAlInicio = useIrAlInicio();

  return (
    <Pressable
      onPress={() => (router.canGoBack() ? router.back() : irAlInicio())}
      hitSlop={6}
      accessibilityRole="button"
      accessibilityLabel="Volver"
      style={({ pressed }) => [
        styles.btn,
        { borderColor: theme.border, backgroundColor: theme.backgroundElement },
        pressed && styles.pressed,
      ]}>
      <Text style={[styles.icono, { color: theme.text }]}>←</Text>
    </Pressable>
  );
}

/**
 * Lo que va a la derecha del encabezado de toda pantalla fuera de las pestañas: sus propios botones (si los tiene),
 * volver al Inicio y el tamaño de letra, siempre en este orden.
 */
export function AccionesDeEncabezado({ children }: { children?: ReactNode }) {
  return (
    <View style={styles.acciones}>
      {children}
      <BotonInicio />
      <TextSizeControl />
    </View>
  );
}

const styles = StyleSheet.create({
  acciones: {
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
    marginRight: Spacing.two,
  },
  icono: {
    fontSize: 20,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.7,
  },
});
