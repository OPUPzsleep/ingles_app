const SIN_TILDE: Record<string, string> = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u', ü: 'u', ñ: 'n' };

/** Minúsculas y sin tildes (ni la ñ), para comparar textos al buscar: «Canción» y «cancion» coinciden. */
export function normalizar(texto: string): string {
  return texto.toLowerCase().replace(/[áéíóúüñ]/g, (letra) => SIN_TILDE[letra]);
}

const ES_LETRA = /[a-z0-9]/;

/**
 * Qué tan bien aparece `buscado` en `texto` (ambos ya normalizados): 0 = no aparece, 100 = es idéntico.
 * Una palabra entera vale más que el comienzo de otra más larga, y esta más que una parte de en medio
 * («casa» en «hogar, casa» gana a «casado», y este a «chaqueta, casaca»).
 */
function puntuarCoincidencia(buscado: string, texto: string): number {
  if (texto === buscado) return 100;
  let mejor = 0;
  for (let i = texto.indexOf(buscado); i !== -1; i = texto.indexOf(buscado, i + 1)) {
    const alPrincipio = i === 0;
    const iniciaPalabra = alPrincipio || !ES_LETRA.test(texto[i - 1]);
    const fin = i + buscado.length;
    const terminaPalabra = fin === texto.length || !ES_LETRA.test(texto[fin]);
    const puntos = !iniciaPalabra ? 15 : terminaPalabra ? (alPrincipio ? 90 : 70) : alPrincipio ? 55 : 40;
    mejor = Math.max(mejor, puntos);
  }
  return mejor;
}

/** Un texto donde buscar, con lo que pesa si coincide ahí (ya normalizado). */
export interface CampoBusqueda {
  texto: string;
  peso: number;
}

/**
 * Puntúa un elemento contra la búsqueda: cada palabra buscada debe aparecer en algún campo
 * (si falta una, devuelve 0) y gana más quien coincide al principio o con un campo de más peso.
 */
export function puntuarBusqueda(buscadas: string[], campos: CampoBusqueda[]): number {
  let total = 0;
  for (const buscada of buscadas) {
    let mejor = 0;
    for (const { texto, peso } of campos) mejor = Math.max(mejor, puntuarCoincidencia(buscada, texto) * peso);
    if (mejor === 0) return 0;
    total += mejor;
  }
  return total / buscadas.length;
}

/** Las palabras de una búsqueda, normalizadas y sin espacios de sobra. */
export function palabrasDeBusqueda(consulta: string): string[] {
  return normalizar(consulta).split(/\s+/).filter(Boolean);
}
