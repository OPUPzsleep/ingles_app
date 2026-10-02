import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { QuizSession } from '@/components/quiz-session';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { TituloDeEncabezado } from '@/components/titulo-de-encabezado';
import { Button } from '@/components/ui/button';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { useEstiloHorizontal } from '@/hooks/use-horizontal';
import {
  buildTopicQuizPool,
  esNivel,
  etiquetaDeTema,
  seccionDeTema,
  siguienteSeccion,
  type SeccionTema,
} from '@/lib/grammar';
import type { CefrLevel } from '@/types/grammar';

/** El nombre del tema llega codificado en la ruta ("Articles%20%26%20Nouns"). */
function decodificar(valor: string | undefined): string {
  try {
    return decodeURIComponent(valor ?? '');
  } catch {
    return valor ?? '';
  }
}

/** La sesión del quiz de un tema: junta sus preguntas al empezar (cada vez que se vuelve a montar salen otras). */
function QuizDelTema({
  nivel,
  seccion,
  onRepetir,
}: {
  nivel: CefrLevel;
  seccion: SeccionTema;
  onRepetir: () => void;
}) {
  const router = useRouter();
  const { registerTopicQuiz } = useProgress();
  const [pool] = useState(() => buildTopicQuizPool(nivel, seccion));
  const siguiente = siguienteSeccion(nivel, seccion.tema.name);
  const { nombre } = etiquetaDeTema(nivel, seccion.tema);

  return (
    <QuizSession
      pool={pool}
      examen={!!seccion.tema.examen}
      modeLabel={`${nombre} · ${nivel}`}
      onFinish={({ correctas, total }) => {
        if (total > 0) registerTopicQuiz(nivel, seccion.tema.name, Math.round((correctas / total) * 100));
      }}
      onRepetir={onRepetir}
      onExit={() => router.back()}
      resultActions={
        siguiente ? (
          <Button variant="primary" onPress={() => router.replace(`/unidad/${siguiente.unidades[0]}`)}>
            {`➡️ Seguir con ${etiquetaDeTema(nivel, siguiente.tema).nombre}`}
          </Button>
        ) : (
          <Button variant="primary" onPress={() => router.replace(`/quiz/nivel/${nivel}`)}>
            {`🏁 Quiz del nivel ${nivel}`}
          </Button>
        )
      }
    />
  );
}

/** Quiz de un tema dentro de un nivel: preguntas de sus unidades y de repaso del tema. */
export default function QuizTemaScreen() {
  const estiloHorizontal = useEstiloHorizontal(760);
  const { nivel: nivelParam, tema: temaParam } = useLocalSearchParams<{ nivel: string; tema: string }>();
  const nivel = esNivel(nivelParam) ? nivelParam : null;
  const seccion = nivel ? seccionDeTema(nivel, decodificar(temaParam)) : null;
  // Cada "Repetir" vuelve a montar la sesión, y así salen otras preguntas del tema.
  const [ronda, setRonda] = useState(0);
  const tituloDelQuiz =
    seccion && nivel ? `${seccion.tema.examen ? 'Examen' : 'Quiz'} · ${etiquetaDeTema(nivel, seccion.tema).nombre} (${nivel})` : 'Quiz';

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: tituloDelQuiz, headerTitle: () => <TituloDeEncabezado>{tituloDelQuiz}</TituloDeEncabezado> }} />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ThemedView style={[styles.content, estiloHorizontal]}>
          {nivel && seccion ? (
            <QuizDelTema key={ronda} nivel={nivel} seccion={seccion} onRepetir={() => setRonda((r) => r + 1)} />
          ) : (
            <ThemedText themeColor="textSecondary">No se encontró este tema.</ThemedText>
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
