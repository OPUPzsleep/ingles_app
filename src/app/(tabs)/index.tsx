import { useRouter } from 'expo-router';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Columnas } from '@/components/columnas';
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
import { useIsWide } from '@/hooks/use-is-wide';
import { contarUnidadesHechas, nextRecommendedUnit, RUTA } from '@/lib/grammar';
import { useEstiloHorizontal } from '@/hooks/use-horizontal';

const TOTAL_UNITS = RUTA.length;

export default function InicioScreen() {
  const estiloHorizontal = useEstiloHorizontal(1000);
  const router = useRouter();
  const isWide = useIsWide();
  const { xp, doneUnits, streak, quizCorrect, quizTotal, userLevel } = useProgress();
  const { focusModeEnabled } = useSettings();

  const nextUnit = nextRecommendedUnit(doneUnits, userLevel);

  const hechas = contarUnidadesHechas(doneUnits);
  const pct = Math.round((hechas / TOTAL_UNITS) * 100);
  const quizPct = quizTotal > 0 ? Math.round((quizCorrect / quizTotal) * 100) : null;

  const titulo = <ThemedText type="subtitle">Aprende Inglés</ThemedText>;
  const subtitulo = !focusModeEnabled && (
    <ThemedText themeColor="textSecondary">English Grammar in Use · Raymond Murphy</ThemedText>
  );
  const nivel = (
    <ThemedText type="small" themeColor="primary">
      Tu nivel: {userLevel} · cámbialo en la pestaña Aprender
    </ThemedText>
  );
  const estadisticas = !focusModeEnabled && (
    <View style={styles.statsRow}>
      <StatTile value={xp} label="XP" />
      <StatTile value={streak} label="Racha 🔥" />
      <StatTile value={quizPct !== null ? `${quizPct}%` : '—'} label="Quiz" />
    </View>
  );
  const progreso = (
    <Card>
      <ThemedText type="cardTitle">{focusModeEnabled ? 'Tu única tarea ahora' : 'Progreso general'}</ThemedText>
      {!focusModeEnabled && <ProgressBar percent={pct} />}
      <ThemedText type="small" themeColor="textSecondary">
        {hechas} de {TOTAL_UNITS} unidades
      </ThemedText>
      <Button variant="primary" onPress={() => router.push(`/unidad/${nextUnit}`)}>
        {hechas === 0 ? '▶️ Empezar' : '▶️ Continuar donde quedaste'}
      </Button>
    </Card>
  );
  const practica = !focusModeEnabled && (
    <Card onPress={() => router.push('/practica/dia')}>
      <ThemedText type="cardTitle">⭐ Práctica del día</ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        10 ejercicios mezclados en unos 5 minutos. Lo que falles queda para repasar.
      </ThemedText>
    </Card>
  );
  const asistente = !focusModeEnabled && (
    <Card onPress={() => router.push('/asistente')}>
      <ThemedText type="cardTitle">💬 Pregúntale a la app</ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        Escribe tu duda de gramática, una palabra o un verbo y te contesta con lo que hay en la app, sin internet.
      </ThemedText>
    </Card>
  );
  const modoTdah = <FocusModeCard />;
  const temporizador = focusModeEnabled && <FocusTimer />;
  const tamano = <TextSizeCard />;
  const tema = <ThemeCard />;
  const comoFunciona = !focusModeEnabled && <HowItWorksCard />;
  const recordatorio = !focusModeEnabled && Platform.OS !== 'web' && <ReminderCard />;
  const gramatica = !focusModeEnabled && (
    <Card onPress={() => router.push('/gramatica')}>
      <ThemedText type="cardTitle">📚 Gramática para Hispanohablantes</ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        Conceptos de gramática explicados en español, comparando con el inglés.
      </ThemedText>
    </Card>
  );

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        {isWide ? (
          // Pantalla ancha: lo de estudiar a la izquierda; los ajustes a la derecha.
          <ScrollView contentContainerStyle={[styles.content, styles.contentAncho]}>
            <Columnas
              desde={900}
              proporcion={[1.15, 1]}
              principal={
                <>
                  {titulo}
                  {subtitulo}
                  {nivel}
                  {estadisticas}
                  {progreso}
                  {practica}
                  {asistente}
                  {gramatica}
                  {comoFunciona}
                  {/* En Modo TDAH lo esencial (el interruptor y el temporizador) se queda junto a la tarea. */}
                  {focusModeEnabled && modoTdah}
                  {temporizador}
                </>
              }
              lateral={
                <>
                  {!focusModeEnabled && modoTdah}
                  {tamano}
                  {tema}
                  {recordatorio}
                </>
              }
            />
          </ScrollView>
        ) : (
          <ScrollView contentContainerStyle={[styles.content, estiloHorizontal]}>
            {titulo}
            {subtitulo}
            {nivel}
            {estadisticas}
            {progreso}
            {practica}
            {asistente}
            {modoTdah}
            {temporizador}
            {tamano}
            {tema}
            {comoFunciona}
            {recordatorio}
            {gramatica}
          </ScrollView>
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
  contentAncho: {
    maxWidth: 1120,
    padding: Spacing.four,
  },
  statsRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
});
