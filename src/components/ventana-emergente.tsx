import type { ReactNode } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

interface VentanaEmergenteProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}

/**
 * Ventana emergente centrada sobre un fondo oscuro: se cierra tocando fuera, con el botón «Cerrar» o con «atrás» de
 * Android. Si el contenido no cabe (celular en horizontal, letra grande) se desliza dentro de la ventana.
 */
export function VentanaEmergente({ visible, onClose, children }: VentanaEmergenteProps) {
  const theme = useTheme();
  const { height } = useWindowDimensions();

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose} statusBarTranslucent>
      <Pressable style={styles.fondo} onPress={onClose} accessibilityLabel="Cerrar la ventana">
        {/* Un toque dentro de la ventana no la cierra. */}
        <Pressable
          onPress={() => {}}
          accessibilityViewIsModal
          style={[
            styles.ventana,
            { backgroundColor: theme.backgroundElement, borderColor: theme.border, maxHeight: height * 0.86 },
          ]}>
          <ScrollView contentContainerStyle={styles.contenido} keyboardShouldPersistTaps="handled">
            {children}
          </ScrollView>
          <Pressable
            onPress={onClose}
            accessibilityRole="button"
            accessibilityLabel="Cerrar"
            style={({ pressed }) => [
              styles.cerrar,
              { backgroundColor: theme.backgroundSelected, borderColor: theme.border },
              pressed && styles.pulsado,
            ]}>
            <ThemedText type="smallBold">Cerrar</ThemedText>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

/** Un renglón con la etiqueta en pequeño y su texto debajo (para el significado, el ejemplo, la nota…). */
export function DatoDeVentana({ etiqueta, children }: { etiqueta: string; children: ReactNode }) {
  return (
    <View style={styles.dato}>
      <ThemedText type="label" themeColor="textSecondary">
        {etiqueta}
      </ThemedText>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.three,
  },
  ventana: {
    width: '100%',
    maxWidth: 460,
    borderWidth: 1,
    borderRadius: Radius.medium,
    padding: Spacing.three,
    gap: Spacing.three,
  },
  contenido: {
    gap: Spacing.three,
  },
  dato: {
    gap: Spacing.half,
  },
  cerrar: {
    minHeight: 40,
    borderWidth: 1,
    borderRadius: Radius.small,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pulsado: {
    opacity: 0.7,
  },
});
