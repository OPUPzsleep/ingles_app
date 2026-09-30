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
