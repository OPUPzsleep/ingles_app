import { TIPOS, type TipoOracion } from '@/data/frases/frases-tiempos';
import { TIEMPOS_INFO } from '@/data/frases/tiempos-info';
import { GRAM_CONCEPTS } from '@/data/gramatica/concepts';
import { FORMAS_UNIDAD } from '@/data/grammar/formas';
import { PRONUN_CURSO, UNIDADES_CURSO } from '@/data/grammar/curso';
import { INFO_NIVEL } from '@/data/grammar/niveles';
import { PRONUN_DATA } from '@/data/grammar/pronunciation';
import { UNITS } from '@/data/grammar/units';
import { FRASES_UTILES } from '@/data/vocabulario/frases-utiles';
import { VOCAB_TOPICS } from '@/data/vocabulario/tematico';
import { tokenizar } from '@/lib/asistente/tokens';
import type { GrammarFormula, PronunUnit } from '@/types/grammar';

export type TipoDoc =
  | 'unidad'
  | 'consejo'
  | 'forma'
  | 'concepto'
  | 'faq'
  | 'tiempo'
  | 'pronunciacion'
  | 'situacion'
  | 'tema'
  | 'nivel';

/** Un trozo de la app que el asistente puede encontrar y mostrar: una explicación, una pregunta frecuente, un tiempo… */
export interface Doc {
  id: string;
  tipo: TipoDoc;
  /** Encabezado con el que se muestra. */
  titulo: string;
  cuerpo: string;
  nota?: string;
  /** De dónde sale («Unidad 46 · Present perfect 1»). */
  fuente: string;
  ruta: string;
  etiquetaRuta: string;
  /** Qué es, según el tipo: el tiempo verbal, la situación de frases, el tema de palabras o el nivel. */
  ref?: string;
  /** Para buscar: lo que más cuenta (pesa ×3), lo que cuenta algo (×2) y el resto del texto. */
  claveTitulo: string;
  claveExtra: string;
  texto: string;
}

const formula = (f: GrammarFormula) => (f.label ? `${f.label}: ` : '') + f.chips.map((chip) => chip.text).join(' + ');

