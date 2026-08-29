import { PRONUN_DATA } from '@/data/grammar/pronunciation';
import { TOPICS } from '@/data/grammar/topics';
import { UNITS } from '@/data/grammar/units';
import { PronunUnit, QuizQuestion, Topic, VocabEntry } from '@/types/grammar';

export function getUnit(num: number) {
  return UNITS[num];
}

export function getTopic(name: string): Topic | undefined {
  return TOPICS.find((t) => t.name === name);
}

export function unitsForTopic(topicName: string): number[] {
  return getTopic(topicName)?.units ?? [];
}

export function topicProgress(topicName: string, doneUnits: number[]) {
  const units = unitsForTopic(topicName);
  const withContent = units.filter((u) => UNITS[u]);
  const done = units.filter((u) => doneUnits.includes(u)).length;
  return { done, total: units.length, hasContent: withContent.length > 0 };
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

export function getAllVocab(): (VocabEntry & { unit: number })[] {
  const keys = Object.keys(PRONUN_DATA)
    .map(Number)
    .sort((a, b) => a - b);
  const all: (VocabEntry & { unit: number })[] = [];
  for (const key of keys) {
    for (const entry of PRONUN_DATA[key].vocab) {
      all.push({ ...entry, unit: key });
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
