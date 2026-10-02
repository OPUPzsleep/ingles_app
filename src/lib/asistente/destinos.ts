import { UNITS } from '@/data/grammar/units';
import type { Enlace } from '@/lib/asistente/tipos';
import { NIVELES } from '@/lib/grammar';

interface Destino {
  /** Cómo se escribe, ya sin tildes ni signos, para reconocerlo en la frase («mapa de tiempos»). */
  nombres: string[];
  enlace: Enlace;
}

const DESTINOS: Destino[] = [
  { nombres: ['mapa de tiempos verbales', 'mapa de los tiempos verbales', 'mapa de tiempos', 'cuadro de tiempos', 'mapa de los tiempos', 'tiempos verbales', 'el mapa'], enlace: { etiqueta: '🗺️ Mapa de tiempos', ruta: '/tiempos' } },
  { nombres: ['practica del dia', 'practica diaria', 'ejercicios del dia'], enlace: { etiqueta: '⭐ Práctica del día', ruta: '/practica/dia' } },
  { nombres: ['dictado', 'dictados'], enlace: { etiqueta: '🎧 Dictado', ruta: '/practica/dictado' } },
  { nombres: ['ordenar frases', 'ordena la frase', 'ordena frases', 'ordenar la frase', 'ordenar'], enlace: { etiqueta: '🧩 Ordena la frase', ruta: '/practica/ordenar' } },
  { nombres: ['practica de verbos', 'practicar verbos', 'ejercicios de verbos'], enlace: { etiqueta: '🔁 Práctica de verbos', ruta: '/practica/verbos' } },
  { nombres: ['repaso de lo dificil', 'lo dificil', 'tarjetas dificiles', 'dificiles'], enlace: { etiqueta: '⚠️ Repaso de lo difícil', ruta: '/practica/dificil' } },
  { nombres: ['practicar', 'practica', 'ejercicios', 'entrenar'], enlace: { etiqueta: '🏋️ Practicar', ruta: '/practicar' } },
  { nombres: ['tarjetas', 'flashcards', 'tarjeta'], enlace: { etiqueta: '🃏 Tarjetas', ruta: '/tarjetas' } },
  { nombres: ['gramatica para hispanohablantes', 'gramatica'], enlace: { etiqueta: '📚 Gramática para Hispanohablantes', ruta: '/gramatica' } },
  { nombres: ['frases utiles', 'frases'], enlace: { etiqueta: '💬 Frases útiles', ruta: '/vocabulario?vista=frases' } },
  { nombres: ['lista de verbos', 'verbos irregulares', 'verbos'], enlace: { etiqueta: '📝 Verbos', ruta: '/vocabulario?vista=verbos' } },
  { nombres: ['vocabulario', 'palabras', 'diccionario'], enlace: { etiqueta: '📝 Palabras', ruta: '/vocabulario?vista=palabras' } },
  { nombres: ['aprender', 'las unidades', 'unidades'], enlace: { etiqueta: '📖 Aprender', ruta: '/aprender' } },
  { nombres: ['inicio', 'pantalla principal', 'home', 'menu principal'], enlace: { etiqueta: '🏠 Inicio', ruta: '/' } },
];

const TOTAL_UNIDADES = Object.keys(UNITS).length;

/** Palabras que acompañan a un destino sin cambiar su sentido («llévame a la unidad 20»). */
const RELLENO = new Set(
  `el la los las un una de del a al mi mis en por favor me nos te lo
  llevame llevarme llevanos ir ve vamos voy abre abrir abreme abrime muestrame mostrar mostrame ensename dirigeme
  entra entrar pon ponme pasame quiero necesito quisiera gustaria puedes podrias ver veo hacer hago
  practicar practica practico repasar repaso estudiar empezar iniciar comenzar`.split(/\s+/)
);

const PALABRAS_DE_QUIZ = ['quiz', 'examen', 'test', 'evaluacion', 'final'];

const entreEspacios = (limpio: string) => ` ${limpio} `;

/** Un número de unidad escrito en la frase («unidad 20», «lección 7»), con el texto que lo dice, o null. */
function unidadEscrita(limpio: string): { numero: number; texto: string } | null {
  const m = limpio.match(/\b(?:unidad|unit|leccion|tema)\s+(?:numero\s+|n\s+|no\s+)?(\d{1,3})\b/);
  if (!m) return null;
  const n = Number(m[1]);
  return n >= 1 && n <= TOTAL_UNIDADES ? { numero: n, texto: m[0] } : null;
}

export function numeroDeUnidad(limpio: string): number | null {
  return unidadEscrita(limpio)?.numero ?? null;
}

/** Lo que queda de la frase cuando se quita el destino y las palabras de relleno: si queda algo, era otra cosa. */
function sobrante(limpio: string, quitar: string[]): string[] {
  let resto = entreEspacios(limpio);
  for (const texto of quitar) resto = resto.replace(texto, ' ');
  return resto.split(' ').filter((p) => p && !RELLENO.has(p));
}

export interface Destinos {
  enlaces: Enlace[];
  /** Palabras de la frase que no son parte del destino. */
  resto: string[];
}

/** Los lugares de la app que nombra la frase (el más específico primero), o ninguno. */
export function resolverDestinos(limpio: string): Destinos {
  const unidad = unidadEscrita(limpio);
  if (unidad) {
    const quiz = PALABRAS_DE_QUIZ.some((p) => entreEspacios(limpio).includes(entreEspacios(p)));
    const enlace: Enlace = quiz
      ? { etiqueta: `✏️ Quiz de la unidad ${unidad.numero}`, ruta: `/quiz/unidad/${unidad.numero}` }
      : { etiqueta: `📖 Unidad ${unidad.numero}: ${UNITS[unidad.numero].title}`, ruta: `/unidad/${unidad.numero}` };
    return { enlaces: [enlace], resto: sobrante(limpio, [unidad.texto, ...PALABRAS_DE_QUIZ.map((p) => ` ${p} `)]) };
  }

  const nivelDicho = limpio.match(/\bnivel\s+(a1|a2|b1|b2|c1)\b/);
  if (nivelDicho && (NIVELES as string[]).includes(nivelDicho[1].toUpperCase())) {
    const nivel = nivelDicho[1].toUpperCase();
    const quiz = PALABRAS_DE_QUIZ.some((p) => entreEspacios(limpio).includes(entreEspacios(p)));
    const enlace: Enlace = quiz
      ? { etiqueta: `✏️ Quiz final del nivel ${nivel}`, ruta: `/quiz/nivel/${nivel}` }
      : { etiqueta: `🎯 Nivel ${nivel}`, ruta: `/nivel/${nivel}` };
    return { enlaces: [enlace], resto: sobrante(limpio, [nivelDicho[0], ...PALABRAS_DE_QUIZ.map((p) => ` ${p} `)]) };
  }

  const texto = entreEspacios(limpio);
  for (const { nombres, enlace } of DESTINOS) {
    const nombre = nombres.find((n) => texto.includes(entreEspacios(n)));
    if (nombre) return { enlaces: [enlace], resto: sobrante(limpio, [` ${nombre} `]) };
  }
  return { enlaces: [], resto: [] };
}
