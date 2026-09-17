import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const POINTS = [
  'Una explicación corta en español con tablas de gramática.',
  'Vocabulario con traducción y una pronunciación aproximada.',
  'Ejemplos y diálogos que puedes escuchar con el botón de altavoz.',
  'Ejercicios que se corrigen al instante. La unidad queda completada cuando aciertas todo.',
];

const NOTE =
  'Las pronunciaciones entre corchetes, como [jeló], son una ayuda aproximada para hispanohablantes. No son exactas: usa el botón de audio para escuchar la versión real.';

export function HowItWorksCard() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <Card onPress={() => setOpen((prev) => !prev)}>
      <View style={styles.header}>
        <ThemedText type="cardTitle" style={styles.title}>
          ℹ️ Cómo funciona cada unidad
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {open ? '▲' : '▼'}
        </ThemedText>
      </View>

      {open && (
        <View style={styles.body}>
          {POINTS.map((point) => (
            <View key={point} style={styles.point}>
              <ThemedText type="small" themeColor="primary">
                •
              </ThemedText>
              <ThemedText type="small" style={styles.pointText}>
                {point}
              </ThemedText>
            </View>
          ))}

          <View style={[styles.note, { backgroundColor: theme.warningMuted }]}>
            <ThemedText type="small" style={styles.pointText}>
              💡 {NOTE}
            </ThemedText>
          </View>
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  title: {
    flex: 1,
  },
  body: {
    gap: Spacing.two,
  },
  point: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  pointText: {
    flex: 1,
    lineHeight: 21,
  },
  note: {
    borderRadius: Radius.small,
    padding: Spacing.three,
  },
});
