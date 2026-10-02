import { Pressable, StyleSheet, View } from 'react-native';

import { SpeakButton } from '@/components/speak-button';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Radius, Spacing } from '@/constants/theme';
import { Tiempo, TIPOS } from '@/data/frases/frases-tiempos';
import { useTheme } from '@/hooks/use-theme';
import type { FlashcardEntry } from '@/lib/flashcards';
import type { Rating } from '@/lib/grading';

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

/** Qué tipo de oración es una frase: tiempo verbal, cómo se forma y si es afirmativa, negativa o pregunta. */
export function TipoInfo({ card }: { card: FlashcardEntry }) {
  const theme = useTheme();
  const tipo = TIPOS[card.tipo];

  return (
    <View style={styles.info}>
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
  );
}

/** La tarjeta de una frase: por delante el inglés, por detrás la traducción y el tipo de oración. */
export function FlashcardFace({
  card,
  flipped,
  onFlip,
  onVerMapa,
  compacta = false,
}: {
  card: FlashcardEntry;
  flipped: boolean;
  onFlip: () => void;
  /** Más baja (celular en horizontal): cabe en la pantalla junto a sus botones. */
  compacta?: boolean;
  /** Si se pasa, el reverso ofrece un enlace al mapa de tiempos verbales. */
  onVerMapa?: () => void;
}) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onFlip}
      style={[
        styles.card,
        compacta && styles.cardCompacta,
        { backgroundColor: theme.backgroundElement, borderColor: theme.border },
      ]}>
      {!flipped ? (
        <View style={styles.content}>
          <ThemedText type="label" themeColor="textSecondary">
            🇺🇸 Frase
          </ThemedText>
          <ThemedText style={styles.front}>{card.en}</ThemedText>
          <SpeakButton text={card.en} size={24} style={styles.speak} />
        </View>
      ) : (
        <View style={styles.content}>
          <ThemedText type="small" themeColor="textSecondary" style={styles.center}>
            {card.en}
          </ThemedText>

          <ThemedText type="label" themeColor="textSecondary" style={styles.sectionLabel}>
            🌎 Traducción
          </ThemedText>
          <ThemedText style={styles.translation}>{card.es}</ThemedText>

          <View style={[styles.divider, { backgroundColor: theme.border }]} />

          <TipoInfo card={card} />

          {onVerMapa && (
            <Pressable onPress={onVerMapa} hitSlop={8} style={styles.mapa}>
              <ThemedText type="smallBold" themeColor="primary">
                🗺️ Ver en el mapa de tiempos
              </ThemedText>
            </Pressable>
          )}
        </View>
      )}
    </Pressable>
  );
}

/** Los tres botones para decir qué tan bien la sabías. */
export function RatingButtons({ onRate }: { onRate: (rating: Rating) => void }) {
  const theme = useTheme();

  return (
    <View style={styles.rateRow}>
      <Button variant="secondary" onPress={() => onRate(0)} style={{ backgroundColor: theme.dangerMuted }}>
        😕 Otra vez
      </Button>
      <Button variant="secondary" onPress={() => onRate(1)} style={{ backgroundColor: theme.warningMuted }}>
        🤔 Difícil
      </Button>
      <Button variant="secondary" onPress={() => onRate(2)} style={{ backgroundColor: theme.successMuted }}>
        ✅ ¡Lo sé! +3 XP
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
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
  cardCompacta: {
    minHeight: 150,
    paddingVertical: Spacing.two,
    marginBottom: Spacing.two,
  },
  content: {
    alignItems: 'center',
    gap: Spacing.two,
    width: '100%',
  },
  info: {
    alignItems: 'center',
    gap: Spacing.two,
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
  mapa: {
    marginTop: Spacing.two,
    paddingVertical: Spacing.one,
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
});