function docsDeUnidades(docs: Doc[]) {
  for (const [clave, unidad] of Object.entries(UNITS)) {
    const n = Number(clave);
    const fuente = `Unidad ${n} · ${unidad.title}`;
    const ruta = `/unidad/${n}`;
    const etiquetaRuta = `📖 Abrir la unidad ${n}`;

    unidad.explain.forEach((bloque, i) => {
      const ejemplos = (bloque.ejemplos ?? []).map(([en, es]) => `${en} — ${es}`);
      docs.push({
        id: `u${n}-e${i}`,
        tipo: 'unidad',
        titulo: bloque.head,
        cuerpo: bloque.body,
        nota: bloque.note ?? (ejemplos.length > 0 ? ejemplos.join('\n') : undefined),
        fuente,
        ruta,
        etiquetaRuta,
        claveTitulo: `${unidad.title} ${bloque.head}`,
        claveExtra: `${unidad.topic} ${unidad.level}`,
        texto: `${bloque.body} ${bloque.note ?? ''} ${ejemplos.join(' ')}`,
      });
    });

    (unidad.tips ?? []).forEach((consejo, i) =>
      docs.push({
        id: `u${n}-t${i}`,
        tipo: 'consejo',
        titulo: 'Consejo',
        cuerpo: consejo,
        fuente,
        ruta,
        etiquetaRuta,
        claveTitulo: unidad.title,
        claveExtra: unidad.topic,
        texto: consejo,
      })
    );

    const formasDeLaUnidad = FORMAS_UNIDAD[n];
    if (!formasDeLaUnidad) continue;
    const listaDeFormas = Array.isArray(formasDeLaUnidad) ? formasDeLaUnidad : [formasDeLaUnidad];
    const tres = [
      { clave: 'afirmativa', nombre: 'Frase afirmativa', palabras: 'afirmativa afirmacion positiva' },
      { clave: 'negativa', nombre: 'Frase negativa', palabras: 'negativa negacion no not' },
      { clave: 'pregunta', nombre: 'Pregunta', palabras: 'pregunta interrogativa questions' },
    ] as const;
    listaDeFormas.forEach((formas, k) => {
      // La primera estructura conserva los ids de siempre; las demás llevan su número.
      const marca = k === 0 ? 'f' : `f${k}`;
      const nombreUnidad = formas.titulo ? `${unidad.title} (${formas.titulo})` : unidad.title;
      for (const { clave: forma, nombre, palabras } of tres) {
        const detalle = formas[forma];
        docs.push({
          id: `u${n}-${marca}-${forma}`,
          tipo: 'forma',
          titulo: `${nombre} · ${nombreUnidad}`,
          cuerpo: detalle.formulas.map(formula).join('\n'),
          nota: detalle.ejemplos.map(([en, es]) => `${en} — ${es}`).join('\n'),
          fuente,
          ruta,
          etiquetaRuta,
          claveTitulo: `${nombreUnidad} ${palabras}`,
          claveExtra: unidad.topic,
          texto: detalle.ejemplos.map(([en, es]) => `${en} ${es}`).join(' '),
        });
      }
      if (formas.ojo) {
        docs.push({
          id: `u${n}-${marca}-ojo`,
          tipo: 'forma',
          titulo: `Error típico · ${nombreUnidad}`,
          cuerpo: formas.ojo,
          fuente,
          ruta,
          etiquetaRuta,
          claveTitulo: `${nombreUnidad} error tipico ojo cuidado`,
          claveExtra: unidad.topic,
          texto: formas.ojo,
        });
      }
      if (formas.nota) {
        docs.push({
          id: `u${n}-${marca}-nota`,
          tipo: 'forma',
          titulo: `Para recordar · ${nombreUnidad}`,
          cuerpo: formas.nota,
          fuente,
          ruta,
          etiquetaRuta,
          claveTitulo: `${nombreUnidad} contracciones respuestas cortas`,
          claveExtra: unidad.topic,
          texto: formas.nota,
        });
      }
    });
  }
}

function docsDeConceptos(docs: Doc[]) {
  for (const concepto of GRAM_CONCEPTS) {
    const esFaq = concepto.cat === 'faq';
    const tipo: TipoDoc = esFaq ? 'faq' : 'concepto';
    const fuente = esFaq ? `Preguntas frecuentes · ${concepto.tag}` : `Gramática · ${concepto.title}`;
    const base = {
      tipo,
      fuente,
      ruta: `/gramatica/concepto/${concepto.id}`,
      etiquetaRuta: esFaq ? '❓ Ver más preguntas' : '📚 Ver el concepto completo',
      claveExtra: `${concepto.title} ${concepto.tag}`,
    };

    concepto.blocks.forEach((bloque, i) => {
      const id = `c-${concepto.id}-${i}`;
      switch (bloque.type) {
        case 'def':
          docs.push({
            ...base,
            id,
            titulo: bloque.heading ?? concepto.title,
            cuerpo: bloque.body,
            claveTitulo: bloque.heading ?? concepto.title,
            texto: bloque.body,
          });
          break;
        case 'compare':
          docs.push({
            ...base,
            id,
            titulo: concepto.title,
            cuerpo: `${bloque.esLabel}: ${bloque.esBody}\n${bloque.enLabel}: ${bloque.enBody}`,
            claveTitulo: concepto.title,
            texto: `${bloque.esBody} ${bloque.enBody}`,
          });
          break;
        case 'tip':
        case 'warn':
          docs.push({
            ...base,
            id,
            titulo: `${bloque.type === 'tip' ? 'Consejo' : 'Ojo'} · ${concepto.title}`,
            cuerpo: bloque.body,
            claveTitulo: `${concepto.title} ${bloque.type === 'tip' ? 'consejo truco' : 'error ojo cuidado'}`,
            texto: bloque.body,
          });
          break;
        case 'table':
          docs.push({
            ...base,
            id,
            titulo: concepto.title,
            cuerpo: `Hay una tabla con esto en «${concepto.title}».`,
            claveTitulo: `${concepto.title} tabla`,
            texto: `${bloque.cols.join(' ')} ${bloque.rows.map((fila) => fila.join(' ')).join(' ')}`,
          });
          break;
        default:
          break;
      }
    });
  }
}

