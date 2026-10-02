import { Stack } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Chat } from '@/components/asistente/chat';
import { TextSizeControl } from '@/components/text-size-control';
import { ThemedView } from '@/components/themed-view';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

/** Lo que va a la derecha del encabezado: borrar la conversación y el tamaño de letra. */
function AccionesDeEncabezado({ onBorrar }: { onBorrar: () => void }) {
  const theme = useTheme();

  return (
    <View style={styles.acciones}>
      <Pressable
        onPress={onBorrar}
        hitSlop={6}
        accessibilityRole="button"
        accessibilityLabel="Borrar la conversación"
        style={({ pressed }) => [
          styles.boton,
          { borderColor: theme.border, backgroundColor: theme.backgroundElement },
          pressed && styles.pulsado,
        ]}>
        <Text style={styles.icono}>🧹</Text>
      </Pressable>
      <TextSizeControl />
    </View>
  );
}

export default function AsistenteScreen() {
  // Cada vez que cambia `conversacion` el chat se arma de nuevo, sin mensajes.
  const [conversacion, setConversacion] = useState(0);

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Pregúntale a la app',
          headerRight: () => <AccionesDeEncabezado onBorrar={() => setConversacion((n) => n + 1)} />,
        }}
      />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <Chat key={conversacion} />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  acciones: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  // Mismo tamaño y estilo que A− / A+ (y que el 🏠 de las unidades).
  boton: {
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
  pulsado: {
    opacity: 0.7,
  },
});
