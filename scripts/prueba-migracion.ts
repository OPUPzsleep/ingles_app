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

// Con 4: tal cual.
{
  const guardado = { doneUnits: [1, 13, 50], temaBest: temas, levelBest: niveles, numeracion: 4 };
  const r = migrar(guardado);
  igual('numeración 4: sin cambios', [r.doneUnits, r.temaBest, r.levelBest, r.numeracion], [[1, 13, 50], temas, niveles, 4]);
}
// Con 3: solo se reinicia A2 (13–45); se conservan A1, B1/B2, XP y racha.
{
  const guardado = { doneUnits: [1, 12, 13, 24, 45, 46, 120], temaBest: temas, levelBest: niveles, numeracion: 3 };
  const r = migrar(guardado);
  igual('numeración 3: doneUnits', r.doneUnits, [1, 12, 46, 120]);
  igual('numeración 3: temaBest', r.temaBest, { 'A1|Bloque': 90, 'B1|Present Perfect': 70 });
  igual('numeración 3: levelBest', r.levelBest, { A1: 100, B1: 85 });
  igual('numeración 3: XP, racha y numeración', [r.xp, r.streak, r.numeracion], [120, 4, NUMERACION_ACTUAL]);
}
// Con 2: se reinician A1 y A2.
{
  const guardado = { doneUnits: [1, 12, 13, 45, 46, 120], temaBest: temas, levelBest: niveles, numeracion: 2 };
  const r = migrar(guardado);
  igual('numeración 2: doneUnits', r.doneUnits, [46, 120]);
  igual('numeración 2: temaBest', r.temaBest, { 'B1|Present Perfect': 70 });
  igual('numeración 2: levelBest', r.levelBest, { B1: 85 });
}
// Sin numeración (≤ 1.5.0): del libro a niveles (libro 1 → 1, libro 69 → 21 …) y luego se reinician A1 y A2.
{
  // Libro 1 → A1 (1), libro 3 → A2 (13), libro 7 → B1 (46), libro 145 → B2 (145 en la numeración por niveles).
  const guardado = { doneUnits: [1, 3, 7, 145, 999], temaBest: temas, levelBest: niveles };
  const r = migrar(guardado);
  igual('sin numeración: doneUnits', r.doneUnits, [46, 145]);
  igual('sin numeración: temaBest y levelBest', [r.temaBest, r.levelBest], [{ 'B1|Present Perfect': 70 }, { B1: 85 }]);
  igual('sin numeración: numeracion', r.numeracion, NUMERACION_ACTUAL);
}

if (fallas > 0) {
  console.log(`\n${fallas} falla(s).`);
  process.exit(1);
}
console.log('\n✓ La migración del progreso pasa todas las pruebas.');
