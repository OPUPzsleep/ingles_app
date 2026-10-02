import { aux, fl, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_C1_2 } from '@/data/grammar/topics';
import type { Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque 2 · Vida laboral, desafíos y el futuro (ids 149–151: Unidad 4–6 del nivel C1).

// ─── Unidad 4 (id 149) · Sustantivos, artículos; adverbios de actitud; As a matter of fact ───

const UNIDAD_149: Unit = {
  title: 'Nouns and Articles; Attitude Adverbs; As a Matter of Fact',
  topic: BLOQUE_C1_2,
  level: 'C1',
  explain: [
    teoria(
      '1 · Contables e incontables: los casos difíciles',
      "Muchos sustantivos son incontables en inglés y se comportan distinto que en español: advice, information, news, research, progress, evidence, luggage, equipment, furniture, traffic, accommodation.\n\n• No llevan a / an ni -s: «some useful advice», no «an advice».\n• Verbo en singular: «The news is good».\n• Se cuentan con unidades: a piece of advice, an item of news, a piece of equipment.\n\nSe preguntan con how much y se usa little / much / a great deal of.",
      [
        ['She gave me some very useful advice.', 'Me dio consejos muy útiles.'],
        ['The news is better than we expected.', 'Las noticias son mejores de lo que esperábamos.'],
        ['I need a piece of information.', 'Necesito un dato.'],
        ['There was a great deal of evidence.', 'Había una gran cantidad de pruebas.'],
      ]
    ),
    teoria(
      '2 · Sustantivos con dos usos: contable e incontable',
      "Algunos sustantivos cambian de significado según sean contables o incontables:\n\n• paper (material) / a paper (periódico, trabajo) · work (trabajo) / a work (obra)\n• experience (vivencia) / an experience (una vivencia concreta)\n• room (espacio) / a room (habitación) · time (tiempo) / a time (una ocasión)\n• hair (pelo en general) / a hair (un cabello)\n\n«I have no experience.» · «It was an amazing experience.» · «There isn't enough room.»",
      [
        ['I have no experience in this field.', 'No tengo experiencia en este campo.'],
        ['It was an amazing experience.', 'Fue una experiencia increíble.'],
        ["There isn't enough room in the car.", 'No hay suficiente espacio en el auto.'],
        ['I found a hair in my soup.', 'Encontré un pelo en mi sopa.'],
      ]
    ),
    teoria(
      '3 · Generalizar: sin artículo y con the',
      "Para generalizar hay tres formas:\n\n• Plural o incontable sin artículo: «Dogs are loyal» · «Life is short» · «Technology changes everything».\n• The + singular contable (muy formal, para especies o inventos): «The tiger is an endangered species» · «The telephone changed communication».\n• A / an + singular (cualquier ejemplar): «A dog needs exercise».\n\nSe usa the con adjetivos para grupos: the rich, the young, the unemployed.",
      [
        ['Dogs are loyal animals.', 'Los perros son animales leales.'],
        ['The tiger is an endangered species.', 'El tigre es una especie en peligro.'],
        ['A dog needs plenty of exercise.', 'Un perro necesita mucho ejercicio.'],
        ['The young are more likely to use social media.', 'Los jóvenes usan más las redes sociales.'],
      ]
    ),
    teoria(
      '4 · Especificar: the, a / an y los determinantes',
      "Para especificar, se usa the cuando el oyente sabe a qué te refieres (ya se mencionó, es único, se aclara con la frase):\n\n• I bought a laptop and a printer. The laptop is great.\n• The unemployment figures published yesterday were alarming.\n• She is the CEO of the company. (único)\n\nA / an presenta algo nuevo o clasifica: «She is a doctor» · «He has a very good reputation».\n\nSin artículo con nombres abstractos generales: «Unemployment is rising», pero con the si se especifica.",
      [
        ['I bought a laptop and a printer. The laptop is great.', 'Compré una laptop y una impresora. La laptop es genial.'],
        ['The unemployment figures published yesterday were alarming.', 'Las cifras de desempleo publicadas ayer fueron alarmantes.'],
        ['She is the CEO of the company.', 'Ella es la directora ejecutiva de la empresa.'],
        ['Unemployment is rising in many countries.', 'El desempleo está aumentando en muchos países.'],
      ]
    ),
    teoria(
      '5 · Adverbios de actitud: mostrar lo que piensas',
      "Los adverbios terminados en -ly pueden comentar toda la frase y mostrar la actitud del hablante:\n\n• Fortunately / Unfortunately → buena o mala suerte.\n• Frankly / Honestly → sinceridad.\n• Obviously / Clearly / Evidently → evidencia.\n• Surprisingly / Strangely → sorpresa.\n• Hopefully → esperanza.\n• Apparently / Supposedly → rumor.\n\n«Unfortunately, the project was cancelled.» · «Frankly, I think it's a mistake.»",
      [
        ['Unfortunately, the project was cancelled.', 'Lamentablemente, el proyecto fue cancelado.'],
        ["Frankly, I think it's a mistake.", 'Sinceramente, creo que es un error.'],
        ['Surprisingly, nobody complained.', 'Sorprendentemente, nadie se quejó.'],
        ['Apparently, he resigned last week.', 'Al parecer, renunció la semana pasada.'],
      ]
    ),
    teoria(
      '6 · Posición de los adverbios de actitud',
      "Pueden ir al principio (con coma), en medio (antes del verbo principal) o al final (con coma):\n\n• Honestly, I didn't enjoy it.\n• I honestly didn't enjoy it.\n• I didn't enjoy it, honestly.\n\nCambia ligeramente el énfasis, no el significado. Al inicio se destaca la actitud; al final suena más coloquial. Hopefully, como comentario («Ojalá»), es común aunque algunos lo critican.",
      [
        ["Honestly, I didn't enjoy it.", 'Sinceramente, no lo disfruté.'],
        ["I honestly didn't enjoy it.", 'De verdad que no lo disfruté.'],
        ["I didn't enjoy it, honestly.", 'No lo disfruté, en serio.'],
        ["Hopefully, we'll finish on time.", 'Ojalá terminemos a tiempo.'],
      ]
    ),
    teoria(
      '7 · Estrategia: In fact y As a matter of fact',
      "💬 In fact y As a matter of fact introducen información que refuerza, corrige o sorprende respecto a lo que se acaba de decir:\n\n• Refuerzo: «I like jazz. In fact, I play the saxophone.»\n• Corrección suave: «A: You must hate flying. B: As a matter of fact, I love it.»\n• Información sorprendente: «We went to the same school. As a matter of fact, we sat next to each other.»\n\nAs a matter of fact es algo más formal y se usa al inicio o en medio de la frase.",
      [
        ['I like jazz. In fact, I play the saxophone.', 'Me gusta el jazz. De hecho, toco el saxofón.'],
        ['You must hate flying. As a matter of fact, I love it.', 'Seguro que odias volar. En realidad, me encanta.'],
        ['We went to the same school. As a matter of fact, we sat next to each other.', 'Fuimos a la misma escuela. De hecho, nos sentábamos juntos.'],
        ["It wasn't expensive. In fact, it was quite cheap.", 'No fue caro. De hecho, fue bastante barato.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Incontable', resto('some'), verbo('advice')),
    fl('Generalizar', verbo('Dogs'), aux('are'), resto('loyal')),
    fl('Adverbio de actitud', resto('Frankly,'), suj('I'), verbo('think'), resto('it is a mistake')),
    fl('In fact', resto('…'), resto('In fact,'), suj('I'), verbo('love it')),
  ],
  table: {
    cols: ['Idea', 'Forma', 'Ejemplo'],
    rows: [
      ['general (plural)', 'sin artículo', 'Dogs are loyal.'],
      ['general (incontable)', 'sin artículo', 'Life is short.'],
      ['especie', 'the + singular', 'The tiger is endangered.'],
      ['específico', 'the + sustantivo', 'The report you sent'],
      ['actitud', 'adverbio -ly', 'Unfortunately, it failed.'],
    ],
  },
  contrastCard: {
    left: { label: 'General — sin the', example: 'Unemployment is rising.', highlight: 'Unemployment' },
    right: { label: 'Específico — con the', example: 'The unemployment figures were alarming.', highlight: 'The unemployment figures' },
    caption: 'Sin the para la idea en general. Con the cuando se especifica de cuál se habla.',
  },
  quiz: [
    ejercicio(
      'She gave me some very good ___.',
      'advice',
      ['advices', 'an advice', 'a advices'],
      'advice es incontable: no tiene plural ni lleva a / an. «some very good advice» es la forma correcta.'
    ),
    ejercicio(
      '___ unemployment is rising in many countries. (in general)',
      'No article',
      ['The', 'A', 'An'],
      'Para hablar de algo en general con un sustantivo abstracto incontable no se usa artículo. the lo especificaría y a / an no se usan con incontables.'
    ),
    ejercicio(
      '___, the project was a complete failure. (the speaker is sad)',
      'Unfortunately',
      ['Unfortunate', 'Unfortunateness', 'Fortunately'],
      'Unfortunately es el adverbio que muestra la actitud de pena del hablante. Unfortunate es adjetivo, Unfortunateness es sustantivo y Fortunately expresa lo contrario.'
    ),
    ejercicio(
      'A: Do you like jazz? B: ___, I play it myself.',
      'As a matter of fact',
      ['In order', 'As a result of fact', 'By the way of fact'],
      'As a matter of fact añade información que refuerza o sorprende. Las otras opciones no son expresiones del inglés.'
    ),
    ejercicio(
      'The rich ___ not always happy.',
      'are',
      ['is', 'be', 'does'],
      'The + adjetivo se refiere a un grupo de personas y lleva verbo plural: are. is, be y does no concuerdan.'
    ),
  ],
  flashcards: [
    tarjeta('Incontables engañosos', 'advice · information · news · research · evidence · luggage · equipment\nSin plural, sin a / an: a piece of advice.'),
    tarjeta('Generalizar', 'Plural o incontable sin artículo: Dogs are loyal.\nthe + singular: The tiger is endangered.\nthe + adjetivo: the rich, the young.'),
    tarjeta('Especificar', 'the cuando el oyente sabe cuál: The report you sent.\na / an para algo nuevo: She is a doctor.'),
    tarjeta('Adverbios de actitud', 'Frankly · Unfortunately · Surprisingly · Apparently · Hopefully\nFrankly, I think it\'s a mistake.'),
    tarjeta('In fact / As a matter of fact', 'Refuerzan, corrigen suavemente o añaden un dato sorprendente.\nI like jazz. In fact, I play it.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'I imagine you hate your new job. The hours are terrible.', translation: 'Imagino que odias tu nuevo trabajo. Los horarios son terribles.' },
    { speaker: 'user', text: "As a matter of fact, I love it. Frankly, the people are what make it great.", translation: 'En realidad, me encanta. Sinceramente, la gente es lo que lo hace genial.' },
    { speaker: 'other', text: "Surprisingly, my company hasn't given us any information about the changes.", translation: 'Sorprendentemente, mi empresa no nos ha dado ninguna información sobre los cambios.' },
    { speaker: 'user', text: "Unfortunately, that's normal. Management never shares good news. In fact, I got my last promotion by accident.", translation: 'Lamentablemente es normal. La dirección nunca comparte buenas noticias. De hecho, conseguí mi último ascenso por casualidad.' },
    { speaker: 'other', text: "Apparently, the research shows that unhappy workers leave within a year.", translation: 'Al parecer, la investigación muestra que los empleados descontentos se van en un año.' },
    { speaker: 'user', text: 'Hopefully, they will take the evidence seriously.', translation: 'Ojalá se tomen en serio las pruebas.' },
  ],
  readingText: {
    title: 'The modern workplace',
    body: "Work has changed dramatically. Fifty years ago, a job meant one company for life; today experience matters more than loyalty. Unfortunately, many workers receive little training, and there is a great deal of pressure to deliver results. The young are often told that hard work leads to success. Frankly, that advice is only partly true. Research shows that connections and luck play a large part. In fact, the unemployment rate among graduates is higher than most people think. Hopefully, employers will soon realise that investing in people is not a cost but an advantage.",
    translation:
      'El trabajo ha cambiado dramáticamente. Hace cincuenta años, un empleo significaba una sola empresa de por vida; hoy la experiencia importa más que la lealtad. Lamentablemente, muchos trabajadores reciben poca capacitación y hay mucha presión para entregar resultados. A los jóvenes a menudo se les dice que el trabajo duro lleva al éxito. Sinceramente, ese consejo es solo parcialmente cierto. La investigación muestra que los contactos y la suerte juegan un papel importante. De hecho, la tasa de desempleo entre graduados es más alta de lo que la mayoría cree. Ojalá los empleadores pronto se den cuenta de que invertir en personas no es un costo sino una ventaja.',
  },
  tips: [
    "Advice, information, news, research y evidence son incontables: «a piece of advice», «The news is good».",
    "Para generalizar no uses the: «Dogs are loyal», «Life is short». Con the se especifica: «The dogs next door».",
    "Los adverbios de actitud (frankly, unfortunately, apparently) muestran lo que opinas de la frase entera.",
    "In fact y As a matter of fact refuerzan, corrigen con suavidad o añaden un dato sorprendente.",
  ],
  dailyWords: palabras('job', 'career', 'company', 'salary', 'experience', 'attention'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Artículo (Article)', ruta: '/gramatica/concepto/el-articulo-article' },
    { etiqueta: '📖 Gramática: El Sustantivo (Noun)', ruta: '/gramatica/concepto/el-sustantivo-noun' },
    { etiqueta: '📖 Gramática: El Adverbio (Adverb)', ruta: '/gramatica/concepto/el-adverbio-adverb' },
  ],
};

// ─── Unidad 5 (id 150) · Condicionales mixtos; wish y hope; What if, Suppose, Imagine; I suppose ───

const UNIDAD_150: Unit = {
  title: 'Mixed Conditionals, Wish and Hope; What If, Suppose, Imagine; I Suppose',
  topic: BLOQUE_C1_2,
  level: 'C1',
  explain: [
    teoria(
      '1 · Repaso: segundo y tercer condicional',
      "• Segundo condicional: situaciones imaginarias en el presente o futuro → if + pasado simple, would + base. «If I had more time, I would learn Italian.»\n• Tercer condicional: situaciones imaginarias en el pasado → if + pasado perfecto, would have + participio. «If I had had more time, I would have learned Italian.»\n\nLos condicionales mixtos combinan los dos tiempos cuando la condición y el resultado no pertenecen al mismo momento.",
      [
        ['If I had more time, I would learn Italian.', 'Si tuviera más tiempo, aprendería italiano.'],
        ['If I had had more time, I would have learned Italian.', 'Si hubiera tenido más tiempo, habría aprendido italiano.'],
        ['If it were easier, more people would do it.', 'Si fuera más fácil, más gente lo haría.'],
        ["If she had known, she would have told us.", 'Si lo hubiera sabido, nos lo habría dicho.'],
      ]
    ),
    teoria(
      '2 · Condicional mixto 1: pasado → presente',
      "Una condición en el PASADO (if + pasado perfecto) con un resultado en el PRESENTE (would + base):\n\n• If I had taken that job, I would be rich now.\n• If she hadn't moved abroad, she would still be here.\n• If we had saved more, we wouldn't be in debt today.\n\nSe usa para ver cómo una decisión pasada habría cambiado la situación actual.",
      [
        ['If I had taken that job, I would be rich now.', 'Si hubiera aceptado ese trabajo, ahora sería rico.'],
        ["If she hadn't moved abroad, she would still be here.", 'Si no se hubiera mudado al extranjero, todavía estaría aquí.'],
        ["If we had saved more, we wouldn't be in debt today.", 'Si hubiéramos ahorrado más, hoy no estaríamos endeudados.'],
        ["If he had studied, he'd be a doctor now.", 'Si hubiera estudiado, ahora sería médico.'],
      ]
    ),
    teoria(
      '3 · Condicional mixto 2: presente → pasado',
      "Una condición PERMANENTE o actual (if + pasado simple / were) con un resultado en el PASADO (would have + participio):\n\n• If I weren't so shy, I would have asked her to dance.\n• If he were more careful, he wouldn't have made that mistake.\n• If I spoke better English, I would have got the job.\n\nSe usa cuando una característica actual explica lo que pasó (o no pasó).",
      [
        ["If I weren't so shy, I would have asked her to dance.", 'Si no fuera tan tímido, la habría invitado a bailar.'],
        ["If he were more careful, he wouldn't have made that mistake.", 'Si fuera más cuidadoso, no habría cometido ese error.'],
        ['If I spoke better English, I would have got the job.', 'Si hablara mejor inglés, habría conseguido el trabajo.'],
        ["If she weren't afraid of flying, she would have come.", 'Si no tuviera miedo a volar, habría venido.'],
      ]
    ),
    teoria(
      '4 · Otras formas de condición',
      "Además de if existen otras conjunciones condicionales:\n\n• unless (= if not) → «Unless you study, you won't pass».\n• as long as / provided (that) / providing → «You can borrow it as long as you return it».\n• otherwise → «Study; otherwise you'll fail».\n• but for → «But for your help, I would have failed».\n• Inversión formal: «Had I known, I would have told you» · «Were she here, she'd help».",
      [
        ["Unless you study, you won't pass.", 'A menos que estudies, no aprobarás.'],
        ['You can borrow it as long as you return it.', 'Puedes pedirlo prestado siempre que lo devuelvas.'],
        ['But for your help, I would have failed.', 'De no ser por tu ayuda, habría fracasado.'],
        ['Had I known, I would have told you.', 'De haberlo sabido, te lo habría dicho.'],
      ]
    ),
    teoria(
      '5 · Wish e if only: presente, pasado y queja',
      "Wish e if only expresan deseos y arrepentimientos. El tiempo retrocede un paso:\n\n• Presente: wish + pasado simple → «I wish I had more free time».\n• Pasado: wish + pasado perfecto → «I wish I had listened».\n• Queja o deseo de cambio: wish + would → «I wish you would be quiet» (se aplica a otras personas, no a ti).\n• If only es más enfático: «If only I knew!».\n\nWish + could: «I wish I could help».",
      [
        ['I wish I had more free time.', 'Ojalá tuviera más tiempo libre.'],
        ['I wish I had listened to her.', 'Ojalá la hubiera escuchado.'],
        ['I wish you would be quiet.', 'Ojalá te callaras.'],
        ['If only I knew the answer!', '¡Ojalá supiera la respuesta!'],
      ]
    ),
    teoria(
      '6 · Hope: esperanzas reales',
      "Hope se usa para cosas que pueden ser verdad o pasar: lleva el tiempo normal (no retrocede):\n\n• I hope you feel better soon. (presente)\n• I hope it doesn't rain tomorrow. (futuro; se usa presente, no will)\n• I hope you had a nice holiday. (pasado)\n• I hope to see you soon.\n\nCompara: «I hope he comes» (puede venir) y «I wish he would come» (es improbable).",
      [
        ['I hope you feel better soon.', 'Espero que te mejores pronto.'],
        ["I hope it doesn't rain tomorrow.", 'Espero que no llueva mañana.'],
        ['I hope you had a nice holiday.', 'Espero que hayas tenido buenas vacaciones.'],
        ['I hope to see you soon.', 'Espero verte pronto.'],
      ]
    ),
    teoria(
      '7 · Estrategia: What if…?, Suppose… e Imagine…',
      "💬 Para proponer un escenario hipotético y que el otro reaccione:\n\n• What if…? → «What if we moved the meeting to Friday?» (con pasado simple = hipotético; con presente = posibilidad real).\n• Suppose / Supposing… → «Suppose they say no. What would we do?»\n• Imagine… → «Imagine you could work from anywhere.»\n\nDespués de estas expresiones se usa el pasado simple (hipótesis en el presente) o el pasado perfecto (hipótesis en el pasado): «What if we had missed the flight?».",
      [
        ['What if we moved the meeting to Friday?', '¿Y si pasáramos la reunión al viernes?'],
        ['Suppose they say no. What would we do?', 'Supón que dicen que no. ¿Qué haríamos?'],
        ['Imagine you could work from anywhere.', 'Imagina que pudieras trabajar desde cualquier lugar.'],
        ['What if we had missed the flight?', '¿Y si hubiéramos perdido el vuelo?'],
      ]
    ),
    teoria(
      '8 · Estrategia: I suppose',
      "💬 I suppose (so) suaviza una afirmación o muestra que no estás completamente seguro o convencido:\n\n• A: «Will you come tomorrow?» B: «I suppose so.» (no muy entusiasmado)\n• I suppose you're right. (aceptas a regañadientes)\n• «I suppose not.» (respuesta negativa suave)\n\nEn el medio de la frase: «She's, I suppose, the best candidate». Es distinto de I think: I suppose suena menos seguro.",
      [
        ['Will you come tomorrow? I suppose so.', '¿Vendrás mañana? Supongo que sí.'],
        ["I suppose you're right.", 'Supongo que tienes razón.'],
        ['Is it too late to change? I suppose not.', '¿Es demasiado tarde para cambiar? Supongo que no.'],
        ["She's, I suppose, the best candidate.", 'Ella es, supongo, la mejor candidata.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Mixto 1: pasado → presente', resto('If I'), aux('had taken'), resto('it,'), suj('I'), aux('would be'), verbo('rich')),
    fl('Mixto 2: presente → pasado', resto('If I'), aux('were'), resto('shy,'), suj('I'), aux('would have'), verbo('asked')),
    fl('Wish', suj('I'), verbo('wish'), suj('I'), aux('had'), verbo('time')),
    fl('Hipótesis', resto('What if'), suj('we'), verbo('moved it?')),
  ],
  table: {
    cols: ['Tipo', 'Cláusula if', 'Cláusula principal'],
    rows: [
      ['segundo', 'pasado simple', 'would + base'],
      ['tercero', 'pasado perfecto', 'would have + participio'],
      ['mixto: pasado → presente', 'pasado perfecto', 'would + base'],
      ['mixto: presente → pasado', 'pasado simple / were', 'would have + participio'],
      ['wish (presente)', 'wish + pasado simple', '—'],
      ['wish (pasado)', 'wish + pasado perfecto', '—'],
    ],
  },
  contrastCard: {
    left: { label: 'Wish — improbable o irreal', example: 'I wish he would come.', highlight: 'would come' },
    right: { label: 'Hope — posible', example: 'I hope he comes.', highlight: 'comes' },
    caption: 'Hope lleva el tiempo normal (puede ser verdad). Wish retrocede un tiempo (es irreal).',
  },
  quiz: [
    ejercicio(
      'If I had studied medicine, I ___ a doctor now.',
      'would be',
      ['would have been', 'will be', 'was'],
      'Condición en el pasado con resultado en el presente (now): would be. would have been habla del pasado, will be es futuro y was no es condicional.'
    ),
    ejercicio(
      "If she weren't so shy, she ___ him to dance last night.",
      'would have asked',
      ['would ask', 'had asked', 'will have asked'],
      'Una característica actual con un resultado en el pasado: would have + participio. would ask habla del presente y las otras formas no son condicionales.'
    ),
    ejercicio(
      'I wish I ___ more time. I am so busy.',
      'had',
      ['have', 'would have', 'had had'],
      'Un deseo sobre el presente lleva pasado simple: had. have no retrocede, would have no se usa después de wish y had had habla del pasado.'
    ),
    ejercicio(
      'I ___ you have a wonderful holiday!',
      'hope',
      ['wish', 'wished', 'hoping'],
      'Hope expresa una esperanza real y lleva el tiempo normal: «I hope you have». wish exigiría un verbo retrocedido y wished y hoping no forman la frase.'
    ),
    ejercicio(
      'A: Will he accept the offer? B: ___ so, but I am not sure.',
      'I suppose',
      ['I supposing', "I'm suppose", 'I supposed'],
      'I suppose so suaviza la respuesta y muestra duda. Las otras formas están mal construidas.'
    ),
  ],
  flashcards: [
    tarjeta('Condicionales mixtos', 'pasado → presente: If I had taken it, I would be rich now.\npresente → pasado: If I weren\'t shy, I would have asked.'),
    tarjeta('Wish e if only', 'presente: wish + pasado simple · pasado: wish + pasado perfecto\nqueja: wish + would'),
    tarjeta('Hope', 'Lleva el tiempo normal: I hope you feel better.\nNo retrocede (a diferencia de wish).'),
    tarjeta('What if, Suppose, Imagine', 'Introducen una hipótesis: What if we moved it?\nSuppose they say no. · Imagine you could…'),
    tarjeta('I suppose', 'I suppose so / I suppose not: respuesta no entusiasta.\nI suppose you\'re right.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Do you ever regret not accepting that offer in Dubai?', translation: '¿Te arrepientes alguna vez de no haber aceptado esa oferta en Dubái?' },
    { speaker: 'user', text: "Sometimes. If I had gone, I'd be earning twice as much now. But if I weren't so attached to my family, I would have gone without thinking.", translation: 'A veces. Si hubiera ido, ahora ganaría el doble. Pero si no estuviera tan apegado a mi familia, habría ido sin pensarlo.' },
    { speaker: 'other', text: "What if you applied again? Suppose they offered you a better position?", translation: '¿Y si volvieras a postular? Supón que te ofrecieran un mejor puesto.' },
    { speaker: 'user', text: 'Imagine moving at my age! I wish I were younger. Still, I hope the chance comes again.', translation: '¡Imagina mudarme a mi edad! Ojalá fuera más joven. Aun así, espero que la oportunidad vuelva.' },
    { speaker: 'other', text: 'Would your wife agree?', translation: '¿Tu esposa estaría de acuerdo?' },
    { speaker: 'user', text: "I suppose so. She'd say, \"Go, but I wish you would call every day!\"", translation: 'Supongo que sí. Diría: «Ve, ¡pero ojalá llamaras todos los días!».' },
  ],
  readingText: {
    title: 'Roads not taken',
    body: "We all wonder what would have happened if we had made different choices. If I had studied law, I would probably be earning a lot more now. If I weren't so stubborn, I would have accepted help when it was offered. Sometimes I wish I could go back and tell my younger self to relax. Yet I hope I am not too hard on myself. What if every wrong turn had led exactly where I needed to go? Suppose I had been offered everything I wanted: would I be happier? I suppose not. Imagine a life without a single regret; I doubt it would be interesting.",
    translation:
      'Todos nos preguntamos qué habría pasado si hubiéramos tomado decisiones distintas. Si hubiera estudiado derecho, probablemente ganaría mucho más ahora. Si no fuera tan terco, habría aceptado ayuda cuando me la ofrecieron. A veces desearía poder volver y decirle a mi yo más joven que se relaje. Aun así espero no ser demasiado duro conmigo mismo. ¿Y si cada giro equivocado me hubiera llevado exactamente adonde necesitaba ir? Supón que me hubieran ofrecido todo lo que quería: ¿sería más feliz? Supongo que no. Imagina una vida sin un solo arrepentimiento; dudo que fuera interesante.',
  },
  tips: [
    "Condicional mixto: if + pasado perfecto, would + base (pasado → presente); if + pasado simple, would have + participio (presente → pasado).",
    "Wish retrocede un tiempo; hope no: «I hope you feel better» / «I wish you felt better».",
    "What if…? Suppose… e Imagine… introducen una hipótesis y piden la reacción del otro.",
    "I suppose so / I suppose not responden sin entusiasmo: muestran duda o aceptación a regañadientes.",
  ],
  dailyWords: palabras('choice', 'hope', 'chance', 'luck', 'success', 'dream'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Futuro en inglés', ruta: '/gramatica/concepto/el-futuro-en-ingles' },
    { etiqueta: '📖 Gramática: Verbos Auxiliares (Auxiliary Verbs)', ruta: '/gramatica/concepto/verbos-auxiliares-auxiliary-verbs' },
  ],
};

// ─── Unidad 6 (id 151) · El futuro, modales de expectativa, suavizar con would, respuestas con think / guess ───

const UNIDAD_151: Unit = {
  title: 'Talking About the Future, Modals of Expectation; Softening with Would; I Think So',
  topic: BLOQUE_C1_2,
  level: 'C1',
  explain: [
    teoria(
      '1 · Las formas del futuro: repaso',
      "Cada forma del futuro tiene su matiz:\n\n• will → decisión, predicción, promesa: «I'll call you».\n• be going to → plan o predicción con evidencia: «I'm going to resign».\n• presente continuo → arreglo ya organizado: «I'm seeing the doctor at five».\n• presente simple → horarios: «The meeting starts at nine».\n• will be -ing → en curso en el futuro; will have + participio → completado antes de un momento.",
      [
        ["I'll call you tomorrow.", 'Te llamo mañana.'],
        ["I'm going to resign next month.", 'Voy a renunciar el mes que viene.'],
        ["I'm seeing the doctor at five.", 'Veo al médico a las cinco.'],
        ['The meeting starts at nine.', 'La reunión empieza a las nueve.'],
      ]
    ),
    teoria(
      '2 · May, might y could: posibilidad',
      "May, might y could expresan posibilidad futura. May es un poco más probable que might; could subraya que es posible:\n\n• It may rain later. (bastante posible)\n• She might not come. (menos probable)\n• We could win if we play well.\n\nNegativa: may not / might not (no could not para posibilidad). En el futuro se puede reforzar con well: «She may well be right».",
      [
        ['It may rain later.', 'Puede que llueva más tarde.'],
        ['She might not come.', 'Puede que no venga.'],
        ['We could win if we play well.', 'Podríamos ganar si jugamos bien.'],
        ['She may well be right.', 'Es muy posible que ella tenga razón.'],
      ]
    ),
    teoria(
      '3 · Expectativas y suposiciones: should, ought to, will, must',
      "• should / ought to → lo que se espera que ocurra: «The meeting should be over by now» · «She ought to be home soon».\n• will → una suposición sobre el presente («seguramente»): «That'll be the postman» · «He'll be at work now».\n• must → una deducción casi segura: «She must be exhausted».\n\nCompara: should (lo normal, esperado) / must (conclusión lógica) / will (suposición cotidiana).",
      [
        ['The meeting should be over by now.', 'La reunión debería haber terminado ya.'],
        ['She ought to be home soon.', 'Ella debería llegar pronto a casa.'],
        ["That'll be the postman.", 'Seguro que es el cartero.'],
        ['She must be exhausted after the flight.', 'Debe de estar agotada después del vuelo.'],
      ]
    ),
    teoria(
      '4 · Ofrecimientos, necesidad y peticiones',
      "• Ofrecimientos: «I'll carry that for you» · «Shall I help?» · «Would you like me to…?».\n• Necesidad: need to + verbo; don't need to / needn't (no es necesario) · «You needn't come».\n• Peticiones: «Could you…?» · «Would you mind + -ing?» · «I was wondering if you could…».\n• Permiso: may / can / could → «May I come in?».\n\nCuanto más indirecta la petición, más cortés suena.",
      [
        ["I'll carry that for you.", 'Yo se lo cargo.'],
        ["You needn't come if you're busy.", 'No hace falta que vengas si estás ocupado.'],
        ['Would you mind opening the window?', '¿Le importaría abrir la ventana?'],
        ["I was wondering if you could help me.", 'Me preguntaba si podrías ayudarme.'],
      ]
    ),
    teoria(
      '5 · Estrategia: suavizar opiniones con would y \'d',
      "💬 Would (y su contracción 'd) vuelve una opinión menos tajante y más educada:\n\n• I'd say it's a bit expensive. (en vez de «It's expensive.»)\n• I'd have thought it was obvious.\n• I'd imagine they'll agree.\n• I wouldn't say that's true.\n• It would seem that…\n\nTambién: I'd rather (preferiría) · I'd suggest (sugeriría).",
      [
        ["I'd say it's a bit expensive.", 'Yo diría que es un poco caro.'],
        ["I'd have thought it was obvious.", 'Habría pensado que era obvio.'],
        ["I'd imagine they'll agree.", 'Imagino que estarán de acuerdo.'],
        ["I wouldn't say that's true.", 'Yo no diría que eso es cierto.'],
      ]
    ),
    teoria(
      '6 · Estrategia: I think so, I don\'t think so, I guess not',
      "💬 Para responder a una pregunta de sí / no con una suposición sin repetir toda la frase:\n\n• I think so. · I don't think so. (más natural que «I think not»)\n• I guess so. · I guess not. (más informal)\n• I hope so. · I hope not.\n• I suppose so. · I suppose not.\n• I'm afraid so. · I'm afraid not. (lamento)\n\n«Will it rain? — I don't think so.» · «Is the shop open? — I guess not.»",
      [
        ["Will it rain tomorrow? I don't think so.", '¿Lloverá mañana? No lo creo.'],
        ['Is the shop still open? I guess not.', '¿Sigue abierta la tienda? Supongo que no.'],
        ['Will you get the job? I hope so.', '¿Conseguirás el trabajo? Eso espero.'],
        ["Are they late again? I'm afraid so.", '¿Otra vez llegan tarde? Me temo que sí.'],
      ]
    ),
    teoria(
      '7 · Combinar las estrategias',
      "💬 En conversaciones reales se mezclan: se suaviza la opinión y se responde con una expresión corta.\n\n• A: «Do you think they'll agree?» B: «I'd say so, yes.»\n• A: «Is it worth the price?» B: «I'd have thought so, but I'm not sure.»\n• A: «Will the plan work?» B: «I hope so, but I wouldn't bet on it.»\n\nDe esta manera se evita sonar demasiado directo, especialmente en el trabajo.",
      [
        ["Do you think they'll agree? I'd say so, yes.", '¿Crees que estarán de acuerdo? Yo diría que sí.'],
        ["Is it worth the price? I'd have thought so.", '¿Vale lo que cuesta? Yo habría pensado que sí.'],
        ["Will the plan work? I hope so, but I wouldn't bet on it.", '¿Funcionará el plan? Eso espero, pero no apostaría.'],
        ["Is he reliable? I'd imagine so.", '¿Es confiable? Imagino que sí.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Expectativa', resto('The meeting'), aux('should'), verbo('be over')),
    fl('Suposición', resto("That'll"), verbo('be'), resto('the postman')),
    fl('Suavizar', aux("I'd say"), resto('it is expensive')),
    fl('Respuesta corta', resto('I'), aux("don't think"), resto('so')),
  ],
  table: {
    cols: ['Idea', 'Estructura', 'Ejemplo'],
    rows: [
      ['posibilidad', 'may / might / could', 'It might rain.'],
      ['expectativa', 'should / ought to', 'She should be here.'],
      ['suposición', 'will', "That'll be the postman."],
      ['deducción', 'must', 'She must be tired.'],
      ['suavizar', "would / 'd", "I'd say it's expensive."],
      ['respuesta', 'I think so / I guess not', "I don't think so."],
    ],
  },
  contrastCard: {
    left: { label: 'Opinión directa', example: "It's expensive.", highlight: "It's expensive" },
    right: { label: 'Opinión suavizada', example: "I'd say it's a bit expensive.", highlight: "I'd say" },
    caption: "Con would / 'd la opinión suena más cortés y deja espacio para el desacuerdo.",
  },
  quiz: [
    ejercicio(
      'The meeting ___ be over by now. It started at nine.',
      'should',
      ['would', 'might to', 'will to'],
      'Una expectativa razonable sobre algo que ya debería haber ocurrido se expresa con should. would, might to y will to no forman esa estructura.'
    ),
    ejercicio(
      "There's the doorbell. That ___ be the postman.",
      'will',
      ['would to', 'does', 'shall'],
      "Una suposición sobre el presente se expresa con will: «That'll be the postman». would to, does y shall no forman esa suposición."
    ),
    ejercicio(
      "A: Do you think it'll rain? B: I ___ so. The sky is clear.",
      "don't think",
      ['not think', "doesn't think", 'am not thinking'],
      'La respuesta corta negativa natural es «I don\'t think so». Las otras formas no son correctas con I.'
    ),
    ejercicio(
      "I ___ say it's a bit expensive. (softening)",
      'would',
      ['am', 'does', 'has'],
      "Para suavizar una opinión se usa would (o 'd): «I would say». am, does y has no forman esa estructura."
    ),
    ejercicio(
      'A: Is he coming? B: I guess ___. He did not reply to my message.',
      'not',
      ['no', 'never', 'nothing'],
      'La respuesta corta negativa es «I guess not». no, never y nothing no forman esa estructura.'
    ),
  ],
  flashcards: [
    tarjeta('Posibilidad', 'may / might / could: It may rain. · She might not come.\nmay well: muy posible.'),
    tarjeta('Expectativas y suposiciones', "should / ought to: lo esperado\nwill: suposición (That'll be the postman)\nmust: deducción"),
    tarjeta('Peticiones corteses', 'Could you…? · Would you mind + -ing? · I was wondering if you could…'),
    tarjeta("Suavizar con would", "I'd say it's a bit expensive. · I'd imagine they'll agree.\nI wouldn't say that's true."),
    tarjeta('Respuestas cortas', "I think so / I don't think so · I guess so / I guess not\nI hope so / I hope not · I'm afraid so / not"),
  ],
  simulatedChat: [
    { speaker: 'other', text: "Do you think the new project will be finished on time?", translation: '¿Crees que el nuevo proyecto terminará a tiempo?' },
    { speaker: 'user', text: "I'd say so, but I wouldn't promise anything. It should be ready by Friday.", translation: 'Yo diría que sí, pero no prometería nada. Debería estar listo para el viernes.' },
    { speaker: 'other', text: 'And will the client be happy?', translation: '¿Y estará contento el cliente?' },
    { speaker: 'user', text: "I hope so. They might ask for changes, though. I'd imagine they will.", translation: 'Eso espero. Podrían pedir cambios, eso sí. Imagino que lo harán.' },
    { speaker: 'other', text: 'Is the director in today?', translation: '¿Está hoy la directora?' },
    { speaker: 'user', text: "I don't think so. That'll be her assistant on the phone. Would you mind waiting a minute?", translation: 'No lo creo. Esa debe ser su asistente al teléfono. ¿Le importaría esperar un minuto?' },
  ],
  readingText: {
    title: 'What the future holds',
    body: "Experts predict that more than half of today's jobs will have changed by 2040. Many companies are going to introduce automation, and some roles may disappear altogether. I'd say workers should start retraining now. The government might offer grants, though I wouldn't count on it. Next week, a conference on the future of work starts in Madrid. It ought to be interesting, and I'm presenting a paper on Thursday. Will it make a difference? I hope so. Do I think everything will improve? I don't think so, but I'd rather be prepared than surprised.",
    translation:
      'Los expertos predicen que más de la mitad de los empleos de hoy habrá cambiado para 2040. Muchas empresas van a introducir la automatización y algunos puestos podrían desaparecer por completo. Yo diría que los trabajadores deberían empezar a reciclarse ahora. El gobierno podría ofrecer ayudas, aunque no contaría con ello. La próxima semana empieza en Madrid una conferencia sobre el futuro del trabajo. Debería ser interesante y presento una ponencia el jueves. ¿Marcará la diferencia? Eso espero. ¿Creo que todo mejorará? No lo creo, pero prefiero estar preparado a que me sorprendan.',
  },
  tips: [
    "Should / ought to expresan lo que se espera; will, una suposición cotidiana; must, una deducción casi segura.",
    "Would o 'd suaviza una opinión: «I'd say it's expensive» suena más cortés que «It's expensive».",
    "La respuesta corta natural es «I don't think so», no «I think not» (que es formal).",
    "I guess / I suppose / I hope / I'm afraid + so / not responden sin repetir la frase.",
  ],
  dailyWords: palabras('plan', 'meeting', 'project', 'deadline', 'result', 'risk'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Futuro en inglés', ruta: '/gramatica/concepto/el-futuro-en-ingles' },
    { etiqueta: '📖 Gramática: Expresiones Modales', ruta: '/gramatica/concepto/expresiones-modales-semi-modals' },
  ],
};

/** Las unidades del bloque 2, por id interno. */
export const UNIDADES_BLOQUE_2: Record<number, Unit> = {
  149: UNIDAD_149,
  150: UNIDAD_150,
  151: UNIDAD_151,
};
