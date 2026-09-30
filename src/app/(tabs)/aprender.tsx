import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SplitLayout } from '@/components/split-layout';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { TopicCard } from '@/components/topic-card';
import { TopicUnits } from '@/components/topic-units';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { UnitView } from '@/components/unit-view';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useIsWide } from '@/hooks/use-is-wide';
import { useProgress } from '@/context/progress-context';
import { useSettings } from '@/context/settings-context';
import { TOPICS } from '@/data/grammar/topics';
import { nextRecommendedUnit, topicProgress } from '@/lib/grammar';
import { CEFR_LEVELS } from '@/types/grammar';

const FOCUS_MODE_VISIBLE_COUNT = 3;

export default function AprenderScreen() {
  const router = useRouter();
  const theme = useTheme();
  const isWide = useIsWide();
  const { doneUnits, userLevel, setUserLevel } = useProgress();
  const { focusModeEnabled } = useSettings();
  const [showAll, setShowAll] = useState(false);
  // Solo en pantalla ancha: el tema abierto en la lista y la unidad que se ve a la derecha.
  const [temaAbierto, setTemaAbierto] = useState<string | null>(null);
  const [unidadElegida, setUnidadElegida] = useState<number | null>(null);

  const orderedTopics = useMemo(() => {
    const withProgress = TOPICS.map((topic) => ({
      topic,
      progress: topicProgress(topic.name, doneUnits, userLevel),
    }));
    // Los temas con unidades a tu nivel van primero; entre ellos, respeta el
    // orden original. Los que todavía no tienen nada a tu nivel van al final.
    return [...withProgress].sort((a, b) => {
      const aReady = a.progress.atLevelCount > 0 ? 0 : 1;
      const bReady = b.progress.atLevelCount > 0 ? 0 : 1;
      return aReady - bReady;
    });
  }, [doneUnits, userLevel]);

  const visibleTopics =
    focusModeEnabled && !showAll ? orderedTopics.slice(0, FOCUS_MODE_VISIBLE_COUNT) : orderedTopics;

  // Por defecto, la columna derecha muestra la siguiente unidad recomendada.
  const unidad = unidadElegida ?? nextRecommendedUnit(doneUnits, userLevel);

  const lista = (
    <>
      <ThemedText type="subtitle">Aprender</ThemedText>
      <ThemedText themeColor="textSecondary">
        {focusModeEnabled
          ? 'Modo TDAH: solo tus próximos temas, sin lista larga'
          : 'Los temas con unidades a tu nivel aparecen primero'}
      </ThemedText>

      <View style={styles.levelRow}>
        <ThemedText type="smallBold" style={styles.levelLabel}>
          Tu nivel:
        </ThemedText>
        {CEFR_LEVELS.map((lvl) => (
          <Pressable
            key={lvl}
            onPress={() => setUserLevel(lvl)}
            style={[
              styles.levelChip,
              isWide && styles.levelChipCompacto,
              {
                backgroundColor: lvl === userLevel ? theme.primary : theme.backgroundSelected,
                borderColor: theme.border,
              },
            ]}>
            <ThemedText type="smallBold" themeColor={lvl === userLevel ? 'onPrimary' : 'text'}>
              {lvl}
            </ThemedText>
          </Pressable>
        ))}
      </View>
      <ThemedText type="small" themeColor="textSecondary" style={styles.levelHint}>
        Ajusta esto según tu resultado del EF SET u otro test de nivel.
      </ThemedText>

      <Card onPress={() => router.push('/tiempos')} style={isWide ? styles.mapaCompacto : undefined}>
        <ThemedText type={isWide ? 'smallBold' : 'cardTitle'}>🗺️ Mapa de tiempos verbales</ThemedText>
        {!isWide && (
          <ThemedText type="small" themeColor="textSecondary">
            Los 13 tiempos en un cuadro: cómo se forma cada uno y cuándo se usa.
          </ThemedText>
        )}
      </Card>

      {visibleTopics.map(({ topic, progress }) => (
        <View key={topic.name} style={styles.tema}>
          <TopicCard
            topic={topic}
            done={progress.done}
            hasContent={progress.hasContent}
            atLevelCount={progress.atLevelCount}
            minLevel={progress.minLevel}
            compact={isWide}
            onPress={() =>
              isWide
                ? setTemaAbierto((actual) => (actual === topic.name ? null : topic.name))
                : router.push(`/tema/${encodeURIComponent(topic.name)}`)
            }
          />
          {isWide && temaAbierto === topic.name && (
            <TopicUnits topicName={topic.name} selectedUnit={unidad} onSelectUnit={setUnidadElegida} />
          )}
        </View>
      ))}

      {focusModeEnabled && (
        <Button variant="ghost" onPress={() => setShowAll((v) => !v)}>
          {showAll ? '🙈 Mostrar menos' : `👀 Ver todos los temas (${orderedTopics.length})`}
        </Button>
      )}
    </>
  );

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        {isWide ? (
          <SplitLayout
            izquierda={lista}
            derecha={<UnitView num={unidad} onSelectUnit={setUnidadElegida} />}
            claveDerecha={unidad}
            nombrePanel="la lista de temas"
          />
        ) : (
          <ScrollView contentContainerStyle={styles.content}>{lista}</ScrollView>
        )}
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
    paddingBottom: BottomTabInset + Spacing.four,
    gap: Spacing.three,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  tema: {
    gap: Spacing.two,
  },
  mapaCompacto: {
    padding: Spacing.three,
  },
  // Con letra grande los cinco niveles no caben en una línea: bajan a la siguiente en vez de salirse de la pantalla.
  levelRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: Spacing.two,
  },
  levelLabel: {
    flexShrink: 0,
  },
  levelChip: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
    borderRadius: Radius.pill,
    borderWidth: 1,
  },
  // En la barra lateral (380 px) las cinco opciones y su etiqueta tienen que caber en una línea.
  levelChipCompacto: {
    paddingHorizontal: 10,
  },
  levelHint: {
    marginTop: -Spacing.two,
  },
});
