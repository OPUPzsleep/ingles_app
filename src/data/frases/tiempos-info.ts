import type { Tiempo, TipoOracion } from '@/data/frases/frases-tiempos';

/** Ficha de un tiempo verbal para el mapa. El nombre, la fórmula y los ejemplos salen de TIPOS y FRASES_POR_TIPO. */
export interface TiempoInfo {
  /** Cómo se ve con el verbo "work": lo que aparece en la celda del cuadro. */
  modelo: string;
  cuando: string[];
  /** Palabras que suelen acompañarlo. */
  senales: string[];
  /** Error típico de quien habla español. */
  ojo: string;
}

export const TIEMPOS_INFO: Record<TipoOracion, TiempoInfo> = {
  'present-simple': {
    modelo: 'I work',
    cuando: [
      'Hábitos y rutinas',
      'Hechos y verdades generales',
      'Horarios y programas fijos',
      'Gustos y estados que no cambian (like, know, want)',
    ],
    senales: ['always', 'usually', 'often', 'sometimes', 'never', 'every day', 'on Mondays'],
    ojo: 'Con he / she / it el verbo lleva -s (works, goes). En preguntas y negativas esa -s pasa a "does": Does she work?, no "Does she works?".',
  },
  'present-continuous': {
    modelo: 'I am working',
    cuando: [
      'Lo que está pasando justo ahora',
      'Situaciones temporales alrededor de hoy',
      'Cambios en progreso (it is getting colder)',
      'Planes ya organizados para el futuro cercano',
    ],
    senales: ['now', 'right now', 'at the moment', 'today', 'this week', 'currently', 'Look!', 'Listen!'],
    ojo: 'No se usa con verbos de estado: se dice "I know" y "I want", no "I am knowing" ni "I am wanting".',
  },
  'present-perfect': {
    modelo: 'I have worked',
    cuando: [
      'Algo que pasó en un momento que no importa, pero que tiene relación con el presente',
      'Experiencias de vida (Have you ever…?)',
      'Resultados que se ven ahora',
      'Algo que empezó en el pasado y sigue, con for o since (con verbos de estado)',
    ],
    senales: ['ever', 'never', 'already', 'yet', 'just', 'recently', 'so far', 'for', 'since', 'how long'],
    ojo: 'No se usa con una fecha o un momento terminado: "I saw it yesterday" (pasado simple), no "I have seen it yesterday".',
  },
  'present-perfect-continuous': {
    modelo: 'I have been working',
    cuando: [
      'Algo que empezó en el pasado y sigue hasta ahora, destacando cuánto lleva',
      'Algo que acaba de terminar y se nota el resultado (I am tired: I have been running)',
      'Una acción repetida en los últimos tiempos',
    ],
    senales: ['for', 'since', 'all day', 'lately', 'recently', 'how long'],
    ojo: 'Es el "llevo + gerundio" del español (llevo dos horas esperando = I have been waiting for two hours). Con verbos de estado se usa el perfecto simple: "I have known her for years".',
  },
  'past-simple': {
    modelo: 'I worked',
    cuando: [
      'Acciones terminadas en un momento concreto del pasado',
      'Una secuencia de hechos en una historia',
      'Hábitos del pasado que ya no existen',
    ],
    senales: ['yesterday', 'last night', 'last week', 'ago', 'in 2020', 'when I was a child'],
    ojo: 'En preguntas y negativas el verbo vuelve a su forma base: "Did you go?" y "I didn\'t go", no "Did you went?".',
  },
  'past-continuous': {
    modelo: 'I was working',
    cuando: [
      'Lo que estaba pasando en un momento del pasado',
      'Una acción larga interrumpida por otra corta (I was cooking when you called)',
      'Dos acciones largas al mismo tiempo (while)',
    ],
    senales: ['while', 'when', 'at 8 o\'clock last night', 'all morning'],
    ojo: 'El imperfecto español ("comía", "vivía") casi nunca es el pasado continuo: los hábitos del pasado van en pasado simple o con "used to" (I lived there, I used to live there).',
  },
  'past-perfect': {
    modelo: 'I had worked',
    cuando: [
      'Algo que ya había pasado antes de otro momento del pasado',
      'Explicar la causa de algo que pasó',
    ],
    senales: ['before', 'after', 'by the time', 'already', 'just', 'never … before'],
    ojo: 'Solo tiene sentido si hay dos momentos del pasado: el que ya había pasado (had + participio) y el que cuentas en pasado simple. Se parece al pluscuamperfecto español (había comido).',
  },
  'past-perfect-continuous': {
    modelo: 'I had been working',
    cuando: [
      'Algo que llevaba un tiempo pasando antes de otro momento del pasado',
      'La causa de una situación pasada (her eyes were red: she had been crying)',
    ],
    senales: ['for', 'since', 'all day', 'before', 'how long'],
    ojo: 'Es el "llevaba + gerundio" del español (llevaba una hora esperando). Con verbos de estado se usa el perfecto simple: "had known", no "had been knowing".',
  },
  'future-will': {
    modelo: 'I will work',
    cuando: [
      'Decisiones que tomas en el momento (I\'ll open the window)',
      'Predicciones y opiniones (I think it will rain)',
      'Promesas, ofrecimientos y peticiones',
      'Hechos futuros que no dependen de ti',
    ],
    senales: ['tomorrow', 'next week', 'I think', 'probably', 'maybe', 'I promise', 'soon'],
    ojo: 'Después de if, when, before o as soon as no se usa will: "If it rains, I\'ll stay home", no "If it will rain".',
  },
  'future-going-to': {
    modelo: 'I am going to work',
    cuando: [
      'Planes e intenciones que ya tenías decididos',
      'Predicciones basadas en lo que ves ahora (Look at those clouds: it is going to rain)',
    ],
    senales: ['tonight', 'this weekend', 'next year', 'Look!', 'I\'ve decided'],
    ojo: 'Es casi el "voy a + verbo" del español. Diferencia con will: going to = ya lo pensaste o hay señales; will = lo decides ahora o predices sin pruebas.',
  },
  'future-continuous': {
    modelo: 'I will be working',
    cuando: [
      'Algo que estará en progreso en un momento del futuro (this time tomorrow I will be flying)',
      'Preguntar con cortesía por los planes de alguien (Will you be using the car?)',
    ],
    senales: ['this time tomorrow', 'at 8 p.m. tonight', 'next week at this time', 'all day tomorrow'],
    ojo: 'Es el "estaré + gerundio" español. Sirve para un momento exacto, no para una acción puntual: "I\'ll call you at eight" (will), no "I\'ll be calling you".',
  },
  'future-perfect': {
    modelo: 'I will have worked',
    cuando: [
      'Algo que ya habrá terminado antes de un momento del futuro',
      'Suponer que algo ya pasó (she will have arrived by now)',
    ],
    senales: ['by + hora o fecha', 'by the time', 'before', 'by next year', 'in two months'],
    ojo: 'Casi siempre lleva "by" con un momento futuro: "By Friday I will have finished". Se parece al futuro perfecto español (habré terminado).',
  },
  'future-perfect-continuous': {
    modelo: 'I will have been working',
    cuando: [
      'Cuánto tiempo llevará pasando algo cuando llegue un momento del futuro',
      'Destacar la duración hasta ese momento',
    ],
    senales: ['by + fecha', 'for + tiempo', 'by the time', 'next month'],
    ojo: 'Es el más raro. En español: "para junio llevaré cinco años trabajando aquí". Con verbos de estado se usa el perfecto sin continuo.',
  },
};

