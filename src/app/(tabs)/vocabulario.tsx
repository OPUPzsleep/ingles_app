import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/themed-view';
import { ListaFrases } from '@/components/vocabulario/lista-frases';
import { ListaPalabras } from '@/components/vocabulario/lista-palabras';
import { ListaVerbos } from '@/components/vocabulario/lista-verbos';
import { SelectorVista, type VistaVocabulario } from '@/components/vocabulario/selector-vista';

/** Aviso a Vocabulario de qué abrir: `?vista=palabras&tema=cuerpo` o `?vista=frases&q=how much`. */
interface Entrada {
  vista: VistaVocabulario;
  tema?: string;
  busqueda?: string;
}

function vistaDe(valor?: string): VistaVocabulario {
  return valor === 'palabras' || valor === 'frases' ? valor : 'verbos';
}

function Contenido({ entrada }: { entrada: Entrada }) {
  const [vista, setVista] = useState(entrada.vista);
  const selector = <SelectorVista vista={vista} onChange={setVista} />;

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        {vista === 'verbos' && <ListaVerbos encabezado={selector} />}
        {vista === 'palabras' && (
          <ListaPalabras encabezado={selector} tema={entrada.tema} busqueda={entrada.busqueda} />
        )}
        {vista === 'frases' && (
          <ListaFrases encabezado={selector} situacion={entrada.tema} busqueda={entrada.busqueda} />
        )}
      </SafeAreaView>
    </ThemedView>
  );
}

export default function VocabularioScreen() {
  const { vista, tema, q } = useLocalSearchParams<{ vista?: string; tema?: string; q?: string }>();

  // Si llegan otros parámetros (por ejemplo desde un enlace), el contenido empieza de nuevo con ellos.
  return <Contenido key={`${vista}|${tema}|${q}`} entrada={{ vista: vistaDe(vista), tema, busqueda: q }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});
