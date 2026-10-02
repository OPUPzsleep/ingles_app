import { FRASES_POR_TIPO, TIPOS, type TipoOracion } from '@/data/frases/frases-tiempos';
import { TIEMPOS_INFO } from '@/data/frases/tiempos-info';
import { GRAM_CONCEPTS } from '@/data/gramatica/concepts';
import { UNITS } from '@/data/grammar/units';
import { FRASES_UTILES } from '@/data/vocabulario/frases-utiles';
import { VOCAB_TOPICS } from '@/data/vocabulario/tematico';
import { buscarFrasesExactas, buscarPalabrasExactas, buscarVerbos, type VerboHallado } from '@/lib/asistente/diccionario';
import { numeroDeUnidad, resolverDestinos } from '@/lib/asistente/destinos';
import { buscarDocs, type Doc, type Hallazgo, todosLosDocs, type Termino, type TipoDoc } from '@/lib/asistente/indice';
import { anioEnIngles, numeroEnIngles } from '@/lib/asistente/numeros';
import { SUGERENCIAS_INICIALES, textoDeAyuda } from '@/lib/asistente/sugerencias';
import { ampliarConSinonimos, consultaSinPreguntas, palabrasConPreguntas, palabrasSueltas, tokenizar, tokensDeConsulta } from '@/lib/asistente/tokens';
import type { Bloque, ContextoAsistente, Enlace, Respuesta } from '@/lib/asistente/tipos';
import { buscarFrases } from '@/lib/buscar-vocabulario';
import { nextRecommendedUnit, RUTA } from '@/lib/grammar';
import { normalizar } from '@/lib/texto';

// ───────────────────────── Cómo se muestra lo encontrado ─────────────────────────

const unico = <T>(lista: T[]): T[] => [...new Set(lista)];

function mezclar<T>(lista: T[]): T[] {
  return [...lista].sort(() => Math.random() - 0.5);
}

function bloqueDeTiempo(clave: TipoOracion, ejemplos = 2): Bloque {
  const tipo = TIPOS[clave];
  const info = TIEMPOS_INFO[clave];
  return {
    tipo: 'tiempo',
    titulo: `${tipo.es} (${tipo.en})`,
    formula: tipo.formula,
    modelo: info.modelo,
    cuando: info.cuando,
    senales: info.senales,
    ojo: info.ojo,
    ejemplos: mezclar(FRASES_POR_TIPO[clave]).slice(0, ejemplos),
    enlaces: [
      { etiqueta: '🗺️ Ver en el mapa de tiempos', ruta: `/tiempos?tipo=${clave}` },
      { etiqueta: '🃏 Practicar con tarjetas', ruta: `/tarjetas?tipo=${clave}` },
    ],
  };
}

/** Convierte lo encontrado en lo que se dibuja en el chat. */
function bloqueDeDoc(doc: Doc, consulta: string): Bloque {
  if (doc.tipo === 'tiempo' && doc.ref) return bloqueDeTiempo(doc.ref as TipoOracion);

  if (doc.tipo === 'situacion' && doc.ref) {
    const situacion = FRASES_UTILES.find((s) => s.id === doc.ref);
    const limpia = consultaSinPreguntas(consulta);
    const propias = limpia ? buscarFrases(limpia).filter((r) => r.grupo === doc.ref) : [];
    const frases = unico([...propias.map((r) => r.item), ...(situacion?.frases ?? [])]).slice(0, 4);
    return { tipo: 'frases', titulo: `${situacion?.icono ?? '💬'} ${doc.titulo}`, frases, enlace: { etiqueta: doc.etiquetaRuta, ruta: doc.ruta } };
  }

  if (doc.tipo === 'tema' && doc.ref) {
    const tema = VOCAB_TOPICS.find((t) => t.id === doc.ref);
    const muestra = (tema?.words ?? []).slice(0, 8).map((w) => `${w.w} (${w.def.split(',')[0]})`);
    return {
      tipo: 'explicacion',
      titulo: `${tema?.icon ?? '📝'} ${doc.titulo}`,
      cuerpo: `${doc.cuerpo} en este tema, por ejemplo: ${muestra.join(', ')}…`,
      fuente: 'Vocabulario',
      enlace: { etiqueta: doc.etiquetaRuta, ruta: doc.ruta },
    };
  }

  return {
    tipo: 'explicacion',
    titulo: doc.titulo,
    cuerpo: doc.cuerpo,
    nota: doc.nota,
    fuente: doc.fuente,
    enlace: { etiqueta: doc.etiquetaRuta, ruta: doc.ruta },
  };
}

const respuesta = (bloques: Bloque[], sugerencias: string[] = [], docId?: string): Respuesta => ({ bloques, sugerencias, docId });
const texto = (t: string): Bloque => ({ tipo: 'texto', texto: t });

function elegir<T>(lista: T[], cantidad: number): T[] {
  return mezclar(lista).slice(0, cantidad);
}

// ───────────────────────── Charla ─────────────────────────

const SALUDO = /^(hola|holi|holaa+|buenas|buenos dias|buenas tardes|buenas noches|buen dia|hey|hi|hello|que tal|saludos)\b/;
const GRACIAS = /^(muchas gracias|gracias|mil gracias|thanks|thank you|genial|perfecto|excelente|buenisimo|super|ok|okay|vale|listo|entendido|entiendo|ya entendi|claro)\b/;
const DESPEDIDA = /^(adios|chao|chau|bye|hasta luego|hasta pronto|nos vemos|me voy)\b/;
const AYUDA = /\b(que puedes|que sabes|que haces|que preguntas|que cosas|como funcionas|como te uso|como usarte|para que sirves|quien eres|que eres)\b/;
// «menu» y «help» también son palabras del vocabulario: solo cuentan como pedir ayuda si es casi lo único que se escribió.
const AYUDA_SUELTA = /^(?:(?:necesito|quiero|dame|pido)\s+)?(?:menu|opciones|comandos|ayuda|help)(?:\s+(?:por favor|please))?$/;

