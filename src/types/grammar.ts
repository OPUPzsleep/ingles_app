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

/**
 * Nivel del Marco Común Europeo de Referencia (CEFR) que mejor describe
 * la dificultad real de una unidad o de un grupo de vocabulario.
 * Es una aproximación razonable basada en la progresión estándar usada
 * en la enseñanza de inglés (no es una certificación oficial).
 */
export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export const CEFR_LEVELS: CefrLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1'];

export interface Unit {
  title: string;
  topic: string;
  /** Nivel CEFR aproximado de esta unidad. Ver {@link CefrLevel}. */
  level: CefrLevel;
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
  /** Pronunciación aproximada leída a la española, sin corchetes: "jeló". */
  aprox?: string;
  def: string;
  ex: string;
}

export interface PronunUnit {
  tips: PronunTip[];
  vocab: VocabEntry[];
}

/**
 * Grupo temático de vocabulario (familia, comida, rutina diaria, etc.),
 * independiente de las unidades de gramática.
 */
export interface VocabTopic {
  id: string;
  name: string;
  icon: string;
  level: CefrLevel;
  words: VocabEntry[];
}
