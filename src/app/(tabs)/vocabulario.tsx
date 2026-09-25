import { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { VerbRow } from '@/components/verb-row';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { ALL_VERBOS } from '@/lib/verbos';

type Filtro = 'todos' | 'irregulares' | 'regulares';

const FILTROS: { value: Filtro; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'irregulares', label: 'Irregulares' },
  { value: 'regulares', label: 'Regulares' },
];

export default function VocabularioScreen() {
  const theme = useTheme();
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

  const total = ALL_VERBOS.length;
  const irregulares = ALL_VERBOS.filter((v) => v.irregular).length;

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.base}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          ListHeaderComponent={
            <>
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
            </>
          }
          ListEmptyComponent={
            <ThemedText themeColor="textSecondary">
              No se encontraron verbos para &quot;{search}&quot;.
            </ThemedText>
          }
          renderItem={({ item }) => <VerbRow verbo={item} />}
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
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
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
