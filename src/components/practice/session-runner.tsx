import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Dictation } from '@/components/practice/dictation';
import { FlashcardFace, RatingButtons } from '@/components/practice/flashcard-face';
import { SentenceOrder } from '@/components/practice/sentence-order';
import { SessionSummary, type Resultado } from '@/components/practice/session-summary';
import { VerbDrill } from '@/components/practice/verb-drill';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import type { FlashcardEntry } from '@/lib/flashcards';
import type { Rating } from '@/lib/grading';
import type { Ejercicio } from '@/lib/practice';

/** Tarjeta dentro de una sesión: la volteas y dices qué tan bien la sabías. */
function TarjetaEjercicio({ card, onTerminar }: { card: FlashcardEntry; onTerminar: (rating: Rating) => void }) {
  const { registerFlashcardFlip } = useProgress();
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    if (!flipped) registerFlashcardFlip();
    setFlipped((f) => !f);
  };

  return (
    <View>
      <ThemedText type="small" themeColor="textSecondary" style={styles.pista}>
        {flipped ? 'Toca la tarjeta para volver a la frase' : 'Tradúcela en tu mente y toca para ver la respuesta'}
      </ThemedText>
      <FlashcardFace card={card} flipped={flipped} onFlip={flip} />
      {flipped && <RatingButtons onRate={onTerminar} />}
    </View>
  );
}

interface SessionRunnerProps {
  titulo: string;
  ejercicios: Ejercicio[];
  /** Arma otra sesión nueva. */
  onRepetir: () => void;
  onSalir: () => void;
}

/** Recorre los ejercicios uno por uno, guarda cada resultado en el repaso espaciado y termina con el resumen. */
export function SessionRunner({ titulo, ejercicios, onRepetir, onSalir }: SessionRunnerProps) {
  const { rateFlashcard } = useProgress();
  const [indice, setIndice] = useState(0);
  const [resultados, setResultados] = useState<Resultado[]>([]);

  if (indice >= ejercicios.length) {
    return <SessionSummary titulo={titulo} resultados={resultados} onRepetir={onRepetir} onSalir={onSalir} />;
  }

  const ejercicio = ejercicios[indice];
  const total = ejercicios.length;
  const aciertos = resultados.filter((r) => r.rating === 2).length;
  const casi = resultados.filter((r) => r.rating === 1).length;
  const fallos = resultados.length - aciertos - casi;

  // Una sola llamada a rateFlashcard por ejercicio: guarda el repaso espaciado y da la XP.
  const terminar = (rating: Rating) => {
    rateFlashcard(ejercicio.id, rating);
    setResultados((actuales) => [...actuales, { ejercicio, rating }]);
    setIndice((i) => i + 1);
  };

  return (
    <View style={styles.contenedor}>
      <Card>
        <View style={styles.fila}>
          <ThemedText type="label" themeColor="primary">
            {titulo}
          </ThemedText>
          <ThemedText type="smallBold" themeColor="primary">
            {indice + 1} de {total}
          </ThemedText>
        </View>
        <ProgressBar percent={Math.round((indice / total) * 100)} />
        <ThemedText type="small" themeColor="textSecondary">
          ✅ {aciertos} · 🤏 {casi} · ❌ {fallos}
        </ThemedText>
      </Card>

      {ejercicio.tipo === 'tarjeta' && (
        <TarjetaEjercicio key={indice} card={ejercicio.card} onTerminar={terminar} />
      )}
      {ejercicio.tipo === 'verbo' && <VerbDrill key={indice} ejercicio={ejercicio} onTerminar={terminar} />}
      {ejercicio.tipo === 'dictado' && <Dictation key={indice} ejercicio={ejercicio} onTerminar={terminar} />}
      {ejercicio.tipo === 'orden' && <SentenceOrder key={indice} ejercicio={ejercicio} onTerminar={terminar} />}

      <Button variant="ghost" onPress={onSalir}>
        Salir de la sesión
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    gap: Spacing.three,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pista: {
    textAlign: 'center',
    marginBottom: Spacing.two,
  },
});
