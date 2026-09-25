import { IRREGULARES_RAW, REGULARES_RAW } from '@/data/vocabulario/verbos';

export interface Verbo {
  base: string;
  es: string;
  /** 3ª persona singular del presente (he/she/it). */
  tercera: string;
  pasado: string;
  participio: string;
  ing: string;
  irregular: boolean;
  /** Cómo se pronuncia, aproximado al español y con diagonales, p. ej. "/góu/". */
  aprox: string;
  aproxPasado: string;
  aproxParticipio: string;
}

const conDiagonales = (aprox: string) => `/${aprox}/`;

/** Terminación -ed: "id" después de t o d, "t" después de sonido sordo (p, k, f, s, sh, ch), "d" en los demás. */
function aproxPasadoRegular(aprox: string): string {
  if (/[td]$/.test(aprox)) return `${aprox}id`;
  if (/([pkfsx]|sh|ch)$/.test(aprox)) return `${aprox}t`;
  return `${aprox}d`;
}

/** Verbos (irregulares) que duplican la consonante final antes de -ing. */
const DUPLICAN = new Set([
  'babysit', 'bet', 'begin', 'cut', 'dig', 'fit', 'forbid', 'forget', 'get', 'hit', 'let', 'put',
  'quit', 'run', 'set', 'shut', 'sit', 'spin', 'spit', 'split', 'swim', 'upset', 'win',
]);

const ESPECIALES_TERCERA: Record<string, string> = { be: 'is', have: 'has', do: 'does', go: 'goes', undo: 'undoes', undergo: 'undergoes' };

const esConsonante = (c: string) => !!c && !'aeiou'.includes(c);

function tercera(base: string): string {
  if (ESPECIALES_TERCERA[base]) return ESPECIALES_TERCERA[base];
  if (/(s|sh|ch|x|z|o)$/.test(base)) return `${base}es`;
  if (base.endsWith('y') && esConsonante(base.at(-2)!)) return `${base.slice(0, -1)}ies`;
  return `${base}s`;
}

function pasadoRegular(base: string): string {
  if (base.endsWith('e')) return `${base}d`;
  if (base.endsWith('y') && esConsonante(base.at(-2)!)) return `${base.slice(0, -1)}ied`;
  return `${base}ed`;
}

function formaIng(base: string, duplica: boolean): string {
  if (base === 'be' || /(ee|oe|ye)$/.test(base) || base === 'see') return `${base}ing`;
  if (base.endsWith('ie')) return `${base.slice(0, -2)}ying`;
  if (duplica) return `${base}${base.at(-1)}ing`;
  if (base.endsWith('e')) return `${base.slice(0, -1)}ing`;
  return `${base}ing`;
}

const lineas = (raw: string) =>
  raw
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => l.split('|'));

const irregulares: Verbo[] = lineas(IRREGULARES_RAW).map(
  ([base, pasado, participio, es, aprox, aproxPasado = aprox, aproxParticipio = aproxPasado]) => ({
    base,
    es,
    tercera: tercera(base),
    pasado,
    participio,
    ing: formaIng(base, DUPLICAN.has(base)),
    irregular: true,
    aprox: conDiagonales(aprox),
    aproxPasado: conDiagonales(aproxPasado),
    aproxParticipio: conDiagonales(aproxParticipio),
  })
);

const regulares: Verbo[] = lineas(REGULARES_RAW).map(([base, aprox, es, pasadoExplicito, aproxPasadoExplicito]) => {
  const pasado = pasadoExplicito || pasadoRegular(base);
  const aproxPasado = conDiagonales(aproxPasadoExplicito || aproxPasadoRegular(aprox));
  return {
    base,
    es,
    tercera: tercera(base),
    pasado,
    participio: pasado,
    ing: formaIng(base, !!pasadoExplicito),
    irregular: false,
    aprox: conDiagonales(aprox),
    aproxPasado,
    aproxParticipio: aproxPasado,
  };
});

export const ALL_VERBOS: Verbo[] = [...irregulares, ...regulares].sort((a, b) =>
  a.base.localeCompare(b.base)
);

/** Frases de ejemplo en presente, pasado y futuro para un verbo. */
export function ejemplos(v: Verbo) {
  if (v.base === 'be') {
    return {
      presente: 'I am · She is · They are',
      continuo: 'I am being careful.',
      pasado: 'I was · They were',
      perfecto: 'I have been',
      futuro: 'I will be · I am going to be',
    };
  }
  return {
    presente: `I ${v.base} · She ${v.tercera}`,
    continuo: `I am ${v.ing}`,
    pasado: `I ${v.pasado}`,
    perfecto: `I have ${v.participio}`,
    futuro: `I will ${v.base} · I am going to ${v.base}`,
  };
}
