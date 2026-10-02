/**
 * Prueba `migrarProgreso` (lib/migracion-progreso.ts) con progresos guardados de cada numeración. El repo no tiene
 * runner de pruebas: se corre con `npx tsx scripts/prueba-migracion.ts` y termina con error si algo no coincide.
 */
import { migrarProgreso, NUMERACION_ACTUAL } from '@/lib/migracion-progreso';
import type { Progress } from '@/types/progress';

const BASE: Progress = {
  xp: 120,
  doneUnits: [],
  quizCorrect: 7,
  quizTotal: 10,
  fcReviewed: 3,
  streak: 4,
  lastDate: '2026-01-01',
  userLevel: 'B1',
};

const temas = { 'A1|Bloque': 90, 'A2|Present & Past': 80, 'B1|Present Perfect': 70 };
const niveles = { A1: 100, A2: 95, B1: 85 };

let fallas = 0;
const igual = (nombre: string, obtenido: unknown, esperado: unknown) => {
  const a = JSON.stringify(obtenido);
  const b = JSON.stringify(esperado);
  if (a !== b) {
    fallas++;
    console.log(`✗ ${nombre}\n    obtenido: ${a}\n    esperado: ${b}`);
  } else console.log(`✓ ${nombre}`);
};

const migrar = (guardado: Partial<Progress>) => migrarProgreso(guardado, { ...BASE, ...guardado });

// Con 6: tal cual.
{
  const guardado = { doneUnits: [1, 13, 50, 120], temaBest: temas, levelBest: niveles, numeracion: 6 };
  const r = migrar(guardado);
  igual('numeración 6: sin cambios', [r.doneUnits, r.temaBest, r.levelBest, r.numeracion], [[1, 13, 50, 120], temas, niveles, 6]);
}
// Con 5: solo se reinicia B2 (113–145); se conservan A1, A2, B1, XP y racha.
{
  const guardado = { doneUnits: [1, 13, 50, 113, 145], temaBest: { ...temas, 'B2|Passive Voice': 60 }, levelBest: { ...niveles, B2: 50 }, numeracion: 5 };
  const r = migrar(guardado);
  igual('numeración 5: doneUnits', r.doneUnits, [1, 13, 50]);
  igual('numeración 5: temaBest', r.temaBest, temas);
  igual('numeración 5: levelBest', r.levelBest, niveles);
  igual('numeración 5: XP, racha y numeración', [r.xp, r.streak, r.numeracion], [120, 4, NUMERACION_ACTUAL]);
}
// Con 4: se reinician B1 y B2; se conservan A1 y A2.
{
  const guardado = { doneUnits: [1, 13, 24, 46, 112, 120, 130], temaBest: temas, levelBest: niveles, numeracion: 4 };
  const r = migrar(guardado);
  igual('numeración 4: doneUnits', r.doneUnits, [1, 13, 24]);
  igual('numeración 4: temaBest', r.temaBest, { 'A1|Bloque': 90, 'A2|Present & Past': 80 });
  igual('numeración 4: levelBest', r.levelBest, { A1: 100, A2: 95 });
  igual('numeración 4: XP, racha y numeración', [r.xp, r.streak, r.numeracion], [120, 4, NUMERACION_ACTUAL]);
}
// Con 3: se reinician A2, B1 y B2; se conserva A1.
{
  const guardado = { doneUnits: [1, 12, 13, 45, 46, 120], temaBest: temas, levelBest: niveles, numeracion: 3 };
  const r = migrar(guardado);
  igual('numeración 3: doneUnits', r.doneUnits, [1, 12]);
  igual('numeración 3: temaBest', r.temaBest, { 'A1|Bloque': 90 });
  igual('numeración 3: levelBest', r.levelBest, { A1: 100 });
}
// Con 2: se reinician A1, A2, B1 y B2.
{
  const guardado = { doneUnits: [1, 12, 13, 45, 46, 120], temaBest: temas, levelBest: niveles, numeracion: 2 };
  const r = migrar(guardado);
  igual('numeración 2: doneUnits', r.doneUnits, []);
  igual('numeración 2: temaBest y levelBest', [r.temaBest, r.levelBest], [{}, {}]);
}
// Sin numeración (≤ 1.5.0): del libro a niveles (libro 1 → 1, 3 → 13, 7 → 46, 145 → 145) y luego se reinician A1, A2 y B1.
{
  const guardado = { doneUnits: [1, 3, 7, 145, 999], temaBest: temas, levelBest: niveles };
  const r = migrar(guardado);
  igual('sin numeración: doneUnits', r.doneUnits, []);
  igual('sin numeración: temaBest y levelBest', [r.temaBest, r.levelBest], [{}, {}]);
  igual('sin numeración: numeracion', r.numeracion, NUMERACION_ACTUAL);
}

if (fallas > 0) {
  console.log(`\n${fallas} falla(s).`);
  process.exit(1);
}
console.log('\n✓ La migración del progreso pasa todas las pruebas.');
