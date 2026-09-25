import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Radius, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { Tiempo, TIPOS } from '@/data/frases/frases-tiempos';
import { useTheme } from '@/hooks/use-theme';
import { buildFcDeck, FiltroTiempo } from '@/lib/flashcards';

const FILTROS: { value: FiltroTiempo; label: string }[] = [
  { value: 'todos', label: 'Todas' },
  { value: 'presente', label: 'Presente' },
  { value: 'pasado', label: 'Pasado' },
  { value: 'futuro', label: 'Futuro' },
];

const TIEMPO_ICONO: Record<Tiempo, string> = {
  presente: '🕐',
  pasado: '⏪',
  futuro: '⏩',
};

const FORMA_LABEL = {
  afirmativa: '➕ Afirmativa',
  negativa: '➖ Negativa',
  pregunta: '❓ Pregunta',
} as const;

export function FlashcardView() {
  const { srs, fcReviewed, registerFlashcardFlip, rateFlashcard } = useProgress();
  const [filtro, setFiltro] = useState<FiltroTiempo>('todos');
  const [{ deck, freeReview }, setDeckState] = useState(() => buildFcDeck(srs, filtro));
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

  const filtroRow = (
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
        <ThemedText themeColor="textSecondary">Todavía no hay tarjetas disponibles.</ThemedText>
      </View>
    );
  }

  const idx = ((index % deck.length) + deck.length) % deck.length;
  const card = deck[idx];
  const tipo = TIPOS[card.tipo];
  const pct = Math.round((idx / deck.length) * 100);

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

      <Pressable
        onPress={flip}
        style={[styles.card, { backgroundColor: theme.backgroundElement, borderColor: theme.border }]}>
        {!flipped ? (
          <View style={styles.cardContent}>
            <ThemedText type="label" themeColor="textSecondary">
              🇺🇸 Frase
            </ThemedText>
            <ThemedText style={styles.front}>{card.en}</ThemedText>
            <SpeakButton text={card.en} size={24} style={styles.speak} />
          </View>
        ) : (
          <View style={styles.cardContent}>
            <ThemedText type="small" themeColor="textSecondary" style={styles.center}>
              {card.en}
            </ThemedText>

            <ThemedText type="label" themeColor="textSecondary" style={styles.sectionLabel}>
              🌎 Traducción
            </ThemedText>
            <ThemedText style={styles.translation}>{card.es}</ThemedText>

            <View style={[styles.divider, { backgroundColor: theme.border }]} />

            <ThemedText type="label" themeColor="textSecondary">
              📐 Tipo de oración
            </ThemedText>
            <ThemedText type="cardTitle" style={styles.center}>
              {TIEMPO_ICONO[tipo.tiempo]} {tipo.es}
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary" style={styles.center}>
              {tipo.en}
            </ThemedText>
            <View style={styles.badgeRow}>
              <View style={[styles.badge, { backgroundColor: theme.backgroundSelected }]}>
                <ThemedText type="smallBold">{tipo.formula}</ThemedText>
              </View>
              <View style={[styles.badge, { backgroundColor: theme.backgroundSelected }]}>
                <ThemedText type="smallBold">{FORMA_LABEL[card.forma]}</ThemedText>
              </View>
            </View>
          </View>
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
            setDeckState(buildFcDeck(srs, filtro));
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
  card: {
    minHeight: 260,
    borderWidth: 1,
    borderRadius: Radius.large,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.four,
    paddingHorizontal: Spacing.three,
    marginBottom: Spacing.three,
  },
  cardContent: {
    alignItems: 'center',
    gap: Spacing.two,
    width: '100%',
  },
  center: {
    textAlign: 'center',
  },
  front: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600',
    textAlign: 'center',
  },
  speak: {
    marginTop: Spacing.two,
    padding: Spacing.two,
  },
  sectionLabel: {
    marginTop: Spacing.two,
  },
  translation: {
    fontSize: 21,
    lineHeight: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    alignSelf: 'stretch',
    marginVertical: Spacing.two,
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: Spacing.two,
  },
  badge: {
    borderRadius: Radius.pill,
    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.three,
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
