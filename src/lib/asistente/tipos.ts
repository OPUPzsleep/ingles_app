import type { FraseUtil } from '@/data/vocabulario/frases-utiles';
import type { Verbo } from '@/lib/verbos';
import type { CefrLevel, VocabEntry } from '@/types/grammar';

/** Un botón que lleva a otra parte de la app: `ruta` es una dirección de expo-router («/unidad/46»). */
export interface Enlace {
  etiqueta: string;
  ruta: string;
}

/** Una parte de la respuesta del asistente. */
export type Bloque =
  /** Texto suelto, con la voz del asistente. */
  | { tipo: 'texto'; texto: string }
  /** Una explicación sacada de una unidad, un concepto de gramática o una pregunta frecuente. */
  | {
      tipo: 'explicacion';
      titulo: string;
      cuerpo: string;
      nota?: string;
      /** De dónde sale («B1 · Unidad 1 · Present perfect 1»). */
      fuente: string;
      enlace: Enlace;
    }
  /** La ficha de un tiempo verbal: fórmula, cuándo se usa, palabras que lo acompañan y el error típico. */
  | {
      tipo: 'tiempo';
      titulo: string;
      formula: string;
      modelo: string;
      cuando: string[];
      senales: string[];
      ojo: string;
      ejemplos: [string, string][];
      enlaces: Enlace[];
    }
  | { tipo: 'palabra'; entrada: VocabEntry; pie?: string }
  | { tipo: 'verbo'; verbo: Verbo }
  | { tipo: 'frases'; titulo: string; frases: FraseUtil[]; enlace?: Enlace }
  | { tipo: 'enlaces'; titulo?: string; enlaces: Enlace[] };

/** Lo que el asistente contesta a una pregunta. */
export interface Respuesta {
  bloques: Bloque[];
  /** Preguntas que se pueden tocar para seguir. */
  sugerencias: string[];
  /** Si no encontró nada que contestar. */
  sinRespuesta?: boolean;
  /** De qué documento habla la respuesta, para entender un «dame un ejemplo» que venga después. */
  docId?: string;
}

/** Lo que el asistente sabe de quien pregunta (sale del progreso guardado). */
export interface ContextoAsistente {
  doneUnits: number[];
  userLevel: CefrLevel;
  /** Tarjetas que cuestan trabajo (las de «Repaso de lo difícil»). */
  dificiles: number;
}
