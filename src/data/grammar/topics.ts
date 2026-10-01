import { Topic } from '@/types/grammar';

/** Los temas de gramática, en el orden en que aparecen dentro de cada nivel. Cada unidad dice a cuál pertenece (`topic`). */
export const TOPICS: Topic[] = [
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
