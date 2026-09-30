import { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { ANCHO_DOS_COLUMNAS, Columnas } from '@/components/columnas';
import { GramBlock } from '@/components/gram-block';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { GRAM_CATS } from '@/data/gramatica/categories';
import { repartirBloques } from '@/lib/gramatica';
import type { GramBlock as GramBlockData, GramConcept } from '@/types/gramatica';

function Bloques({ bloques }: { bloques: GramBlockData[] }) {
  return (
    <>
      {bloques.map((bloque, i) => (
        <GramBlock key={i} block={bloque} />
      ))}
    </>
  );
}

/**
 * Un concepto de gramática completo: encabezado y bloques, sin scroll propio.
 * Con ancho de sobra reparte los bloques, en su orden, en dos columnas parejas; en celular, una debajo de otra.
 */
export function ConceptoView({ concepto }: { concepto: GramConcept }) {
  // Ancho estimado con el de la ventana hasta que onLayout da el real (evita un parpadeo al abrir).
  const [ancho, setAncho] = useState(() => Dimensions.get('window').width);
  const ancha = ancho >= ANCHO_DOS_COLUMNAS;

  const categoria = GRAM_CATS.find((c) => c.id === concepto.cat);
  const [izquierda, derecha] = repartirBloques(concepto.blocks);

  return (
    <View onLayout={(evento) => setAncho(evento.nativeEvent.layout.width)} style={styles.cuerpo}>
      <ThemedText type="label" themeColor="primary">
        {ancha && categoria ? `${categoria.icon} ${categoria.name} · ${concepto.tag}` : concepto.tag}
      </ThemedText>
      <ThemedText type="subtitle">{concepto.title}</ThemedText>

      {ancha ? (
        <Columnas
          principal={<Bloques bloques={izquierda} />}
          lateral={derecha.length > 0 ? <Bloques bloques={derecha} /> : null}
          proporcion={[1, 1]}
        />
      ) : (
        <Bloques bloques={concepto.blocks} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cuerpo: {
    gap: Spacing.three,
  },
});
