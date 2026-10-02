import AsyncStorage from '@react-native-async-storage/async-storage';

import { NUEVO_DE_LIBRO } from '@/data/grammar/numeracion';
import { Progress, Settings, SrsMap } from '@/types/progress';

const KEY_PROGRESS = 'aprende-ingles/progress';
const KEY_SRS = 'aprende-ingles/srs';
const KEY_SETTINGS = 'aprende-ingles/settings';

/**
 * Numeración de unidades vigente: 2 = por niveles (A1 1–12, A2 13–45…) y 3 = lo mismo, pero con las unidades 1–12 del
 * curso A1 nuevo en lugar de las del libro. Antes (hasta la 1.5.0) era la del libro.
 */
const NUMERACION_ACTUAL = 3;

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

/**
 * Las unidades 1–12 ahora son otras (el curso A1): se borran las que estaban marcadas, el mejor resultado de los quizzes de
 * A1 y los de sus temas. XP, racha y el progreso de A2 en adelante se conservan.
 */
function conA1Reiniciado(doneUnits: number[], progreso: Progress): Pick<Progress, 'doneUnits' | 'temaBest' | 'levelBest'> {
  const temaBest = Object.fromEntries(Object.entries(progreso.temaBest ?? {}).filter(([clave]) => !clave.startsWith('A1|')));
  const levelBest = { ...progreso.levelBest };
  delete levelBest.A1;
  return { doneUnits: doneUnits.filter((n) => n > 12), temaBest, levelBest };
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
    const unidades: number[] = Array.isArray(guardado.doneUnits) ? guardado.doneUnits : [];
    // De la numeración del libro (sin `numeracion`) se pasa a la 2; de la 2 a la 3 solo cambia lo del A1.
    const porNiveles = guardado.numeracion === 2 ? unidades : unidadesConNumeracionActual(unidades);
    const migrado: Progress = {
      ...progreso,
      ...conA1Reiniciado(porNiveles, progreso),
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
