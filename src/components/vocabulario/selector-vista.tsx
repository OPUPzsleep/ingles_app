import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type VistaVocabulario = 'verbos' | 'palabras' | 'frases';

const VISTAS: { valor: VistaVocabulario; etiqueta: string }[] = [
  { valor: 'verbos', etiqueta: 'Verbos' },
  { valor: 'palabras', etiqueta: 'Palabras' },
  { valor: 'frases', etiqueta: 'Frases' },
];

/** Los tres apartados de Vocabulario: verbos, palabras (por tema) y frases útiles (por situación). */
export function SelectorVista({ vista, onChange }: { vista: VistaVocabulario; onChange: (vista: VistaVocabulario) => void }) {
  const theme = useTheme();

  return (
    <View style={styles.fila}>
      {VISTAS.map(({ valor, etiqueta }) => {
        const activa = valor === vista;
        return (
          <Pressable
            key={valor}
            onPress={() => onChange(valor)}
            accessibilityRole="button"
            aria-selected={activa}
            style={[
              styles.chip,
              { backgroundColor: activa ? theme.primary : theme.backgroundSelected, borderColor: theme.border },
            ]}>
            <ThemedText type="smallBold" themeColor={activa ? 'onPrimary' : 'text'}>
              {etiqueta}
            </ThemedText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
    marginBottom: Spacing.three,
  },
  chip: {
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
    borderRadius: Radius.pill,
    borderWidth: 1,
  },
});
