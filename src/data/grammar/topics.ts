import { Topic } from '@/types/grammar';

/** Los 4 bloques del curso A1 (unidades 1–12 del nivel): cada uno es un tema del nivel y cierra con un examen de 20 ejercicios propios. */
export const BLOQUE_1 = 'Bloque 1 · Verbo To Be y sustantivos';
export const BLOQUE_2 = 'Bloque 2 · Presente simple y cuantificadores';
export const BLOQUE_3 = 'Bloque 3 · Presente continuo, modales y necesidades';
export const BLOQUE_4 = 'Bloque 4 · Pasado simple, contables e incontables';

/** Los 4 bloques del curso A2 (ids 13–24, Unidad 1–12 del nivel): también cierran con un examen de 20 ejercicios propios. */
export const BLOQUE_A2_1 = 'Bloque 1 · Repasos y expresión de intereses';
export const BLOQUE_A2_2 = 'Bloque 2 · Futuro, pasado y ciudad';
export const BLOQUE_A2_3 = 'Bloque 3 · Viajes, hogar y eventos pasados';
export const BLOQUE_A2_4 = 'Bloque 4 · Comunicación, apariencia y futuro';

/** Los 4 bloques del curso B1 (ids 46–57, Unidad 1–12 del nivel): también cierran con un examen de 20 ejercicios propios. */
export const BLOQUE_B1_1 = 'Bloque 1 · Personalidad, experiencias y superlativos';
export const BLOQUE_B1_2 = 'Bloque 2 · Vida familiar, comida y organización';
export const BLOQUE_B1_3 = 'Bloque 3 · Relaciones, situaciones imaginarias y tecnología';
export const BLOQUE_B1_4 = 'Bloque 4 · Actualidad, impresiones y noticias';

/** Los temas de gramática, en el orden en que aparecen dentro de cada nivel. Cada unidad dice a cuál pertenece (`topic`). */
export const TOPICS: Topic[] = [
  { name: BLOQUE_1, icon: '🧱', examen: 20 },
  { name: BLOQUE_2, icon: '🔁', examen: 20 },
  { name: BLOQUE_3, icon: '🎯', examen: 20 },
  { name: BLOQUE_4, icon: '⏪', examen: 20 },
  { name: BLOQUE_A2_1, icon: '🔄', examen: 20 },
  { name: BLOQUE_A2_2, icon: '🏙️', examen: 20 },
  { name: BLOQUE_A2_3, icon: '🧳', examen: 20 },
  { name: BLOQUE_A2_4, icon: '🗣️', examen: 20 },
  { name: BLOQUE_B1_1, icon: '🎭', examen: 20 },
  { name: BLOQUE_B1_2, icon: '🍽️', examen: 20 },
  { name: BLOQUE_B1_3, icon: '💭', examen: 20 },
  { name: BLOQUE_B1_4, icon: '📰', examen: 20 },
  { name: 'Present & Past', icon: '🕐' },
  { name: 'Present Perfect', icon: '✅' },
  { name: 'Future', icon: '🚀' },
  { name: 'Past Perfect', icon: '⏮️' },
  { name: 'Modal Verbs', icon: '🎭' },
  { name: 'Conditionals', icon: '🔀' },
  { name: 'Passive Voice', icon: '🔄' },
  { name: 'Reported Speech', icon: '💬' },
  { name: 'Questions', icon: '❓' },
  { name: '-ing and to…', icon: '🔗' },
  { name: 'Articles & Nouns', icon: '📝' },
  { name: 'Pronouns', icon: '👥' },
  { name: 'Relative Clauses', icon: '🔗' },
  { name: 'Adjectives & Adverbs', icon: '🎨' },
  { name: 'Conjunctions', icon: '🔀' },
  { name: 'Prepositions', icon: '📍' },
  { name: 'Phrasal Verbs', icon: '💥' },
];
