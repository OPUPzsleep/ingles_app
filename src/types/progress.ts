import type { ThemeName } from '@/constants/theme';
import { CefrLevel } from '@/types/grammar';

export interface Progress {
  xp: number;
  doneUnits: number[];
  quizCorrect: number;
  quizTotal: number;
  fcReviewed: number;
  streak: number;
  lastDate: string;
  /** Nivel CEFR actual del usuario (se usa para recomendar unidades). */
  userLevel: CefrLevel;
  /** Mejor resultado (porcentaje) del quiz final de cada nivel. */
  levelBest?: Partial<Record<CefrLevel, number>>;
  /** Mejor resultado (porcentaje) del quiz de cada tema dentro de un nivel; la clave es "A1|Present & Past". */
  temaBest?: Record<string, number>;
  /**
   * Con qué numeración de unidades se guardó `doneUnits`: 2 = la actual, por niveles. Sin valor = la del libro
   * (versión 1.5.0 y anteriores), que se pasa a la actual una sola vez al cargar (ver `cargarProgreso`).
   */
  numeracion?: number;
}

export interface SrsEntry {
  box: number;
  due: number;
  /** Veces que lo marcaste como no sabido. Sirve para el "Repaso de lo difícil". */
  lapses?: number;
}

export type SrsMap = Record<string, SrsEntry>;

export interface Settings {
  reminderEnabled: boolean;
  reminderNotificationId: string | null;
  /** Modo TDAH: sesiones cortas, menos opciones a la vez, temporizador visible. */
  focusModeEnabled: boolean;
  /** Multiplicador del tamaño de letra elegido por el usuario (1 = normal). */
  textScale: number;
  /** Tema de colores elegido ('auto' sigue al teléfono). */
  themeName: ThemeName;
  /** Panel izquierdo de las pantallas de dos columnas (lista de temas, mapa): true = visible, false = escondido. */
  panelListaAbierto: boolean;
}
