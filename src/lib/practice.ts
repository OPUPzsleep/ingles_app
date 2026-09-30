import { ALL_FC_CARDS, FlashcardEntry, isDifficult } from '@/lib/flashcards';
import { ALL_VERBOS, Verbo } from '@/lib/verbos';
import type { SrsMap } from '@/types/progress';

export type Modo = 'dia' | 'verbos' | 'dictado' | 'ordenar' | 'dificil';

export const MODOS: readonly Modo[] = ['dia', 'verbos', 'dictado', 'ordenar', 'dificil'];

export const TITULOS_MODO: Record<Modo, string> = {
  dia: '⭐ Práctica del día',
  verbos: '🧩 Práctica de verbos',
  dictado: '🎧 Dictado',
  ordenar: '🔀 Ordena la frase',
  dificil: '⚠️ Repaso de lo difícil',
};

export function esModo(valor: unknown): valor is Modo {
  return typeof valor === 'string' && (MODOS as readonly string[]).includes(valor);
}

export type FormaVerbo = 'pasado' | 'participio' | 'ing' | 'tercera';

export type Ejercicio =
  | { tipo: 'tarjeta'; id: string; card: FlashcardEntry }
  | { tipo: 'dictado'; id: string; card: FlashcardEntry }
  | { tipo: 'orden'; id: string; card: FlashcardEntry }
  | { tipo: 'verbo'; id: string; verbo: Verbo; forma: FormaVerbo };

export type EjercicioDe<T extends Ejercicio['tipo']> = Extract<Ejercicio, { tipo: T }>;

export const TAMANO_SESION = 10;

// ─── Verbos: qué se pregunta y cómo se muestra ─────────────────────────────

export const ETIQUETA_FORMA: Record<FormaVerbo, string> = {
  pasado: 'pasado (past simple)',
  participio: 'participio (past participle)',
  ing: 'forma -ing',
  tercera: '3ª persona del presente (he / she / it)',
};

export const MARCO_FORMA: Record<FormaVerbo, string> = {
  pasado: 'Yesterday I ___.',
  participio: 'I have ___.',
  ing: 'I am ___.',
  tercera: 'She ___ every day.',
};

export function formaTexto(verbo: Verbo, forma: FormaVerbo): string {
  if (forma === 'pasado') return verbo.pasado;
  if (forma === 'participio') return verbo.participio;
  if (forma === 'ing') return verbo.ing;
  return verbo.tercera;
}

/** Pronunciación aproximada de la forma, si la tenemos (solo pasado y participio). */
export function aproxForma(verbo: Verbo, forma: FormaVerbo): string | undefined {
  if (forma === 'pasado') return verbo.aproxPasado;
  if (forma === 'participio') return verbo.aproxParticipio;
  return undefined;
}

// ─── Utilidades ────────────────────────────────────────────────────────────

