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

export type FiltroTiempo = Tiempo | 'todos' | 'dificiles';

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

/**
 * Difícil = lo que fallaste o marcaste "difícil" y todavía no dominas:
 * sigue en la caja 0, o tiene fallos y aún no llega a la caja 3.
 */
export function isDifficult(entry: SrsEntry | undefined): boolean {
  if (!entry) return false;
  return entry.box === 0 || ((entry.lapses ?? 0) > 0 && entry.box <= 2);
}

export function buildFcDeck(
  srs: SrsMap,
  filtro: FiltroTiempo = 'todos',
  tipo?: TipoOracion
): { deck: FlashcardEntry[]; freeReview: boolean } {
  let cards = ALL_FC_CARDS;
  if (tipo) cards = cards.filter((c) => c.tipo === tipo);
  else if (filtro === 'dificiles') cards = cards.filter((c) => isDifficult(srs[c.id]));
  else if (filtro !== 'todos') cards = cards.filter((c) => TIPOS[c.tipo].tiempo === filtro);

  // "Difíciles" muestra todas las difíciles, estén vencidas o no: es justo lo que quieres repasar.
  if (filtro === 'dificiles' && !tipo) {
    return { deck: [...cards].sort(() => Math.random() - 0.5), freeReview: false };
  }

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
  return {
    box,
    due: Date.now() + days * 86400000,
    lapses: (entry.lapses ?? 0) + (rating === 0 ? 1 : 0),
  };
}