function charla(limpio: string): Respuesta | null {
  const palabras = limpio.split(' ').length;
  if (palabras <= 4 && SALUDO.test(limpio)) {
    return respuesta(
      [texto('¡Hola! 👋 Soy el asistente de la app. Te contesto con lo que hay en las unidades, la gramática, el vocabulario y las frases. ¿Qué quieres saber?')],
      elegir(SUGERENCIAS_INICIALES, 3)
    );
  }
  if (palabras <= 4 && DESPEDIDA.test(limpio)) {
    return respuesta([texto('¡Hasta luego! 👋 Vuelve cuando quieras practicar un rato.')]);
  }
  if (palabras <= 4 && GRACIAS.test(limpio)) {
    return respuesta([texto('¡De nada! 😊 Si quieres seguir, pregúntame otra cosa.')], elegir(SUGERENCIAS_INICIALES, 3));
  }
  if ((palabras <= 8 && AYUDA.test(limpio)) || AYUDA_SUELTA.test(limpio)) {
    return respuesta([texto(textoDeAyuda())], elegir(SUGERENCIAS_INICIALES, 4));
  }
  return null;
}

// ───────────────────────── Ir a una pantalla ─────────────────────────

function navegacion(limpio: string): Respuesta | null {
  const { enlaces, resto } = resolverDestinos(limpio);
  if (enlaces.length === 0) return null;
  // Si la frase dice algo más que el lugar («frases para el aeropuerto»), es una pregunta y no un «llévame a…».
  if (resto.length > 0) return null;

  const unidad = numeroDeUnidad(limpio);
  const intro = unidad !== null ? `Aquí tienes la unidad ${unidad}:` : 'Claro, aquí lo tienes:';
  return respuesta([texto(intro), { tipo: 'enlaces', enlaces }]);
}

// ───────────────────────── Qué estudiar y cómo voy ─────────────────────────

const RECOMENDAR = /\b(?:por donde (?:empiezo|empezar|comienzo|comenzar|sigo|seguir)|donde (?:empiezo|empezar|sigo)|que (?:estudio|estudiar|aprendo|aprender|hago|practico|practicar|repaso|repasar|veo|sigue|toca|me recomiendas|me sugieres|debo estudiar|debo hacer|tengo que estudiar)|que me (?:recomiendas|sugieres|toca)|que sigue|siguiente (?:unidad|tema|leccion)|como (?:empiezo|empezar)|plan de estudio|rutina de estudio|no se (?:que|por donde)|continuar|siguiente paso|recomiend)/;
const PROGRESO = /\b(?:mi progreso|mi avance|cuanto (?:llevo|me falta|he avanzado|he hecho|avance)|como voy|cuantas unidades|que nivel (?:tengo|soy)|mi nivel|mis estadisticas|cuanto he estudiado)\b/;

function progreso(limpio: string, ctx: ContextoAsistente): Respuesta | null {
  if (!PROGRESO.test(limpio)) return null;
  const total = RUTA.length;
  const hechas = ctx.doneUnits.length;
  const n = nextRecommendedUnit(ctx.doneUnits, ctx.userLevel);
  const pct = Math.round((hechas / total) * 100);
  const partes = [
    hechas >= total
      ? `¡Completaste las ${total} unidades! 🎉 Tu nivel es ${ctx.userLevel}.`
      : `Llevas ${hechas} de ${total} unidades (${pct}%) y tu nivel es ${ctx.userLevel}.`,
  ];
  if (ctx.dificiles > 0) partes.push(`Tienes ${ctx.dificiles} ${ctx.dificiles === 1 ? 'tarjeta difícil' : 'tarjetas difíciles'} para repasar.`);
  const enlaces: Enlace[] =
    hechas >= total
      ? [{ etiqueta: '⭐ Práctica del día', ruta: '/practica/dia' }]
      : [{ etiqueta: `▶️ ${hechas === 0 ? 'Empezar' : 'Continuar'}: unidad ${n}`, ruta: `/unidad/${n}` }];
  if (ctx.dificiles > 0) enlaces.push({ etiqueta: '⚠️ Repaso de lo difícil', ruta: '/practica/dificil' });
  return respuesta([texto(partes.join(' ')), { tipo: 'enlaces', enlaces }], ['¿Qué estudio hoy?']);
}

function recomendacion(limpio: string, ctx: ContextoAsistente): Respuesta | null {
  if (!RECOMENDAR.test(limpio)) return null;
  const hechas = ctx.doneUnits.length;
  if (hechas >= RUTA.length) {
    const repaso: Enlace[] = [{ etiqueta: '⭐ Práctica del día (5 minutos)', ruta: '/practica/dia' }];
    if (ctx.dificiles > 0) repaso.push({ etiqueta: `⚠️ Repasar lo difícil (${ctx.dificiles})`, ruta: '/practica/dificil' });
    repaso.push({ etiqueta: '🃏 Tarjetas', ruta: '/tarjetas' });
    return respuesta([texto('¡Ya completaste todas las unidades! 🎉 Para no olvidar lo aprendido, repasa un poco cada día:'), { tipo: 'enlaces', enlaces: repaso }]);
  }
  const n = nextRecommendedUnit(ctx.doneUnits, ctx.userLevel);
  const unidad = UNITS[n];
  const intro =
    hechas === 0
      ? `Empieza por aquí: la unidad ${n}, «${unidad.title}» (nivel ${unidad.level}).`
      : `Tu nivel es ${ctx.userLevel} y llevas ${hechas} de ${RUTA.length} unidades. Lo que sigue es la unidad ${n}, «${unidad.title}».`;
  const enlaces: Enlace[] = [{ etiqueta: `▶️ Abrir la unidad ${n}`, ruta: `/unidad/${n}` }];
  if (ctx.dificiles > 0) enlaces.push({ etiqueta: `⚠️ Repasar lo difícil (${ctx.dificiles})`, ruta: '/practica/dificil' });
  enlaces.push({ etiqueta: '⭐ Práctica del día (5 minutos)', ruta: '/practica/dia' });
  return respuesta([texto(intro), { tipo: 'enlaces', enlaces }], ['¿Cuánto llevo avanzado?'], `u${n}-e0`);
}

