import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { VocabCard } from '@/components/vocab-card';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { ALL_UNIT_TITLES } from '@/data/grammar/unit-titles';
import { getAllVocab } from '@/lib/grammar';

export default function VocabularioScreen() {
  const router = useRouter();
  const theme = useTheme();
  const [search, setSearch] = useState('');
  const all = useMemo(() => getAllVocab(), []);

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    if (!s) return all;
    return all.filter((v) => v.w.toLowerCase().includes(s) || v.def.toLowerCase().includes(s));
  }, [all, search]);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <FlatList
          data={filtered}
          keyExtractor={(item, i) => `${item.unit}-${item.w}-${i}`}
          contentContainerStyle={styles.content}
          ListHeaderComponent={
            <>
              <ThemedText type="subtitle">Vocabulario</ThemedText>
              <ThemedText themeColor="textSecondary" style={styles.subtitle}>
                {all.length} palabras con pronunciación, traducción y ejemplo
              </ThemedText>
              <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="🔍 Buscar palabra o traducción…"
                placeholderTextColor={theme.textSecondary}
                style={[
                  styles.search,
                  { backgroundColor: theme.backgroundSelected, color: theme.text, borderColor: theme.border },
                ]}
              />
            </>
          }
          ListEmptyComponent={
            <ThemedText themeColor="textSecondary">
              No se encontraron palabras para &quot;{search}&quot;.
            </ThemedText>
          }
          renderItem={({ item }) => (
            <VocabCard
              entry={item}
              footer={item.topicName ?? ALL_UNIT_TITLES[item.unit]}
              onPress={item.unit > 0 ? () => router.push(`/unidad/${item.unit}`) : undefined}
            />
          )}
          ItemSeparatorComponent={() => <ThemedView style={{ height: Spacing.two }} />}
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
    padding: Spacing.four,
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
});
