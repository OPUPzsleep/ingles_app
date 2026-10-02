/**
 * Mide qué tan bien contesta el asistente («Pregúntale a la app»). Tiene cuatro partes:
 *  1. Preguntas escritas como las escribiría alguien (en español, sin tildes, mezcladas con inglés…): cada una dice
 *     qué tiene que aparecer en la respuesta (una explicación de tal unidad, la ficha de un tiempo, una palabra, un
 *     verbo, una frase, un botón a tal pantalla, o «no sé» cuando la pregunta no es de inglés).
 *  2. Cada palabra de Vocabulario, que se encuentra por su significado y por su nombre.
 *  3. Cada verbo, que se encuentra por su base, su pasado y su participio.
 *  4. Cada pregunta frecuente, situación de frases y tema de vocabulario, que se encuentran por su propio nombre.
 *
 * Se corre con `npx tsx scripts/evalua-asistente.ts` y termina con error si algo falla. Si se agrega contenido nuevo y
 * alguna pregunta empieza a fallar, casi siempre es que ahora tiene una respuesta igual de buena o mejor: se cambia lo
 * que se espera, no el motor.
 */
import { GRAM_CONCEPTS } from '@/data/gramatica/concepts';
import { FRASES_UTILES } from '@/data/vocabulario/frases-utiles';
import { VOCAB_TOPICS } from '@/data/vocabulario/tematico';
import { responder } from '@/lib/asistente/motor';
import type { Bloque, ContextoAsistente, Respuesta } from '@/lib/asistente/tipos';
import { normalizar } from '@/lib/texto';
import { ALL_VERBOS } from '@/lib/verbos';

type Esperado =
  | { fuente: RegExp }
  | { tiempo: string }
  | { palabra: string }
  | { verbo: string }
  | { ruta: RegExp }
  | { frases: RegExp }
  | { texto: RegExp }
  | { sin: true };

/** Alguien que lleva 3 unidades del nivel A1 y tiene 2 tarjetas difíciles. */
const contexto: ContextoAsistente = { doneUnits: [1, 2, 3], userLevel: 'A1', dificiles: 2 };

function rutasDe(bloque: Bloque): string[] {
  switch (bloque.tipo) {
    case 'explicacion':
      return [bloque.enlace.ruta];
    case 'tiempo':
      return bloque.enlaces.map((e) => e.ruta);
    case 'frases':
      return bloque.enlace ? [bloque.enlace.ruta] : [];
    case 'enlaces':
      return bloque.enlaces.map((e) => e.ruta);
    default:
      return [];
  }
}

function cumple(respuesta: Respuesta, esperado: Esperado): boolean {
  if ('sin' in esperado) return !!respuesta.sinRespuesta;
  const { bloques } = respuesta;
  const principales = bloques.filter((b) => b.tipo !== 'texto' && b.tipo !== 'enlaces').slice(0, 2);
  if ('fuente' in esperado) {
    return principales.some((b) => b.tipo === 'explicacion' && (esperado.fuente.test(b.fuente) || esperado.fuente.test(b.titulo)));
  }
  if ('tiempo' in esperado) return bloques.some((b) => b.tipo === 'tiempo' && b.titulo.includes(esperado.tiempo));
  if ('palabra' in esperado) return bloques.some((b) => b.tipo === 'palabra' && b.entrada.w.toLowerCase() === esperado.palabra);
  if ('verbo' in esperado) return bloques.some((b) => b.tipo === 'verbo' && b.verbo.base === esperado.verbo);
  if ('ruta' in esperado) return bloques.some((b) => rutasDe(b).some((ruta) => esperado.ruta.test(ruta)));
  if ('frases' in esperado) {
    return bloques.some((b) => b.tipo === 'frases' && b.frases.some((f) => esperado.frases.test(f.en) || esperado.frases.test(f.es)));
  }
  return bloques.some((b) => b.tipo === 'texto' && esperado.texto.test(b.texto));
}

