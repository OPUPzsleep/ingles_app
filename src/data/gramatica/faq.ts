import type { GramBlock, GramConcept } from '@/types/gramatica';

// Categoría "Preguntas frecuentes": dudas típicas de quien aprende inglés hablando español, con su respuesta corta.
// Cada pregunta es un bloque (el encabezado es la pregunta), así se leen y se buscan una por una.

type Pregunta = [pregunta: string, respuesta: string];

const preguntas = (id: string, title: string, tag: string, lista: Pregunta[]): GramConcept => ({
  id,
  cat: 'faq',
  title,
  tag,
  blocks: lista.map(([heading, body]): GramBlock => ({ type: 'def', heading, body })),
});

export const CONCEPTOS_FAQ: GramConcept[] = [
  preguntas('faq-verbos-y-tiempos', 'Dudas sobre verbos y tiempos', 'Verbos y tiempos', [
    [
      '¿Por qué se dice «I am 25» y no «I have 25»?',
      `En inglés la edad se dice con el verbo ser (be), no con tener: I am 25 (years old). Para preguntar: How old are you? Y se contesta: I'm 25. ❌ I have 25 years.`,
    ],
    [
      '¿Por qué «she works» lleva -s y «they work» no?',
      `En presente simple solo he / she / it agregan -s (o -es) al verbo: he works, she goes, it rains. Con I / you / we / they el verbo no cambia. En preguntas y negativas esa -s pasa al auxiliar: Does she work? · She doesn't work.`,
    ],
    [
      '¿Cuándo uso do, does y did?',
      `Son auxiliares para hacer preguntas y negativas en presente simple y pasado simple:\n• do → I / you / we / they: Do you like it?\n• does → he / she / it: Does she like it?\n• did → todos, en pasado: Did they call?\nDespués va el verbo en forma base. No se usan con el verbo be ni con los modales: Are you tired? · Can you swim?`,
    ],
    [
      '¿Por qué «I didn\'t went» está mal?',
      `Con didn't (did + not) el verbo vuelve a su forma base, porque did ya marca el pasado: I didn't go ✅ · I didn't went ❌. Lo mismo en preguntas: Did you go? (no «Did you went?»).`,
    ],
    [
      '¿Qué diferencia hay entre «I went» y «I have been»?',
      `• I went = algo terminado en un momento concreto (yesterday, last year, in 2019): I went to Japan in 2019.\n• I have been = una experiencia o un resultado hasta hoy, sin decir cuándo: I have been to Japan.\nSi das una fecha, vuelve al pasado simple.`,
    ],
    [
      '¿Uso «I\'m going to» o «I will»?',
      `• be going to: planes ya decididos o predicciones con evidencia: Look at those clouds! It's going to rain.\n• will: decisiones en el momento, promesas y opiniones sobre el futuro: I'll help you. · I think it will rain.`,
    ],
    [
      '¿Cuándo uso el presente simple y cuándo el continuo?',
      `• Simple: hábitos, hechos y horarios → I work every day.\n• Continuo: lo que pasa ahora o es temporal → I'm working now.\nCon verbos de estado (know, like, want, believe, need) casi no se usa el continuo: I know ✅ · I'm knowing ❌.`,
    ],
    [
      '¿Por qué se dice «I have lived here for ten years» y no «I live here since…»?',
      `Con for / since y una situación que empezó en el pasado y sigue hoy, se usa el presente perfecto: I have lived here for ten years. · I have been waiting since eight. ❌ I live here since 2015.`,
    ],
    [
      '¿Cuándo uso «used to»?',
      `Para hábitos o estados del pasado que ya no son ciertos: I used to play football (ya no juego). Después va el verbo base. En preguntas y negativas se escribe «use to»: Did you use to…? · I didn't use to… Ojo: be used to + -ing es otra cosa (estar acostumbrado): I'm used to getting up early.`,
    ],
    [
      '¿Qué significan «gonna» y «wanna»?',
      `Son formas habladas e informales de «going to» y «want to»: I'm gonna call you = I'm going to call you. · I wanna go = I want to go. Se entienden en películas y canciones, pero en un texto formal escribe la forma completa.`,
    ],
  ]),
  preguntas('faq-preguntas-y-respuestas', 'Dudas sobre preguntas y respuestas', 'Preguntas', [
    [
      '¿Por qué «Do you can swim?» está mal?',
      `«Can» es un verbo modal: no usa do / does / did. Se invierte con el sujeto: Can you swim? Lo mismo con must, should, will, would, could, may y might.`,
    ],
    [
      '¿Cómo respondo «Do you like pizza?»?',
      `Con una respuesta corta que repite el auxiliar de la pregunta, no el verbo: Yes, I do. · No, I don't. Are you tired? Yes, I am. · Can she swim? No, she can't.`,
    ],
    [
      '¿Uso «some» o «any» en las preguntas?',
      `En preguntas normales, any: Do you have any questions? En ofrecimientos y pedidos, some: Would you like some tea? · Can I have some water?`,
    ],
    [
      '¿Cómo armo una pregunta con who, what o where?',
      `Palabra interrogativa + auxiliar + sujeto + verbo: Where do you live? · What did she say?\nExcepción: si who o what es el sujeto, no lleva auxiliar: Who called you? (no «Who did call you?»).`,
    ],
    [
      '¿Qué es un tag question (…, isn\'t it?)?',
      `Es una mini-pregunta al final para confirmar algo. Si la frase es afirmativa, el tag es negativo, y al revés, con el mismo auxiliar: You're tired, aren't you? · She doesn't like it, does she?`,
    ],
    [
      '¿Cómo pregunto la edad o el precio?',
      `How old are you? (no «How many years do you have?») · How much is it? / How much does it cost?`,
    ],
    [
      '¿Qué diferencia hay entre «what» y «which»?',
      `What: sin límite de opciones → What's your name? What do you want?\nWhich: eliges entre pocas opciones conocidas → Which do you prefer, tea or coffee?`,
    ],
    [
      '¿Cómo digo «hay» en inglés?',
      `There is (singular) y there are (plural): There is a bank near here. · There are two chairs. Con incontables se usa is: There is some milk. Pregunta: Is there…? / Are there…? Respuesta corta: Yes, there is. · No, there aren't.`,
    ],
    [
      '¿Qué contesto a «Do you mind if I sit here?»?',
      `Es un pedido cortés que pregunta si te molesta. Para decir «no hay problema» contesta: No, not at all. · No, go ahead. (Si dices «Yes», significa que sí te molesta).`,
    ],
  ]),
  preguntas('faq-sustantivos-y-articulos', 'Dudas sobre sustantivos, artículos y plurales', 'Sustantivos y artículos', [
    [
      '¿Por qué «information» no tiene plural?',
      `Es un sustantivo incontable: no lleva -s ni a/an. Di some information o a piece of information. Pasa lo mismo con advice, news, furniture, luggage, homework, money y traffic.`,
    ],
    [
      '¿«People» es singular o plural?',
      `Plural: People are friendly (no «people is»). Para una sola persona usa a person.`,
    ],
    [
      '¿Cuándo uso «the»?',
      `Cuando el que escucha sabe de cuál hablas (ya se mencionó o es único): I saw a dog. The dog was big. · the sun, the Internet. Sin artículo para hablar en general: I love music. · Dogs are friendly.`,
    ],
    [
      '¿Por qué «I go to school» y no «I go to the school»?',
      `Con lugares usados para su función (school, work, bed, church) no se usa «the»: She goes to work. · He is in bed. Con «the» hablas del edificio: I met him at the school.`,
    ],
    [
      '¿Cuáles son los plurales irregulares más comunes?',
      `man → men · woman → women · child → children · foot → feet · tooth → teeth · mouse → mice · person → people. Además: city → cities · knife → knives · wife → wives · potato → potatoes.`,
    ],
    [
      '¿Por qué «an hour» pero «a university»?',
      `Depende del sonido, no de la letra: an hour (la h es muda, suena vocal) · a university (suena «yu», como consonante). Otros: an apple · a European · an MBA.`,
    ],
    [
      '¿Cómo se forma el posesivo?',
      `Con 's: my brother's car. Si el plural ya termina en -s, solo el apóstrofo: my parents' house. Con cosas se prefiere «of»: the door of the room.`,
    ],
    [
      '¿Cuál es la diferencia entre «much» y «many»?',
      `many con contables: many books · much con incontables: much money. En afirmativas se prefiere a lot of: I have a lot of books.`,
    ],
    [
      '¿Qué artículo uso antes de un adjetivo?',
      `Depende de la palabra que va justo después: an old house (suena vocal) · a big house · an interesting book.`,
    ],
  ]),
  preguntas('faq-pronunciacion-y-ortografia', 'Dudas sobre pronunciación y ortografía', 'Pronunciación', [
    [
      '¿Por qué hay tantas letras que no suenan?',
      `El inglés escribe las palabras como se pronunciaban hace siglos. No hay una regla única, pero hay patrones: kn- suena /n/ (know) · wr- suena /r/ (write) · -mb suena /m/ (climb) · -ght suena /t/ (night).`,
    ],
    [
      '¿Cómo se pronuncia la terminación -ed?',
      `Tiene tres sonidos: /t/ después de sonidos sordos (worked, stopped), /d/ después de sonoros (played, called) y /ɪd/ después de t o d (wanted, needed).`,
    ],
    [
      '¿Cómo se pronuncia «th»?',
      `Con la punta de la lengua entre los dientes: sorda /θ/ (think, three) y sonora /ð/ (this, mother). No es ni «z» ni «d».`,
    ],
    [
      '¿Por qué «read» suena distinto en pasado?',
      `Se escribe igual pero suena distinto: presente /riːd/ y pasado o participio /red/. I read every day (/riːd/). · I read it yesterday (/red/).`,
    ],
    [
      '¿Qué diferencia hay entre «ship» y «sheep»?',
      `Una vocal corta /ɪ/ y otra larga /iː/ cambian el significado: ship /ʃɪp/ (barco) · sheep /ʃiːp/ (oveja). También bit / beat, live / leave, full / fool.`,
    ],
    [
      '¿Dónde va el acento en las palabras?',
      `En palabras de dos sílabas, los sustantivos y adjetivos suelen acentuar la primera (TAble, HAPpy) y los verbos la segunda (beGIN, reLAX). Algunas palabras cambian de significado según el acento: PREsent (regalo) / preSENT (presentar), REcord / reCORD.`,
    ],
    [
      '¿Por qué «comfortable» suena con menos sílabas?',
      `Muchas palabras «se comen» sílabas sin acento: comfortable /ˈkʌmftərbl/ · vegetable /ˈvedʒtəbl/ · Wednesday /ˈwenzdeɪ/ · interesting /ˈɪntrəstɪŋ/.`,
    ],
    [
      '¿Qué diferencia hay entre inglés americano y británico?',
      `Pronunciación (la r final, la a de dance), vocabulario (truck / lorry, apartment / flat, elevator / lift) y ortografía (color / colour). Se entienden entre sí: elige una variante y sé consistente.`,
    ],
    [
      '¿Cómo pronuncio las contracciones (I\'m, don\'t, can\'t)?',
      `Se pronuncian juntas y rápidas, como una sola palabra: I'm /aɪm/ · don't /doʊnt/ · can't /kænt/. Practícalas con las frases que tienen 🔊.`,
    ],
  ]),
  preguntas('faq-vocabulario-y-uso', 'Dudas sobre vocabulario y uso cotidiano', 'Vocabulario', [
    [
      '¿Cuál es la diferencia entre «make» y «do»?',
      `do = actividades y tareas (do homework, do the dishes, do exercise) · make = crear o producir (make a cake, make a decision, make a mistake). Hay una página con la lista en «ES vs EN».`,
    ],
    [
      '¿Cuándo uso say, tell, speak y talk?',
      `say + las palabras (She said hello) · tell + persona (She told me) · speak = idiomas y hablar de forma más formal (speak English) · talk = conversar (talk to a friend). Hay una página con la comparación en «ES vs EN».`,
    ],
    [
      '¿Cuándo uso have to, must y should?',
      `have to = obligación externa (You have to wear a uniform) · must = obligación fuerte (You must stop) · mustn't = prohibido (You mustn't smoke here) · should = consejo (You should sleep more).`,
    ],
    [
      '¿Qué significa «How do you do?»',
      `Es un saludo muy formal, equivale a «mucho gusto», y se contesta igual: How do you do? No es una pregunta por tu salud (para eso: How are you?).`,
    ],
    [
      '¿Cómo digo «extrañar» en inglés?',
      `Con miss: I miss you (te extraño). «Extraño» en el sentido de raro es strange: a strange noise.`,
    ],
    [
      '¿Cuál es la diferencia entre «borrow» y «lend»?',
      `Borrow = pedir prestado: I borrowed a pen from Ana. Lend = prestar: Ana lent me a pen.`,
    ],
    [
      '¿Cuál es la diferencia entre «bring» y «take»?',
      `bring = traer (hacia donde estoy o estaré): Bring your book to me. · take = llevar (hacia otro lugar): Take your book to school.`,
    ],
    [
      '¿Por qué «I\'m bored» y «The movie is boring» son distintos?',
      `-ed describe cómo te sientes (bored = aburrido); -ing describe lo que produce la sensación (boring = que aburre). I'm bored. · The movie is boring. ❌ The movie is bored.`,
    ],
    [
      '¿Cuándo uso «its» y cuándo «it\'s»?',
      `it's = it is / it has (con apóstrofo) · its = de él o de ella, hablando de una cosa (sin apóstrofo). It's cold. · The dog wagged its tail.`,
    ],
    [
      '¿Cuándo uso «your» y cuándo «you\'re»?',
      `you're = you are · your = tu / tus. You're late. · Is this your bag?`,
    ],
    [
      '¿Cuándo uso there, their y they\'re?',
      `there = allí o hay · their = su (de ellos) · they're = they are. They're at their house over there.`,
    ],
  ]),
  preguntas('faq-como-estudiar-mejor', 'Dudas para estudiar mejor', 'Estudio', [
    [
      '¿Por dónde empiezo en la app?',
      `Entra en Aprender, elige el nivel A1 y sigue las unidades en orden (1 a 12); al terminar cada tema, haz su quiz. Después pasa al nivel A2. En Inicio, «Continuar» te lleva a la siguiente unidad.`,
    ],
    [
      '¿Cuántas palabras nuevas debo aprender al día?',
      `Para la mayoría, 5 a 10 palabras con repaso rinden más que 30 sin repasar. El repaso espaciado de las Tarjetas está pensado para eso.`,
    ],
    [
      '¿Cómo practico speaking si no tengo con quién?',
      `Habla en voz alta: describe lo que haces («I'm making coffee»), repite las frases con 🔊, usa el dictado y graba tu voz para compararla. Cuando puedas, busca un compañero de conversación.`,
    ],
    [
      '¿Cuánto tiempo toma llegar a B1?',
      `Depende de ti. Como referencia, Cambridge estima en torno a 350 a 400 horas de estudio guiado desde cero hasta B1; con 30 minutos al día serían unos 2 años. Es una estimación: lo que más pesa es la constancia.`,
    ],
    [
      '¿Debo traducir todo al español?',
      `Traduce al comienzo, pero trata de aprender frases completas (bloques): «I'd like…», «Could you…?», «How about…?». Los bloques te hacen hablar más rápido que armar palabra por palabra.`,
    ],
    [
      '¿Cómo mejoro mi listening?',
      `Escucha a diario algo que entiendas más o menos en un 70 %, repite en voz alta lo que oyes (shadowing) y usa los 🔊 y el dictado de la app. Con el tiempo sube la dificultad.`,
    ],
    [
      '¿Qué hago si se me olvidan las palabras?',
      `Es normal. Repásalas con espaciado (a los 1, 3, 7 y 14 días), úsalas en una frase propia y asócialas con imágenes. Las tarjetas «Difíciles» te las traen más seguido.`,
    ],
    [
      '¿Cómo sé qué nivel tengo?',
      `Haz un test de nivel (por ejemplo el EF SET) y marca tu nivel en Aprender («Tu nivel»). La app recomienda unidades según ese nivel.`,
    ],
  ]),
];
