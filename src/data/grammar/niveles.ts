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
      'Tu curso en 4 bloques: repasos y expresión de intereses; futuro, pasado y ciudad; viajes, hogar y eventos pasados; comunicación, apariencia y futuro. Cada unidad trae regla, estructura, ejemplos y 5 ejercicios, y cada bloque cierra con un examen de 20. Al final hay un bloque extra opcional con 4 temas del libro (noun + noun, during / for / while, to / at / in / into y phrasal verbs).',
  },
  B1: {
    icono: '🌳',
    nombre: 'Intermedio',
    resumen:
      'Tu curso en 4 bloques: personalidad, experiencias y superlativos; vida familiar, comida y organización; relaciones, situaciones imaginarias y tecnología; actualidad, impresiones y noticias. Cada unidad trae regla, estructura, ejemplos y 5 ejercicios, y cada bloque cierra con un examen de 20. Al final hay un bloque extra opcional con 9 temas del libro (conectores, preposiciones, verbos + -ing / to, cuantificadores, orden de las palabras, question tags…).',
  },
  B2: {
    icono: '🏔️',
    nombre: 'Intermedio alto',
    resumen:
      'Tu curso en 4 bloques: vidas interesantes, gustos personales y culturas; vida social, ley y orden, y eventos extraños; resolución de problemas, comportamiento y el mundo material; fama, tendencias y páginas profesionales. Cada unidad trae regla, estructura, ejemplos y 5 ejercicios, y cada bloque cierra con un examen de 20. Al final hay un bloque extra opcional con 4 temas del libro (verbos y adjetivos con preposición, oraciones de relativo, even / as if y phrasal verbs).',
  },
  C1: {
    icono: '🚀',
    nombre: 'Avanzado',
    resumen:
      'Tu curso en 4 bloques: redes sociales, medios e historias; vida laboral, desafíos y el futuro; convivencia, ciencia de los alimentos y éxito; viajes, cultura y habilidad. Cada unidad trae regla, estructura, ejemplos, estrategias de conversación y 5 ejercicios, y cada bloque cierra con un examen de 20.',
  },
};
