import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Radius, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { useTheme } from '@/hooks/use-theme';
import { buildFcDeck } from '@/lib/flashcards';

export function FlashcardView() {
  const { srs, fcReviewed, registerFlashcardFlip, rateFlashcard } = useProgress();
  const [{ deck, freeReview }, setDeckState] = useState(() => buildFcDeck(srs));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const theme = useTheme();

  if (!deck.length) {
    return (
      <ThemedText themeColor="textSecondary">Todavía no hay tarjetas disponibles.</ThemedText>
    );
  }

  const idx = ((index % deck.length) + deck.length) % deck.length;
  const card = deck[idx];
  const pct = Math.round((idx / deck.length) * 100);

  const goTo = (next: number) => {
    setIndex(next);
    setFlipped(false);
  };

  const flip = () => {
    if (!flipped) registerFlashcardFlip();
    setFlipped((f) => !f);
  };

  const rate = (rating: 0 | 1 | 2) => {
    rateFlashcard(card.id, rating);
    goTo(index + 1);
  };

  return (
    <View>
      <View style={[styles.headerCard, { backgroundColor: theme.backgroundElement, borderColor: theme.border }]}>
        <ThemedText type="label" themeColor="primary">
          {freeReview ? '🃏 Repaso libre — no tienes tarjetas vencidas hoy' : '🃏 Flashcards — Repaso espaciado'}
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
        Toca la tarjeta para ver la respuesta
      </ThemedText>

      <Pressable
        onPress={flip}
        style={[styles.card, { backgroundColor: theme.backgroundElement, borderColor: theme.border }]}>
        {!flipped ? (
          <View style={styles.cardContent}>
            <ThemedText type="small" themeColor="primary">
              {card.unitTitle}
            </ThemedText>
            <ThemedText style={styles.front}>{card.front}</ThemedText>
          </View>
        ) : (
          <ThemedText themeColor="primary" style={styles.back}>
            {card.back}
          </ThemedText>
        )}
      </Pressable>

      {flipped && (
        <View style={styles.rateRow}>
          <Button variant="secondary" onPress={() => rate(0)} style={{ backgroundColor: theme.dangerMuted }}>
            😕 Otra vez
          </Button>
          <Button variant="secondary" onPress={() => rate(1)} style={{ backgroundColor: theme.warningMuted }}>
            🤔 Difícil
          </Button>
          <Button variant="secondary" onPress={() => rate(2)} style={{ backgroundColor: theme.successMuted }}>
            ✅ ¡Lo sé! +3 XP
          </Button>
        </View>
      )}

      <View style={styles.navRow}>
        <Button variant="secondary" onPress={() => goTo(index - 1)}>
          ← Anterior
        </Button>
        <Button
          variant="secondary"
          onPress={() => {
            setDeckState(buildFcDeck(srs));
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
  card: {
    minHeight: 200,
    borderWidth: 1,
    borderRadius: Radius.large,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.five,
    marginBottom: Spacing.three,
  },
  cardContent: {
    alignItems: 'center',
    gap: Spacing.two,
  },
  front: {
    fontSize: 20,
    lineHeight: 27,
    textAlign: 'center',
  },
  back: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  rateRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
    justifyContent: 'center',
    marginBottom: Spacing.three,
  },
  navRow: {
    flexDirection: 'row',
    gap: Spacing.two,
    justifyContent: 'center',
  },
});
