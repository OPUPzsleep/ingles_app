import type { CefrLevel, VocabEntry, VocabTopic } from '@/types/grammar';

/** [palabra, IPA, pronunciación a la española, significado en español, ejemplo en inglés] */
export type FilaPalabra = [string, string, string, string, string];

/** Arma un grupo de vocabulario a partir de filas compactas (una por palabra). */
export function tema(id: string, name: string, icon: string, level: CefrLevel, filas: FilaPalabra[]): VocabTopic {
  const words: VocabEntry[] = filas.map(([w, ipa, aprox, def, ex]) => ({ w, ipa, aprox, def, ex }));
  return { id, name, icon, level, words };
}