// ───────────────────────── Palabras, verbos y frases ─────────────────────────

type Objetivo = { texto: string; intencion: 'traducir' | 'pronunciar' };

const ARTICULOS = /^(?:el|la|los|las|un|una|unos|unas|the|a|an|to|al|del|de|mi|tu)\s+/;

/** Lo que se quiere traducir o pronunciar, si la pregunta lo dice así («cómo se dice X en inglés»). */
function extraerObjetivo(limpio: string): Objetivo | null {
  const patrones: [RegExp, Objetivo['intencion']][] = [
    [/^(?:como|cual) (?:se )?(?:dice|digo|dicen|diria|diriamos|decir|escribe|escribo|traduce|traduzco|llama|llaman)\s+(.+?)(?:\s+(?:en\s+)?(?:ingles|english|espanol|spanish))?$/, 'traducir'],
    [/^(?:como )?(?:se )?(?:pronuncia|pronuncio|pronunciar|pronunciacion de|pronunciacion)\s+(.+)$/, 'pronunciar'],
    [/^(?:how (?:do you|do i|to|can i) pronounce|pronunciation of)\s+(.+)$/, 'pronunciar'],
    [/^(?:how (?:do you|do i|to|can i) say)\s+(.+?)(?:\s+in\s+(?:english|spanish))?$/, 'traducir'],
    [/^(?:que|cual) (?:significa|significan|quiere decir|quieren decir|es el significado de)\s+(?:la palabra\s+|el verbo\s+)?(.+)$/, 'traducir'],
    [/^(?:significado de|significa|traduce|traduceme|traducir|traduccion de|what does|what is the meaning of|meaning of)\s+(.+?)(?:\s+mean)?$/, 'traducir'],
    [/^(.+?)\s+en\s+(?:ingles|english)$/, 'traducir'],
    [/^(.+?)\s+en\s+(?:espanol|spanish)$/, 'traducir'],
  ];
  for (const [patron, intencion] of patrones) {
    const m = limpio.match(patron);
    if (!m) continue;
    const objetivo = m[1].trim();
    if (objetivo) return { texto: objetivo, intencion };
  }
  return null;
}

function bloquesDeVerbos(hallados: VerboHallado[], limite = 2): Bloque[] {
  return hallados.slice(0, limite).map((h): Bloque => ({ tipo: 'verbo', verbo: h.verbo }));
}

/** Lo que se dice de un verbo cuando se llega a él por una de sus formas («went» es el pasado de go). */
function aclaracionDeForma(h: VerboHallado): string | null {
  if (h.por !== 'forma' || !h.forma) return null;
  const { verbo, forma } = h;
  const lista = (valor: string) => valor.split(' / ').map(normalizar);
  if (forma === normalizar(verbo.base)) return null;
  if (lista(verbo.pasado).includes(forma) && lista(verbo.participio).includes(forma)) return `«${forma}» es el pasado y el participio de «${verbo.base}».`;
  if (lista(verbo.pasado).includes(forma)) return `«${forma}» es el pasado de «${verbo.base}» (${verbo.es}).`;
  if (lista(verbo.participio).includes(forma)) return `«${forma}» es el participio de «${verbo.base}» (${verbo.es}).`;
  if (forma === normalizar(verbo.ing)) return `«${forma}» es la forma -ing de «${verbo.base}» (${verbo.es}).`;
  if (forma === normalizar(verbo.tercera)) return `«${forma}» es la forma de he / she / it de «${verbo.base}» (${verbo.es}).`;
  return null;
}

/** Lo que dice el diccionario; `implicito` es cuando la persona solo escribió la palabra, sin preguntar «cómo se dice». */
type RespuestaDeDiccionario = Respuesta & { implicito: boolean };

/** Palabras que unen formas de un verbo cuando se comparan («wrote o written», «went vs gone»). */
const UNIONES = new Set(['o', 'or', 'y', 'and', 'vs', 'versus', 'u', 'con', 'e']);

/** Varias formas de un mismo verbo escritas juntas («wrote o written»): la ficha de ese verbo. */
function variasFormas(limpio: string): RespuestaDeDiccionario | null {
  const partes = limpio.split(' ').filter((p) => !UNIONES.has(p));
  if (partes.length < 2 || partes.length > 4) return null;
  const hallados = partes.map((p) => buscarVerbos(p).filter((v) => v.por === 'forma'));
  if (hallados.some((h) => h.length === 0)) return null;
  const verbo = hallados[0].map((h) => h.verbo).find((v) => hallados.every((h) => h.some((x) => x.verbo.base === v.base)));
  if (!verbo) return null;
  const aclaraciones = hallados
    .map((h) => h.find((x) => x.verbo.base === verbo.base)!)
    .map(aclaracionDeForma)
    .filter((a): a is string => !!a);
  const intro = aclaraciones.length > 0 ? aclaraciones.join(' ') : `Estas son las formas de «${verbo.base}» (${verbo.es}):`;
  return { ...respuesta([texto(intro), { tipo: 'verbo', verbo }]), implicito: false };
}

/** El texto sin los artículos del principio («the house» → «house», «un perro» → «perro»). */
function sinArticulos(texto: string): string {
  let resto = texto;
  while (ARTICULOS.test(resto)) resto = resto.replace(ARTICULOS, '');
  return resto;
}

/**
 * Busca lo que se pidió primero tal cual («a menudo», «de nada», «la mayoría» son expresiones que empiezan con un
 * artículo o una preposición) y, si no hay nada, sin el artículo del principio.
 */
