import AsyncStorage from '@react-native-async-storage/async-storage';

import { NUEVO_DE_LIBRO } from '@/data/grammar/numeracion';
import { Progress, Settings, SrsMap } from '@/types/progress';

const KEY_PROGRESS = 'aprende-ingles/progress';
const KEY_SRS = 'aprende-ingles/srs';
const KEY_SETTINGS = 'aprende-ingles/settings';

/** Numeración de unidades vigente: 2 = por niveles (A1 1–12, A2 13–45…). Antes (hasta la 1.5.0) era la del libro. */
const NUMERACION_ACTUAL = 2;

const DEFAULT_PROGRESS: Progress = {
  xp: 0,
  doneUnits: [],
  quizCorrect: 0,
  quizTotal: 0,
  fcReviewed: 0,
  streak: 0,
  lastDate: '',
  userLevel: 'A1',
  numeracion: NUMERACION_ACTUAL,
};

const DEFAULT_SETTINGS: Settings = {
  reminderEnabled: false,
  reminderNotificationId: null,
  focusModeEnabled: false,
  textScale: 1,
  themeName: 'auto',
  panelListaAbierto: true,
};

/** Pasa las unidades completadas de los números del libro a los números por niveles. */
export function unidadesConNumeracionActual(doneUnits: number[]): number[] {
  const nuevas = doneUnits.map((n) => NUEVO_DE_LIBRO[n]).filter((n): n is number => n !== undefined);
  return [...new Set(nuevas)];
}

export async function cargarProgreso(): Promise<Progress> {
  const raw = await AsyncStorage.getItem(KEY_PROGRESS);
  if (!raw) return DEFAULT_PROGRESS;
  try {
    const guardado = JSON.parse(raw);
    const progreso: Progress = { ...DEFAULT_PROGRESS, ...guardado };
    // Lo guardado antes de la numeración por niveles no trae `numeracion` (ojo: hay que mirarlo en lo guardado,
    // no en `progreso`, donde el valor por defecto lo taparía). Se pasa una sola vez y se guarda de inmediato.
    if (guardado.numeracion === NUMERACION_ACTUAL) return progreso;
    const migrado: Progress = {
      ...progreso,
      doneUnits: unidadesConNumeracionActual(Array.isArray(guardado.doneUnits) ? guardado.doneUnits : []),
      numeracion: NUMERACION_ACTUAL,
    };
    await guardarProgreso(migrado);
    return migrado;
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
    const guardado = JSON.parse(raw);
    delete guardado.vistaAprender; // la opción "Por tema" de Aprender ya no existe
    return { ...DEFAULT_SETTINGS, ...guardado };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export async function guardarAjustes(settings: Settings): Promise<void> {
  await AsyncStorage.setItem(KEY_SETTINGS, JSON.stringify(settings));
}