function docsDeTiempos(docs: Doc[]) {
  for (const clave of Object.keys(TIEMPOS_INFO) as TipoOracion[]) {
    const info = TIEMPOS_INFO[clave];
    const tipo = TIPOS[clave];
    docs.push({
      id: `t-${clave}`,
      tipo: 'tiempo',
      titulo: `${tipo.es} (${tipo.en})`,
      cuerpo: info.cuando.join('. '),
      nota: info.ojo,
      fuente: 'Mapa de tiempos',
      ruta: `/tiempos?tipo=${clave}`,
      etiquetaRuta: '🗺️ Ver en el mapa de tiempos',
      ref: clave,
      claveTitulo: `${tipo.es} ${tipo.en} ${info.modelo}`,
      claveExtra: `${tipo.formula} ${info.senales.join(' ')} cuando se usa`,
      texto: `${info.cuando.join(' ')} ${info.ojo}`,
    });
  }
}

function docsDePronunciacion(docs: Doc[]) {
  // La pronunciación de los cursos, y las anclas del libro solo si son de una unidad visible que no sea del curso.
  const pronunciaciones: [string, PronunUnit][] = [
    ...Object.entries(PRONUN_DATA).filter(([clave]) => UNITS[Number(clave)] && !UNIDADES_CURSO[Number(clave)]),
    ...Object.entries(PRONUN_CURSO),
  ];
  for (const [clave, unidad] of pronunciaciones) {
    unidad.tips.forEach((consejo, i) =>
      docs.push({
        id: `p${clave}-${i}`,
        tipo: 'pronunciacion',
        titulo: consejo.head,
        cuerpo: consejo.body,
        nota: consejo.examples.join(' · '),
        fuente: `Pronunciación · Unidad ${clave}`,
        ruta: `/unidad/${clave}`,
        etiquetaRuta: `📖 Abrir la unidad ${clave}`,
        claveTitulo: `${consejo.head} pronunciacion pronunciar`,
        claveExtra: 'pronunciacion sonido',
        texto: `${consejo.body} ${consejo.examples.join(' ')}`,
      })
    );
  }
}

/** Cómo se suele pedir cada situación de frases, para encontrarla con «cómo saludo» o «qué digo en el aeropuerto». */
const PALABRAS_DE_SITUACION: Record<string, string> = {
  saludos: 'saludar saludo saludos despedirse despedida hola adios buenos dias buenas tardes noches',
  presentarse: 'presentarse presentar presentacion conocer gente nombre llamo edad vivir',
  ayuda: 'ayuda ayudar pedir ayuda aclarar repetir no entiendo despacio perdido',
  direcciones: 'direcciones direccion donde esta ubicacion llegar perdido calle cerca lejos mapa lugar',
  restaurante: 'restaurante comida comer pedir cuenta mesa menu cafe beber bebida cenar almorzar propina',
  compras: 'compras comprar tienda precio pagar costo tarjeta talla ropa devolver descuento',
  viajes: 'aeropuerto avion vuelo viaje viajar maleta pasaporte equipaje embarque aduana boleto',
  hotel: 'hotel reserva reservar habitacion cuarto alojamiento check in check out',
  transporte: 'taxi bus autobus tren metro boleto pasaje parada estacion transporte',
  telefono: 'telefono llamar llamada mensaje celular contestar correo',
  trabajo: 'trabajo reunion oficina correo jefe cliente entrevista proyecto',
  medico: 'medico doctor emergencia enfermo dolor hospital farmacia salud sintomas',
  opiniones: 'opinion opinar acuerdo desacuerdo pensar creo estoy de acuerdo',
  cortesia: 'gracias agradecer disculpas disculparse perdon permiso por favor cortesia educado',
  charla: 'clima charla casual hablar tiempo conversacion plan fin de semana',
  estudiar: 'aprender ingles estudiar clase profesor practicar idioma',
  sentimientos: 'sentir sentimientos hambre sed sueno frio calor miedo cansado nervioso contento triste aburrido necesito',
  rutina: 'rutina dia a dia diaria despertar levantarse desayunar almorzar cenar acostarse costumbres habitos',
  'pedir-y-ofrecer': 'pedir permiso ofrecer ayuda prestar favor puedo poder invitar',
  gustos: 'gustos gustar preferencias favorito encantar preferir aficiones',
  'hora-y-fechas': 'hora horas que hora es fecha fechas dia dias cumpleanos reloj puntual tarde minutos',
};