function diccionario(limpio: string): RespuestaDeDiccionario | null {
  const explicito = extraerObjetivo(limpio);
  const implicito = explicito === null && limpio.split(' ').length <= 3 ? limpio : null;
  const buscado = explicito?.texto ?? implicito;
  if (!buscado) return null;

  for (const variante of unico([buscado, sinArticulos(buscado)]).filter(Boolean)) {
    const respuestaDeVariante = consultarDiccionario(limpio, variante, explicito, implicito !== null);
    if (respuestaDeVariante) return respuestaDeVariante;
  }
  return variasFormas(limpio);
}

function consultarDiccionario(limpio: string, buscado: string, explicito: Objetivo | null, esImplicito: boolean): RespuestaDeDiccionario | null {
  const implicito = esImplicito ? buscado : null;

  const verbos = buscarVerbos(buscado);
  // Sin que lo pidan, solo vale lo que coincide exacto: «house», «perro», «went», «comer».
  const claras = buscarPalabrasExactas(buscado, implicito !== null ? 95 : 80);
  const frases = explicito?.intencion === 'traducir' && claras.length === 0 && verbos.length === 0 ? buscarFrasesExactas(buscado) : [];
  const verbosUtiles = implicito !== null ? verbos.filter((v) => v.por === 'forma' || claras.length === 0) : verbos;
  if (claras.length === 0 && verbosUtiles.length === 0 && frases.length === 0) return null;

  const bloques: Bloque[] = [];
  const principal = claras[0];
  const clave = palabrasSueltas(buscado).join(' ');
  if (explicito?.intencion === 'pronunciar' && principal) {
    bloques.push(texto(`«${principal.entrada.w}» se pronuncia «${principal.entrada.aprox ?? principal.entrada.ipa}» ${principal.entrada.ipa}. Toca el 🔊 para escucharla.`));
  } else if (explicito?.intencion === 'pronunciar' && verbosUtiles[0]) {
    bloques.push(texto(`«${verbosUtiles[0].verbo.base}» se pronuncia «${verbosUtiles[0].verbo.aprox}». Toca el 🔊 para escuchar sus formas.`));
  } else if (principal) {
    const palabraIngles = palabrasSueltas(principal.entrada.w).join(' ');
    const esIngles = palabraIngles === clave || palabraIngles.split(' ').includes(clave);
    bloques.push(
      texto(esIngles ? `«${principal.entrada.w}» significa «${principal.entrada.def}».` : `«${buscado}» en inglés se dice «${principal.entrada.w}».`)
    );
  } else if (verbosUtiles[0]) {
    const aclaracion = aclaracionDeForma(verbosUtiles[0]);
    bloques.push(texto(aclaracion ?? (verbosUtiles[0].por === 'significado' ? `«${buscado}» en inglés se dice «${verbosUtiles[0].verbo.base}».` : `Aquí están todas las formas de «${verbosUtiles[0].verbo.base}»:`)));
  } else if (frases.length > 0) {
    bloques.push(texto(`Esto es lo más parecido que tengo para «${buscado}»:`));
  }

  for (const e of claras) {
    const info = e.tema ? VOCAB_TOPICS.find((t) => t.id === e.tema) : undefined;
    bloques.push({ tipo: 'palabra', entrada: e.entrada, pie: info ? `${info.icon} ${info.name}` : e.unidad ? `Unidad ${e.unidad}` : undefined });
  }
  bloques.push(...bloquesDeVerbos(verbosUtiles, claras.length > 0 ? 1 : 2));
  if (frases.length > 0) bloques.push({ tipo: 'frases', titulo: '💬 Frases', frases: frases.map((f) => f.frase) });
  if (claras.length + frases.length > 0) {
    bloques.push({ tipo: 'enlaces', enlaces: [{ etiqueta: '🔍 Buscar más en Palabras', ruta: `/vocabulario?vista=palabras&q=${encodeURIComponent(buscado)}` }] });
  }
  return { ...respuesta(bloques), implicito: implicito !== null };
}

const FORMA_DE_VERBO = /\b(?:pasado|participio|participle|gerundio|tercera persona|third person|formas|conjugacion|conjugar|conjuga|presente|past|ing)\s+(?:de\s+|del\s+|of\s+|para\s+)?(?:(?:el\s+)?verbo\s+|to\s+)?([a-z]+)\b/;
const EN_FORMA = /\b([a-z]+)\s+en\s+(?:pasado|participio|gerundio|presente|past)\b/;

function formasDeVerbo(limpio: string): Respuesta | null {
  // «past participle of eat» y «participio pasado de eat» se leen como «participle of eat» y «participio de eat».
  const frase = limpio
    .replace(/\bpast participle\b/g, 'participle')
    .replace(/\bparticipio pasado\b/g, 'participio')
    .replace(/\b(past|present) tense\b/g, '$1')
    .replace(/\b(ing|participle|past|third person) form\b/g, '$1');
  const candidato = (frase.match(FORMA_DE_VERBO) ?? frase.match(EN_FORMA))?.[1];
  if (!candidato) return null;
  const hallados = buscarVerbos(candidato);
  if (hallados.length === 0) return null;
  const { verbo } = hallados[0];
  const pedida = /participi|participle/.test(limpio) ? `El participio de «${verbo.base}» es «${verbo.participio}».` : /pasado|past/.test(limpio) ? `El pasado de «${verbo.base}» es «${verbo.pasado}».` : /gerundio|\bing\b/.test(limpio) ? `La forma -ing de «${verbo.base}» es «${verbo.ing}».` : `Estas son las formas de «${verbo.base}» (${verbo.es}):`;
  return respuesta([texto(pedida), { tipo: 'verbo', verbo }], ['verbos irregulares'], undefined);
}

// ───────────────────────── Números ─────────────────────────

const PIDE_NUMERO = /^(?:como (?:se )?(?:dice|escribe|digo|pronuncia|lee)\s+)?(?:el numero\s+)?(\d{1,9})(?:\s+en\s+ingles)?$/;

