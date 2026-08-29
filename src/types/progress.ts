export interface Progress {
  xp: number;
  doneUnits: number[];
  quizCorrect: number;
  quizTotal: number;
  fcReviewed: number;
  streak: number;
  lastDate: string;
}

export interface SrsEntry {
  box: number;
  due: number;
}

export type SrsMap = Record<string, SrsEntry>;

export interface Settings {
  reminderEnabled: boolean;
  reminderNotificationId: string | null;
}