export type FilaId = 'simple' | 'continuo' | 'perfecto' | 'perfecto-continuo';

export const FILAS: { id: FilaId; nombre: string }[] = [
  { id: 'simple', nombre: 'Simple' },
  { id: 'continuo', nombre: 'Continuo' },
  { id: 'perfecto', nombre: 'Perfecto' },
  { id: 'perfecto-continuo', nombre: 'Perfecto continuo' },
];

export const COLUMNAS: { id: Tiempo; nombre: string; icono: string }[] = [
  { id: 'presente', nombre: 'Presente', icono: '🕐' },
  { id: 'pasado', nombre: 'Pasado', icono: '⏪' },
  { id: 'futuro', nombre: 'Futuro', icono: '⏩' },
];

/** Qué tiempo(s) va en cada celda del cuadro. Futuro simple tiene dos: will y going to. */
export const CELDAS: Record<Tiempo, Record<FilaId, TipoOracion[]>> = {
  presente: {
    simple: ['present-simple'],
    continuo: ['present-continuous'],
    perfecto: ['present-perfect'],
    'perfecto-continuo': ['present-perfect-continuous'],
  },
  pasado: {
    simple: ['past-simple'],
    continuo: ['past-continuous'],
    perfecto: ['past-perfect'],
    'perfecto-continuo': ['past-perfect-continuous'],
  },
  futuro: {
    simple: ['future-will', 'future-going-to'],
    continuo: ['future-continuous'],
    perfecto: ['future-perfect'],
    'perfecto-continuo': ['future-perfect-continuous'],
  },
};