/** «Cómo se dice 25 en inglés»: el número escrito en inglés (y, si puede ser un año, cómo se lee como año). */
function numeros(limpio: string): Respuesta | null {
  const m = limpio.match(PIDE_NUMERO);
  if (!m) return null;
  const valor = Number(m[1]);
  const nombre = numeroEnIngles(valor);
  if (!nombre) return null;

  const bloques: Bloque[] = [texto(`«${valor}» en inglés se dice «${nombre}».`), { tipo: 'frases', titulo: '🔢 Para decirlo', frases: [{ en: nombre, es: String(valor) }] }];
  const anio = anioEnIngles(valor);
  if (anio) bloques.push(texto(`Si es un año, se lee «${anio}».`), { tipo: 'frases', titulo: '📅 Como año', frases: [{ en: anio, es: String(valor) }] });
  if (valor >= 101 && valor % 100 !== 0 && valor < 1000) {
    bloques.push(texto('En inglés británico se agrega «and» después de «hundred»: one hundred and one.'));
  }
  return respuesta(bloques, ['cómo se dice 1999 en inglés'], undefined);
}

// ───────────────────────── Preguntas frecuentes y vocabulario por tema ─────────────────────────

/** Qué tan parecidas son dos listas de palabras (0 a 1): cuántas comparten, sin contar las repetidas. */
function parecido(a: string[], b: string[]): number {
  const delB = new Set(b);
  const comunes = new Set(a.filter((palabra) => delB.has(palabra))).size;
  return (2 * comunes) / (new Set(a).size + delB.size || 1);
}

let preguntasFrecuentes: { doc: Doc; palabras: string[]; clave: string[] }[] | null = null;

/** Cuando lo escrito es casi igual a una pregunta frecuente («¿Cuándo uso «the»?»), esa es la respuesta. */
function preguntaFrecuente(limpio: string): Respuesta | null {
  preguntasFrecuentes ??= todosLosDocs()
    .filter((d) => d.tipo === 'faq')
    .map((doc) => ({
      doc,
      palabras: palabrasConPreguntas(doc.titulo),
      clave: consultaSinPreguntas(doc.titulo).split(' ').filter(Boolean),
    }));
  const mias = palabrasConPreguntas(limpio);
  if (mias.length < 2) return null;
  const miasClave = consultaSinPreguntas(limpio).split(' ').filter(Boolean);

  // Tienen que parecerse en todo (palabras de preguntar incluidas) y, sobre todo, en lo que se pregunta.
  let mejor: Doc | null = null;
  let parecidoMejor = 0;
  for (const { doc, palabras, clave } of preguntasFrecuentes) {
    const valor = parecido(mias, palabras);
    const coincideLoPreguntado = (miasClave.length === 0 && clave.length === 0) || parecido(miasClave, clave) >= 0.6;
    if (valor > parecidoMejor && coincideLoPreguntado) {
      parecidoMejor = valor;
      mejor = doc;
    }
  }
  if (!mejor || parecidoMejor < 0.75) return null;
  return respuesta([bloqueDeDoc(mejor, limpio)], ['dame un ejemplo', 'ponme a prueba'], mejor.id);
}

const PIDE_VOCABULARIO = /^(?:vocabulario|lista de palabras|palabras)\s+(?:de|sobre|para|del|relacionadas con)\b|^vocabulario\b/;

/** «Vocabulario de comida», «palabras de la familia»: el tema de Vocabulario que corresponde. */
function vocabularioDe(pregunta: string, limpio: string): Respuesta | null {
  if (!PIDE_VOCABULARIO.test(limpio)) return null;
  return buscarGeneral(pregunta, limpio, (d) => d.tipo === 'tema');
}

// ───────────────────────── Frases para decir algo ─────────────────────────

const PIDE_FRASES = /^(?:como (?:se )?(?:pido|pedir|pregunto|preguntar|digo|decir|saludo|saludar|me presento|presentarme|presentarse|agradezco|agradecer|me despido|despedirme|me disculpo|disculparme|ofrezco|ofrecer|invito|invitar|respondo|contesto|reservo|reservar|compro|comprar|expreso|opino|opinar|puedo pedir|puedo preguntar|puedo decir)|que (?:digo|puedo decir|se dice|decir)|frases? (?:para|de|sobre|con|en)|expresiones? (?:para|de|sobre))\b/;

/**
 * «Cómo pido la cuenta», «qué digo en el aeropuerto»: la situación de frases que corresponde, con primero las frases
 * que coinciden con lo pedido. Si ninguna situación encaja, las frases sueltas que se parezcan a lo pedido.
 */
function frasesPara(pregunta: string, limpio: string): Respuesta | null {
  if (!PIDE_FRASES.test(limpio)) return null;
  const situacion = buscarGeneral(pregunta, limpio, (d) => d.tipo === 'situacion');
  if (situacion) return { ...situacion, sugerencias: [] };

  const pedido = consultaSinPreguntas(pregunta);
  const utiles = pedido ? buscarFrasesExactas(pedido, 4) : [];
  if (utiles.length === 0) return null;
  return respuesta([{ tipo: 'frases', titulo: '💬 Frases', frases: utiles.map((f) => f.frase) }]);
}

// ───────────────────────── Lo que la app no sabe ─────────────────────────

/** Preguntas de cultura general o cuentas: no son de inglés, y buscarlas en las unidades solo da coincidencias de casualidad. */
const FUERA_DE_TEMA = /^(?:quien (?:es|fue|era|invento|descubrio|escribio|gano|pinto|canta|dirigio|creo)\b|(?:cual|como) (?:es|se llama) (?:tu creador|tu nombre|el presidente|la capital)|cuanto (?:es|son) [\d]+|[\d]+ (?:mas|menos|por|entre|x) [\d]+|cuanto (?:mide|pesa|dura la vida)|que dia es hoy|que hora es ahora|(?:dime|cuentame|dame) (?:algo|un dato|una historia))/;

// ───────────────────────── Tiempos verbales ─────────────────────────