function docsDeVocabulario(docs: Doc[]) {
  for (const situacion of FRASES_UTILES) {
    docs.push({
      id: `s-${situacion.id}`,
      tipo: 'situacion',
      titulo: situacion.nombre,
      cuerpo: `${situacion.frases.length} frases útiles`,
      fuente: 'Frases útiles',
      ruta: `/vocabulario?vista=frases&tema=${situacion.id}`,
      etiquetaRuta: `${situacion.icono} Ver todas las frases`,
      ref: situacion.id,
      claveTitulo: `${situacion.nombre} frases`,
      claveExtra: `${situacion.nivel} frases utiles decir ${PALABRAS_DE_SITUACION[situacion.id] ?? ''}`,
      texto: situacion.frases.map((f) => `${f.es} ${f.en}`).join(' '),
    });
  }
  for (const tema of VOCAB_TOPICS) {
    docs.push({
      id: `v-${tema.id}`,
      tipo: 'tema',
      titulo: tema.name,
      cuerpo: `${tema.words.length} palabras`,
      fuente: 'Vocabulario',
      ruta: `/vocabulario?vista=palabras&tema=${tema.id}`,
      etiquetaRuta: `${tema.icon} Ver las palabras`,
      ref: tema.id,
      claveTitulo: `${tema.name} palabras vocabulario`,
      claveExtra: tema.level,
      texto: tema.words.map((w) => `${w.w} ${w.def}`).join(' '),
    });
  }
}

function docsDeNiveles(docs: Doc[]) {
  for (const [nivel, info] of Object.entries(INFO_NIVEL)) {
    if (!info.resumen) continue;
    docs.push({
      id: `n-${nivel}`,
      tipo: 'nivel',
      titulo: `Nivel ${nivel} · ${info.nombre}`,
      cuerpo: info.resumen,
      fuente: 'Niveles',
      ruta: `/nivel/${nivel}`,
      etiquetaRuta: `${info.icono} Ver el nivel ${nivel}`,
      ref: nivel,
      claveTitulo: `nivel ${nivel} ${info.nombre}`,
      claveExtra: 'que se aprende nivel',
      texto: info.resumen,
    });
  }
}

/** Todo lo que el asistente puede encontrar, armado una sola vez. */
let todos: Doc[] | null = null;

export function todosLosDocs(): Doc[] {
  if (todos) return todos;
  const docs: Doc[] = [];
  docsDeUnidades(docs);
  docsDeConceptos(docs);
  docsDeTiempos(docs);
  docsDePronunciacion(docs);
  docsDeVocabulario(docs);
  docsDeNiveles(docs);
  todos = docs;
  return docs;
}

// ───────────────────────── Búsqueda (BM25) ─────────────────────────

/** Cuánto cuenta una palabra según dónde aparece: en el título, en las claves o en el texto. */
const PESO_TITULO = 3;
const PESO_EXTRA = 2;
const K1 = 1.2;
const B = 0.75;

interface DocIndexado {
  doc: Doc;
  frecuencias: Map<string, number>;
  /** Las palabras del título y de las claves: si la pregunta nombra alguna, el documento trata justo de eso. */
  deTitulo: Set<string>;
  largo: number;
}

