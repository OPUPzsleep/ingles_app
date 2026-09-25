import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HowItWorksCard } from '@/components/how-it-works-card';
import { FocusModeCard } from '@/components/focus-mode-card';
import { FocusTimer } from '@/components/focus-timer';
import { ReminderCard } from '@/components/reminder-card';
import { StatTile } from '@/components/stat-tile';
import { TextSizeCard } from '@/components/text-size-card';
import { ThemeCard } from '@/components/theme-card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useProgress } from '@/context/progress-context';
import { useSettings } from '@/context/settings-context';
import { nextRecommendedUnit } from '@/lib/grammar';

const TOTAL_UNITS = 145;

export default function InicioScreen() {
  const router = useRouter();
  const { xp, doneUnits, streak, quizCorrect, quizTotal, userLevel } = useProgress();
  const { focusModeEnabled } = useSettings();

  const nextUnit = nextRecommendedUnit(doneUnits, userLevel);

  const pct = Math.round((doneUnits.length / TOTAL_UNITS) * 100);
  const quizPct = quizTotal > 0 ? Math.round((quizCorrect / quizTotal) * 100) : null;

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView contentContainerStyle={styles.content}>
          <ThemedText type="subtitle">Aprende Inglés</ThemedText>
          {!focusModeEnabled && (
            <ThemedText themeColor="textSecondary">
              English Grammar in Use · Raymond Murphy
            </ThemedText>
          )}
          <ThemedText type="small" themeColor="primary">
            Tu nivel: {userLevel} · cámbialo en la pestaña Aprender
          </ThemedText>

          {!focusModeEnabled && (
            <View style={styles.statsRow}>
              <StatTile value={xp} label="XP" />
              <StatTile value={streak} label="Racha 🔥" />
              <StatTile value={quizPct !== null ? `${quizPct}%` : '—'} label="Quiz" />
            </View>
          )}

          <Card>
            <ThemedText type="cardTitle">
              {focusModeEnabled ? 'Tu única tarea ahora' : 'Progreso general'}
            </ThemedText>
            {!focusModeEnabled && <ProgressBar percent={pct} />}
            <ThemedText type="small" themeColor="textSecondary">
              {doneUnits.length} de {TOTAL_UNITS} unidades
            </ThemedText>
            <Button variant="primary" onPress={() => router.push(`/unidad/${nextUnit}`)}>
              {doneUnits.length === 0 ? '▶️ Empezar' : '▶️ Continuar donde quedaste'}
            </Button>
          </Card>

          <FocusModeCard />

          {focusModeEnabled && <FocusTimer />}

          <TextSizeCard />

          <ThemeCard />
          {!focusModeEnabled && (
            <>
              <HowItWorksCard />

              <ReminderCard />

              <Card onPress={() => router.push('/gramatica')}>
                <ThemedText type="cardTitle">📚 Gramática para Hispanohablantes</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  Conceptos de gramática explicados en español, comparando con el inglés.
                </ThemedText>
              </Card>
            </>
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
    padding: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.four,
    gap: Spacing.three,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  statsRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
});
