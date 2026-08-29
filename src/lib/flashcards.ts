import { UNITS } from '@/data/grammar/units';
import { SrsEntry, SrsMap } from '@/types/progress';

export interface FlashcardEntry {
  id: string;
  unitTitle: string;
  front: string;
  back: string;
}

export const ALL_FC_CARDS: FlashcardEntry[] = Object.entries(UNITS).flatMap(([num, unit]) =>
  unit.flashcards.map((fc, i) => ({
    id: `${num}-${i}`,
    unitTitle: unit.title,
    front: fc.front,
    back: fc.back,
  }))
);

export const SRS_INTERVALS = [0, 1, 3, 7, 16, 35, 90];

export function getSrsEntry(srs: SrsMap, id: string): SrsEntry {
  return srs[id] ?? { box: 0, due: 0 };
}

export function buildFcDeck(srs: SrsMap): { deck: FlashcardEntry[]; freeReview: boolean } {
  const due = ALL_FC_CARDS.filter((c) => getSrsEntry(srs, c.id).due <= Date.now());
  const freeReview = due.length === 0;
  const pool = due.length ? due : ALL_FC_CARDS;
  return { deck: [...pool].sort(() => Math.random() - 0.5), freeReview };
}

export function rateSrs(entry: SrsEntry, rating: 0 | 1 | 2): SrsEntry {
  let box = entry.box;
  if (rating === 0) box = 0;
  else if (rating === 2) box = Math.min(SRS_INTERVALS.length - 1, box + 1);
  const days = SRS_INTERVALS[box];
  return { box, due: Date.now() + days * 86400000 };
}
