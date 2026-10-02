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
      'Tu curso en 4 bloques: repasos y expresión de intereses; futuro, pasado y ciudad; viajes, hogar y eventos pasados; comunicación, apariencia y futuro. Cada unidad trae regla, estructura, ejemplos y 5 ejercicios, y cada bloque cierra con un examen de 20.',
  },
  B1: {
    icono: '🌳',
    nombre: 'Intermedio',
    resumen:
      'Tu curso en 4 bloques: personalidad, experiencias y superlativos; vida familiar, comida y organización; relaciones, situaciones imaginarias y tecnología; actualidad, impresiones y noticias. Cada unidad trae regla, estructura, ejemplos y 5 ejercicios, y cada bloque cierra con un examen de 20.',
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