export function barajar<T>(items: readonly T[]): T[] {
  const copia = [...items];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/**
 * Ordena por urgencia: primero lo vencido (la caja más baja antes), luego lo que nunca has visto
 * y al final lo que aún no toca. Dentro de cada grupo el orden es al azar.
 */
function priorizar<T>(items: readonly T[], srs: SrsMap, idDe: (item: T) => string): T[] {
  const ahora = Date.now();
  const grupo = (item: T) => {
    const entrada = srs[idDe(item)];
    if (!entrada) return 1;
    return entrada.due <= ahora ? 0 : 2;
  };
  return barajar(items).sort((a, b) => {
    const ga = grupo(a);
    const gb = grupo(b);
    if (ga !== gb) return ga - gb;
    if (ga === 0) return srs[idDe(a)].box - srs[idDe(b)].box;
    if (ga === 2) return srs[idDe(a)].due - srs[idDe(b)].due;
    return 0;
  });
}

function numPalabras(texto: string): number {
  return texto.split(/\s+/).filter(Boolean).length;
}

/** Para ordenar la frase solo sirven las de 4 a 10 palabras: más corto es trivial, más largo cansa. */
export function sirveParaOrdenar(card: FlashcardEntry): boolean {
  const n = numPalabras(card.en);
  return n >= 4 && n <= 10;
}

// ─── Candidatos ────────────────────────────────────────────────────────────

const idVerbo = (base: string, forma: FormaVerbo) => `verbo-${base}-${forma}`;

interface CandidatoVerbo {
  id: string;
  verbo: Verbo;
  forma: FormaVerbo;
}

// Irregulares: pasado y participio (lo que hay que memorizar). Regulares: pasado, -ing y 3ª persona (ortografía).
const CANDIDATOS_VERBO: CandidatoVerbo[] = ALL_VERBOS.flatMap((verbo) => {
  const formas: FormaVerbo[] = verbo.irregular ? ['pasado', 'participio'] : ['pasado', 'ing', 'tercera'];
  return formas.map((forma) => ({ id: idVerbo(verbo.base, forma), verbo, forma }));
});

const CANDIDATO_POR_ID = new Map(CANDIDATOS_VERBO.map((c) => [c.id, c]));
const FRASE_POR_ID = new Map(ALL_FC_CARDS.map((c) => [c.id, c]));

// ─── Elección ──────────────────────────────────────────────────────────────

const aTarjeta = (card: FlashcardEntry): Ejercicio => ({ tipo: 'tarjeta', id: card.id, card });
const aDictado = (card: FlashcardEntry): Ejercicio => ({ tipo: 'dictado', id: card.id, card });
const aOrden = (card: FlashcardEntry): Ejercicio => ({ tipo: 'orden', id: card.id, card });
const aVerbo = (c: CandidatoVerbo): Ejercicio => ({ tipo: 'verbo', id: c.id, verbo: c.verbo, forma: c.forma });

/** Elige `n` frases que no estén en `usados` y las agrega a `usados` (así no se repiten en una sesión). */
function elegirFrases(
  n: number,
  srs: SrsMap,
  usados: Set<string>,
  filtro?: (card: FlashcardEntry) => boolean
): FlashcardEntry[] {
  const disponibles = ALL_FC_CARDS.filter((c) => !usados.has(c.id) && (!filtro || filtro(c)));
  const elegidas = priorizar(disponibles, srs, (c) => c.id).slice(0, n);
  elegidas.forEach((c) => usados.add(c.id));
  return elegidas;
}

/** Elige `n` verbos distintos: 80% irregulares (lo difícil de verdad) y el resto regulares. */
function elegirVerbos(n: number, srs: SrsMap): CandidatoVerbo[] {
  const irregulares = priorizar(
    CANDIDATOS_VERBO.filter((c) => c.verbo.irregular),
    srs,
    (c) => c.id
  );
  const regulares = priorizar(
    CANDIDATOS_VERBO.filter((c) => !c.verbo.irregular),
    srs,
    (c) => c.id
  );

  const elegidos: CandidatoVerbo[] = [];
  const bases = new Set<string>();
  const tomar = (lista: CandidatoVerbo[], cantidad: number) => {
    for (const candidato of lista) {
      if (cantidad <= 0) break;
      if (bases.has(candidato.verbo.base)) continue;
      bases.add(candidato.verbo.base);
      elegidos.push(candidato);
      cantidad--;
    }
  };

  tomar(irregulares, Math.round(n * 0.8));
  tomar(regulares, n - elegidos.length);
  tomar(irregulares, n - elegidos.length);
  return barajar(elegidos);
}

// ─── Sesiones ──────────────────────────────────────────────────────────────

/** 4 tarjetas + 2 verbos + 2 dictados + 2 ordena, intercalados para que no se repita el mismo tipo seguido. */
function sesionDelDia(srs: SrsMap): Ejercicio[] {
  const usados = new Set<string>();
  const colas: Record<Ejercicio['tipo'], Ejercicio[]> = {
    tarjeta: elegirFrases(4, srs, usados).map(aTarjeta),
    dictado: elegirFrases(2, srs, usados).map(aDictado),
    orden: elegirFrases(2, srs, usados, sirveParaOrdenar).map(aOrden),
    verbo: elegirVerbos(2, srs).map(aVerbo),
  };
  const patron: Ejercicio['tipo'][] = [
    'tarjeta', 'dictado', 'verbo', 'tarjeta', 'orden',
    'tarjeta', 'verbo', 'dictado', 'tarjeta', 'orden',
  ];
  return patron.flatMap((tipo) => {
    const siguiente = colas[tipo].shift();
    return siguiente ? [siguiente] : [];
  });
}

/** Lo más difícil primero (más fallos, caja más baja): frases con tres tipos de ejercicio y verbos. */
function sesionDificil(srs: SrsMap): Ejercicio[] {
  const ids = Object.entries(srs)
    .filter(([id, entrada]) => isDifficult(entrada) && (FRASE_POR_ID.has(id) || CANDIDATO_POR_ID.has(id)))
    .sort(([, a], [, b]) => (b.lapses ?? 0) - (a.lapses ?? 0) || a.box - b.box)
    .slice(0, TAMANO_SESION)
    .map(([id]) => id);

  const alternos: Ejercicio['tipo'][] = ['tarjeta', 'dictado', 'orden'];
  let turno = 0;
  const sesion: Ejercicio[] = [];
  for (const id of ids) {
    const card = FRASE_POR_ID.get(id);
    if (card) {
      let tipo = alternos[turno++ % alternos.length];
      if (tipo === 'orden' && !sirveParaOrdenar(card)) tipo = 'tarjeta';
      sesion.push(tipo === 'dictado' ? aDictado(card) : tipo === 'orden' ? aOrden(card) : aTarjeta(card));
      continue;
    }
    const candidato = CANDIDATO_POR_ID.get(id);
    if (candidato) sesion.push(aVerbo(candidato));
  }
  return barajar(sesion);
}

export function armarSesion(modo: Modo, srs: SrsMap): Ejercicio[] {
  switch (modo) {
    case 'dia':
      return sesionDelDia(srs);
    case 'verbos':
      return elegirVerbos(TAMANO_SESION, srs).map(aVerbo);
    case 'dictado':
      return elegirFrases(TAMANO_SESION, srs, new Set()).map(aDictado);
    case 'ordenar':
      return elegirFrases(TAMANO_SESION, srs, new Set(), sirveParaOrdenar).map(aOrden);
    case 'dificil':
      return sesionDificil(srs);
  }
}

/** Cuántas frases y verbos difíciles tienes (ignora ids viejos de las tarjetas anteriores). */
export function contarDificiles(srs: SrsMap): number {
  return Object.entries(srs).filter(
    ([id, entrada]) => isDifficult(entrada) && (FRASE_POR_ID.has(id) || CANDIDATO_POR_ID.has(id))
  ).length;
}

/** Texto corto de un ejercicio y su respuesta, para el resumen de "qué repasar". */
export function describirEjercicio(ejercicio: Ejercicio): { titulo: string; respuesta: string } {
  if (ejercicio.tipo === 'verbo') {
    const { verbo, forma } = ejercicio;
    return {
      titulo: `${verbo.es} (${verbo.base}) → ${ETIQUETA_FORMA[forma]}`,
      respuesta: formaTexto(verbo, forma),
    };
  }
  return { titulo: ejercicio.card.en, respuesta: ejercicio.card.es };
}
