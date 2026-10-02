import { type FraseUtil, FRASES_UTILES } from '@/data/vocabulario/frases-utiles';
import { VOCAB_TOPICS } from '@/data/vocabulario/tematico';
import { normalizar, palabrasDeBusqueda, puntuarBusqueda } from '@/lib/texto';
import type { VocabEntry } from '@/types/grammar';

/** Un resultado de búsqueda: lo encontrado, el id del tema o la situación a la que pertenece y qué tan bien coincide. */
export interface Resultado<T> {
  item: T;
  grupo: string;
  puntos: number;
}

interface PalabraIndexada {
  entrada: VocabEntry;
  tema: string;
  w: string;
  def: string;
}

interface FraseIndexada {
  frase: FraseUtil;
  situacion: string;
  en: string;
  es: string;
  nota: string;
}

// El texto sin tildes de cada elemento se prepara una sola vez, la primera vez que se busca.
let palabras: PalabraIndexada[] | null = null;
let frases: FraseIndexada[] | null = null;

function indicePalabras(): PalabraIndexada[] {
  palabras ??= VOCAB_TOPICS.flatMap((tema) =>
    tema.words.map((entrada) => ({
      entrada,
      tema: tema.id,
      w: normalizar(entrada.w),
      def: normalizar(entrada.def),
    }))
  );
  return palabras;
}

function indiceFrases(): FraseIndexada[] {
  frases ??= FRASES_UTILES.flatMap((situacion) =>
    situacion.frases.map((frase) => ({
      frase,
      situacion: situacion.id,
      en: normalizar(frase.en),
      es: normalizar(frase.es),
      nota: normalizar(frase.nota ?? ''),
    }))
  );
  return frases;
}

/** Lo que coincide primero, y a igualdad de puntos, lo que aparece antes en los datos. */
function ordenar<T>(puntuados: { resultado: Resultado<T>; orden: number }[]): Resultado<T>[] {
  return puntuados
    .filter(({ resultado }) => resultado.puntos > 0)
    .sort((a, b) => b.resultado.puntos - a.resultado.puntos || a.orden - b.orden)
    .map(({ resultado }) => resultado);
}

/** Busca en la palabra en inglés y en su significado (sin importar tildes ni mayúsculas); la palabra pesa más. */
export function buscarPalabras(consulta: string): Resultado<VocabEntry>[] {
  const buscadas = palabrasDeBusqueda(consulta);
  if (buscadas.length === 0) return [];
  return ordenar(
    indicePalabras().map((p, orden) => ({
      orden,
      resultado: {
        item: p.entrada,
        grupo: p.tema,
        puntos: puntuarBusqueda(buscadas, [
          { texto: p.w, peso: 1 },
          { texto: p.def, peso: 0.6 },
        ]),
      },
    }))
  );
}

/** Busca en la frase en inglés, en su traducción y (con menos peso) en la nota de uso. */
export function buscarFrases(consulta: string): Resultado<FraseUtil>[] {
  const buscadas = palabrasDeBusqueda(consulta);
  if (buscadas.length === 0) return [];
  return ordenar(
    indiceFrases().map((f, orden) => ({
      orden,
      resultado: {
        item: f.frase,
        grupo: f.situacion,
        puntos: puntuarBusqueda(buscadas, [
          { texto: f.en, peso: 1 },
          { texto: f.es, peso: 0.9 },
          { texto: f.nota, peso: 0.3 },
        ]),
      },
    }))
  );
}
