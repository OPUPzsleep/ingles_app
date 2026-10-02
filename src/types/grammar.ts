export interface ExplainBlock {
  head: string;
  body: string;
  note?: string;
  /** Ejemplos con su traducción [inglés, español]: se ven debajo de la explicación, cada uno con audio. */
  ejemplos?: [string, string][];
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

export type SyntaxRole = 'subject' | 'verb' | 'object' | 'connector' | 'negation';

export interface SyntaxChip {
  text: string;
  role?: SyntaxRole;
}

export interface GrammarFormula {
  label?: string;
  chips: SyntaxChip[];
}

/** Una de las tres formas de una estructura (afirmativa, negativa o pregunta): su fórmula y ejemplos [inglés, español]. */
export interface FormaDetalle {
  /** Una fórmula, o dos cuando la estructura tiene variantes (con label: "Continuous", "Perfect"…). */
  formulas: GrammarFormula[];
  ejemplos: [string, string][];
}

/** Las tres formas de una unidad de verbos, para tenerlas siempre a la vista. */
export interface FormasUnidad {
  /** Cuando una unidad trae varias estructuras (pasado simple y pasado de BE), cada una lleva su título. */
  titulo?: string;
  afirmativa: FormaDetalle;
  negativa: FormaDetalle;
  pregunta: FormaDetalle;
  /** Para recordar: contracciones, respuestas cortas y otros detalles de las tres formas. */
  nota?: string;
  /** El error típico de quien habla español con estas formas. */
  ojo?: string;
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
  /** Para profundizar: otras unidades y páginas de Gramática ES del mismo tema. */
  relacionados?: Relacionado[];
}

/** Un enlace a otra parte de la app (una unidad, un concepto de Gramática ES…). */
export interface Relacionado {
  etiqueta: string;
  /** Dirección de expo-router: «/unidad/20», «/gramatica/concepto/ser-vs-estar-be». */
  ruta: string;
}

/** Un tema de gramática. Cada unidad dice a cuál pertenece (`Unit.topic`), y cada nivel los muestra como secciones. */
export interface Topic {
  name: string;
  icon: string;
  /**
   * Si está, el quiz de este tema (un bloque del curso A1) es un examen con sus preguntas propias, distintas a las de sus
   * unidades, y este es su número de preguntas.
   */
  examen?: number;
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
