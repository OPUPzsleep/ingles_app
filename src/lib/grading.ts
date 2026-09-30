/** 0 = falló, 1 = casi / difícil, 2 = correcto. Es la misma escala del repaso espaciado. */
export type Rating = 0 | 1 | 2;

/** Una palabra en minúsculas y solo con letras y números: "Don’t." → "dont". Los apóstrofes no cuestan puntos. */
export function normalizarPalabra(palabra: string): string {
  return palabra.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function palabrasDe(texto: string) {
  return texto
    .split(/\s+/)
    .filter(Boolean)
    .map((original) => ({ original, norma: normalizarPalabra(original) }))
    .filter((p) => p.norma !== '');
}

// ─── Dictado ────────────────────────────────────────────────────────────────

export interface PalabraCorregida {
  texto: string;
  ok: boolean;
}

export interface ResultadoDictado {
  /** La frase correcta, marcando qué palabras escribiste bien. */
  palabras: PalabraCorregida[];
  /** Palabras que escribiste y no estaban en la frase. */
  sobran: string[];
  fallas: number;
  rating: Rating;
}

/**
 * Compara lo que escribiste con la frase dictada, palabra por palabra (sin mayúsculas ni puntuación).
 * Alinea las dos listas con la subsecuencia común más larga, así una palabra que falta
 * no marca como error todas las siguientes.
 * 0 fallas = correcto; hasta el 20% de las palabras (mínimo 1) = casi; más = falló.
 */
export function calificarDictado(esperada: string, escrita: string): ResultadoDictado {
  const objetivo = palabrasDe(esperada);
  const dadas = palabrasDe(escrita);
  const n = objetivo.length;
  const m = dadas.length;

  const tabla = Array.from({ length: n + 1 }, () => new Array<number>(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      tabla[i][j] =
        objetivo[i].norma === dadas[j].norma
          ? tabla[i + 1][j + 1] + 1
          : Math.max(tabla[i + 1][j], tabla[i][j + 1]);
    }
  }

  const acertadas = new Array<boolean>(n).fill(false);
  const usadas = new Array<boolean>(m).fill(false);
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (objetivo[i].norma === dadas[j].norma) {
      acertadas[i] = true;
      usadas[j] = true;
      i++;
      j++;
    } else if (tabla[i + 1][j] >= tabla[i][j + 1]) {
      i++;
    } else {
      j++;
    }
  }

  const palabras = objetivo.map((p, idx) => ({ texto: p.original, ok: acertadas[idx] }));
  const sobran = dadas.filter((_, idx) => !usadas[idx]).map((p) => p.original);
  const faltan = palabras.filter((p) => !p.ok).length;
  const fallas = Math.max(faltan, sobran.length);
  const tolerancia = Math.max(1, Math.floor(n * 0.2));
  const rating: Rating = fallas === 0 ? 2 : fallas <= tolerancia ? 1 : 0;

  return { palabras, sobran, fallas, rating };
}

// ─── Verbos ─────────────────────────────────────────────────────────────────

/** "was / were" → ["was", "were"]; "went" → ["went"]. */
export function formasAceptadas(forma: string): string[] {
  return forma
    .split('/')
    .map((f) => f.trim().toLowerCase())
    .filter(Boolean);
}

/** Distancia de Levenshtein: cuántas letras hay que cambiar, borrar o agregar para pasar de una palabra a otra. */
export function distancia(a: string, b: string): number {
  const fila = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    let anterior = fila[0];
    fila[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const guardado = fila[j];
      fila[j] = Math.min(fila[j] + 1, fila[j - 1] + 1, anterior + (a[i - 1] === b[j - 1] ? 0 : 1));
      anterior = guardado;
    }
  }
  return fila[b.length];
}

/**
 * Califica la forma de un verbo que escribiste.
 * Acepta cualquiera de las variantes ("was" o "were"); un error de una sola letra cuenta como "casi".
 */
export function calificarVerbo(forma: string, escrita: string): Rating {
  const aceptadas = formasAceptadas(forma);
  const respuesta = escrita.trim().toLowerCase().replace(/\s+/g, ' ');
  if (!respuesta) return 0;

  const completa = aceptadas.join(' / ');
  if (aceptadas.includes(respuesta) || respuesta.replace(/\s*\/\s*/g, ' / ') === completa) return 2;

  const cerca = aceptadas.some((a) => a.length >= 3 && distancia(a, respuesta) <= 1);
  return cerca ? 1 : 0;
}

// ─── Ordenar la frase ───────────────────────────────────────────────────────

/** 2 si el orden es exacto; 1 si al menos el 80% de las palabras están en su lugar; 0 si no. */
export function calificarOrden(correcta: string[], armada: string[]): Rating {
  if (armada.length === correcta.length && armada.every((p, idx) => p === correcta[idx])) return 2;
  const enSuLugar = correcta.filter((p, idx) => armada[idx] === p).length;
  return enSuLugar / correcta.length >= 0.8 ? 1 : 0;
}
