import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
  TabTriggerSlotProps,
  TabListProps,
} from 'expo-router/ui';
import { Pressable, useWindowDimensions, StyleSheet } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { Spacing, WideBreakpoint } from '@/constants/theme';
import { useHorizontal } from '@/hooks/use-horizontal';
import { useTheme } from '@/hooks/use-theme';

/** Por debajo de este ancho la barra muestra solo el emoji (y el nombre de la pestaña activa). */
const COMPACT_WIDTH = 720;

/** La barra puede ser un poco más ancha que el contenido para que quepan las 5 pestañas. */
const TAB_BAR_MAX_WIDTH = 760;

export default function AppTabs() {
  return (
    <Tabs>
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="index" href="/" asChild>
            <TabButton>🏠 Inicio</TabButton>
          </TabTrigger>
          <TabTrigger name="aprender" href="/aprender" asChild>
            <TabButton>📖 Aprender</TabButton>
          </TabTrigger>
          <TabTrigger name="practicar" href="/practicar" asChild>
            <TabButton>🏋️ Practicar</TabButton>
          </TabTrigger>
          <TabTrigger name="tarjetas" href="/tarjetas" asChild>
            <TabButton>🃏 Tarjetas</TabButton>
          </TabTrigger>
          <TabTrigger name="vocabulario" href="/vocabulario" asChild>
            <TabButton>📝 Vocabulario</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
      <TabSlot style={styles.slot} />
    </Tabs>
  );
}

export function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  const { width } = useWindowDimensions();
  const compact = width < COMPACT_WIDTH;

  // Las etiquetas vienen como "🏠 Inicio": el primer bloque es el emoji.
  const [icon, ...rest] = String(children).split(' ');
  const label = compact && !isFocused ? icon : `${icon} ${rest.join(' ')}`;

  return (
    <Pressable {...props} style={({ pressed }) => pressed && styles.pressed}>
      <ThemedView
        type={isFocused ? 'backgroundSelected' : 'backgroundElement'}
        style={[styles.tabButtonView, compact && styles.tabButtonViewCompact]}>
        <ThemedText type="small" themeColor={isFocused ? 'primary' : 'textSecondary'}>
          {label}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
}

export function CustomTabList(props: TabListProps) {
  const colors = useTheme();
  const { width } = useWindowDimensions();
  const compact = width < COMPACT_WIDTH;
  const wide = width >= WideBreakpoint;
  // Celular girado: la barra es baja para que no se coma el poco alto que hay.
  const horizontal = useHorizontal();

  return (
    // El fondo va aquí porque la barra ya no flota sobre las pantallas: ocupa su propia franja.
    <ThemedView
      {...props}
      style={[
        styles.tabListContainer,
        compact && styles.tabListContainerCompact,
        wide && styles.tabListContainerWide,
        horizontal && styles.tabListContainerHorizontal,
      ]}>
      <ThemedView
        type="backgroundElement"
        style={[
          styles.innerContainer,
          compact && styles.innerContainerCompact,
          wide && styles.innerContainerWide,
          horizontal && styles.innerContainerHorizontal,
          { borderColor: colors.border },
        ]}>
        {!compact && (
          <ThemedText
            type="smallBold"
            themeColor="primary"
            numberOfLines={1}
            style={[styles.brandText, wide && styles.brandTextWide]}>
            Aprende Inglés
          </ThemedText>
        )}
        {props.children}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  slot: {
    flex: 1,
  },
  tabListContainer: {
    width: '100%',
    padding: Spacing.three,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tabListContainerCompact: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.two,
  },
  innerContainer: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.four,
    borderRadius: Spacing.five,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    gap: Spacing.two,
    maxWidth: TAB_BAR_MAX_WIDTH,
  },
  innerContainerCompact: {
    paddingHorizontal: Spacing.two,
    justifyContent: 'space-around',
  },
  // Pantalla ancha: la barra ocupa todo el ancho, plana y con una línea abajo, con la marca a la izquierda.
  tabListContainerWide: {
    padding: 0,
  },
  innerContainerWide: {
    maxWidth: '100%',
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    paddingHorizontal: Spacing.four,
  },
  tabListContainerHorizontal: {
    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.two,
  },
  innerContainerHorizontal: {
    paddingVertical: Spacing.one,
    maxWidth: '100%',
  },
  brandText: {
    marginRight: 'auto',
    flexShrink: 0,
  },
  brandTextWide: {
    marginRight: Spacing.four,
  },
  pressed: {
    opacity: 0.7,
  },
  tabButtonView: {
    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.three,
  },
  tabButtonViewCompact: {
    paddingHorizontal: Spacing.two,
  },
});
