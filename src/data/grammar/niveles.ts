import type { CefrLevel } from '@/types/grammar';

/** Cómo se presenta cada nivel en el recorrido de Aprender. */
export const INFO_NIVEL: Record<CefrLevel, { icono: string; nombre: string; resumen: string }> = {
  A1: {
    icono: '🌱',
    nombre: 'Principiante',
    resumen:
      'Tu curso en 4 bloques: verbo to be y sustantivos; presente simple y cuantificadores; presente continuo, can y necesidades; pasado simple, contables e incontables. Cada unidad trae regla, estructura, ejemplos y 5 ejercicios, y cada bloque cierra con un examen de 20.',
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
