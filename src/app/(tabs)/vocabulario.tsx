import { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, TextInput, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { VerbRow } from '@/components/verb-row';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { ALL_VERBOS, type Verbo } from '@/lib/verbos';

type Filtro = 'todos' | 'irregulares' | 'regulares';

const FILTROS: { value: Filtro; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'irregulares', label: 'Irregulares' },
  { value: 'regulares', label: 'Regulares' },
];

/** Cuántas columnas de verbos caben según el ancho de la ventana (1 en celular). */
function columnasPara(ancho: number) {
  if (ancho >= 1500) return 3;
  if (ancho >= 1000) return 2;
  return 1;
}

export default function VocabularioScreen() {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const columnas = columnasPara(width);
  const [search, setSearch] = useState('');
  const [filtro, setFiltro] = useState<Filtro>('todos');

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    return ALL_VERBOS.filter((v) => {
      if (filtro === 'irregulares' && !v.irregular) return false;
      if (filtro === 'regulares' && v.irregular) return false;
      if (!s) return true;
      return [v.base, v.pasado, v.participio, v.ing, v.tercera, v.es].some((f) =>
        f.toLowerCase().includes(s)
      );
    });
  }, [search, filtro]);

  // Con varias columnas, se completa la última fila con huecos para que sus verbos no se estiren.
  const datos = useMemo<(Verbo | null)[]>(() => {
    const relleno = columnas > 1 ? (columnas - (filtered.length % columnas)) % columnas : 0;
    return [...filtered, ...Array<null>(relleno).fill(null)];
  }, [filtered, columnas]);

  const total = ALL_VERBOS.length;
  const irregulares = ALL_VERBOS.filter((v) => v.irregular).length;
  const anchoMax = columnas === 3 ? 1440 : columnas === 2 ? 1080 : MaxContentWidth;

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <FlatList
          // FlatList no deja cambiar numColumns "al vuelo": otra clave = lista nueva.
          key={columnas}
          numColumns={columnas}
          data={datos}
          keyExtractor={(item, i) => item?.base ?? `hueco-${i}`}
          contentContainerStyle={[styles.content, { maxWidth: anchoMax }]}
          columnWrapperStyle={columnas > 1 ? styles.fila : undefined}
          keyboardShouldPersistTaps="handled"
          ListHeaderComponent={
            // El encabezado (texto y buscador) no se estira: con varias columnas se queda a un ancho cómodo.
            <View style={columnas > 1 ? styles.cabeceraAncha : undefined}>
              <ThemedText type="subtitle">Verbos</ThemedText>
              <ThemedText themeColor="textSecondary" style={styles.subtitle}>
                {total} verbos que cambian según el tiempo ({irregulares} irregulares). Toca uno para ver
                todas sus formas.
              </ThemedText>
              <ThemedText type="small" themeColor="textSecondary" style={styles.subtitle}>
                Pronunciación: j = h suave · th = lengua entre los dientes · u = w · y = j inglesa · la tilde
                marca la sílaba fuerte.
              </ThemedText>
              <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="🔍 Buscar: went, comer, gone…"
                placeholderTextColor={theme.textSecondary}
                autoCapitalize="none"
                autoCorrect={false}
                style={[
                  styles.search,
                  { backgroundColor: theme.backgroundSelected, color: theme.text, borderColor: theme.border },
                ]}
              />
              <View style={styles.filterRow}>
                {FILTROS.map((f) => {
                  const active = f.value === filtro;
                  return (
                    <Pressable
                      key={f.value}
                      onPress={() => setFiltro(f.value)}
                      style={[
                        styles.chip,
                        {
                          backgroundColor: active ? theme.primary : theme.backgroundElement,
                          borderColor: theme.border,
                        },
                      ]}>
                      <ThemedText type="smallBold" themeColor={active ? 'onPrimary' : 'text'}>
                        {f.label}
                      </ThemedText>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          }
          ListEmptyComponent={
            <ThemedText themeColor="textSecondary">
              No se encontraron verbos para &quot;{search}&quot;.
            </ThemedText>
          }
          renderItem={({ item }) => {
            if (columnas === 1) return item ? <VerbRow verbo={item} /> : null;
            return item ? (
              <View style={styles.celda}>
                <VerbRow verbo={item} />
              </View>
            ) : (
              <View style={styles.celdaVacia} />
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: Spacing.two }} />}
        />
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
    alignSelf: 'center',
    width: '100%',
  },
  cabeceraAncha: {
    maxWidth: MaxContentWidth,
  },
  fila: {
    gap: Spacing.two,
  },
  // Una celda no se estira a lo alto: si abres un verbo, el de al lado no cambia de tamaño.
  celda: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  celdaVacia: {
    flex: 1,
  },
  subtitle: {
    marginBottom: Spacing.three,
  },
  search: {
    borderWidth: 1,
    borderRadius: Radius.medium,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    marginBottom: Spacing.three,
    fontSize: 15,
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
    marginBottom: Spacing.three,
  },
  chip: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: Radius.pill,
    borderWidth: 1,
  },
});
