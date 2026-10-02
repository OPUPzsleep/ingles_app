import type { GramConcept } from '@/types/gramatica';

// Categoría "Complementos de la oración": palabras y frases que no son una de las 8 partes clásicas, pero que
// completan o enlazan una oración (able to, instead, however, at least…). Mismo formato que concepts.ts.
export const CONCEPTOS_COMPLEMENTOS: GramConcept[] = [
  {
    id: 'palabras-de-enlace-linking-words',
    cat: 'complementos',
    title: 'Palabras de Enlace (Linking Words)',
    tag: 'Conectores',
    blocks: [
      {
        type: 'def',
        heading: '¿Qué son?',
        body: `Las palabras de enlace conectan una oración con la anterior y muestran cómo se relacionan las ideas: suman información, contrastan, dan una causa o un resultado, o marcan el orden. No cambian la estructura de la oración: la complementan. En inglés: linking words, connectors o transition words.`,
      },
      {
        type: 'table',
        cols: ['Función', 'Palabras', 'En español'],
        rows: [
          ['Sumar', 'also · besides · moreover · in addition', 'además'],
          ['Contrastar', 'but · however · yet · on the other hand', 'pero · sin embargo · por otro lado'],
          ['Reemplazar', 'instead', 'en su lugar · en cambio'],
          ['Causa', 'because · since · as', 'porque · ya que'],
          ['Resultado', 'so · therefore · as a result', 'así que · por lo tanto · como resultado'],
          ['Si no…', 'otherwise · or else', 'de lo contrario · si no'],
          ['Orden', 'first · then · next · after that · finally', 'primero · luego · después · por último'],
          ['Al mismo tiempo', 'meanwhile · in the meantime', 'mientras tanto'],
          ['Ejemplo', 'for example · for instance', 'por ejemplo'],
        ],
      },
      {
        type: 'def',
        heading: 'INSTEAD = en su lugar',
        body: `«Instead» reemplaza una opción por otra. Va solo (sin «of»), al final de la oración o al principio con una coma:\n• I didn't call her. I sent a message instead.\n• I didn't call her. Instead, I sent a message.\nSi después viene un sustantivo o un verbo en -ing, se usa INSTEAD OF (mira «Locuciones Preposicionales»).`,
      },
      {
        type: 'compare',
        esLabel: '🌎 Español',
        esBody: `pero → une dos ideas en una sola oración\n\nsin embargo → abre una oración nueva`,
        enLabel: '🇺🇸 Inglés',
        enBody: `but → It was cold, but we went out.\n\nhowever → It was cold. However, we went out.`,
      },
      {
        type: 'def',
        heading: 'ALSO / TOO / AS WELL = también',
        body: `• also va antes del verbo principal (y después de be): She also speaks French. / He is also a teacher.\n• too y as well van al final: She speaks French too. / She speaks French as well.\n• En negativo se usa either: I don't like it either. ❌ I don't like it too.`,
      },
      {
        type: 'warn',
        body: `Errores comunes:\n• ❌ It was late, however I stayed. → ✅ It was late. However, I stayed. (o con punto y coma: It was late; however, I stayed.) «However» no une dos oraciones solo con una coma.\n• «So» une dos oraciones: It was raining, so we stayed in. «Therefore» es más formal y abre la oración con una coma: Therefore, we stayed in.`,
      },
      {
        type: 'example',
        text: `I wanted to go out. However, it was raining. Instead, we watched a film. Meanwhile, the kids played games.`,
        transl: `Quería salir. Sin embargo, estaba lloviendo. En su lugar, vimos una película. Mientras tanto, los niños jugaron.`,
      },
      {
        type: 'tip',
        body: `Cuando besides, however, therefore, instead, otherwise o meanwhile abren una oración, se escribe una coma después: «Otherwise, we'll be late.»`,
      },
    ],
  },
  {
    id: 'locuciones-preposicionales-complex-prepositions',
    cat: 'complementos',
    title: 'Locuciones Preposicionales (Complex Prepositions)',
    tag: 'Preposiciones compuestas',
    blocks: [
      {
        type: 'def',
        heading: '¿Qué son?',
        body: `Son grupos de dos o tres palabras que funcionan como una sola preposición (casi siempre terminan en of, to o from). Después van un sustantivo, un pronombre o un verbo en -ing. En español equivalen a locuciones como «en lugar de», «a causa de» o «de acuerdo con». En inglés: complex prepositions.`,
      },
      {
        type: 'table',
        cols: ['Locución', 'Significado', 'Ejemplo'],
        rows: [
          ['instead of', 'en lugar de', 'We walked instead of taking the bus.'],
          ['because of', 'a causa de · por', 'The match was cancelled because of the rain.'],
          ['due to', 'debido a', 'The delay was due to bad weather.'],
          ['according to', 'según', 'According to the news, it will rain.'],
          ['in spite of · despite', 'a pesar de', 'We went out in spite of the cold.'],
          ['apart from', 'aparte de · excepto', 'Everyone came apart from Tom.'],
          ['as well as', 'además de · así como', 'She speaks English as well as French.'],
          ['such as', 'como · tal como', 'I love fruit such as mangoes.'],
          ['thanks to', 'gracias a', 'Thanks to you, I passed the exam.'],
          ['in front of', 'delante de', "There's a car in front of the house."],
          ['next to', 'al lado de · junto a', 'The bank is next to the school.'],
        ],
      },
      {
        type: 'def',
        heading: 'INSTEAD vs INSTEAD OF',
        body: `• instead (solo) cierra la idea: I didn't go out. I stayed home instead.\n• instead of + sustantivo o -ing: I stayed home instead of going out. / We had tea instead of coffee.\n❌ instead of go → ✅ instead of going`,
      },
      {
        type: 'warn',
        body: `BECAUSE vs BECAUSE OF:\n• because + oración completa (sujeto + verbo): We stayed in because it was raining.\n• because of + sustantivo: We stayed in because of the rain.\n❌ because the rain · ❌ because of it was raining`,
      },
      {
        type: 'compare',
        esLabel: '🌎 Español',
        esBody: `a pesar de\n(siempre lleva «de»)`,
        enLabel: '🇺🇸 Inglés',
        enBody: `in spite OF → lleva of\ndespite → NO lleva of\n\n✅ Despite the rain\n❌ Despite of the rain`,
      },
      {
        type: 'tip',
        body: `Después de una preposición, el verbo va en -ing: instead of going · apart from being tired · as well as working.`,
      },
      {
        type: 'example',
        text: `She went to work in spite of feeling ill, instead of staying in bed.`,
        transl: `Fue a trabajar a pesar de sentirse mal, en lugar de quedarse en la cama.`,
      },
    ],
  },
  {
    id: 'expresiones-modales-semi-modals',
    cat: 'complementos',
    title: 'Expresiones Modales (able to, have to…)',
    tag: 'Semi-modales',
    blocks: [
      {
        type: 'def',
        heading: '¿Qué son?',
        body: `Son expresiones de varias palabras que hacen el trabajo de un verbo modal (poder, tener que, ir a…) pero se conjugan como verbos normales, con be, have o do. Complementan al verbo principal, que va en infinitivo con TO. Sirven donde can o must no tienen la forma que necesitas: el futuro, el presente perfecto o después de otro verbo. En inglés: semi-modals.`,
      },
      {
        type: 'table',
        cols: ['Expresión', 'Significado', 'Ejemplo'],
        rows: [
          ['be able to', 'poder · ser capaz de', "I'm able to swim 500 meters."],
          ['have to', 'tener que (obligación)', 'I have to work tomorrow.'],
          ['be allowed to', 'tener permiso para', "We aren't allowed to park here."],
          ['be supposed to', 'se supone que · debería', "You're supposed to arrive at nine."],
          ['be going to', 'ir a (plan o predicción)', "We're going to travel in July."],
          ['used to', 'solía · antes (hábito pasado)', 'I used to live in Lima.'],
          ['had better', 'más te vale · mejor que', "You'd better hurry."],
          ['would rather', 'preferiría', "I'd rather stay home."],
        ],
      },
      {
        type: 'def',
        heading: 'BE ABLE TO = poder · ser capaz de',
        body: `Se conjuga con be: am/is/are able to · was/were able to · will be able to · have been able to. Úsalo cuando CAN no tiene la forma que necesitas:\n• Futuro: I will be able to help you next week. ❌ I will can help you.\n• Presente perfecto: I haven't been able to sleep. ❌ I haven't could sleep.\n• Después de otro verbo: I want to be able to speak English.\nPara «no poder» también existe unable to (más formal): I'm unable to attend.`,
      },
      {
        type: 'compare',
        esLabel: '🌎 Español',
        esBody: `podía / sabía\n(capacidad general)\n\npude / logré\n(una vez, con éxito)`,
        enLabel: '🇺🇸 Inglés',
        enBody: `could\nWhen I was young, I could run fast.\n\nwas able to\nThe fire spread, but we were able to escape.`,
      },
      {
        type: 'tip',
        body: `En negativo vale couldn't en los dos casos: I couldn't find it (no pude encontrarlo).`,
      },
      {
        type: 'warn',
        body: `HAVE TO vs MUST en negativo:\n• don't have to = no hace falta (no es obligatorio): You don't have to come.\n• mustn't = está prohibido: You mustn't touch that.\n• Must no tiene pasado: se usa had to → I had to leave early.`,
      },
      {
        type: 'def',
        heading: 'Otras con BE + adjetivo + TO',
        body: `• be about to = estar a punto de: The film is about to start.\n• be likely to = ser probable que: It's likely to rain.\n• be willing to = estar dispuesto a: I'm willing to help.\n• be ready to = estar listo para: Are you ready to go?`,
      },
      {
        type: 'tip',
        body: `used to + verbo = solía: I used to smoke. · be used to + -ing o sustantivo = estar acostumbrado a: I'm used to getting up early. Si ves -ing, es be used to.`,
      },
      {
        type: 'example',
        text: `I wasn't able to call you yesterday because I had to finish a report. I'll be able to talk tomorrow.`,
        transl: `Ayer no pude llamarte porque tuve que terminar un informe. Mañana podré hablar.`,
      },
    ],
  },
  {
    id: 'frases-adverbiales-adverbial-phrases',
    cat: 'complementos',
    title: 'Frases Adverbiales (Adverbial Phrases)',
    tag: 'Expresiones comunes',
    blocks: [
      {
        type: 'def',
        heading: '¿Qué son?',
        body: `Son grupos de dos o tres palabras que funcionan como un adverbio: dicen cuándo, cómo, con qué frecuencia o con qué actitud pasa algo. Completan la oración y suelen poder ir al inicio o al final. En inglés: adverbial phrases.`,
      },
      {
        type: 'table',
        cols: ['Frase', 'Significado', 'Ejemplo'],
        rows: [
          ['at least', 'al menos', "At least it didn't rain."],
          ['at all', 'en absoluto · para nada', "I didn't like it at all."],
          ['in fact · actually', 'de hecho · en realidad', "In fact, I've already finished."],
          ['by the way', 'por cierto', 'By the way, Ana called.'],
          ['of course', 'por supuesto · claro', 'Of course you can come.'],
          ['at first', 'al principio', 'At first, I was nervous.'],
          ['at last', 'por fin', 'At last, the bus is here!'],
          ['so far', 'hasta ahora', 'So far, so good.'],
          ['on purpose', 'a propósito (adrede)', 'He broke it on purpose.'],
          ['by mistake', 'por error · sin querer', 'I deleted it by mistake.'],
          ['all the time', 'todo el tiempo · siempre', 'She is on her phone all the time.'],
          ['from time to time', 'de vez en cuando', 'We eat out from time to time.'],
        ],
      },
      {
        type: 'def',
        heading: 'IN THE END vs AT THE END (OF)',
        body: `• in the end = al final, finalmente (después de un proceso): We argued, but in the end we agreed.\n• at the end of + algo = en la parte final de algo: at the end of the film · at the end of the month.`,
      },
      {
        type: 'compare',
        esLabel: '🌎 Español',
        esBody: `puntual, a la hora\n\na tiempo\n(antes de que sea tarde)`,
        enLabel: '🇺🇸 Inglés',
        enBody: `on time\nThe train left on time.\n\nin time\nI got there in time to catch it.`,
      },
      {
        type: 'warn',
        body: `En español «a propósito» sirve para dos ideas; en inglés son dos frases distintas:\n• por cierto → by the way: By the way, Ana called.\n• adrede → on purpose: He did it on purpose.`,
      },
      {
        type: 'warn',
        body: `Falso amigo: «actually» NO es «actualmente».\n• Actually, I live in Lima. = En realidad, vivo en Lima.\n• I currently live in Lima. = Actualmente vivo en Lima.`,
      },
      {
        type: 'tip',
        body: `«At all» va al final y se usa en negativas y preguntas: I didn't like it at all. · Do you mind at all? ❌ I like it at all.`,
      },
    ],
  },
  {
    id: 'determinantes-y-cuantificadores-determiners',
    cat: 'complementos',
    title: 'Determinantes y Cuantificadores (Determiners)',
    tag: 'Cantidad',
    blocks: [
      {
        type: 'def',
        heading: '¿Qué son?',
        body: `Los determinantes van antes del sustantivo y dicen cuál es o cuánto hay: artículos (a, the), demostrativos (this, that), posesivos (my, your) y cuantificadores (some, any, much, many…). Los cuantificadores dependen de si el sustantivo es contable (books, friends) o incontable (water, money, time). En inglés: determiners y quantifiers.`,
      },
      {
        type: 'table',
        cols: ['Cuantificador', 'Con qué se usa', 'Ejemplo'],
        rows: [
          ['many', 'contables (plural)', 'How many books do you have?'],
          ['much', 'incontables', 'How much water do you drink?'],
          ['a lot of · lots of', 'los dos tipos', 'She has a lot of friends and a lot of money.'],
          ['(a) few', 'contables: pocos', 'a few friends · few friends'],
          ['(a) little', 'incontables: poco', 'a little milk · little time'],
          ['some', 'afirmativas y ofrecimientos', 'I have some money. · Would you like some tea?'],
          ['any', 'negativas y preguntas', "I don't have any money. · Do you have any plans?"],
          ['enough', 'los dos tipos', "We don't have enough chairs."],
          ['too much · too many', 'demasiado (incontable · contable)', 'too much noise · too many cars'],
          ['no', 'ninguno (el verbo va en afirmativa)', 'I have no time.'],
          ['all · every · each', 'todo · cada', 'all the students · every day · each student'],
        ],
      },
      {
        type: 'def',
        heading: 'A FEW / A LITTLE vs FEW / LITTLE',
        body: `• a few / a little = algunos / un poco → sentido positivo (hay algo): I have a few friends here. · I have a little time.\n• few / little (sin «a») = muy pocos / casi nada → sentido negativo: Few people came. · There is little hope.`,
      },
      {
        type: 'def',
        heading: 'SOME / ANY / NO',
        body: `• some → afirmativas: There is some milk. También en ofrecimientos y pedidos: Would you like some coffee? Can I have some water?\n• any → negativas y preguntas: There isn't any milk. Is there any milk?\n• no = not any: There is no milk. (el verbo va en afirmativa: no se juntan dos negaciones)`,
      },
      {
        type: 'warn',
        body: `«Much» casi no se usa en afirmativas: ✅ I have a lot of money. ❌ I have much money. Con much / many se prefieren las negativas y las preguntas: I don't have much time. · How many people came?`,
      },
      {
        type: 'warn',
        body: `Incontables que en español parecen contables: advice, information, news, furniture, luggage, homework, traffic, weather… No llevan -s ni «a/an»: ✅ some advice · a piece of advice ❌ an advice · advices. Y «people» es plural: People are friendly (no «people is»).`,
      },
      {
        type: 'tip',
        body: `Para contar un incontable usa una medida: a piece of news · a glass of water · a bottle of milk · a slice of bread.`,
      },
      {
        type: 'example',
        text: `I don't have much time, but I have a few ideas. Is there any coffee left? Yes, there is a little.`,
        transl: `No tengo mucho tiempo, pero tengo unas cuantas ideas. ¿Queda café? Sí, queda un poco.`,
      },
    ],
  },
  {
    id: 'frases-para-opinar-acordar-y-reaccionar',
    cat: 'complementos',
    title: 'Frases para Opinar, Acordar y Reaccionar',
    tag: 'Conversación',
    blocks: [
      {
        type: 'def',
        heading: '¿Para qué sirven?',
        body: `Son frases cortas que usas en una conversación para dar tu opinión, decir si estás de acuerdo o reaccionar a lo que dice otra persona. Se aprenden como bloques completos, no palabra por palabra.`,
      },
      {
        type: 'table',
        cols: ['Para…', 'Frase', 'En español'],
        rows: [
          ['dar tu opinión', "In my opinion, … · I think (that) … · I believe …", 'En mi opinión… · Creo que… · Creo que…'],
          ['estar de acuerdo', "I agree. · Exactly! · You're right. · I couldn't agree more.", 'Estoy de acuerdo. · ¡Exacto! · Tienes razón. · Totalmente de acuerdo.'],
          ['no estar de acuerdo', "I disagree. · I don't think so. · I'm not sure about that.", 'No estoy de acuerdo. · No lo creo. · No estoy seguro de eso.'],
          ['dudar', "I'm not sure. · It depends. · Maybe. · Perhaps.", 'No estoy seguro. · Depende. · Quizás.'],
          ['pedir una opinión', 'What do you think? · How about you? · Do you agree?', '¿Qué piensas? · ¿Y tú? · ¿Estás de acuerdo?'],
          ['mostrar sorpresa', "Really? · No way! · Are you serious? · That's amazing!", '¿En serio? · ¡No puede ser! · ¿Hablas en serio? · ¡Qué increíble!'],
          ['mostrar empatía', "I'm sorry to hear that. · That's too bad. · Poor you!", 'Lamento oírlo. · Qué pena. · ¡Pobrecito!'],
          ['alegrarte por alguien', "Congratulations! · That's great news! · I'm so happy for you.", '¡Felicitaciones! · ¡Qué buena noticia! · Me alegro mucho por ti.'],
          ['ganar tiempo', 'Let me think. · Well… · Let me see.', 'Déjame pensar. · Bueno… · A ver…'],
          ['cambiar de tema', 'By the way, … · Anyway, … · Speaking of …, …', 'Por cierto… · En fin… · Hablando de…'],
        ],
      },
      {
        type: 'warn',
        body: `❌ I am agree → ✅ I agree. «Agree» es un verbo (no se usa con «am»). Tampoco «according to me»: di «in my opinion» o «I think».`,
      },
      {
        type: 'compare',
        esLabel: '🌎 Español',
        esBody: `Creo que es buena idea.\n(opinión)\n\nEstoy pensando en mis vacaciones.\n(proceso)`,
        enLabel: '🇺🇸 Inglés',
        enBody: `I think it's a good idea.\n\nI'm thinking about my vacation.`,
      },
      {
        type: 'tip',
        body: `Para suavizar un desacuerdo: «I see your point, but…» · «You may be right, but…» · «I'm afraid I don't agree.»`,
      },
      {
        type: 'example',
        text: `— I think the film was great. Do you agree? — Not really. I liked the actors, but the story was boring. — I see your point, but I enjoyed it.`,
        transl: `— Creo que la película estuvo genial. ¿Estás de acuerdo? — No mucho. Me gustaron los actores, pero la historia fue aburrida. — Entiendo, pero yo la disfruté.`,
      },
    ],
  },
];
