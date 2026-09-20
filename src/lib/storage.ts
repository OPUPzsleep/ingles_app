import AsyncStorage from '@react-native-async-storage/async-storage';

import { Progress, Settings, SrsMap } from '@/types/progress';

const KEY_PROGRESS = 'aprende-ingles/progress';
const KEY_SRS = 'aprende-ingles/srs';
const KEY_SETTINGS = 'aprende-ingles/settings';

const DEFAULT_PROGRESS: Progress = {
  xp: 0,
  doneUnits: [],
  quizCorrect: 0,
  quizTotal: 0,
  fcReviewed: 0,
  streak: 0,
  lastDate: '',
  userLevel: 'A1',
};

const DEFAULT_SETTINGS: Settings = {
  reminderEnabled: false,
  reminderNotificationId: null,
  focusModeEnabled: false,
};

export async function cargarProgreso(): Promise<Progress> {
  const raw = await AsyncStorage.getItem(KEY_PROGRESS);
  if (!raw) return DEFAULT_PROGRESS;
  try {
    return { ...DEFAULT_PROGRESS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export async function guardarProgreso(progreso: Progress): Promise<void> {
  await AsyncStorage.setItem(KEY_PROGRESS, JSON.stringify(progreso));
}

export async function cargarSrs(): Promise<SrsMap> {
  const raw = await AsyncStorage.getItem(KEY_SRS);
  if (!raw) return {};
  try {
    const data = JSON.parse(raw);
    return typeof data === 'object' && data !== null ? data : {};
  } catch {
    return {};
  }
}

export async function guardarSrs(srs: SrsMap): Promise<void> {
  await AsyncStorage.setItem(KEY_SRS, JSON.stringify(srs));
}

export async function cargarAjustes(): Promise<Settings> {
  const raw = await AsyncStorage.getItem(KEY_SETTINGS);
  if (!raw) return DEFAULT_SETTINGS;
  try {
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export async function guardarAjustes(settings: Settings): Promise<void> {
  await AsyncStorage.setItem(KEY_SETTINGS, JSON.stringify(settings));
}
