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

export type SyntaxRole = 'subject' | 'verb' | 'object' | 'connector';

export interface SyntaxChip {
  text: string;
  role?: SyntaxRole;
}

export interface GrammarFormula {
  label?: string;
  chips: SyntaxChip[];
}

export interface ContrastSide {
  label: string;
  example: string;
  highlight?: string;
}

export interface ContrastCard {
  left: ContrastSide;
  right: ContrastSide;
  caption?: string;
}

export type ChatSpeaker = 'user' | 'other';

export interface ChatMessage {
  speaker: ChatSpeaker;
  text: string;
  translation?: string;
}

export interface ReadingStory {
  title?: string;
  body: string;
  translation?: string;
}

export interface Unit {
  title: string;
  topic: string;
  explain: ExplainBlock[];
  table?: ReferenceTable;
  quiz: QuizQuestion[];
  flashcards: Flashcard[];
  syntaxChips?: GrammarFormula[];
  contrastCard?: ContrastCard;
  simulatedChat?: ChatMessage[];
  readingText?: ReadingStory;
  tips?: string[];
  dailyWords?: VocabEntry[];
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
