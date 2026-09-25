import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Palettes, Radius, Spacing, THEME_OPTIONS, ThemeName } from '@/constants/theme';
import { useSettings } from '@/context/settings-context';
import { useTheme } from '@/hooks/use-theme';

/** Muestra de color de un tema: fondo, tarjeta y acento. */
function Swatch({ name }: { name: ThemeName }) {
  if (name === 'auto') {
    return (
      <View style={[styles.swatch, styles.autoSwatch]}>
        <View style={[styles.half, { backgroundColor: Palettes.claro.colors.background }]} />
        <View style={[styles.half, { backgroundColor: Palettes.oscuro.colors.background }]} />
      </View>
    );
  }
  const c = Palettes[name].colors;
  return (
    <View style={[styles.swatch, { backgroundColor: c.background, borderColor: c.border }]}>
      <View style={[styles.swatchCard, { backgroundColor: c.backgroundElement }]} />
      <View style={[styles.swatchDot, { backgroundColor: c.focusAccent }]} />
    </View>
  );
}

export function ThemeCard() {
  const theme = useTheme();
  const { themeName, setThemeName } = useSettings();

  return (
    <Card>
      <ThemedText type="cardTitle">🎨 Tema de colores</ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        Automático sigue el modo claro/oscuro de tu teléfono.
      </ThemedText>
      <View style={styles.grid}>
        {THEME_OPTIONS.map((opt) => {
          const active = opt.value === themeName;
          return (
            <Pressable
              key={opt.value}
              onPress={() => setThemeName(opt.value)}
              style={[
                styles.option,
                {
                  borderColor: active ? theme.primary : theme.border,
                  backgroundColor: active ? theme.backgroundSelected : 'transparent',
                },
              ]}>
              <Swatch name={opt.value} />
              <ThemedText type={active ? 'smallBold' : 'small'}>{opt.label}</ThemedText>
            </Pressable>
          );
        })}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
    marginTop: Spacing.one,
  },
  option: {
    alignItems: 'center',
    gap: Spacing.one,
    borderWidth: 2,
    borderRadius: Radius.small,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.two,
    minWidth: 76,
    flexGrow: 1,
  },
  swatch: {
    width: 48,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    padding: 5,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  autoSwatch: {
    flexDirection: 'row',
    padding: 0,
    borderColor: '#9C9C9C',
  },
  half: {
    flex: 1,
  },
  swatchCard: {
    height: 10,
    borderRadius: 3,
  },
  swatchDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
});
