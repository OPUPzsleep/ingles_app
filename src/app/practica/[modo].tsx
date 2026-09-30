import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SessionRunner } from '@/components/practice/session-runner';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { armarSesion, esModo, TITULOS_MODO, type Modo } from '@/lib/practice';

/** Se monta solo cuando el progreso ya cargó, así la sesión prioriza lo vencido y lo difícil de verdad. */
function Sesion({ modo, onSalir }: { modo: Modo; onSalir: () => void }) {
  const { srs } = useProgress();
  const [sesion, setSesion] = useState(() => ({ numero: 0, ejercicios: armarSesion(modo, srs) }));

  if (sesion.ejercicios.length === 0) {
    return (
      <Card>
        <ThemedText type="cardTitle">Nada por repasar 🎉</ThemedText>
        <ThemedText themeColor="textSecondary">
          No tienes frases ni verbos difíciles por ahora. Lo que falles en otras prácticas aparecerá aquí.
        </ThemedText>
        <Button variant="secondary" onPress={onSalir}>
          ↩️ Volver
        </Button>
      </Card>
    );
  }

  return (
    <SessionRunner
      key={sesion.numero}
      titulo={TITULOS_MODO[modo]}
      ejercicios={sesion.ejercicios}
      onRepetir={() => setSesion((s) => ({ numero: s.numero + 1, ejercicios: armarSesion(modo, srs) }))}
      onSalir={onSalir}
    />
  );
}

export default function PracticaScreen() {
  const { modo } = useLocalSearchParams<{ modo: string }>();
  const router = useRouter();
  const { loading } = useProgress();

  const salir = () => (router.canGoBack() ? router.back() : router.replace('/practicar'));

  let contenido;
  if (!esModo(modo)) {
    contenido = (
      <Card>
        <ThemedText>Ese tipo de práctica no existe.</ThemedText>
        <Button variant="secondary" onPress={salir}>
          ↩️ Volver
        </Button>
      </Card>
    );
  } else if (loading) {
    contenido = <ThemedText themeColor="textSecondary">Preparando tu sesión…</ThemedText>;
  } else {
    contenido = <Sesion modo={modo} onSalir={salir} />;
  }

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: esModo(modo) ? TITULOS_MODO[modo] : 'Práctica' }} />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          {contenido}
        </ScrollView>
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
  content: {
    padding: Spacing.three,
    gap: Spacing.three,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
});
