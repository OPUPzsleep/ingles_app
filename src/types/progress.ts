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
}

export type SrsMap = Record<string, SrsEntry>;

export interface Settings {
  reminderEnabled: boolean;
  reminderNotificationId: string | null;
  /** Modo TDAH: sesiones cortas, menos opciones a la vez, temporizador visible. */
  focusModeEnabled: boolean;
}
