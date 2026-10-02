import { UNITS } from '@/data/grammar/units';
import type { Enlace } from '@/lib/asistente/tipos';
import { esNivel, etiquetaDeUnidad, idDeUnidadEnNivel, NIVELES } from '@/lib/grammar';
import type { CefrLevel } from '@/types/grammar';

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

/** Palabras que acompañan a un destino sin cambiar su sentido («llévame a la unidad 20»). */
const RELLENO = new Set(
  `el la los las un una de del a al mi mis en por favor me nos te lo
  llevame llevarme llevanos ir ve vamos voy abre abrir abreme abrime muestrame mostrar mostrame ensename dirigeme
  entra entrar pon ponme pasame quiero necesito quisiera gustaria puedes podrias ver veo hacer hago
  practicar practica practico repasar repaso estudiar empezar iniciar comenzar`.split(/\s+/)
);

const PALABRAS_DE_QUIZ = ['quiz', 'examen', 'test', 'evaluacion', 'final'];

const entreEspacios = (limpio: string) => ` ${limpio} `;

/** Una unidad escrita en la frase («unidad 5 de B1»): el número, el texto que la dice y los ids que puede ser. */
interface UnidadEscrita {
  numero: number;
  texto: string;
  /** Los ids internos candidatos (uno por nivel que tenga esa unidad), el nivel dicho o el del usuario primero. */
  ids: number[];
  /** El nivel que dijo la frase («de B1»), si lo dijo. */
  nivel: CefrLevel | null;
}

/**
 * Un número de unidad escrito en la frase («unidad 5», «lección 7 de B1»). Los números son por nivel (A2 · Unidad 5), así
 * que se resuelven con (nivel, número) → id y nunca por rango. Si no dice el nivel, salen todas las candidatas con la
 * del nivel del usuario primero.
 */
function unidadEscrita(limpio: string, nivelUsuario: CefrLevel): UnidadEscrita | null {
  const m = limpio.match(/\b(?:unidad|unit|leccion|tema)\s+(?:numero\s+|n\s+|no\s+)?(\d{1,3})\b(?:\s+(?:de(?:l)?|en)\s+(?:nivel\s+)?(a1|a2|b1|b2|c1)\b)?/);
  if (!m) return null;
  const numero = Number(m[1]);
  const dicho = m[2] ? (m[2].toUpperCase() as CefrLevel) : null;
  const niveles = dicho ? [dicho] : [nivelUsuario, ...NIVELES.filter((nivel) => nivel !== nivelUsuario)];
  const ids = niveles.map((nivel) => idDeUnidadEnNivel(nivel, numero)).filter((id): id is number => id !== null);
  return ids.length > 0 ? { numero, texto: m[0], ids, nivel: dicho } : null;
}

export interface Destinos {
  enlaces: Enlace[];
  /** Palabras de la frase que no son parte del destino. */
  resto: string[];
  /** Qué decir antes de los enlaces cuando la frase pidió una unidad (dice siempre la unidad resuelta). */
  intro?: string;
}

/** Lo que queda de la frase cuando se quita el destino y las palabras de relleno: si queda algo, era otra cosa. */
function sobrante(limpio: string, quitar: string[]): string[] {
  let resto = entreEspacios(limpio);
  for (const texto of quitar) resto = resto.replace(texto, ' ');
  return resto.split(' ').filter((p) => p && !RELLENO.has(p));
}

/** Los lugares de la app que nombra la frase (el más específico primero), o ninguno. */
export function resolverDestinos(limpio: string, nivelUsuario: CefrLevel): Destinos {
  const unidad = unidadEscrita(limpio, nivelUsuario);
  if (unidad) {
    const quiz = PALABRAS_DE_QUIZ.some((p) => entreEspacios(limpio).includes(entreEspacios(p)));
    const enlaces: Enlace[] = unidad.ids.map((id) =>
      quiz
        ? { etiqueta: `✏️ Quiz de ${etiquetaDeUnidad(id)}`, ruta: `/quiz/unidad/${id}` }
        : { etiqueta: `📖 ${etiquetaDeUnidad(id)}: ${UNITS[id].title}`, ruta: `/unidad/${id}` }
    );
    const intro =
      enlaces.length === 1
        ? `Aquí tienes ${etiquetaDeUnidad(unidad.ids[0])}:`
        : `La unidad ${unidad.numero} existe en varios niveles; te dejo la de tu nivel primero y las demás. Para elegir una, di por ejemplo «unidad ${unidad.numero} de B1»:`;
    return { enlaces, intro, resto: sobrante(limpio, [unidad.texto, ...PALABRAS_DE_QUIZ.map((p) => ` ${p} `)]) };
  }

  const nivelDicho = limpio.match(/\bnivel\s+(a1|a2|b1|b2|c1)\b/);
  if (nivelDicho && esNivel(nivelDicho[1].toUpperCase())) {
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