const NOMBRES_TIEMPO: [TipoOracion, string[]][] = [
  ['present-simple', ['present simple', 'presente simple', 'simple present']],
  ['present-continuous', ['present continuous', 'presente continuo', 'present progressive', 'presente progresivo']],
  ['present-perfect', ['present perfect', 'presente perfecto']],
  ['present-perfect-continuous', ['present perfect continuous', 'presente perfecto continuo', 'present perfect progressive']],
  ['past-simple', ['past simple', 'pasado simple', 'simple past', 'preterito']],
  ['past-continuous', ['past continuous', 'pasado continuo', 'past progressive']],
  ['past-perfect', ['past perfect', 'pasado perfecto', 'pluscuamperfecto']],
  ['past-perfect-continuous', ['past perfect continuous', 'pasado perfecto continuo']],
  ['future-will', ['future simple', 'futuro simple', 'futuro con will']],
  ['future-going-to', ['be going to', 'futuro con going to', 'futuro con be going to']],
  ['future-continuous', ['future continuous', 'futuro continuo']],
  ['future-perfect', ['future perfect', 'futuro perfecto']],
  ['future-perfect-continuous', ['future perfect continuous', 'futuro perfecto continuo']],
];

/** Los tiempos verbales que nombra la frase. «present perfect» dentro de «present perfect continuous» no cuenta aparte. */
function tiemposMencionados(limpio: string): TipoOracion[] {
  const frase = ` ${limpio} `;
  const hallados = NOMBRES_TIEMPO.flatMap(([clave, nombres]) => {
    const nombre = nombres.filter((n) => frase.includes(` ${n} `)).sort((a, b) => b.length - a.length)[0];
    return nombre ? [{ clave, nombre }] : [];
  });
  return hallados
    .filter((h) => !hallados.some((o) => o.nombre !== h.nombre && o.nombre.includes(h.nombre)))
    .map((h) => h.clave);
}

/** Palabras que se preguntan de cualquier tiempo verbal y no cambian de qué se habla. */
const GENERICAS = new Set(['ejemp', 'formu', 'forma', 'estru', 'regla', 'tiemp', 'verbo', 'verb', 'tense', 'expli', 'ver', 'ingle', 'tabla']);

/** Qué palabras de la pregunta no son el nombre del tiempo (si no queda ninguna, solo se preguntó por el tiempo). */
function sobrantes(limpio: string, claves: TipoOracion[]): string[] {
  let resto = ` ${limpio} `;
  for (const clave of claves) {
    for (const nombre of NOMBRES_TIEMPO.find(([c]) => c === clave)![1].sort((a, b) => b.length - a.length)) {
      resto = resto.replaceAll(` ${nombre} `, ' ');
    }
  }
  return tokenizar(consultaSinPreguntas(resto)).filter((raiz) => !GENERICAS.has(raiz));
}

/** Las unidades del libro que hablan de ese tiempo (por el nombre en inglés), para estudiarlo. */
function unidadesDeTiempo(clave: TipoOracion): Enlace[] {
  const nombre = TIPOS[clave].en;
  const terminos = unico(tokenizar(nombre)).map((raiz) => ({ raiz, peso: 1, grupo: raiz }));
  const vistas = new Set<string>();
  const enlaces: Enlace[] = [];
  for (const h of buscarDocs(terminos, 30, (d) => d.tipo === 'unidad' || d.tipo === 'forma')) {
    if (vistas.has(h.doc.ruta)) continue;
    // Solo cuentan las unidades cuyo título nombra el tiempo, no las que lo mencionan de pasada.
    const titulo = normalizar(h.doc.fuente);
    const todas = tokenizar(nombre).every((raiz) => tokenizar(titulo).includes(raiz));
    if (!todas) continue;
    vistas.add(h.doc.ruta);
    enlaces.push({ etiqueta: `📖 ${h.doc.fuente}`, ruta: h.doc.ruta });
    if (enlaces.length === 2) break;
  }
  return enlaces;
}

function tiempos(pregunta: string, limpio: string): Respuesta | null {
  const claves = tiemposMencionados(limpio).slice(0, 2);
  if (claves.length === 0) return null;
  const extra = sobrantes(limpio, claves);
  const pideEjemplos = /\bejemplos?\b/.test(limpio);
  const fichas = claves.map((clave) => bloqueDeTiempo(clave, pideEjemplos ? 4 : 2));

  // Con dos tiempos se pregunta por la diferencia; con detalles («present perfect con since») se busca esa duda concreta.
  if (claves.length === 2 || extra.length > 0) {
    const concreta = buscarGeneral(pregunta, limpio, (d) => d.tipo !== 'tiempo' && d.tipo !== 'consejo' && d.tipo !== 'forma');
    if (concreta) return { ...concreta, bloques: [...concreta.bloques, ...fichas] };
  }

  const bloques: Bloque[] = [...fichas];
  const enlaces = unico(claves.flatMap(unidadesDeTiempo).map((e) => JSON.stringify(e))).map((e) => JSON.parse(e) as Enlace);
  if (enlaces.length > 0) bloques.push({ tipo: 'enlaces', titulo: 'Para estudiarlo:', enlaces });
  return respuesta(bloques, ['dame otro ejemplo'], `t-${claves[0]}`);
}

// ───────────────────────── Búsqueda general ─────────────────────────

/** Qué tanto pesa cada tipo de texto al ordenar: una pregunta frecuente suele ser justo lo que se preguntó. */
const PRIORIDAD: Record<TipoDoc, number> = {
  faq: 1.2,
  concepto: 1.05,
  unidad: 1,
  tiempo: 1,
  forma: 0.7,
  consejo: 0.8,
  pronunciacion: 1,
  situacion: 1,
  tema: 0.9,
  nivel: 0.9,
};

/**
 * Cuándo un documento cuenta como respuesta: tiene que traer al menos una parte de las palabras de la pregunta y
 * nombrar el tema en su título o sus claves; si solo las trae en el texto, hace falta que traiga todas y mucho peso
 * (así «capital de Francia» no se contesta con un ejemplo suelto que menciona París).
 */
const PUNTOS_MINIMOS = 2.5;
const PUNTOS_SIN_TITULO = 12;
const COBERTURA_MINIMA = 0.5;

