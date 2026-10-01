import type { CefrLevel } from '@/types/grammar';

/** Cómo se presenta cada nivel en el recorrido de Aprender. */
export const INFO_NIVEL: Record<CefrLevel, { icono: string; nombre: string; resumen: string }> = {
  A1: {
    icono: '🌱',
    nombre: 'Principiante',
    resumen:
      'Las bases: presente y pasado simple, have got, sustantivos, artículos, some y any, comparativos y preposiciones de tiempo y lugar.',
  },
  A2: {
    icono: '🌿',
    nombre: 'Elemental',
    resumen:
      'Más tiempos (continuo vs simple, pasado continuo, used to, futuro), modales básicos, preguntas, verbo + -ing o to, pronombres, comparativos y superlativos.',
  },
  B1: {
    icono: '🌳',
    nombre: 'Intermedio',
    resumen:
      'Presente perfecto, pasado perfecto, condicionales, pasiva, estilo indirecto, oraciones relativas, conectores, preposiciones y phrasal verbs.',
  },
  B2: {
    icono: '🏔️',
    nombre: 'Intermedio alto',
    resumen:
      'Estructuras avanzadas: futuro continuo y perfecto, condicionales del pasado y wish, pasiva avanzada, estilo indirecto en preguntas, relativas y verbos con preposición.',
  },
  C1: {
    icono: '🚀',
    nombre: 'Avanzado',
    resumen: '',
  },
};