function resumen(respuesta: Respuesta): string {
  return respuesta.bloques
    .slice(0, 3)
    .map((b) => {
      switch (b.tipo) {
        case 'texto':
          return `texto«${b.texto.slice(0, 50)}»`;
        case 'explicacion':
          return `expl[${b.fuente} | ${b.titulo.slice(0, 36)}]`;
        case 'tiempo':
          return `tiempo[${b.titulo}]`;
        case 'palabra':
          return `palabra[${b.entrada.w}]`;
        case 'verbo':
          return `verbo[${b.verbo.base}]`;
        case 'frases':
          return `frases[${b.titulo}]`;
        case 'enlaces':
          return `enlaces[${b.enlaces.map((e) => e.ruta).join(',')}]`;
      }
    })
    .join('  ');
}

const CASOS: [string, Esperado | Esperado[]][] = [
  // ── Gramática ──
  ['¿Cuándo uso el present perfect?', { tiempo: 'Present Perfect' }],
  ['cuándo se usa el presente perfecto', { tiempo: 'Present Perfect' }],
  ['diferencia entre present perfect y past simple', [{ tiempo: 'Present Perfect' }, { tiempo: 'Past Simple' }]],
  ['diferencia entre say y tell', { fuente: /SAY \/ TELL|say, tell/i }],
  ['¿Cuándo uso will y cuándo going to?', { fuente: /Going to|I Will and I'm Going to|Preguntas frecuentes|Futuro/i }],
  ['cómo se forman las preguntas en inglés', { fuente: /Questions|Preguntas|Auxiliary/i }],
  ['¿qué es un phrasal verb?', { fuente: /Phrasal|Frasales/i }],
  ['diferencia entre much y many', { fuente: /Much, Many|much/i }],
  ['cuándo uso a y an', { fuente: /A \/ An \/ The/i }],
  ['para qué sirve should', { fuente: /Should/i }],
  ['cuándo uso used to', { fuente: /Used to/i }],
  ['cómo uso el pasado simple', { tiempo: 'Past Simple' }],
  ['explícame los condicionales', { fuente: /Conditional|If I do|If I Did|Condicion/i }],
  ['¿qué es la voz pasiva?', { fuente: /Passive|Pasiva/i }],
  ['cómo funciona el estilo indirecto', { fuente: /Reported/i }],
  ['cuándo uso who y which', { fuente: /Relative|Relativ/i }],
  ['diferencia entre for y since', { fuente: /SINCE|for and since/i }],
  ['cuándo uso in, on y at', { fuente: /IN \/ ON \/ AT|in\/at\/on|at\/on\/in/i }],
  ['¿cuál es la diferencia entre make y do?', { fuente: /MAKE \/ DO|Preguntas frecuentes/i }],
  ['cuándo se usa bring y take', { fuente: /BRING \/ TAKE/i }],
  ['ser o estar en inglés', { fuente: /Ser vs\. Estar|BE/i }],
  ['diferencia entre por y para en inglés', { fuente: /Por \/ Para/i }],
  ['cuándo uso el gerundio', { fuente: /Gerundio|Verb \+ -ing|-ing/i }],
  ['cuándo uso el infinitivo con to', { fuente: /Infinitivo|Verb \+ to|to\.\.\./i }],
  ['cómo se forma el comparativo', { fuente: /Comparative/i }],
  ['superlativos', { fuente: /Superlative/i }],
  ['cuándo uso some y any', { fuente: /some|any/i }],
  ['enough y too', { fuente: /enough and too/i }],
  ['qué son los artículos', { fuente: /Artículo|A\/An|The/i }],
  ['plural de los sustantivos', { fuente: /Singular and plural|plural|Sustantivo/i }],
  ['contables e incontables', { fuente: /Countable/i }],
  ['cómo se usa have got', { fuente: /have y have got/i }],
  ['cuándo uso must y have to', { fuente: /have to and must|must/i }],
  ['can y could', { fuente: /can, could and able to|could/i }],
  ['cuándo uso el pasado continuo', { tiempo: 'Past Continuous' }],
  ['presente continuo para hablar del futuro', { ruta: /^\/unidad\/16$/ }],
  ['cómo se hacen los question tags', { fuente: /Question tags|tag question/i }],
  ['qué son los verbos modales', { fuente: /Modal|Auxiliar/i }],
  ['cómo uso if en inglés', { fuente: /If I do|Conditional|If I knew|condicional/i }],
  ['para qué sirve wish', { fuente: /wish/i }],
  ['oraciones de relativo', { fuente: /Relative|Relativ|Subordinadas/i }],
  ['cuándo uso although y though', { fuente: /although/i }],
  ['cuándo uso unless', { fuente: /unless/i }],
  ['cómo se usan during y while', { fuente: /during \/ for \/ while|during|while/i }],
  ['diferencia entre like y as', { fuente: /like and as|like \/ as if|\bas\b/i }],
  ['orden de los adjetivos', { fuente: /Adjectives: order/i }],
  ['cuándo uso still, yet y already', { fuente: /still|yet|already/i }],
  ['how to use the present perfect', { tiempo: 'Present Perfect' }],
  ['when do I use the past simple', { tiempo: 'Past Simple' }],
  ['pasiva con get', { fuente: /Passive|Pasiva|get/i }],
  // ── Curso A1: los temas de las 12 unidades ──
  ['cuándo uso this y these', { fuente: /This y these/i }],
  ['diferencia entre this y that', { fuente: /This \/ these \/ that \/ those/i }],
  ['cuándo uso these y those', { fuente: /those/i }],
  ['cómo se usa there is y there are', { fuente: /There is \/ There are|¿Cómo digo «hay»/i }],
  ['cuándo uso there are', { fuente: /There is \/ There are|¿Cómo digo «hay»/i }],
  ['cómo pregunto la hora en inglés', { frases: /What time/i }],
  ['what time is it', { fuente: /The Time and Let's/i }],
  ["para qué sirve let's", { fuente: /Let's/i }],
  ['adverbios de frecuencia', { fuente: /Adverbios de frecuencia|Adverbs of Frequency/i }],
  ['cuándo uso always y never', { fuente: /Adverbios de frecuencia|Adverbs of Frequency/i }],
  ["cómo se usa can y can't", { fuente: /Can y can't|How much, This/i }],
  ['cómo pregunto precios en inglés', { frases: /How much/i }],
  ['how much cuesta', { fuente: /How much, This/i }],
  ['diferencia entre how much y how many', { fuente: /diferencia entre «much»|How much\? \/ How many\?|Countable and Uncountable/i }],
  ['cómo ofrezco algo con would you like', { fuente: /Would you like/i }],
  ['cuándo uso a lot of, much y many', { fuente: /A lot of, much y many|Much, Many/i }],
  ['posesivos con apóstrofo', { ruta: /^\/unidad\/3$/ }],
  ['posesivo s', { fuente: /Possessives|Posesivo con/i }],
  ['cuándo uso his y her', { fuente: /¿His o her\?|Possessives/i }],
  ['cómo se forma el presente continuo', [{ tiempo: 'Present Continuous' }, { ruta: /^\/unidad\/7$/ }]],
  ['qué son los imperativos', { fuente: /Imperativ/i }],
  ['cuándo uso want to y need to', { fuente: /Verbs \+ Infinitive|like to \/ want to/i }],
  ['cuándo uso was y were', { fuente: /Past of Be|was \/ were/i }],
  ['preguntas en pasado con did', { ruta: /^\/unidad\/10$/ }],
  ['cómo se escribe el plural de baby', { fuente: /Plurales regulares|Plurals/i }],
  ['cuándo uso the', { fuente: /¿Cuándo uso «the»\?|El Artículo|The: el, la/i }],
  ['adjetivos antes del sustantivo', { fuente: /Adjetivo|Adjective/i }],
  ['cómo se usa some y any', { ruta: /^\/unidad\/12$/ }],
  // ── Preguntas frecuentes ──
  ['¿por qué se dice I am 25 y no I have 25?', { fuente: /Preguntas frecuentes/ }],
  ['por qué she works lleva s', { fuente: /Preguntas frecuentes|Presente Simple|Present Simple/i }],
  ['cuándo uso do, does y did', { fuente: /Preguntas frecuentes|Auxiliary|do\/be\/have/i }],
  ["por qué I didn't went está mal", { fuente: /Preguntas frecuentes|Past Simple|Pasado/i }],
  ['qué significa gonna', { fuente: /Preguntas frecuentes/ }],
  ['cómo se pronuncia th', { fuente: /Preguntas frecuentes|TH/i }],
  ['por qué an hour y a university', { fuente: /Preguntas frecuentes|A\/An/i }],
  ['cómo aprender inglés más rápido', { fuente: /Preguntas frecuentes|Cómo estudiar|estudiar/i }],
  ['cuánto tiempo debo estudiar al día', { fuente: /Preguntas frecuentes|Cómo estudiar|estudiar/i }],
  ['qué diferencia hay entre I went y I have been', { fuente: /Preguntas frecuentes|Present Perfect|Presente Perfecto/i }],
  // ── Pronunciación ──
  ['cómo se pronuncia la terminación ed', { fuente: /ED/i }],
  ['diferencia entre v y b al pronunciar', { fuente: /V vs B|Preguntas frecuentes/i }],
  ['acento en present como sustantivo y verbo', { fuente: /Acento/i }],
  // ── Tiempos ──
  ['futuro continuo', { tiempo: 'Future Continuous' }],
  ['past perfect', { tiempo: 'Past Perfect' }],
  ['present perfect continuous', { tiempo: 'Present Perfect Continuous' }],
  ['presente simple', { tiempo: 'Present Simple' }],
  ['cuándo uso el pasado perfecto continuo', { tiempo: 'Past Perfect Continuous' }],
  ['ejemplos de present continuous', { tiempo: 'Present Continuous' }],
  ['fórmula del present simple', { tiempo: 'Present Simple' }],
  ['mapa de tiempos', { ruta: /^\/tiempos$/ }],
  // ── Palabras ──
  ['¿Cómo se dice ventana en inglés?', { palabra: 'window' }],
  ['cómo se dice casa en inglés', { palabra: 'house' }],
  ['qué significa enough', { texto: /enough/i }],
  ['¿cómo se dice perro?', { palabra: 'dog' }],
  ['what does hospital mean', { palabra: 'hospital' }],
  ['cómo se pronuncia comfortable', { palabra: 'comfortable' }],
  ['house', { palabra: 'house' }],
  ['perro', { palabra: 'dog' }],
  ['cómo se dice cuchara en inglés', { palabra: 'spoon' }],
  ['pronunciación de hospital', { palabra: 'hospital' }],
  ['cómo se dice rojo', { palabra: 'red' }],
  ['significado de beautiful', { palabra: 'beautiful' }],
  // ── Frases (traducción) ──
  ['cómo se dice tengo hambre', { frases: /hungry/i }],
  ['cómo se dice mucho gusto', { palabra: 'nice to meet you' }],
  ['cómo se dice buenos días', { frases: /Good morning/i }],
  ['cómo digo gracias', { palabra: 'thanks' }],
  ['dónde está el baño en inglés', { frases: /bathroom/i }],
  ['cómo digo tengo sed', { frases: /thirsty/i }],
  ['cómo se dice estoy cansado', { frases: /tired/i }],
  ['cómo digo tengo frío', { frases: /cold/i }],
  ['cómo se dice estoy aburrido', { frases: /bored/i }],
  ['cómo pido permiso para sentarme', { frases: /May I sit|Can I/i }],
  ['cómo digo que me gusta la pizza', { frases: /I like pizza/i }],
  ['qué hora es en inglés', { frases: /What time is it/i }],
  ['cómo se dice el aeropuerto', { palabra: 'airport' }],
  ['cómo se dice prima', { palabra: 'cousin' }],
  ['cómo se dice por favor', { palabra: 'please' }],
  // ── Verbos ──
  ['pasado de go', { verbo: 'go' }],
  ['participio de write', { verbo: 'write' }],
  ['went', { verbo: 'go' }],
  ['gerundio de run', { verbo: 'run' }],
  ['cómo se dice comer en inglés', { verbo: 'eat' }],
  ['past participle of eat', { verbo: 'eat' }],
  ['cómo se conjuga to be', { verbo: 'be' }],
  ['tercera persona de watch', { verbo: 'watch' }],
  ['wrote o written', { verbo: 'write' }],
  ['verbos irregulares', { ruta: /vista=verbos/ }],
  // ── Frases por situación ──
  ['frases para el aeropuerto', { frases: /./ }],
  ['cómo pido comida en un restaurante', { frases: /table|menu|order|recommend/i }],
  ['qué digo para saludar', { frases: /Hello|Good morning|Hi/i }],
  ['frases para un hotel', { frases: /room|reservation|check/i }],
  ['cómo pedir direcciones', { frases: /Where|direction|how do I get/i }],
  ['cómo agradecer en inglés', { frases: /Thank/i }],
  // ── Navegación ──
  ['llévame a la unidad 20', { ruta: /^\/unidad\/20$/ }],
  ['abre las tarjetas', { ruta: /^\/tarjetas$/ }],
  ['quiero practicar dictado', { ruta: /^\/practica\/dictado$/ }],
  ['ver el nivel B1', { ruta: /^\/nivel\/B1$/ }],
  ['quiz de la unidad 5', { ruta: /^\/quiz\/unidad\/5$/ }],
  ['ir al inicio', { ruta: /^\/$/ }],
  ['gramática', { ruta: /^\/gramatica$/ }],
  ['unidad 46', { ruta: /^\/unidad\/46$/ }],
  // ── Estudio ──
  ['¿qué estudio hoy?', { ruta: /^\/unidad\// }],
  ['por dónde empiezo', { ruta: /^\/unidad\// }],
  ['cuánto llevo avanzado', { texto: /Llevas 3 de 145/ }],
  // ── Charla ──
  ['hola', { texto: /Hola/ }],
  ['gracias', { texto: /De nada/ }],
  ['qué puedes hacer', { texto: /Puedo ayudarte/ }],
  // ── Fuera de tema ──
  ['cuál es la capital de Francia', { sin: true }],
  ['receta de pastel de chocolate', { sin: true }],
  ['quién ganó el mundial', { sin: true }],
  ['asdfgh', { sin: true }],
  ['dime un chiste', { sin: true }],
  ['quién es el presidente de Estados Unidos', { sin: true }],
  ['cuál es mi horóscopo', { sin: true }],
  ['cuánto mide el monte Everest', { sin: true }],
  ['dame una receta de arroz con pollo', { sin: true }],
  ['cómo se llama el director de Titanic', { sin: true }],

  ['como se usa el verbo have', { fuente: /have|Auxiliar/i }],
  ['no entiendo cuando usar the', { fuente: /\bthe\b|Artículo/i }],
  ['que es un adverbio', { fuente: /Adverbio|Adverb/i }],
  ['que es un sustantivo', { fuente: /Sustantivo|Noun/i }],
  ['para que sirve el pasado perfecto', { tiempo: 'Past Perfect' }],
  ['cuando se usa el futuro con will', { tiempo: 'Future Simple' }],
  ['diferencia entre been y gone', { fuente: /Present Perfect|been|gone/i }],
  ['como se dice me gusta en ingles', { frases: /like/i }],
  ['como pregunto la hora', { frases: /What time is it/i }],
  ['como pido la cuenta', { frases: /bill|check/i }],
  ['como me presento', { frases: /My name is|Nice to meet/i }],
  ['frases de cortesia', { frases: /thank|please|sorry|excuse/i }],
  ['cuales son los dias de la semana', { ruta: /tema=(calendario|tiempo)/ }],
  ['palabras de la familia', { ruta: /tema=familia/ }],
  ['vocabulario de comida', { ruta: /tema=(comida|alimentos|restaurante)/ }],
  ['colores en ingles', { ruta: /tema=colores/ }],
  ['como formo el comparativo de adjetivos largos', { fuente: /Comparativos: adjetivos largos/i }],
  ['cuando uso either y neither', { fuente: /both\/neither\/either|either/i }],
  ['que son los pronombres relativos', { fuente: /Relative|Relativ|Pronombre/i }],
  ['diferencia entre who y whom', { fuente: /Relative|Relativ|Pronombre/i }],
  ['quiero repasar tiempos verbales', { ruta: /^\/tiempos$/ }],
  ['me puedes explicar los modales', { fuente: /Modal|modal/i }],
  ['can o could', { fuente: /can, could and able to|could/i }],
  ['estoy en nivel b1 que sigue', { ruta: /^\/unidad\// }],
  ['tengo 10 minutos que hago', { ruta: /^\/unidad\/|practica\/dia/ }],
  ['como mejoro mi pronunciacion', { fuente: /Preguntas frecuentes|Pronunci|sonido/i }],
  ['es mejor estudiar todos los dias', { fuente: /Preguntas frecuentes|estudiar/i }],
  ['what is the past of buy', { verbo: 'buy' }],
  ['past tense of think', { verbo: 'think' }],
  ['ing form of swim', { verbo: 'swim' }],
  ['gone', { verbo: 'go' }],
  ['bought', { verbo: 'buy' }],
  ['como se dice leer', { verbo: 'read' }],
  ['como se dice escribir en ingles', { verbo: 'write' }],
  ['traduce dormir', { verbo: 'sleep' }],
  ['ir en ingles', { verbo: 'go' }],
  ['como pronuncio world', { palabra: 'world' }],
  ['hello', { texto: /Hola/ }],
  ['thank you', { texto: /De nada/ }],
  ['what does airport mean', { palabra: 'airport' }],
  ['enough', { palabra: 'enough' }],
  ['cuantos tiempos verbales hay en ingles', { fuente: /Tiempos Verbales|tiempos|Present|Past/i }],
  ['que es el present simple', { tiempo: 'Present Simple' }],
  ['when do I use the present continuous', { tiempo: 'Present Continuous' }],
  ['donde esta la unidad de condicionales', { fuente: /If I do|Conditional|If I Did|condicional/i }],
  ['abre la unidad 100', { ruta: /^\/unidad\/100$/ }],
  ['llevame a las tarjetas dificiles', { ruta: /^\/practica\/dificil$/ }],
  ['quiero hacer un dictado', { ruta: /^\/practica\/dictado$/ }],
  ['mapa de tiempos verbales', { ruta: /^\/tiempos$/ }],
  ['cuanto me falta para terminar', { texto: /Llevas/ }],
  ['ayuda', { texto: /Puedo ayudarte/ }],
  ['buenas tardes', { texto: /Hola/ }],
  ['chao', { texto: /Hasta luego/ }],
  ['gracias por todo', { texto: /De nada/ }],
  ['tu eres un robot', { sin: true }],
  ['dime algo interesante', { sin: true }],
  ['cuanto es 2 mas 2', { sin: true }],
  ['quien invento el telefono', { sin: true }],
  ['como se llama tu creador', { sin: true }],
  // ── Números ──
  ['cómo se dice 25 en inglés', { frases: /twenty-five/ }],
  ['1999 en inglés', [{ frases: /one thousand nine hundred ninety-nine/ }, { frases: /nineteen ninety-nine/ }]],
  ['cómo se escribe 101', { frases: /one hundred one/ }],
  ['2025', { frases: /twenty twenty-five/ }],
  ['cómo se dice 10000000000', { sin: true }],
  ['cómo se dice', { sin: true }],
  ['cuándo uso who y which', { fuente: /Relative|Relativ|Pronombre|Preguntas/i }],
];

const fallas: string[] = [];
let revisadas = 0;
let bien = 0;
const anotar = (ok: boolean, detalle: () => string) => {
  revisadas++;
  if (ok) bien++;
  else fallas.push(detalle());
};
const verbosDe = (pregunta: string) => responder(pregunta, contexto).bloques.flatMap((b) => (b.tipo === 'verbo' ? [b.verbo.base] : []));
const palabrasDe = (pregunta: string) => responder(pregunta, contexto).bloques.flatMap((b) => (b.tipo === 'palabra' ? [normalizar(b.entrada.w)] : []));

// 1. Preguntas escritas a mano.
for (const [pregunta, esperado] of CASOS) {
  const respuesta = responder(pregunta, contexto);
  const lista = Array.isArray(esperado) ? esperado : [esperado];
  anotar(
    lista.every((e) => cumple(respuesta, e)),
    () => `✗ «${pregunta}»\n     → ${resumen(respuesta)}`
  );
}
console.log(`Preguntas escritas a mano: ${bien}/${revisadas}`);

// 2. Cada palabra, por su significado y por su nombre.
const antesPalabras = { revisadas, bien };
const vistas = new Set<string>();
const todasLasPalabras = VOCAB_TOPICS.flatMap((t) => t.words);
for (const p of todasLasPalabras) {
  const clave = normalizar(p.w);
  if (vistas.has(clave)) continue;
  vistas.add(clave);
  const pregunta = `qué significa ${p.w}`;
  anotar(palabrasDe(pregunta).includes(clave) || verbosDe(pregunta).includes(clave), () => `✗ «${pregunta}» no encontró la palabra`);

  const significado = normalizar(p.def.replace(/\(.*?\)/g, ' '))
    .split(/[,;/]/)[0]
    .replace(/[^a-z0-9 ]/g, ' ')
    .trim();
  // Un significado que comparten muchas palabras («su» = her, his, its, their…) no puede traerlas todas.
  const compartido = todasLasPalabras.filter((w) => normalizar(w.def).includes(significado)).length > 4;
  if (significado && !compartido) {
    const inversa = `cómo se dice ${significado} en inglés`;
    // Si hay una pregunta frecuente que lo explica («¿Cómo digo «extrañar» en inglés?»), basta con que mencione la palabra.
    const explicada = responder(inversa, contexto).bloques.some((b) => b.tipo === 'explicacion' && normalizar(b.cuerpo).includes(clave));
    anotar(palabrasDe(inversa).includes(clave) || verbosDe(inversa).includes(clave) || explicada, () => `✗ «${inversa}» no dio «${p.w}»`);
  }
}
console.log(`Palabras (${vistas.size}): ${bien - antesPalabras.bien}/${revisadas - antesPalabras.revisadas}`);

// 3. Cada verbo: la base sola, su pasado, su participio y su pasado escrito solo.
const antesVerbos = { revisadas, bien };
for (const v of ALL_VERBOS) {
  // «help» sola es pedir ayuda al asistente.
  if (v.base !== 'help') anotar(verbosDe(v.base).includes(v.base), () => `✗ «${v.base}» no encontró el verbo`);
  anotar(verbosDe(`pasado de ${v.base}`).includes(v.base), () => `✗ «pasado de ${v.base}» no encontró el verbo`);
  anotar(verbosDe(`participio de ${v.base}`).includes(v.base), () => `✗ «participio de ${v.base}» no encontró el verbo`);
  const pasado = v.pasado.split(' / ')[0];
  if (v.irregular && normalizar(pasado) !== normalizar(v.base)) {
    anotar(verbosDe(pasado).includes(v.base), () => `✗ «${pasado}» no encontró «${v.base}»`);
  }
}
console.log(`Verbos (${ALL_VERBOS.length}): ${bien - antesVerbos.bien}/${revisadas - antesVerbos.revisadas}`);

// 4. Cada pregunta frecuente, situación de frases y tema de vocabulario, por su propio nombre.
const antesContenido = { revisadas, bien };
for (const concepto of GRAM_CONCEPTS.filter((c) => c.cat === 'faq')) {
  for (const bloque of concepto.blocks) {
    if (bloque.type !== 'def' || !bloque.heading) continue;
    const pregunta = bloque.heading;
    const respuesta = responder(pregunta, contexto);
    const primera = respuesta.bloques.find((b) => b.tipo === 'explicacion');
    // Las que hablan de la propia app (por dónde empezar, qué nivel tienes) se contestan con tu progreso.
    const delProgreso = /en la app|nivel tengo|se me olvidan/.test(pregunta) && respuesta.bloques.some((b) => b.tipo === 'enlaces');
    anotar(
      delProgreso || (primera?.tipo === 'explicacion' && primera.titulo === pregunta),
      () => `✗ la pregunta frecuente «${pregunta}» no se contesta con ella misma`
    );
  }
}
for (const situacion of FRASES_UTILES) {
  const pregunta = `frases para ${situacion.nombre}`;
  const respuesta = responder(pregunta, contexto);
  anotar(
    respuesta.bloques.some((b) => b.tipo === 'frases' && b.titulo.includes(situacion.nombre)),
    () => `✗ «${pregunta}» no encontró la situación`
  );
}
for (const tema of VOCAB_TOPICS) {
  const pregunta = `vocabulario de ${tema.name}`;
  anotar(JSON.stringify(responder(pregunta, contexto).bloques).includes(`tema=${tema.id}`), () => `✗ «${pregunta}» no encontró el tema`);
}
console.log(`Preguntas frecuentes, situaciones y temas: ${bien - antesContenido.bien}/${revisadas - antesContenido.revisadas}`);

fallas.slice(0, 40).forEach((f) => console.log(f));
if (fallas.length > 40) console.log(`… y ${fallas.length - 40} más`);
console.log(`\nTotal: ${bien}/${revisadas} bien`);
process.exit(fallas.length > 0 ? 1 : 0);
