import { PRONUN_DATA } from '@/data/grammar/pronunciation';
import { TOPICS } from '@/data/grammar/topics';
import { UNITS } from '@/data/grammar/units';
import { VOCAB_TOPICS } from '@/data/vocabulario/tematico';
import { CEFR_LEVELS, CefrLevel, PronunUnit, QuizQuestion, Topic, VocabEntry } from '@/types/grammar';

export function getUnit(num: number) {
  return UNITS[num];
}

export function getTopic(name: string): Topic | undefined {
  return TOPICS.find((t) => t.name === name);
}

export function unitsForTopic(topicName: string): number[] {
  return getTopic(topicName)?.units ?? [];
}

/** true si `level` es igual o más fácil que `maxLevel` (A1 <= A2 <= B1 <= B2 <= C1). */
export function isAtOrBelowLevel(level: CefrLevel, maxLevel: CefrLevel): boolean {
  return CEFR_LEVELS.indexOf(level) <= CEFR_LEVELS.indexOf(maxLevel);
}

export function topicProgress(topicName: string, doneUnits: number[], userLevel?: CefrLevel) {
  const units = unitsForTopic(topicName);
  const withContent = units.filter((u) => UNITS[u]);
  const done = units.filter((u) => doneUnits.includes(u)).length;
  const atLevel = userLevel
    ? withContent.filter((u) => isAtOrBelowLevel(UNITS[u].level, userLevel))
    : withContent;
  const minLevel = withContent.reduce<CefrLevel | null>((min, u) => {
    const lvl = UNITS[u].level;
    if (!min) return lvl;
    return CEFR_LEVELS.indexOf(lvl) < CEFR_LEVELS.indexOf(min) ? lvl : min;
  }, null);
  return {
    done,
    total: units.length,
    hasContent: withContent.length > 0,
    atLevelCount: atLevel.length,
    minLevel,
  };
}

/**
 * Siguiente unidad recomendada: la de menor número, no completada, cuyo
 * nivel esté en o por debajo del nivel actual del usuario. Si ya no queda
 * ninguna dentro de su nivel, cae de vuelta a la de menor número sin hacer
 * (para que la app nunca se quede sin sugerencia).
 */
export function nextRecommendedUnit(doneUnits: number[], userLevel: CefrLevel): number {
  const allNums = Object.keys(UNITS)
    .map(Number)
    .sort((a, b) => a - b);
  const pendingAtLevel = allNums.find(
    (n) => !doneUnits.includes(n) && isAtOrBelowLevel(UNITS[n].level, userLevel)
  );
  if (pendingAtLevel !== undefined) return pendingAtLevel;
  return allNums.find((n) => !doneUnits.includes(n)) ?? 1;
}

export function getPronunVocab(num: number): PronunUnit | null {
  if (PRONUN_DATA[num]) return PRONUN_DATA[num];
  const keys = Object.keys(PRONUN_DATA)
    .map(Number)
    .sort((a, b) => a - b);
  let best: number | null = null;
  for (const key of keys) {
    if (key <= num) best = key;
    else break;
  }
  return best !== null ? PRONUN_DATA[best] : null;
}

export interface VocabResult extends VocabEntry {
  /** Número de unidad de gramática, o 0 si viene de un tema de vocabulario. */
  unit: number;
  /** Nombre del tema, solo para entradas que no vienen de una unidad. */
  topicName?: string;
}

/**
 * Junta todo el vocabulario disponible: las palabras "ancla" de pronunciación,
 * las dailyWords de cada unidad de gramática, y los temas de vocabulario
 * independientes (números, familia, comida, etc.).
 */
export function getAllVocab(): VocabResult[] {
  const all: VocabResult[] = [];

  const pronunKeys = Object.keys(PRONUN_DATA)
    .map(Number)
    .sort((a, b) => a - b);
  for (const key of pronunKeys) {
    for (const entry of PRONUN_DATA[key].vocab) {
      all.push({ ...entry, unit: key });
    }
  }

  for (const num of Object.keys(UNITS).map(Number).sort((a, b) => a - b)) {
    for (const entry of UNITS[num].dailyWords ?? []) {
      all.push({ ...entry, unit: num });
    }
  }

  for (const topic of VOCAB_TOPICS) {
    for (const entry of topic.words) {
      all.push({ ...entry, unit: 0, topicName: topic.name });
    }
  }

  return all;
}

interface PooledQuizQuestion extends QuizQuestion {
  unitTitle: string;
}

function shuffle<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5);
}

export function buildUnitQuizPool(num: number): PooledQuizQuestion[] {
  const unit = UNITS[num];
  if (!unit) return [];
  return shuffle(unit.quiz.map((q) => ({ ...q, unitTitle: unit.title })));
}

export function buildTopicQuizPool(topicName: string): PooledQuizQuestion[] {
  const pool: PooledQuizQuestion[] = [];
  for (const num of unitsForTopic(topicName)) {
    const unit = UNITS[num];
    if (unit) unit.quiz.forEach((q) => pool.push({ ...q, unitTitle: unit.title }));
  }
  return shuffle(pool);
}
