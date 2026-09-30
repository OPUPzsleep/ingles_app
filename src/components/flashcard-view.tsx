import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { FlashcardFace, RatingButtons } from '@/components/practice/flashcard-face';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Radius, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { TIPOS, type TipoOracion } from '@/data/frases/frases-tiempos';
import { useTheme } from '@/hooks/use-theme';
import { buildFcDeck, FiltroTiempo } from '@/lib/flashcards';
import type { Rating } from '@/lib/grading';

const FILTROS: { value: FiltroTiempo; label: string }[] = [
  { value: 'todos', label: 'Todas' },
  { value: 'presente', label: 'Presente' },
  { value: 'pasado', label: 'Pasado' },
  { value: 'futuro', label: 'Futuro' },
  { value: 'dificiles', label: '⚠️ Difíciles' },
];

interface FlashcardViewProps {
  /** Si se pasa, solo se repasan las frases de ese tiempo verbal (llega desde el mapa de tiempos). */
  tipo?: TipoOracion;
  onQuitarTipo?: () => void;
}

export function FlashcardView({ tipo, onQuitarTipo }: FlashcardViewProps) {
  const router = useRouter();
  const { srs, fcReviewed, registerFlashcardFlip, rateFlashcard } = useProgress();
  const [filtro, setFiltro] = useState<FiltroTiempo>('todos');
  const [{ deck, freeReview }, setDeckState] = useState(() => buildFcDeck(srs, filtro, tipo));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const theme = useTheme();

  const goTo = (next: number) => {
    setIndex(next);
    setFlipped(false);
  };

  const cambiarFiltro = (nuevo: FiltroTiempo) => {
    setFiltro(nuevo);
    setDeckState(buildFcDeck(srs, nuevo));
    goTo(0);
  };

  const filtroRow = tipo ? (
    <View style={styles.filterRow}>
      <View style={[styles.chip, { backgroundColor: theme.primary, borderColor: theme.border }]}>
        <ThemedText type="smallBold" themeColor="onPrimary">
          Solo: {TIPOS[tipo].es}
        </ThemedText>
      </View>
      {onQuitarTipo && (
        <Pressable
          onPress={onQuitarTipo}
          style={[styles.chip, { backgroundColor: theme.backgroundElement, borderColor: theme.border }]}>
          <ThemedText type="smallBold">✕ Ver todas</ThemedText>
        </Pressable>
      )}
    </View>
  ) : (
    <View style={styles.filterRow}>
      {FILTROS.map((f) => {
        const active = f.value === filtro;
        return (
          <Pressable
            key={f.value}
            onPress={() => cambiarFiltro(f.value)}
            style={[
              styles.chip,
              {
                backgroundColor: active ? theme.primary : theme.backgroundElement,
                borderColor: theme.border,
              },
            ]}>
            <ThemedText type="smallBold" themeColor={active ? 'onPrimary' : 'text'}>
              {f.label}
            </ThemedText>
          </Pressable>
        );
      })}
    </View>
  );

  if (!deck.length) {
    return (
      <View>
        {filtroRow}
        <ThemedText themeColor="textSecondary">
          {filtro === 'dificiles'
            ? 'No tienes tarjetas difíciles por ahora. ¡Buen trabajo! 🎉'
            : 'Todavía no hay tarjetas disponibles.'}
        </ThemedText>
      </View>
    );
  }

  const idx = ((index % deck.length) + deck.length) % deck.length;
  const card = deck[idx];
  const pct = Math.round((idx / deck.length) * 100);

  const flip = () => {
    if (!flipped) registerFlashcardFlip();
    setFlipped((f) => !f);
  };

  const rate = (rating: Rating) => {
    rateFlashcard(card.id, rating);
    goTo(index + 1);
  };

  return (
    <View>
      {filtroRow}

      <View style={[styles.headerCard, { backgroundColor: theme.backgroundElement, borderColor: theme.border }]}>
        <ThemedText type="label" themeColor="primary">
          {freeReview ? '🃏 Repaso libre — no tienes tarjetas vencidas hoy' : '🃏 Frases — Repaso espaciado'}
        </ThemedText>
        <ProgressBar percent={pct} />
        <View style={styles.headerRow}>
          <ThemedText type="small" themeColor="textSecondary">
            Tarjeta {idx + 1} de {deck.length}
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {fcReviewed} revisadas en total
          </ThemedText>
        </View>
      </View>

      <ThemedText type="small" themeColor="textSecondary" style={styles.hint}>
        {flipped ? 'Toca la tarjeta para volver a la frase' : 'Tradúcela en tu mente y toca para ver la respuesta'}
      </ThemedText>

      <FlashcardFace
        card={card}
        flipped={flipped}
        onFlip={flip}
        onVerMapa={() => router.push({ pathname: '/tiempos', params: { tipo: card.tipo } })}
      />

      {flipped && <RatingButtons onRate={rate} />}

      <View style={styles.navRow}>
        <Button variant="secondary" onPress={() => goTo(index - 1)}>
          ← Anterior
        </Button>
        <Button
          variant="secondary"
          onPress={() => {
            setDeckState(buildFcDeck(srs, filtro, tipo));
            goTo(0);
          }}>
          🔀 Mezclar
        </Button>
        <Button variant="secondary" onPress={() => goTo(index + 1)}>
          Siguiente →
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
    marginBottom: Spacing.three,
  },
  chip: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: Radius.pill,
    borderWidth: 1,
  },
  headerCard: {
    borderWidth: 1,
    borderRadius: Radius.medium,
    padding: Spacing.three,
    gap: Spacing.two,
    marginBottom: Spacing.three,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hint: {
    textAlign: 'center',
    marginBottom: Spacing.two,
  },
  // Con letra grande los tres botones no caben en una línea: bajan a la siguiente en vez de salirse de la pantalla.
  navRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
    justifyContent: 'center',
  },
});
