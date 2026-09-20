import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { TopicCard } from '@/components/topic-card';
import { Button } from '@/components/ui/button';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useProgress } from '@/context/progress-context';
import { useSettings } from '@/context/settings-context';
import { TOPICS } from '@/data/grammar/topics';
import { topicProgress } from '@/lib/grammar';
import { CEFR_LEVELS } from '@/types/grammar';

const FOCUS_MODE_VISIBLE_COUNT = 3;

export default function AprenderScreen() {
  const router = useRouter();
  const theme = useTheme();
  const { doneUnits, userLevel, setUserLevel } = useProgress();
  const { focusModeEnabled } = useSettings();
  const [showAll, setShowAll] = useState(false);

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

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView contentContainerStyle={styles.content}>
          <ThemedText type="subtitle">Aprender</ThemedText>
          <ThemedText themeColor="textSecondary">
            {focusModeEnabled
              ? 'Modo TDAH: solo tus próximos temas, sin lista larga'
              : 'Los temas con unidades a tu nivel aparecen primero'}
          </ThemedText>

          <View style={styles.levelRow}>
            <ThemedText type="smallBold">Tu nivel:</ThemedText>
            {CEFR_LEVELS.map((lvl) => (
              <Pressable
                key={lvl}
                onPress={() => setUserLevel(lvl)}
                style={[
                  styles.levelChip,
                  {
                    backgroundColor:
                      lvl === userLevel ? theme.primary : theme.backgroundSelected,
                    borderColor: theme.border,
                  },
                ]}>
                <ThemedText
                  type="smallBold"
                  themeColor={lvl === userLevel ? 'onPrimary' : 'text'}>
                  {lvl}
                </ThemedText>
              </Pressable>
            ))}
          </View>
          <ThemedText type="small" themeColor="textSecondary" style={styles.levelHint}>
            Ajusta esto según tu resultado del EF SET u otro test de nivel.
          </ThemedText>

          {visibleTopics.map(({ topic, progress }) => (
            <TopicCard
              key={topic.name}
              topic={topic}
              done={progress.done}
              hasContent={progress.hasContent}
              atLevelCount={progress.atLevelCount}
              minLevel={progress.minLevel}
              onPress={() => router.push(`/tema/${encodeURIComponent(topic.name)}`)}
            />
          ))}

          {focusModeEnabled && (
            <Button variant="ghost" onPress={() => setShowAll((v) => !v)}>
              {showAll ? '🙈 Mostrar menos' : `👀 Ver todos los temas (${orderedTopics.length})`}
            </Button>
          )}
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
    padding: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.four,
    gap: Spacing.three,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  levelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  levelChip: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
    borderRadius: Radius.pill,
    borderWidth: 1,
  },
  levelHint: {
    marginTop: -Spacing.two,
  },
});
