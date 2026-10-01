import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { QuizSession } from '@/components/quiz-session';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from '@/components/ui/button';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { buildLevelQuizPool, esNivel, siguienteNivel } from '@/lib/grammar';
import type { CefrLevel } from '@/types/grammar';

/** La sesión de un quiz de nivel: junta sus preguntas al empezar (cada vez que se vuelve a montar salen otras). */
function QuizDelNivel({ nivel, onRepetir }: { nivel: CefrLevel; onRepetir: () => void }) {
  const router = useRouter();
  const { registerLevelQuiz } = useProgress();
  const [pool] = useState(() => buildLevelQuizPool(nivel));
  const siguiente = siguienteNivel(nivel);

  return (
    <QuizSession
      pool={pool}
      modeLabel={`Nivel ${nivel}`}
      onFinish={({ correctas, total }) => {
        if (total > 0) registerLevelQuiz(nivel, Math.round((correctas / total) * 100));
      }}
      onRepetir={onRepetir}
      onExit={() => router.back()}
      resultActions={
        siguiente ? (
          <Button variant="primary" onPress={() => router.replace(`/nivel/${siguiente}`)}>
            {`➡️ Seguir con el nivel ${siguiente}`}
          </Button>
        ) : undefined
      }
    />
  );
}

/** Quiz final de un nivel: preguntas de las unidades de ese nivel. */
export default function QuizNivelScreen() {
  const { nivel: param } = useLocalSearchParams<{ nivel: string }>();
  const nivel = esNivel(param) ? param : null;
  // Cada "Repetir" vuelve a montar la sesión, y así salen otras preguntas del nivel.
  const [ronda, setRonda] = useState(0);

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: nivel ? `Quiz · Nivel ${nivel}` : 'Quiz' }} />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ThemedView style={styles.content}>
          {nivel ? (
            <QuizDelNivel key={ronda} nivel={nivel} onRepetir={() => setRonda((r) => r + 1)} />
          ) : (
            <ThemedText themeColor="textSecondary">No se encontró este nivel.</ThemedText>
          )}
        </ThemedView>
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
    flex: 1,
    padding: Spacing.three,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
});
