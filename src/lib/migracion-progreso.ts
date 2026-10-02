import { NUEVO_DE_LIBRO } from '@/data/grammar/numeracion';
import type { CefrLevel } from '@/types/grammar';
import type { Progress } from '@/types/progress';

/**
 * Numeración de unidades vigente. 1 (sin valor) = la del libro (hasta la 1.5.0); 2 = por niveles; 3 = con el curso A1
 * nuevo en los ids 1–12; 4 = con el curso A2 nuevo en los ids 13–24 (el resto de A2, 25–45, se esconde); 5 = con el curso B1 nuevo en los ids 46–57 (el resto de B1, 58–112, se esconde).
 */
export const NUMERACION_ACTUAL = 5;

/**
 * Qué se borra cuando cambia el contenido de un nivel: si lo guardado tiene una numeración menor que `version`, se
 * reinician las unidades `ids` de ese nivel (marcas de estudiadas y mejores resultados de sus quizzes). XP, racha y
 * el resto del progreso se conservan.
 */
const REINICIOS: { version: number; nivel: CefrLevel; ids: [primero: number, ultimo: number] }[] = [
  { version: 3, nivel: 'A1', ids: [1, 12] },
  { version: 4, nivel: 'A2', ids: [13, 45] },
  { version: 5, nivel: 'B1', ids: [46, 112] },
];

/** Pasa las unidades completadas de los números del libro a los números por niveles. */
export function unidadesConNumeracionPorNiveles(doneUnits: number[]): number[] {
  const nuevas = doneUnits.map((n) => NUEVO_DE_LIBRO[n]).filter((n): n is number => n !== undefined);
  return [...new Set(nuevas)];
}

/**
 * Lleva lo guardado a la numeración actual. Es pura: recibe el objeto guardado (con los valores por defecto ya
 * mezclados en `progreso`) y devuelve el progreso migrado, o el mismo si ya estaba al día. `guardado.numeracion` se mira
 * en lo guardado y no en `progreso`, donde el valor por defecto lo taparía.
 */
export function migrarProgreso(guardado: Partial<Progress>, progreso: Progress): Progress {
  const version = typeof guardado.numeracion === 'number' ? guardado.numeracion : 1;
  if (version >= NUMERACION_ACTUAL) return progreso;

  const unidades: number[] = Array.isArray(guardado.doneUnits) ? guardado.doneUnits : [];
  let doneUnits = version < 2 ? unidadesConNumeracionPorNiveles(unidades) : unidades;
  let temaBest = { ...(progreso.temaBest ?? {}) };
  const levelBest = { ...(progreso.levelBest ?? {}) };

  for (const reinicio of REINICIOS) {
    if (version >= reinicio.version) continue;
    const [primero, ultimo] = reinicio.ids;
    doneUnits = doneUnits.filter((n) => n < primero || n > ultimo);
    temaBest = Object.fromEntries(Object.entries(temaBest).filter(([clave]) => !clave.startsWith(`${reinicio.nivel}|`)));
    delete levelBest[reinicio.nivel];
  }
  return { ...progreso, doneUnits, temaBest, levelBest, numeracion: NUMERACION_ACTUAL };
}