interface Indice {
  docs: DocIndexado[];
  /** Qué documentos tienen cada palabra. */
  apariciones: Map<string, number[]>;
  promedio: number;
}

let indice: Indice | null = null;

function construirIndice(): Indice {
  const docs: DocIndexado[] = [];
  const apariciones = new Map<string, number[]>();
  let suma = 0;

  todosLosDocs().forEach((doc, posicion) => {
    const frecuencias = new Map<string, number>();
    const deTitulo = new Set<string>();
    let largo = 0;
    const sumar = (texto: string, peso: number, enTitulo = false) => {
      for (const palabra of tokenizar(texto)) {
        frecuencias.set(palabra, (frecuencias.get(palabra) ?? 0) + peso);
        if (enTitulo) deTitulo.add(palabra);
        largo += peso;
      }
    };
    sumar(doc.claveTitulo, PESO_TITULO, true);
    sumar(doc.claveExtra, PESO_EXTRA, true);
    sumar(doc.texto, 1);

    for (const palabra of frecuencias.keys()) {
      const lista = apariciones.get(palabra);
      if (lista) lista.push(posicion);
      else apariciones.set(palabra, [posicion]);
    }
    docs.push({ doc, frecuencias, deTitulo, largo });
    suma += largo;
  });

  return { docs, apariciones, promedio: suma / Math.max(1, docs.length) };
}

/**
 * Una palabra de la pregunta y cuánto vale: las que escribió la persona valen 1; las que se agregaron por sinónimo,
 * menos. Las palabras de un mismo concepto («present perfect» y «presente perfecto») comparten `grupo`: cuentan una vez.
 */
export interface Termino {
  raiz: string;
  peso: number;
  grupo: string;
}

export interface Hallazgo {
  doc: Doc;
  puntos: number;
  /** Cuántos conceptos de la pregunta aparecen en el documento. */
  cubiertas: number;
  /** Cuántos de ellos aparecen en su título o sus claves (no solo en el texto). */
  enTitulo: number;
}

/** Los documentos que mejor responden a las palabras dadas, el mejor primero. */
export function buscarDocs(terminos: Termino[], limite = 8, filtro?: (doc: Doc) => boolean): Hallazgo[] {
  indice ??= construirIndice();
  const { docs, apariciones, promedio } = indice;
  const total = docs.length;
  const puntos = new Map<number, number>();
  const cubiertas = new Map<number, Set<string>>();
  const enTitulo = new Map<number, Set<string>>();

  for (const { raiz, peso, grupo } of terminos) {
    const lista = apariciones.get(raiz);
    if (!lista) continue;
    const idf = Math.log(1 + (total - lista.length + 0.5) / (lista.length + 0.5));
    for (const posicion of lista) {
      const { frecuencias, largo } = docs[posicion];
      const f = frecuencias.get(raiz) ?? 0;
      const valor = (idf * (f * (K1 + 1))) / (f + K1 * (1 - B + (B * largo) / promedio));
      puntos.set(posicion, (puntos.get(posicion) ?? 0) + peso * valor);
      if (!cubiertas.has(posicion)) cubiertas.set(posicion, new Set());
      cubiertas.get(posicion)!.add(grupo);
      if (docs[posicion].deTitulo.has(raiz)) {
        if (!enTitulo.has(posicion)) enTitulo.set(posicion, new Set());
        enTitulo.get(posicion)!.add(grupo);
      }
    }
  }

  return [...puntos.entries()]
    .map(([posicion, p]) => ({
      doc: docs[posicion].doc,
      puntos: p,
      cubiertas: cubiertas.get(posicion)?.size ?? 0,
      enTitulo: enTitulo.get(posicion)?.size ?? 0,
    }))
    .filter((h) => !filtro || filtro(h.doc))
    .sort((a, b) => b.puntos - a.puntos)
    .slice(0, limite);
}

/** Arma el índice de búsqueda por adelantado: así la primera pregunta no tarda más que las demás. */
export function precalentar() {
  indice ??= construirIndice();
}
