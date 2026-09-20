import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const PRESETS_MIN = [5, 10, 15];

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

/**
 * Temporizador de sesión corta para el Modo TDAH: una sola tarea (esta
 * unidad), un tiempo fijo y visible, y un cierre claro al terminar — nada
 * de "hasta que la domines", solo "hasta que suene".
 */
export function FocusTimer() {
  const theme = useTheme();
  const [minutes, setMinutes] = useState(10);
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            setRunning(false);
            setFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  const pickPreset = (min: number) => {
    setMinutes(min);
    setSecondsLeft(min * 60);
    setRunning(false);
    setFinished(false);
  };

  const reset = () => {
    setSecondsLeft(minutes * 60);
    setRunning(false);
    setFinished(false);
  };

  return (
    <Card>
      <ThemedText type="label" themeColor="primary">
        ⏱️ Sesión enfocada
      </ThemedText>

      {!running && !finished && secondsLeft === minutes * 60 && (
        <View style={styles.presetRow}>
          {PRESETS_MIN.map((min) => (
            <Pressable
              key={min}
              onPress={() => pickPreset(min)}
              style={[
                styles.presetChip,
                {
                  backgroundColor: min === minutes ? theme.primary : theme.backgroundSelected,
                  borderColor: theme.border,
                },
              ]}>
              <ThemedText type="smallBold" themeColor={min === minutes ? 'onPrimary' : 'text'}>
                {min} min
              </ThemedText>
            </Pressable>
          ))}
        </View>
      )}

      <ThemedText type="title" style={styles.timeText}>
        {finished ? '✅' : formatTime(secondsLeft)}
      </ThemedText>

      {finished ? (
        <>
          <ThemedText themeColor="textSecondary" style={styles.centerText}>
            Se acabó el tiempo. Marca la unidad si avanzaste, o descansa un momento antes de
            seguir.
          </ThemedText>
          <Button variant="secondary" onPress={reset}>
            🔄 Otra sesión
          </Button>
        </>
      ) : (
        <View style={styles.controlsRow}>
          <Button
            variant="primary"
            onPress={() => setRunning((r) => !r)}
            style={styles.controlButton}>
            {running ? '⏸️ Pausar' : '▶️ Empezar'}
          </Button>
          <Button variant="secondary" onPress={reset} style={styles.controlButton}>
            🔄 Reiniciar
          </Button>
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  presetRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  presetChip: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
    borderRadius: Radius.pill,
    borderWidth: 1,
  },
  timeText: {
    textAlign: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  controlsRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  controlButton: {
    flex: 1,
  },
});