function terminosDe(pregunta: string, limpio: string) {
  const propios = unico(tokensDeConsulta(pregunta));
  const terminos: Termino[] = propios.map((raiz) => ({ raiz, peso: 1, grupo: raiz }));
  // Cada nombre con sinónimos («presente perfecto») forma un concepto: sus palabras y las que se agregan cuentan una vez.
  ampliarConSinonimos(limpio).forEach(({ origen, nuevos }, i) => {
    const grupo = `sinonimo-${i}`;
    for (const t of terminos) if (origen.includes(t.raiz)) t.grupo = grupo;
    for (const raiz of unico(nuevos)) {
      if (!terminos.some((t) => t.raiz === raiz)) terminos.push({ raiz, peso: 0.6, grupo });
    }
  });
  return { conceptos: new Set(propios.map((_, i) => terminos[i].grupo)).size, terminos };
}

function hallazgos(pregunta: string, limpio: string, filtro?: (d: Doc) => boolean): { lista: Hallazgo[]; conceptos: number } {
  const { conceptos, terminos } = terminosDe(pregunta, limpio);
  if (terminos.length === 0) return { lista: [], conceptos };
  const lista = buscarDocs(terminos, 24, filtro)
    .map((h) => ({ ...h, puntos: h.puntos * PRIORIDAD[h.doc.tipo] }))
    .sort((a, b) => b.puntos - a.puntos);
  return { lista, conceptos };
}

function buscarGeneral(pregunta: string, limpio: string, filtro?: (d: Doc) => boolean): Respuesta | null {
  const { lista, conceptos } = hallazgos(pregunta, limpio, filtro);
  const necesarias = Math.max(1, Math.ceil(conceptos * COBERTURA_MINIMA));
  const sirven = lista.filter(
    (h) =>
      h.puntos >= PUNTOS_MINIMOS &&
      h.cubiertas >= necesarias &&
      (h.enTitulo > 0 || (h.puntos >= PUNTOS_SIN_TITULO && h.cubiertas === conceptos))
  );
  const mejor = sirven[0];
  if (!mejor) return null;

  const principales = [mejor];
  const segundo = sirven.find((h) => h.doc.fuente !== mejor.doc.fuente && h.doc.tipo !== 'consejo');
  if (segundo && segundo.puntos >= mejor.puntos * 0.85 && segundo.doc.tipo !== 'situacion' && segundo.doc.tipo !== 'tema') {
    principales.push(segundo);
  }

  const bloques = principales.map((h) => bloqueDeDoc(h.doc, pregunta));
  const mostradas = new Set(principales.map((h) => h.doc.ruta));
  const relacionados: Enlace[] = [];
  for (const h of sirven) {
    if (mostradas.has(h.doc.ruta) || h.puntos < mejor.puntos * 0.45) continue;
    mostradas.add(h.doc.ruta);
    relacionados.push({ etiqueta: `${h.doc.tipo === 'faq' ? '❓' : h.doc.tipo === 'unidad' ? '📖' : '📚'} ${h.doc.fuente}`, ruta: h.doc.ruta });
    if (relacionados.length === 3) break;
  }
  if (relacionados.length > 0) bloques.push({ tipo: 'enlaces', titulo: 'Te puede servir también:', enlaces: relacionados });

  const sugerencias = ['dame un ejemplo', 'ponme a prueba'];
  return respuesta(bloques, sugerencias, mejor.doc.id);
}

// ───────────────────────── Seguir con lo anterior ─────────────────────────

const PIDE_EJEMPLO = /^(?:dame |dime |ponme |quiero |muestrame |otro |otros |mas |un |algun |unos )*(?:ejemplos?|ejemplito|otro|mas)(?: (?:mas|otro|por favor))?$/;
const PIDE_PRUEBA = /^(?:ponme a prueba|evaluame|examename|quiero (?:un )?(?:quiz|examen|test)|hazme (?:un )?(?:quiz|examen|test)|preguntame|practicar esto|quiz|examen)$/;

/** Palabras sueltas del inglés: si una frase tiene varias, está escrita en inglés. */
const PALABRAS_EN_INGLES = new Set(
  `i you he she it we they the a an is are am was were be been do does did have has had to in on at for of and not can
  will would should must my your his her this that there what where who how when with from me us them dont doesnt didnt im
  ive its`.split(/\s+/)
);

