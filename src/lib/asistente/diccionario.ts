import { FRASES_POR_TIPO } from '@/data/frases/frases-tiempos';
import type { FraseUtil } from '@/data/vocabulario/frases-utiles';
import { VOCAB_TOPICS } from '@/data/vocabulario/tematico';
import { buscarFrases } from '@/lib/buscar-vocabulario';
import { getAllVocab } from '@/lib/grammar';
import { palabrasSueltas } from '@/lib/asistente/tokens';
import { normalizar, palabrasDeBusqueda, puntuarBusqueda } from '@/lib/texto';
import { ALL_VERBOS, type Verbo } from '@/lib/verbos';
import type { VocabEntry } from '@/types/grammar';

const MINIMO_FRASE = 60;

/** Las palabras de Vocabulario y de las unidades, con el texto ya preparado para comparar. */
interface PalabraIndexada {
  entrada: VocabEntry;
  /** Id del tema de Vocabulario, o nada si sale de una unidad. */
  tema?: string;
  unidad?: number;
  w: string;
  /** Cada significado en español por separado («hogar, casa (donde vives)» → «hogar», «casa»). */
  significados: string[];
  def: string;
}

let palabras: PalabraIndexada[] | null = null;

const sinParentesis = (texto: string) => texto.replace(/\(.*?\)/g, ' ').replace(/\s+/g, ' ').trim();

/** El texto para comparar: sin tildes, mayúsculas, apóstrofos ni signos («o'clock» = «oclock», «¡salud!» = «salud»). */
const plano = (texto: string) => palabrasSueltas(texto).join(' ');

function indicePalabras(): PalabraIndexada[] {
  if (palabras) return palabras;
  const lista: PalabraIndexada[] = [];
  const vistas = new Set<string>();
  const preparar = (entrada: VocabEntry, tema?: string, unidad?: number) => {
    const w = plano(entrada.w);
    const clave = `${tema ?? ''}|${w}`;
    if (vistas.has(clave)) return;
    vistas.add(clave);
    const def = normalizar(entrada.def);
    lista.push({
      entrada,
      tema,
      unidad,
      w,
      def,
      significados: sinParentesis(def)
        .split(/[,;/]/)
        .map(plano)
        .filter(Boolean),
    });
  };
  // Primero las de los temas de Vocabulario; las de las unidades solo se agregan si ningún tema las tiene.
  for (const tema of VOCAB_TOPICS) for (const entrada of tema.words) preparar(entrada, tema.id);
  const deTemas = new Set(lista.map((p) => p.w));
  for (const entrada of getAllVocab()) {
    if (entrada.unit !== 0 && !deTemas.has(plano(entrada.w))) preparar(entrada, undefined, entrada.unit);
  }
  palabras = lista;
  return lista;
}

/** Cada una de las formas en que se escribe un verbo, para reconocerlo (go, goes, went, gone, going). */
function formasDelVerbo(v: Verbo): string[] {
  return [v.base, v.tercera, ...v.pasado.split(' / '), ...v.participio.split(' / '), v.ing].map(plano);
}

/** El significado en español de un verbo, separado en sus variantes («ir», «ir / venir» → «ir», «venir»). */
function significados(v: Verbo): string[] {
  return sinParentesis(normalizar(v.es))
    .split(/[,;/]|\s+o\s+/)
    .map(plano)
    .filter(Boolean);
}

export interface VerboHallado {
  verbo: Verbo;
  /** Cómo se llegó a él: escribiendo una de sus formas en inglés o su significado en español. */
  por: 'forma' | 'significado';
  /** La forma escrita, cuando se llegó por ella («went»). */
  forma?: string;
}

/** Los verbos que coinciden, palabra por palabra, con lo escrito (una sola palabra: `went`, `comer`). */
export function buscarVerbos(objetivo: string): VerboHallado[] {
  const buscado = plano(objetivo);
  if (!buscado) return [];
  const hallados: VerboHallado[] = [];
  for (const verbo of ALL_VERBOS) {
    const forma = formasDelVerbo(verbo).find((f) => f === buscado);
    if (forma) hallados.push({ verbo, por: 'forma', forma });
    else if (significados(verbo).includes(buscado)) hallados.push({ verbo, por: 'significado' });
  }
  // Primero los que se escribieron tal cual en inglés, y entre ellos la forma base.
  return hallados.sort((a, b) => Number(b.por === 'forma') - Number(a.por === 'forma'));
}

export interface PalabraHallada {
  entrada: VocabEntry;
  /** Tema de Vocabulario (id), o nada si sale de una unidad. */
  tema?: string;
  unidad?: number;
  /** 100 = es la palabra; 95 = es uno de sus significados; 80 = la contiene como palabra suelta. */
  calidad: number;
}

const contienePalabra = (texto: string, buscado: string) => ` ${texto.replace(/[^a-z0-9]+/g, ' ')} `.includes(` ${buscado} `);

function calidadDe(p: PalabraIndexada, buscado: string): number {
  if (p.w === buscado) return 100;
  if (p.significados.includes(buscado)) return 95;
  if (contienePalabra(p.w, buscado)) return 80;
  if (p.significados.some((s) => contienePalabra(s, buscado))) return 70;
  return 0;
}

/**
 * Palabras que son lo que se buscó: la palabra misma, uno de sus significados o (menos seguro) una expresión que
 * la contiene. Solo cuentan coincidencias de palabra entera: «th» no encuentra «three».
 */
export function buscarPalabrasExactas(objetivo: string, minimo = 80, limite = 4): PalabraHallada[] {
  const buscado = plano(objetivo);
  if (!buscado) return [];
  return indicePalabras()
    .map((p) => ({ entrada: p.entrada, tema: p.tema, unidad: p.unidad, calidad: calidadDe(p, buscado) }))
    .filter((p) => p.calidad >= minimo)
    .sort((a, b) => b.calidad - a.calidad)
    .slice(0, limite);
}

export interface FraseHallada {
  frase: FraseUtil;
  situacion?: string;
  puntos: number;
}

/** Frases que coinciden con lo escrito: las útiles por situación y las de ejemplo de los tiempos verbales. */
export function buscarFrasesExactas(objetivo: string, limite = 3): FraseHallada[] {
  const utiles = buscarFrases(objetivo)
    .filter((r) => r.puntos >= MINIMO_FRASE)
    .map((r) => ({ frase: r.item, situacion: r.grupo, puntos: r.puntos }));

  const buscadas = palabrasDeBusqueda(objetivo);
  const ejemplos: FraseHallada[] = [];
  if (buscadas.length >= 2) {
    for (const lista of Object.values(FRASES_POR_TIPO)) {
      for (const [en, es] of lista) {
        const puntos = puntuarBusqueda(buscadas, [
          { texto: normalizar(en), peso: 1 },
          { texto: normalizar(es), peso: 0.9 },
        ]);
        if (puntos >= MINIMO_FRASE) ejemplos.push({ frase: { en, es }, puntos: puntos * 0.9 });
      }
    }
  }
  return [...utiles, ...ejemplos].sort((a, b) => b.puntos - a.puntos).slice(0, limite);
}
