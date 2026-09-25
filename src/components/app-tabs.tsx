import { NativeTabs } from 'expo-router/unstable-native-tabs';

import { useTheme } from '@/hooks/use-theme';

export default function AppTabs() {
  const colors = useTheme();

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundSelected}
      labelStyle={{ selected: { color: colors.primary } }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Inicio</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="aprender">
        <NativeTabs.Trigger.Label>Aprender</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="book.fill" md="menu_book" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="tarjetas">
        <NativeTabs.Trigger.Label>Tarjetas</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="rectangle.stack.fill" md="layers" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="vocabulario">
        <NativeTabs.Trigger.Label>Vocabulario</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="character.book.closed.fill" md="translate" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
