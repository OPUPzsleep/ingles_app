import { Redirect, Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AccionesDeEncabezado } from '@/components/acciones-de-encabezado';
import { ThemedView } from '@/components/themed-view';
import { TituloDeEncabezado } from '@/components/titulo-de-encabezado';
import { UnitView } from '@/components/unit-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { ALL_UNIT_TITLES } from '@/data/grammar/unit-titles';
import { useHorizontal } from '@/hooks/use-horizontal';
import { useIsWide } from '@/hooks/use-is-wide';
import { etiquetaDeUnidad, getUnit } from '@/lib/grammar';

export default function UnidadScreen() {
  const { num: numParam } = useLocalSearchParams<{ num: string }>();
  const num = Number(numParam);
  const isWide = useIsWide();
  const horizontal = useHorizontal();
  const title = getUnit(num)?.title ?? ALL_UNIT_TITLES[num] ?? etiquetaDeUnidad(num);

  // Un id que no es de una unidad visible (por ejemplo, una escondida o un enlace viejo) vuelve al Inicio, como +not-found.
  if (!getUnit(num)) return <Redirect href="/" />;

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          title,
          headerTitle: () => <TituloDeEncabezado>{title}</TituloDeEncabezado>,
          headerRight: () => <AccionesDeEncabezado />,
        }}
      />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ScrollView contentContainerStyle={[styles.content, isWide && styles.contentAncho, horizontal && styles.contentHorizontal]}>
          <UnitView num={num} />
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
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  // En un celular en horizontal se aprovecha el ancho y se gasta poco alto en márgenes.
  contentHorizontal: {
    maxWidth: 1400,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
  },
  // En pantalla ancha la unidad se reparte en dos columnas (UnitView limita su propio ancho).
  contentAncho: {
    maxWidth: 1400,
    padding: Spacing.four,
  },
});
