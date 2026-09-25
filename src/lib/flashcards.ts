import {
  FRASES_POR_TIPO,
  FormaOracion,
  formaDe,
  Tiempo,
  TIPOS,
  TipoOracion,
} from '@/data/frases/frases-tiempos';
import { SrsEntry, SrsMap } from '@/types/progress';

export interface FlashcardEntry {
  id: string;
  en: string;
  es: string;
  tipo: TipoOracion;
  forma: FormaOracion;
}

export type FiltroTiempo = Tiempo | 'todos';

export const ALL_FC_CARDS: FlashcardEntry[] = (
  Object.entries(FRASES_POR_TIPO) as [TipoOracion, [string, string][]][]
).flatMap(([tipo, frases]) =>
  frases.map(([en, es], i) => ({
    id: `frase-${tipo}-${i}`,
    en,
    es,
    tipo,
    forma: formaDe(en),
  }))
);

export const SRS_INTERVALS = [0, 1, 3, 7, 16, 35, 90];

export function getSrsEntry(srs: SrsMap, id: string): SrsEntry {
  return srs[id] ?? { box: 0, due: 0 };
}

export function buildFcDeck(
  srs: SrsMap,
  filtro: FiltroTiempo = 'todos'
): { deck: FlashcardEntry[]; freeReview: boolean } {
  const cards =
    filtro === 'todos' ? ALL_FC_CARDS : ALL_FC_CARDS.filter((c) => TIPOS[c.tipo].tiempo === filtro);
  const due = cards.filter((c) => getSrsEntry(srs, c.id).due <= Date.now());
  const freeReview = due.length === 0;
  const pool = due.length ? due : cards;
  return { deck: [...pool].sort(() => Math.random() - 0.5), freeReview };
}

export function rateSrs(entry: SrsEntry, rating: 0 | 1 | 2): SrsEntry {
  let box = entry.box;
  if (rating === 0) box = 0;
  else if (rating === 2) box = Math.min(SRS_INTERVALS.length - 1, box + 1);
  const days = SRS_INTERVALS[box];
  return { box, due: Date.now() + days * 86400000 };
}