/** Las frases escritas en inglés que hay dentro de un texto en español: sueltas, entre paréntesis o entre «comillas». */
function frasesEnInglesDe(texto: string): string[] {
  const candidatas = [
    ...(texto.match(/[A-Z][A-Za-z0-9'’,\- ]{6,80}[.?!]/g) ?? []),
    ...[...texto.matchAll(/\(([A-Z][^()]{6,70})\)/g)].map((m) => m[1]),
    ...[...texto.matchAll(/«([^»]{6,70})»/g)].map((m) => m[1]),
  ];
  return unico(
    candidatas
      .map((f) => f.trim())
      .filter((f) => {
        const palabras = palabrasSueltas(f);
        const enIngles = palabras.filter((p) => PALABRAS_EN_INGLES.has(p)).length;
        return palabras.length >= 3 && enIngles / palabras.length >= 0.4;
      })
  );
}

/** Ejemplos de lo que se habló: los de la ficha del tiempo, las notas de la unidad o las frases en inglés de la respuesta. */
function ejemplosDeDoc(doc: Doc): Bloque | null {
  if (doc.tipo === 'tiempo' && doc.ref) {
    const pares = elegir(FRASES_POR_TIPO[doc.ref as TipoOracion], 4);
    return { tipo: 'frases', titulo: `✏️ Ejemplos: ${TIPOS[doc.ref as TipoOracion].en}`, frases: pares.map(([en, es]) => ({ en, es })) };
  }
  const lineas: string[] = [];
  if (doc.nota) lineas.push(...doc.nota.split(/\n| · /));
  const idUnidad = doc.id.match(/^u(\d+)-/);
  if (idUnidad) {
    for (const bloque of UNITS[Number(idUnidad[1])]?.explain ?? []) if (bloque.note) lineas.push(...bloque.note.split(' · '));
  }
  const idConcepto = doc.id.match(/^c-(.+)-\d+$/);
  if (idConcepto) {
    const concepto = GRAM_CONCEPTS.find((c) => c.id === idConcepto[1]);
    for (const bloque of concepto?.blocks ?? []) if (bloque.type === 'example') lineas.push(bloque.transl ? `${bloque.text} — ${bloque.transl}` : bloque.text);
  }
  lineas.push(...frasesEnInglesDe(`${doc.cuerpo} ${doc.nota ?? ''}`));
  const unicas = unico(lineas.map((l) => l.trim()).filter(Boolean));
  if (unicas.length === 0) return null;
  return { tipo: 'frases', titulo: '✏️ Ejemplos', frases: elegir(unicas, 4).map((en) => ({ en, es: '' })) };
}

function seguimiento(limpio: string, ultimoDoc?: string): Respuesta | null {
  const doc = ultimoDoc ? todosLosDocs().find((d) => d.id === ultimoDoc) : undefined;

  if (PIDE_EJEMPLO.test(limpio)) {
    if (!doc) return respuesta([texto('¿Ejemplos de qué? Dime un tema, por ejemplo «ejemplos de present perfect».')], elegir(SUGERENCIAS_INICIALES, 3));
    const ejemplos = ejemplosDeDoc(doc);
    if (!ejemplos) return respuesta([texto(`En «${doc.fuente}» tienes más ejemplos y ejercicios:`), { tipo: 'enlaces', enlaces: [{ etiqueta: doc.etiquetaRuta, ruta: doc.ruta }] }], [], doc.id);
    return respuesta([ejemplos], ['otro ejemplo'], doc.id);
  }

  if (PIDE_PRUEBA.test(limpio)) {
    if (!doc) return respuesta([texto('Te propongo la práctica del día: 10 ejercicios mezclados.'), { tipo: 'enlaces', enlaces: [{ etiqueta: '⭐ Práctica del día', ruta: '/practica/dia' }] }]);
    const unidad = doc.id.match(/^u(\d+)-/)?.[1];
    const enlaces: Enlace[] = unidad
      ? [{ etiqueta: `✏️ Quiz de la unidad ${unidad}`, ruta: `/quiz/unidad/${unidad}` }]
      : doc.tipo === 'tiempo' && doc.ref
        ? [{ etiqueta: '🃏 Tarjetas de este tiempo', ruta: `/tarjetas?tipo=${doc.ref}` }]
        : [{ etiqueta: '⭐ Práctica del día', ruta: '/practica/dia' }];
    return respuesta([texto('Va, ponte a prueba aquí:'), { tipo: 'enlaces', enlaces }], [], doc.id);
  }
  return null;
}

// ───────────────────────── Sin respuesta ─────────────────────────

function sinRespuesta(limpio: string): Respuesta {
  const objetivo = extraerObjetivo(limpio);
  const bloques: Bloque[] = [];
  if (objetivo) {
    bloques.push(texto(`No tengo «${objetivo.texto}» en mi vocabulario. Puedes buscarla tú en Vocabulario:`));
    bloques.push({ tipo: 'enlaces', enlaces: [{ etiqueta: '🔍 Buscar en Palabras', ruta: `/vocabulario?vista=palabras&q=${encodeURIComponent(objetivo.texto)}` }] });
  } else {
    bloques.push(texto('No encontré eso en la app. Respondo solo con lo que hay en las unidades, la gramática, el vocabulario y las frases; no uso internet.'));
    bloques.push(texto('Prueba con otras palabras (mejor el nombre del tema en español o en inglés), o toca una de estas:'));
  }
  return { bloques, sugerencias: elegir(SUGERENCIAS_INICIALES, 3), sinRespuesta: true };
}

// ───────────────────────── Entrada ─────────────────────────

/**
 * Contesta una pregunta con lo que hay en la app, sin internet ni IA: primero reconoce lo que pide (charlar, ir a una
 * pantalla, qué estudiar, traducir, un verbo, un tiempo verbal) y, si no es nada de eso, busca en las explicaciones.
 * `ultimoDoc` es el documento del que se habló antes, para entender «dame un ejemplo».
 */
export function responder(pregunta: string, ctx: ContextoAsistente, ultimoDoc?: string): Respuesta {
  const limpio = palabrasSueltas(pregunta).join(' ');
  if (!limpio) return { bloques: [texto('Escríbeme tu pregunta y te contesto.')], sugerencias: elegir(SUGERENCIAS_INICIALES, 3), sinRespuesta: true };

  // «Cómo se dice continuar en inglés» no pide una recomendación aunque diga «continuar».
  const pideTraducir = extraerObjetivo(limpio) !== null;
  const directa =
    charla(limpio) ??
    navegacion(limpio) ??
    (pideTraducir ? null : (progreso(limpio, ctx) ?? recomendacion(limpio, ctx))) ??
    preguntaFrecuente(limpio) ??
    seguimiento(limpio, ultimoDoc) ??
    numeros(limpio) ??
    formasDeVerbo(limpio);
  if (directa) return directa;

  const palabra = diccionario(limpio);
  if (palabra && !palabra.implicito) return palabra;

  const explicacion = frasesPara(pregunta, limpio) ?? vocabularioDe(pregunta, limpio) ?? tiempos(pregunta, limpio) ?? (FUERA_DE_TEMA.test(limpio) ? null : buscarGeneral(pregunta, limpio));
  if (palabra && explicacion) {
    // Una palabra suelta que también es un tema de gramática («much», «going to»): su ficha y, debajo, la explicación.
    return { ...explicacion, bloques: [...palabra.bloques.filter((b) => b.tipo !== 'enlaces'), ...explicacion.bloques] };
  }
  return palabra ?? explicacion ?? sinRespuesta(limpio);
}