/** Una de las tres formas de un tiempo: su fórmula y un ejemplo [inglés, español]. */
export interface FormaTiempo {
  formula: string;
  ejemplo: [string, string];
}

/** La forma afirmativa, la negativa y la pregunta de cada tiempo, para la ficha del mapa. */
export const FORMAS_TIEMPO: Record<TipoOracion, { afirmativa: FormaTiempo; negativa: FormaTiempo; pregunta: FormaTiempo }> = {
  'present-simple': {
    afirmativa: { formula: 'verbo (+s en he/she/it)', ejemplo: ['She works here.', 'Ella trabaja aquí.'] },
    negativa: { formula: "do/does + not + verbo (don't / doesn't)", ejemplo: ["She doesn't work here.", 'Ella no trabaja aquí.'] },
    pregunta: { formula: 'Do/Does + sujeto + verbo?', ejemplo: ['Does she work here?', '¿Ella trabaja aquí?'] },
  },
  'present-continuous': {
    afirmativa: { formula: 'am/is/are + verbo-ing', ejemplo: ['I am working.', 'Estoy trabajando.'] },
    negativa: { formula: 'am/is/are + not + verbo-ing', ejemplo: ["I'm not working.", 'No estoy trabajando.'] },
    pregunta: { formula: 'Am/Is/Are + sujeto + verbo-ing?', ejemplo: ['Are you working?', '¿Estás trabajando?'] },
  },
  'present-perfect': {
    afirmativa: { formula: 'have/has + participio', ejemplo: ['I have finished.', 'He terminado.'] },
    negativa: { formula: "have/has + not + participio (haven't / hasn't)", ejemplo: ["I haven't finished.", 'No he terminado.'] },
    pregunta: { formula: 'Have/Has + sujeto + participio?', ejemplo: ['Have you finished?', '¿Has terminado?'] },
  },
  'present-perfect-continuous': {
    afirmativa: { formula: 'have/has been + verbo-ing', ejemplo: ['She has been waiting.', 'Ella ha estado esperando.'] },
    negativa: { formula: "have/has + not + been + verbo-ing", ejemplo: ["She hasn't been waiting.", 'Ella no ha estado esperando.'] },
    pregunta: { formula: 'Have/Has + sujeto + been + verbo-ing?', ejemplo: ['Has she been waiting?', '¿Ella ha estado esperando?'] },
  },
  'past-simple': {
    afirmativa: { formula: 'verbo en pasado (-ed o irregular)', ejemplo: ['I saw him.', 'Lo vi.'] },
    negativa: { formula: "did + not + verbo (didn't)", ejemplo: ["I didn't see him.", 'No lo vi.'] },
    pregunta: { formula: 'Did + sujeto + verbo?', ejemplo: ['Did you see him?', '¿Lo viste?'] },
  },
  'past-continuous': {
    afirmativa: { formula: 'was/were + verbo-ing', ejemplo: ['We were sleeping.', 'Estábamos durmiendo.'] },
    negativa: { formula: "was/were + not + verbo-ing (wasn't / weren't)", ejemplo: ["We weren't sleeping.", 'No estábamos durmiendo.'] },
    pregunta: { formula: 'Was/Were + sujeto + verbo-ing?', ejemplo: ['Were you sleeping?', '¿Estabas durmiendo?'] },
  },
  'past-perfect': {
    afirmativa: { formula: 'had + participio', ejemplo: ['She had left.', 'Ella se había ido.'] },
    negativa: { formula: "had + not + participio (hadn't)", ejemplo: ["She hadn't left.", 'Ella no se había ido.'] },
    pregunta: { formula: 'Had + sujeto + participio?', ejemplo: ['Had she left?', '¿Se había ido ella?'] },
  },
  'past-perfect-continuous': {
    afirmativa: { formula: 'had been + verbo-ing', ejemplo: ['I had been waiting.', 'Había estado esperando.'] },
    negativa: { formula: "had + not + been + verbo-ing", ejemplo: ["I hadn't been waiting.", 'No había estado esperando.'] },
    pregunta: { formula: 'Had + sujeto + been + verbo-ing?', ejemplo: ['Had you been waiting?', '¿Habías estado esperando?'] },
  },
  'future-will': {
    afirmativa: { formula: 'will + verbo', ejemplo: ["I'll help you.", 'Te ayudaré.'] },
    negativa: { formula: "will + not + verbo (won't)", ejemplo: ["I won't help you.", 'No te ayudaré.'] },
    pregunta: { formula: 'Will + sujeto + verbo?', ejemplo: ['Will you help me?', '¿Me ayudarás?'] },
  },
  'future-going-to': {
    afirmativa: { formula: 'am/is/are going to + verbo', ejemplo: ["I'm going to study.", 'Voy a estudiar.'] },
    negativa: { formula: 'am/is/are + not + going to + verbo', ejemplo: ["I'm not going to study.", 'No voy a estudiar.'] },
    pregunta: { formula: 'Am/Is/Are + sujeto + going to + verbo?', ejemplo: ['Are you going to study?', '¿Vas a estudiar?'] },
  },
  'future-continuous': {
    afirmativa: { formula: 'will be + verbo-ing', ejemplo: ["I'll be working.", 'Estaré trabajando.'] },
    negativa: { formula: "will + not + be + verbo-ing (won't be)", ejemplo: ["I won't be working.", 'No estaré trabajando.'] },
    pregunta: { formula: 'Will + sujeto + be + verbo-ing?', ejemplo: ['Will you be working?', '¿Estarás trabajando?'] },
  },
  'future-perfect': {
    afirmativa: { formula: 'will have + participio', ejemplo: ["She'll have arrived.", 'Ella habrá llegado.'] },
    negativa: { formula: "will + not + have + participio (won't have)", ejemplo: ["She won't have arrived.", 'Ella no habrá llegado.'] },
    pregunta: { formula: 'Will + sujeto + have + participio?', ejemplo: ['Will she have arrived?', '¿Habrá llegado ella?'] },
  },
  'future-perfect-continuous': {
    afirmativa: { formula: 'will have been + verbo-ing', ejemplo: ["I'll have been working for two hours.", 'Llevaré dos horas trabajando.'] },
    negativa: { formula: "will + not + have been + verbo-ing (won't have been)", ejemplo: ["I won't have been working for two hours.", 'No llevaré dos horas trabajando.'] },
    pregunta: { formula: 'Will + sujeto + have been + verbo-ing?', ejemplo: ['Will you have been working for two hours?', '¿Llevarás dos horas trabajando?'] },
  },
};
