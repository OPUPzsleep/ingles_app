import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FlashcardView } from '@/components/flashcard-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { esTipoOracion } from '@/data/frases/frases-tiempos';

export default function TarjetasScreen() {
  // `?tipo=past-simple` llega desde el mapa de tiempos ("Practicar estas frases").
  const { tipo: tipoParam } = useLocalSearchParams<{ tipo?: string }>();
  const router = useRouter();
  const tipo = esTipoOracion(tipoParam) ? tipoParam : undefined;

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView contentContainerStyle={styles.content}>
          <ThemedText type="subtitle">Tarjetas</ThemedText>
          <ThemedText themeColor="textSecondary" style={styles.subtitle}>
            300 frases del día a día · presente, pasado y futuro
          </ThemedText>
          <FlashcardView
            key={tipo ?? 'todas'}
            tipo={tipo}
            onQuitarTipo={() => router.setParams({ tipo: undefined })}
          />
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
    paddingBottom: BottomTabInset + Spacing.four,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  subtitle: {
    marginBottom: Spacing.three,
  },
});
