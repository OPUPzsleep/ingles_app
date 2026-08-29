export interface ExplainBlock {
  head: string;
  body: string;
  note?: string;
}

export interface ReferenceTable {
  cols: string[];
  rows: string[][];
}

export interface QuizQuestion {
  q: string;
  opts: string[];
  ans: number;
  exp: string;
}

export interface Flashcard {
  front: string;
  back: string;
}

export interface Unit {
  title: string;
  topic: string;
  explain: ExplainBlock[];
  table?: ReferenceTable;
  quiz: QuizQuestion[];
  flashcards: Flashcard[];
}

export interface Topic {
  name: string;
  icon: string;
  units: number[];
}

export interface PronunTip {
  head: string;
  body: string;
  examples: string[];
}

export interface VocabEntry {
  w: string;
  ipa: string;
  def: string;
  ex: string;
}

export interface PronunUnit {
  tips: PronunTip[];
  vocab: VocabEntry[];
}
