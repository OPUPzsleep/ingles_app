import { GramConcept } from '@/types/gramatica';

export const GRAM_CONCEPTS: GramConcept[] = [
  {
    "id": "como-estudiar-con-este-metodo",
    "cat": "estrategias",
    "title": "Cómo estudiar con este método",
    "tag": "Estrategia de estudio",
    "blocks": [
      {
        "type": "def",
        "heading": "La idea central",
        "body": "Ningún método enseña un idioma solo con leerlo. Lo que funciona —según distintos enfoques reconocidos de enseñanza de inglés, desde el \"Grammar in Use\" de Cambridge hasta \"Practical English Usage\" de Michael Swan o cursos como \"English File\"— es combinar explicación breve + práctica activa + repaso espaciado."
      },
      {
        "type": "tip",
        "body": "Practica activamente: contestar el quiz sin mirar la explicación obliga a tu cerebro a recuperar la regla de memoria, y eso es lo que realmente la fija —mucho más que releerla."
      },
      {
        "type": "tip",
        "body": "Repasa con espaciado creciente: mira una unidad hoy, repásala en 2 días, después en 5, después en 15. Por eso las Flashcards de esta app programan cuándo te conviene repasar cada tarjeta según cómo la calificaste."
      },
      {
        "type": "warn",
        "body": "Cuidado con la \"ilusión de saber\": subrayar o releer se siente productivo, pero no arma memoria a largo plazo tan bien como practicar activamente — tapar la respuesta, escribir la oración tú mismo, o explicársela a otra persona."
      },
      {
        "type": "def",
        "heading": "Ritmo recomendado",
        "body": "2 a 3 unidades por día, con su quiz. Mejor 20 minutos todos los días que 3 horas una sola vez por semana — la constancia pesa más que la cantidad."
      }
    ]
  },
  {
    "id": "antes-de-la-unidad-1-lo-esencial-si-arrancas-de-cero",
    "cat": "estrategias",
    "title": "Antes de la Unidad 1: lo esencial si arrancas de cero",
    "tag": "Repaso rápido",
    "blocks": [
      {
        "type": "def",
        "heading": "Pronombres sujeto",
        "body": "I, you, he, she, it, we, they — siempre van antes del verbo, y en inglés son obligatorios (a diferencia del español, donde se pueden omitir)."
      },
      {
        "type": "example",
        "text": "I am Ana. · You are my friend. · She is a doctor.",
        "transl": "Yo soy Ana. · Tú eres mi amigo. · Ella es doctora."
      },
      {
        "type": "def",
        "heading": "El verbo TO BE (ser/estar)",
        "body": ""
      },
      {
        "type": "table",
        "cols": [
          "Sujeto",
          "Afirmativa",
          "Negativa",
          "Pregunta"
        ],
        "rows": [
          [
            "I",
            "am (I'm)",
            "I'm not",
            "Am I…?"
          ],
          [
            "He/She/It",
            "is (He's)",
            "isn't",
            "Is he…?"
          ],
          [
            "You/We/They",
            "are (You're)",
            "aren't",
            "Are you…?"
          ]
        ]
      },
      {
        "type": "def",
        "heading": "Orden básico de la oración",
        "body": "En inglés el orden Sujeto + Verbo + Complemento es fijo."
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "Como el verbo ya indica la persona, el orden es flexible:\nYo como pizza. / Pizza como yo.",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "El orden es fijo, el sujeto siempre va primero:\nI eat pizza. ✅ / Pizza eat I. ❌"
      },
      {
        "type": "def",
        "heading": "Números y palabras de pregunta básicas",
        "body": "one, two, three, four, five, six, seven, eight, nine, ten\nwhat (qué) · where (dónde) · who (quién) · when (cuándo) · how (cómo) · why (por qué)"
      },
      {
        "type": "tip",
        "body": "Con esta base ya puedes arrancar la Unidad 1 (Present Continuous). No hace falta saber más gramática todavía — el resto lo vas a ir armando unidad por unidad."
      }
    ]
  },
  {
    "id": "errores-transversales-mas-comunes-de-hispanohablantes",
    "cat": "estrategias",
    "title": "Errores transversales más comunes de hispanohablantes",
    "tag": "Resumen de errores",
    "blocks": [
      {
        "type": "def",
        "heading": "Por qué se repiten los mismos errores",
        "body": "Muchos errores no son de una unidad puntual —son patrones que cruzan toda la gramática, porque vienen de diferencias estructurales entre español e inglés."
      },
      {
        "type": "warn",
        "body": "Doble negación: en español \"No sé nada\" es correcto. En inglés va una sola negación por oración: \"I don't know anything\" ✅ (no \"I don't know nothing\" ❌)."
      },
      {
        "type": "warn",
        "body": "Adjetivos antes del sustantivo: \"a red car\" ✅, nunca \"a car red\" ❌ —al revés que en español."
      },
      {
        "type": "warn",
        "body": "Preposiciones que no se traducen literal: depend ON (no \"of\"), married TO (no \"with\"), arrive AT/IN (sin preposición fija como el \"a\" del español). Hay que memorizarlas caso por caso."
      },
      {
        "type": "warn",
        "body": "Falsos amigos frecuentes: actually = en realidad (no \"actualmente\") · embarrassed = avergonzado (no \"embarazada\") · realize = darse cuenta (no siempre \"realizar\") · sensible = sensato (\"sensible\" en español es sensitive)."
      },
      {
        "type": "tip",
        "body": "Cuando un error se repite en varias unidades, no es casualidad —anótalo aparte. Es más rentable memorizar el patrón una vez que corregirlo oración por oración cada vez."
      }
    ]
  },
  {
    "id": "el-sustantivo-noun",
    "cat": "partes",
    "title": "El Sustantivo (Noun)",
    "tag": "Parte de la oración",
    "blocks": [
      {
        "type": "def",
        "heading": "¿Qué es?",
        "body": "Un sustantivo es una palabra que nombra a una persona, animal, lugar, cosa, idea o sentimiento. En inglés se llama noun."
      },
      {
        "type": "example",
        "text": "mesa (table) · perro (dog) · París (Paris) · libertad (freedom) · amor (love)",
        "transl": "Cosas, animales, lugares, ideas, sentimientos"
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "Los sustantivos tienen género (masculino/femenino) y número (singular/plural).\n\nel carro / la casa\nlos carros / las casas",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "Los sustantivos NO tienen género gramatical. Solo cambian en plural (generalmente +s).\n\nthe car / the house\nthe cars / the houses"
      },
      {
        "type": "def",
        "heading": "Tipos de sustantivos en inglés",
        "body": "• Contables (countable): se pueden contar → a book, two books\n• Incontables (uncountable): no se pueden contar → water, music, advice\n• Propios (proper): nombres específicos, con mayúscula → London, Maria\n• Comunes (common): nombres genéricos → city, girl, car"
      },
      {
        "type": "tip",
        "body": "En inglés, los sustantivos incontables (water, information, advice, news, furniture) NUNCA van con \"a/an\" y el verbo va en singular: \"The news IS good.\" 📰"
      },
      {
        "type": "warn",
        "body": "¡Ojo! Palabras que en español son contables, en inglés son incontables: información → information (no \"an information\"), consejo → advice (no \"an advice\")"
      }
    ]
  },
  {
    "id": "el-pronombre-pronoun",
    "cat": "partes",
    "title": "El Pronombre (Pronoun)",
    "tag": "Parte de la oración",
    "blocks": [
      {
        "type": "def",
        "heading": "¿Qué es?",
        "body": "Un pronombre es una palabra que sustituye o reemplaza a un sustantivo para evitar repetición. En inglés: pronoun."
      },
      {
        "type": "def",
        "heading": "Tipos de pronombres",
        "body": "Personales sujeto: I, you, he, she, it, we, they\nPersonales objeto: me, you, him, her, it, us, them\nPosesivos: my/mine, your/yours, his, her/hers, its, our/ours, their/theirs\nReflexivos: myself, yourself, himself, herself, itself, ourselves, themselves\nDemostrativos: this, that, these, those\nRelativos: who, which, that, whose, whom\nIndefinidos: someone, anyone, nobody, everything…"
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "El pronombre sujeto es opcional porque el verbo ya indica la persona:\n\n(Yo) hablo inglés.\n(Ella) trabaja aquí.",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "El pronombre sujeto es OBLIGATORIO. Sin él la oración no es correcta:\n\nI speak English. ✅\nSpeak English. ❌"
      },
      {
        "type": "tip",
        "body": "En inglés existe \"it\" para cosas, animales (sin género conocido), el tiempo, la hora y distancias: \"It is raining. It is 3 o'clock. It is far.\""
      },
      {
        "type": "warn",
        "body": "¡Diferencia importante! En español usamos \"usted\" formal = en inglés simplemente \"you\" (no hay diferencia formal/informal)."
      }
    ]
  },
  {
    "id": "el-verbo-verb",
    "cat": "partes",
    "title": "El Verbo (Verb)",
    "tag": "Parte de la oración",
    "blocks": [
      {
        "type": "def",
        "heading": "¿Qué es?",
        "body": "Un verbo es una palabra que expresa una acción, estado o proceso. Es el núcleo de la oración. En inglés: verb."
      },
      {
        "type": "def",
        "heading": "Formas del verbo en inglés",
        "body": "• Infinitivo (base form): to work, to eat, to go\n• Forma -ing (gerundio/participio presente): working, eating, going\n• Pasado simple: worked, ate, went\n• Participio pasado (past participle): worked, eaten, gone\n• 3ª persona singular presente: works, eats, goes"
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "Los verbos se conjugan completamente para cada persona:\n\nhablo / hablas / habla\nhablamos / habláis / hablan",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "El verbo casi no cambia. Solo agrega -s en 3ª persona singular:\n\nI work / you work / he works\nwe work / they work"
      },
      {
        "type": "tip",
        "body": "En inglés los verbos auxiliares (do, be, have, will, can, should…) son fundamentales para formar preguntas, negaciones y tiempos compuestos."
      }
    ]
  },
  {
    "id": "el-adjetivo-adjective",
    "cat": "partes",
    "title": "El Adjetivo (Adjective)",
    "tag": "Parte de la oración",
    "blocks": [
      {
        "type": "def",
        "heading": "¿Qué es?",
        "body": "Un adjetivo es una palabra que describe o califica a un sustantivo. En inglés: adjective."
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "El adjetivo va después del sustantivo y concuerda en género y número:\n\nun carro rojo\nuna casa bonita\nunos libros interesantes",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "El adjetivo va antes del sustantivo y NO cambia ni en género ni en número:\n\na red car\na beautiful house\nsome interesting books"
      },
      {
        "type": "def",
        "heading": "Tipos de adjetivos en inglés",
        "body": "• Calificativos: big, beautiful, old, red\n• Comparativos: bigger, more beautiful\n• Superlativos: the biggest, the most beautiful\n• -ing / -ed: boring/bored · interesting/interested · exciting/excited"
      },
      {
        "type": "warn",
        "body": "¡Trampa frecuente! \"I am boring\" ≠ \"I am bored\".\n→ \"I am boring\" = soy aburrido (yo causo aburrimiento en otros)\n→ \"I am bored\" = estoy aburrido (yo siento el aburrimiento)"
      }
    ]
  },
  {
    "id": "el-adverbio-adverb",
    "cat": "partes",
    "title": "El Adverbio (Adverb)",
    "tag": "Parte de la oración",
    "blocks": [
      {
        "type": "def",
        "heading": "¿Qué es?",
        "body": "Un adverbio modifica a un verbo, adjetivo u otro adverbio. Indica modo, tiempo, lugar, frecuencia o grado. En inglés: adverb."
      },
      {
        "type": "def",
        "heading": "Tipos de adverbios en inglés",
        "body": "• Modo (how): quickly, slowly, well, badly, carefully\n• Tiempo (when): now, yesterday, soon, already, still, yet\n• Lugar (where): here, there, everywhere, abroad\n• Frecuencia (how often): always, usually, often, sometimes, rarely, never\n• Grado (how much): very, quite, too, enough, rather, fairly"
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "Los adverbios de modo se forman con -mente:\n\nrápido → rápidamente\nlento → lentamente\nclaro → claramente",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "Los adverbios de modo se forman con -ly:\n\nquick → quickly\nslow → slowly\nclear → clearly"
      },
      {
        "type": "tip",
        "body": "Adverbios irregulares importantes: good → well · fast → fast · hard → hard · early → early (¡no cambian!)"
      },
      {
        "type": "def",
        "heading": "Posición de los adverbios de frecuencia",
        "body": "Van antes del verbo principal pero después de be:\nI always eat breakfast. · She never drinks coffee.\nHe is always late. · They are usually tired."
      }
    ]
  },
  {
    "id": "la-preposicion-preposition",
    "cat": "partes",
    "title": "La Preposición (Preposition)",
    "tag": "Parte de la oración",
    "blocks": [
      {
        "type": "def",
        "heading": "¿Qué es?",
        "body": "Una preposición es una palabra que expresa la relación entre dos palabras (lugar, tiempo, dirección, causa, etc.). En inglés: preposition."
      },
      {
        "type": "def",
        "heading": "Preposiciones más comunes",
        "body": "• Lugar: in, on, at, under, above, behind, between, next to, near\n• Tiempo: at (horas), on (días/fechas), in (meses/años/siglos)\n• Movimiento: to, from, into, out of, through, across, along\n• Otras: about, with, without, for, by, of, from"
      },
      {
        "type": "warn",
        "body": "¡Las preposiciones en inglés NO equivalen directamente a las del español! Muchas expresiones fijas hay que memorizar:\n• \"en el bus\" = on the bus (no \"in the bus\")\n• \"en la foto\" = in the photo (no \"on the photo\")\n• \"llegar a casa\" = arrive HOME (sin preposición)\n• \"depender de\" = depend ON (no \"depend of\")"
      },
      {
        "type": "tip",
        "body": "Las preposiciones en inglés se colocan AL FINAL de las preguntas y frases relativas: \"What are you talking ABOUT?\" / \"Who did you go with?\""
      }
    ]
  },
  {
    "id": "la-conjuncion-conjunction",
    "cat": "partes",
    "title": "La Conjunción (Conjunction)",
    "tag": "Parte de la oración",
    "blocks": [
      {
        "type": "def",
        "heading": "¿Qué es?",
        "body": "Una conjunción une palabras, frases u oraciones. En inglés: conjunction."
      },
      {
        "type": "def",
        "heading": "Conjunciones coordinantes (FANBOYS)",
        "body": "For · And · Nor · But · Or · Yet · So\n\nI like coffee and tea. · It was cold but sunny.\nShe didn't come, so I left. · Do you want tea or coffee?"
      },
      {
        "type": "def",
        "heading": "Conjunciones subordinantes",
        "body": "Tiempo: when, while, before, after, until, as soon as\nCondición: if, unless, provided that, as long as\nContraste: although, though, even though, whereas, while\nCausa: because, since, as\nPropósito: so that, in order to"
      },
      {
        "type": "tip",
        "body": "A diferencia del español, en inglés la conjunción \"because\" introduce una subordinada que responde a la pregunta \"why\". NUNCA puede usarse \"because\" para comenzar una oración completa sola: \"Because I was tired.\" ← fragmento incompleto."
      }
    ]
  },
  {
    "id": "el-articulo-article",
    "cat": "partes",
    "title": "El Artículo (Article)",
    "tag": "Parte de la oración",
    "blocks": [
      {
        "type": "def",
        "heading": "¿Qué es?",
        "body": "Un artículo es una palabra que acompaña al sustantivo e indica si es específico o no. En inglés hay solo 3 artículos: a, an, the."
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "Artículos definidos:\nel, la, los, las\n\nArtículos indefinidos:\nun, una, unos, unas\n\n(6 formas, con género y número)",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "Artículo definido:\nTHE (solo uno para todo)\n\nArtículo indefinido:\nA (antes de consonante)\nAN (antes de vocal)\n\n(3 formas, sin género)"
      },
      {
        "type": "def",
        "heading": "Cuándo usar cada uno",
        "body": "• A/AN: primera mención, no específico → I saw a dog.\n• THE: segunda mención, específico, único → The dog was big.\n• Sin artículo (zero article): general plural/incontable → I love music. Dogs are friendly."
      },
      {
        "type": "warn",
        "body": "Errores comunes de hispanohablantes:\n• \"I go to the school\" ❌ (estudiante regular) → \"I go to school\" ✅\n• \"the life is beautiful\" ❌ → \"Life is beautiful\" ✅\n• \"I play the guitar\" ✅ (instrumentos sí llevan \"the\")\n• \"I play the football\" ❌ → \"I play football\" ✅"
      }
    ]
  },
  {
    "id": "el-infinitivo-infinitive",
    "cat": "verbos",
    "title": "El Infinitivo (Infinitive)",
    "tag": "Forma verbal",
    "blocks": [
      {
        "type": "def",
        "heading": "¿Qué es?",
        "body": "El infinitivo es la forma base del verbo, sin conjugar. En inglés se forma con to + verbo base o solo el verbo base (bare infinitive)."
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "El infinitivo termina en -ar, -er, -ir:\n\nhablar · comer · vivir\n\nEs UNA sola palabra.",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "El infinitivo es to + verbo base:\n\nto speak · to eat · to live\n\nO solo la base después de modales:\ncan speak · must eat"
      },
      {
        "type": "def",
        "heading": "Cuándo se usa el infinitivo con TO",
        "body": "• Después de muchos verbos: want, need, decide, try, hope, plan, manage…\n• Después de adjetivos: easy, difficult, important, nice, happy…\n• Para expresar propósito (para): I came here to study."
      },
      {
        "type": "example",
        "text": "I want to go. · She decided to leave. · It's easy to understand.",
        "transl": "Quiero ir. · Decidió salir. · Es fácil de entender."
      },
      {
        "type": "def",
        "heading": "Cuándo se usa el infinitivo sin TO (bare infinitive)",
        "body": "• Después de verbos modales: can, could, will, would, should, must, may, might\n• Después de: let, make, help (a veces), had better"
      },
      {
        "type": "example",
        "text": "You must go. · She can speak French. · Let me help you.",
        "transl": "Debes ir. · Ella puede hablar francés. · Déjame ayudarte."
      },
      {
        "type": "tip",
        "body": "En inglés el infinitivo con \"to\" a veces puede separarse: \"I want to really understand this.\" — llamado \"split infinitive\", aunque era considerado error, hoy es aceptado."
      }
    ]
  },
  {
    "id": "el-gerundio-forma-ing-gerund",
    "cat": "verbos",
    "title": "El Gerundio / Forma -ing (Gerund)",
    "tag": "Forma verbal",
    "blocks": [
      {
        "type": "def",
        "heading": "¿Qué es?",
        "body": "La forma -ing en inglés tiene dos usos principales: como gerundio (sustantivo verbal) y como participio de presente (en tiempos continuos). En inglés: gerund / present participle."
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "El gerundio en español termina en -ando/-iendo y solo funciona como ADVERBIO o en tiempos progresivos:\n\nhablando · comiendo · viviendo\n\nEl INFINITIVO funciona como sustantivo:\n\"Nadar es saludable.\"",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "La forma -ing funciona como:\n1. SUSTANTIVO (gerundio): Swimming is healthy.\n2. En tiempos continuos: I am swimming.\n3. Después de preposiciones: before eating\n4. Después de ciertos verbos: enjoy swimming"
      },
      {
        "type": "def",
        "heading": "Verbos que van seguidos de -ing",
        "body": "enjoy · finish · mind · suggest · avoid · keep · practise · admit · deny · imagine · consider · miss · stop · give up · can't help · it's no use…"
      },
      {
        "type": "example",
        "text": "I enjoy swimming. · She finished reading. · Stop talking!",
        "transl": "Disfruto nadar. · Terminó de leer. · ¡Deja de hablar!"
      },
      {
        "type": "warn",
        "body": "¡Confusión frecuente! En español decimos \"Después de COMER\" — en inglés: \"After EATING\" (no \"after to eat\"). Después de preposiciones SIEMPRE se usa -ing."
      }
    ]
  },
  {
    "id": "el-participio-pasado-past-participle",
    "cat": "verbos",
    "title": "El Participio Pasado (Past Participle)",
    "tag": "Forma verbal",
    "blocks": [
      {
        "type": "def",
        "heading": "¿Qué es?",
        "body": "El participio pasado es la forma del verbo que se usa en tiempos perfectos y en la voz pasiva. En verbos regulares termina en -ed. Los irregulares tienen formas propias."
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "El participio pasado termina en -ado/-ido:\n\nhablar → hablado\ncomer → comido\nvivir → vivido\n\nIrregulares: hacer→hecho, decir→dicho",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "Regulares: verbo + -ed\nwork→worked · play→played\n\nIrregulares: formas propias\ngo→gone · see→seen\neat→eaten · write→written"
      },
      {
        "type": "def",
        "heading": "Usos del participio pasado",
        "body": "• Present Perfect: I have finished. She has gone.\n• Past Perfect: I had eaten before he arrived.\n• Voz Pasiva: The book was written by her.\n• Como adjetivo: a broken window · a tired face · interested students"
      },
      {
        "type": "tip",
        "body": "Los verbos irregulares más usados en inglés tienen 3 formas distintas: base / past simple / past participle\ngo / went / gone · do / did / done · see / saw / seen · eat / ate / eaten"
      }
    ]
  },
  {
    "id": "verbos-auxiliares-auxiliary-verbs",
    "cat": "verbos",
    "title": "Verbos Auxiliares (Auxiliary Verbs)",
    "tag": "Forma verbal",
    "blocks": [
      {
        "type": "def",
        "heading": "¿Qué son?",
        "body": "Los verbos auxiliares son verbos que ayudan al verbo principal a formar tiempos, preguntas, negaciones y expresar modalidad. Son fundamentales en inglés."
      },
      {
        "type": "def",
        "heading": "Auxiliares primarios",
        "body": "• BE (am/is/are/was/were): forma tiempos continuos y pasiva\n→ I am working. / It was built in 1900.\n• HAVE (have/has/had): forma tiempos perfectos\n→ She has finished. / They had left.\n• DO (do/does/did): forma preguntas y negaciones en simple\n→ Do you like it? / She doesn't know."
      },
      {
        "type": "def",
        "heading": "Verbos Modales (Modal Auxiliaries)",
        "body": "Posibilidad/Permiso: can, could, may, might\nObligación: must, have to, should, ought to\nPredicción/Voluntad: will, would, shall\n\nCaracterísticas de los modales:\n✅ Nunca llevan -s en 3ª persona: She can swim. (no \"cans\")\n✅ Van seguidos de infinitivo sin TO: You must go. (no \"to go\")\n✅ La negación va directamente: You shouldn't do that."
      },
      {
        "type": "warn",
        "body": "En español, los verbos modales son verbos completos que se conjugan (\"poder\", \"deber\", \"querer\"). En inglés son auxiliares con reglas especiales y NO se pueden conjugar normalmente."
      }
    ]
  },
  {
    "id": "verbos-frasales-phrasal-verbs",
    "cat": "verbos",
    "title": "Verbos Frasales (Phrasal Verbs)",
    "tag": "Forma verbal",
    "blocks": [
      {
        "type": "def",
        "heading": "¿Qué son?",
        "body": "Los verbos frasales son verbos formados por un verbo + partícula (preposición o adverbio). Su significado suele ser completamente diferente al de las palabras por separado."
      },
      {
        "type": "example",
        "text": "give + up = give up (rendirse) — NO \"dar arriba\" ❌\nlook + after = look after (cuidar) — NO \"mirar después\" ❌\nbreak + down = break down (averiarse) — NO \"romper abajo\" ❌",
        "transl": "¡El significado es completamente nuevo!"
      },
      {
        "type": "def",
        "heading": "Verbos frasales comunes",
        "body": "get up = levantarse · wake up = despertarse · give up = rendirse\nlook for = buscar · look after = cuidar · look forward to = esperar con ansias\nput off = posponer · turn on/off = encender/apagar\nrun into = encontrarse por accidente · bring up = criar (a un hijo)\nfind out = descubrir · give away = regalar · carry on = continuar"
      },
      {
        "type": "warn",
        "body": "¡Los verbos frasales son una de las partes más difíciles del inglés para hispanohablantes porque no se pueden traducir literalmente! Son muy comunes en conversación informal."
      },
      {
        "type": "tip",
        "body": "En inglés formal/académico se prefiere el verbo simple equivalente: \"postpone\" en vez de \"put off\", \"discover\" en vez de \"find out\", \"continue\" en vez de \"carry on\"."
      }
    ]
  },
  {
    "id": "el-presente-simple-vs-continuo",
    "cat": "tiempos",
    "title": "El Presente Simple vs. Continuo",
    "tag": "Tiempo verbal",
    "blocks": [
      {
        "type": "def",
        "heading": "La gran diferencia con el español",
        "body": "En español, el presente simple se usa para casi todo. En inglés hay que elegir entre presente simple y presente continuo según lo que se quiere expresar."
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "\"Trabajo\" puede significar:\n→ Trabajo todos los días. (hábito)\n→ Ahora mismo trabajo. (ahora)\n\n¡Una sola forma para todo!",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "Hay que elegir:\n→ I work every day. (hábito)\n→ I am working right now. (ahora)\n\n¡Dos formas distintas!"
      },
      {
        "type": "def",
        "heading": "Regla rápida",
        "body": "• Present Simple (I do): hábitos, hechos generales, verdades permanentes\n• Present Continuous (I am doing): lo que pasa AHORA, situaciones temporales, cambios en progreso"
      },
      {
        "type": "example",
        "text": "She works in a hospital. (trabajo habitual)",
        "transl": "Ella trabaja en un hospital. (siempre)"
      },
      {
        "type": "example",
        "text": "She is working from home today. (situación temporal)",
        "transl": "Ella está trabajando desde casa hoy. (solo hoy)"
      },
      {
        "type": "warn",
        "body": "¡Verbos que NO se usan en continuo! (verbos de estado): know, want, like, love, hate, need, believe, understand, remember, belong, contain, mean, seem\n\"I am knowing you\" ❌ → \"I know you\" ✅"
      }
    ]
  },
  {
    "id": "el-presente-perfecto-present-perfect",
    "cat": "tiempos",
    "title": "El Presente Perfecto (Present Perfect)",
    "tag": "Tiempo verbal",
    "blocks": [
      {
        "type": "def",
        "heading": "¿Qué es?",
        "body": "El presente perfecto es un tiempo que conecta el pasado con el presente. Se forma con have/has + participio pasado. No existe una equivalencia exacta en español."
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "En español usamos el pretérito perfecto (he + participio) de forma similar, pero también el pretérito indefinido para eventos recientes:\n\n\"He terminado.\" / \"Terminé.\"\nAmbas pueden ser válidas según el contexto o región.",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "El Present Perfect se usa cuando la acción pasada tiene relevancia o resultado en el presente:\n\n\"I have finished.\" (y por eso ahora estoy libre)\nNO se puede decir cuándo exactamente."
      },
      {
        "type": "def",
        "heading": "La regla clave",
        "body": "Si dices cuándo ocurrió → Past Simple\nSi el resultado importa ahora → Present Perfect"
      },
      {
        "type": "example",
        "text": "I lost my keys yesterday. (pasado simple — digo cuándo)",
        "transl": "Perdí mis llaves ayer."
      },
      {
        "type": "tip",
        "body": "Palabras clave del Present Perfect: ever, never, just, already, yet, recently, so far, for, since, how long\n\"Have you EVER been to Mexico?\" / \"I've JUST arrived.\" / \"I've lived here SINCE 2010.\""
      }
    ]
  },
  {
    "id": "el-pasado-simple-vs-continuo-vs-perfecto",
    "cat": "tiempos",
    "title": "El Pasado: Simple vs. Continuo vs. Perfecto",
    "tag": "Tiempo verbal",
    "blocks": [
      {
        "type": "def",
        "heading": "Los 3 pasados principales del inglés",
        "body": ""
      },
      {
        "type": "def",
        "heading": "1. Past Simple (I did) — Pretérito Indefinido",
        "body": "Para acciones completadas en un momento específico del pasado."
      },
      {
        "type": "example",
        "text": "I visited Paris in 2019. / She called me this morning.",
        "transl": "Visité París en 2019. / Ella me llamó esta mañana."
      },
      {
        "type": "def",
        "heading": "2. Past Continuous (I was doing) — Pasado Continuo",
        "body": "Para una acción que estaba en progreso en un momento del pasado, o que fue interrumpida."
      },
      {
        "type": "example",
        "text": "I was sleeping when he called.",
        "transl": "Yo estaba durmiendo cuando él llamó."
      },
      {
        "type": "def",
        "heading": "3. Past Perfect (I had done) — Pluscuamperfecto",
        "body": "Para la acción que ocurrió antes de otra acción pasada."
      },
      {
        "type": "example",
        "text": "When I arrived, she had already left.",
        "transl": "Cuando llegué, ella ya se había ido."
      },
      {
        "type": "tip",
        "body": "Regla práctica: Past Perfect = el \"pasado del pasado\". Cuando tienes DOS eventos pasados y quieres aclarar cuál fue PRIMERO, el que ocurrió antes lleva Past Perfect (had + pp)."
      }
    ]
  },
  {
    "id": "el-futuro-en-ingles",
    "cat": "tiempos",
    "title": "El Futuro en inglés",
    "tag": "Tiempo verbal",
    "blocks": [
      {
        "type": "def",
        "heading": "El inglés tiene varias formas de hablar del futuro",
        "body": "En español usamos principalmente el futuro simple o el presente con valor futuro. En inglés hay 4 formas principales y cada una tiene un uso diferente."
      },
      {
        "type": "def",
        "heading": "1. WILL — decisión espontánea / predicción",
        "body": ""
      },
      {
        "type": "example",
        "text": "'It's cold!' 'I'll close the window.' (decisión en este momento)",
        "transl": "Decisión tomada AHORA, no planeada antes."
      },
      {
        "type": "def",
        "heading": "2. GOING TO — plan o intención / predicción con evidencia",
        "body": ""
      },
      {
        "type": "example",
        "text": "I'm going to study medicine. (decisión ya tomada)\nLook at those clouds — it's going to rain! (evidencia visual)",
        "transl": "Plan ya decidido. / Predicción basada en lo que ves."
      },
      {
        "type": "def",
        "heading": "3. Present Continuous — arreglo/cita ya hecha",
        "body": ""
      },
      {
        "type": "example",
        "text": "I'm meeting Sarah at 6. (ya está organizado, en el calendario)",
        "transl": "Cita ya acordada con otra persona."
      },
      {
        "type": "def",
        "heading": "4. Present Simple — horario/timetable fijo",
        "body": ""
      },
      {
        "type": "example",
        "text": "The train leaves at 8.30. (horario oficial)",
        "transl": "Evento según un horario establecido."
      },
      {
        "type": "warn",
        "body": "¡Error común! Los hispanohablantes usamos \"will\" para todo, pero en inglés si el plan ya está hecho se usa \"going to\" o present continuous. \"Will\" = decisión tomada EN ESTE MOMENTO."
      }
    ]
  },
  {
    "id": "estructura-de-la-oracion-sentence-structure",
    "cat": "frases",
    "title": "Estructura de la Oración (Sentence Structure)",
    "tag": "Estructura",
    "blocks": [
      {
        "type": "def",
        "heading": "Orden básico: SUJETO + VERBO + OBJETO",
        "body": "En inglés, el orden de las palabras es FIJO. No se puede cambiar libremente como en español."
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "El orden es flexible:\n\nMaría come manzanas.\nCome manzanas María.\nManzanas come María.\n\nTodas son gramaticalmente posibles (aunque con diferente énfasis).",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "El orden es RÍGIDO:\n\nMaria eats apples. ✅\nEats Maria apples. ❌\nApples eats Maria. ❌\n\nSolo hay una forma correcta."
      },
      {
        "type": "def",
        "heading": "Tipos de oraciones",
        "body": "• Afirmativa: S + V + O → She likes coffee.\n• Negativa: S + aux + not + V → She doesn't like coffee.\n• Interrogativa: Aux + S + V? → Does she like coffee?\n• Interrogativa con Wh-: Wh + aux + S + V? → What does she like?"
      },
      {
        "type": "tip",
        "body": "En inglés, la posición del adverbio de tiempo suele ir AL FINAL de la oración: \"I saw him yesterday.\" (no \"Yesterday I saw him\" aunque esto también es posible para énfasis)."
      }
    ]
  },
  {
    "id": "oraciones-subordinadas-clauses",
    "cat": "frases",
    "title": "Oraciones Subordinadas (Clauses)",
    "tag": "Estructura",
    "blocks": [
      {
        "type": "def",
        "heading": "¿Qué es una cláusula?",
        "body": "Una cláusula (clause) es un grupo de palabras con sujeto y verbo. Las oraciones complejas tienen una cláusula principal y una o más cláusulas subordinadas."
      },
      {
        "type": "def",
        "heading": "Tipos de cláusulas subordinadas",
        "body": "• Adverbiales: expresan tiempo, condición, causa, contraste\n→ When I arrived, she was sleeping. (tiempo)\n→ If it rains, we'll stay home. (condición)\n→ Although she was tired, she kept working. (contraste)\n\n• Relativas (Relative clauses): describen un sustantivo\n→ The man who called you is my brother.\n→ The book that I'm reading is excellent.\n\n• Sustantivas (Noun clauses): funcionan como sustantivos\n→ I know that she is right. (objeto directo)\n→ What you said is true. (sujeto)"
      },
      {
        "type": "tip",
        "body": "En inglés, las cláusulas relativas \"defining\" (necesarias para identificar) NO llevan coma. Las cláusulas \"non-defining\" (información extra) SÍ llevan comas:\n• \"The woman who lives next door is a doctor.\" (defining — sin coma)\n• \"My sister, who lives in London, is a doctor.\" (non-defining — con comas)"
      }
    ]
  },
  {
    "id": "la-voz-pasiva-passive-voice",
    "cat": "frases",
    "title": "La Voz Pasiva (Passive Voice)",
    "tag": "Estructura",
    "blocks": [
      {
        "type": "def",
        "heading": "¿Qué es?",
        "body": "En la voz activa, el sujeto hace la acción. En la voz pasiva, el sujeto recibe la acción. En inglés: passive voice."
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Activa → Pasiva",
        "esBody": "María escribió el libro.\n↓\nEl libro fue escrito por María.\n\nSe usa mucho la forma \"SE\":\n\"Se habla inglés aquí.\"\n\"Se vendieron 100 coches.\"",
        "enLabel": "🇺🇸 Activa → Pasiva",
        "enBody": "Maria wrote the book.\n↓\nThe book was written by Maria.\n\nLa forma \"SE\" en español se traduce como pasiva:\n\"English is spoken here.\"\n\"100 cars were sold.\""
      },
      {
        "type": "def",
        "heading": "Formación: BE + participio pasado",
        "body": "Presente: The room is cleaned daily.\nPasado: The letter was sent yesterday.\nFuturo: The bridge will be built next year.\nPresente perfecto: He has been arrested."
      },
      {
        "type": "tip",
        "body": "¿Cuándo usar pasiva? Cuando el AGENTE (quien hace la acción) es desconocido, obvio o no importante. También en textos formales y científicos."
      }
    ]
  },
  {
    "id": "10-diferencias-clave-es-vs-en",
    "cat": "diferencias",
    "title": "10 Diferencias Clave ES vs EN",
    "tag": "Comparación",
    "blocks": [
      {
        "type": "def",
        "heading": "Las diferencias más importantes para hispanohablantes",
        "body": ""
      },
      {
        "type": "def",
        "heading": "1. El sujeto es obligatorio en inglés",
        "body": "ES: (Yo) hablo inglés. | EN: I speak English. ✅ / Speak English. ❌"
      },
      {
        "type": "def",
        "heading": "2. El verbo no se conjuga para cada persona",
        "body": "ES: hablo/hablas/habla/hablamos | EN: I/you/we/they speak · he/she/it speaks (solo +s)"
      },
      {
        "type": "def",
        "heading": "3. Las preguntas necesitan auxiliar",
        "body": "ES: ¿Hablas inglés? | EN: Do you speak English? (no \"Speak you English?\")"
      },
      {
        "type": "def",
        "heading": "4. El adjetivo va ANTES del sustantivo",
        "body": "ES: una casa bonita | EN: a beautiful house (no \"a house beautiful\")"
      },
      {
        "type": "def",
        "heading": "5. No hay género gramatical",
        "body": "ES: el carro (masc) / la casa (fem) | EN: the car / the house (sin género)"
      },
      {
        "type": "def",
        "heading": "6. El presente perfecto y el pasado simple son distintos",
        "body": "EN: \"I saw him.\" (pasado, terminado) ≠ \"I have seen him.\" (relevante ahora)"
      },
      {
        "type": "def",
        "heading": "7. After/before/without van seguidos de -ing",
        "body": "ES: después de comer | EN: after eating (no \"after to eat\" ❌)"
      },
      {
        "type": "def",
        "heading": "8. Los artículos tienen reglas muy distintas",
        "body": "ES: la música es bonita | EN: Music is beautiful (sin artículo para lo general)"
      },
      {
        "type": "def",
        "heading": "9. Las dobles negativas NO se usan",
        "body": "ES: No tengo nada. | EN: I don't have anything. / I have nothing. (no \"I don't have nothing\" ❌)"
      },
      {
        "type": "def",
        "heading": "10. \"ser\" y \"estar\" = solo \"be\"",
        "body": "ES: Soy de México. (origen) / Estoy cansado. (estado) | EN: I AM from Mexico. / I AM tired. (mismo verbo para todo)"
      }
    ]
  },
  {
    "id": "ser-vs-estar-be",
    "cat": "diferencias",
    "title": "Ser vs. Estar = BE",
    "tag": "Comparación",
    "blocks": [
      {
        "type": "def",
        "heading": "El problema",
        "body": "En español tenemos dos verbos para \"to be\": ser (permanente/identidad) y estar (temporal/estado/posición). En inglés solo existe BE para ambos."
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "SER (permanente):\nSoy mexicano.\nEs médico.\nLa mesa es de madera.\n\nESTAR (temporal):\nEstoy cansado.\nEstá en casa.\nEstoy estudiando.",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "BE (para todo):\nI am Mexican.\nHe is a doctor.\nThe table is made of wood.\n\n\nI am tired.\nShe is at home.\nI am studying."
      },
      {
        "type": "def",
        "heading": "Formas del verbo BE",
        "body": "Presente: am (I) · is (he/she/it) · are (you/we/they)\nPasado: was (I/he/she/it) · were (you/we/they)\nParticipio: been\nGerundio: being"
      },
      {
        "type": "tip",
        "body": "Aunque \"be\" es siempre \"be\", hay adjetivos en inglés que cambian de sentido según la situación: \"She IS boring\" (su personalidad) vs \"She IS being boring\" (su comportamiento ahora)."
      }
    ]
  },
  {
    "id": "por-para-for-to-by-in-order-to",
    "cat": "diferencias",
    "title": "Por / Para = For / To / By / In order to",
    "tag": "Comparación",
    "blocks": [
      {
        "type": "def",
        "heading": "El problema",
        "body": "En español usamos \"por\" y \"para\" para muchas cosas. En inglés estas se traducen de muchas formas diferentes según el contexto."
      },
      {
        "type": "def",
        "heading": "PARA en inglés",
        "body": "• Propósito (para + infinitivo): to / in order to\n→ Estudio para aprender. → I study to learn.\n• Destinatario: for\n→ Este regalo es para ti. → This gift is for you.\n• Dirección/destino: to / for\n→ Salgo para Madrid. → I'm leaving for Madrid."
      },
      {
        "type": "def",
        "heading": "POR en inglés",
        "body": "• Causa/razón: because of / due to\n→ Lo hice por amor. → I did it because of love.\n• Intercambio: for\n→ Lo compré por 50 pesos. → I bought it for 50 pesos.\n• Agente en pasiva: by\n→ Fue escrito por García Márquez. → It was written by García Márquez.\n• Duración: for\n→ Estudié por dos horas. → I studied for two hours."
      },
      {
        "type": "warn",
        "body": "¡No existe una regla única! \"Por\" y \"para\" se traducen de formas distintas según el contexto. Hay que aprenderlas como expresiones fijas."
      }
    ]
  },
  {
    "id": "in-on-at-preposiciones-de-lugar",
    "cat": "diferencias",
    "title": "IN / ON / AT — Preposiciones de Lugar",
    "tag": "Comparación",
    "blocks": [
      {
        "type": "def",
        "heading": "El problema",
        "body": "En español casi todo se dice con \"EN\". En inglés hay que elegir entre IN, ON y AT según cómo te imaginas el espacio, no según la traducción literal."
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "Todo con \"EN\":\nEstá en la habitación.\nEstá en la mesa.\nEstá en la puerta.",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "Se distingue el espacio:\nShe's IN the room.\nIt's ON the table.\nShe's AT the door."
      },
      {
        "type": "def",
        "heading": "La idea general",
        "body": "• IN = dentro de un espacio con límites (una habitación, una caja, una ciudad, un país)\n• ON = sobre una superficie o a lo largo de una línea (una mesa, una pared, una calle, un pasillo, un piso/planta)\n• AT = en un punto concreto, sin pensar en el tamaño del lugar (una dirección, un evento, un punto de encuentro)"
      },
      {
        "type": "tip",
        "body": "Consejo práctico — el truco del \"pasillo\": si el lugar es un espacio cerrado al que entras (una habitación, una oficina, un cuarto), usa IN: \"in the office\", \"in my bedroom\". Si hablas de algo ubicado a lo largo de un pasillo, un piso/planta o una calle (una superficie o línea, no un espacio cerrado), usa ON: \"her office is on this corridor\", \"it's on the third floor\", \"the shop is on Main Street\". No es una regla oficial de la gramática, pero es un buen recordatorio rápido: pregúntate si el lugar te \"envuelve\" (IN) o si es más bien una \"línea/superficie\" sobre la que algo se ubica (ON)."
      },
      {
        "type": "def",
        "heading": "¿Y cuándo se usa AT?",
        "body": "Usa AT cuando piensas en el lugar como un punto, no como un espacio con dimensiones: at the bus stop, at the corner, at 21 Main Street, at the party, at work, at reception."
      },
      {
        "type": "warn",
        "body": "¡Cuidado! Hay expresiones fijas que no siguen ninguna regla y hay que memorizar tal cual: \"in bed\", \"in a car\", pero \"on a bus\", \"on a train\", \"on a plane\", \"at home\", \"at school\" (cuando hablas de la actividad, no del edificio)."
      }
    ]
  },
  {
    "id": "since-for-tiempo",
    "cat": "diferencias",
    "title": "SINCE / FOR — Tiempo",
    "tag": "Comparación",
    "blocks": [
      {
        "type": "def",
        "heading": "El problema",
        "body": "En español usamos \"desde\" y \"durante/hace\" y a veces se mezclan. En inglés la diferencia es muy clara si piensas en qué tipo de información estás dando."
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "Vivo aquí desde 2020.\nVivo aquí desde hace 5 años.",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "I've lived here SINCE 2020.\nI've lived here FOR 5 years."
      },
      {
        "type": "tip",
        "body": "Consejo práctico: pregúntate si lo que sigue es un punto de partida en el calendario (una fecha, un día, un año, un momento: \"since 2020\", \"since Monday\", \"since I was a child\") → usa SINCE. Si lo que sigue es una cantidad de tiempo que puedes contar (minutos, horas, días, años: \"for two years\", \"for a while\", \"for ages\") → usa FOR. Truco rápido: si puedes poner un número antes de la palabra (2 years, 10 minutes), es FOR; si es una fecha o momento concreto en el calendario, es SINCE."
      },
      {
        "type": "warn",
        "body": "Ambas se usan casi siempre con present perfect (\"I have lived...\", \"She has worked...\"), no con presente simple como en español."
      }
    ]
  },
  {
    "id": "make-do",
    "cat": "diferencias",
    "title": "MAKE / DO",
    "tag": "Comparación",
    "blocks": [
      {
        "type": "def",
        "heading": "El problema",
        "body": "En español \"hacer\" sirve para todo. En inglés hay que elegir entre MAKE y DO, y no hay una traducción directa."
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "Hacer un pastel.\nHacer la tarea.\nHacer una decisión / decidir.\nHacer los platos.",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "MAKE a cake.\nDO homework.\nMAKE a decision.\nDO the dishes."
      },
      {
        "type": "tip",
        "body": "Consejo práctico: usa MAKE cuando al final obtienes algo nuevo, un resultado u objeto que antes no existía (make a cake, make money, make a plan, make a mistake, make noise). Usa DO para actividades, tareas o tiempo dedicado a algo, sin crear un objeto nuevo (do homework, do the shopping, do exercise, do a favor). Truco rápido: si al terminar puedes señalar \"esto\" con el dedo (un pastel, un plan, un error), probablemente es MAKE; si es una actividad o tarea general, es DO."
      },
      {
        "type": "warn",
        "body": "Hay excepciones fijas que hay que memorizar: \"make the bed\" (aunque no creas nada nuevo) y \"do business\", \"do research\"."
      }
    ]
  },
  {
    "id": "bring-take",
    "cat": "diferencias",
    "title": "BRING / TAKE",
    "tag": "Comparación",
    "blocks": [
      {
        "type": "def",
        "heading": "El problema",
        "body": "En español \"traer\" y \"llevar\" ya marcan la dirección, pero muchos hispanohablantes las confunden en inglés porque no siempre se traducen de forma intuitiva."
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "Trae tu laptop a la reunión (hacia acá).\nLleva estos documentos a la oficina (hacia allá).",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "Bring your laptop to the meeting.\nTake these documents to the office."
      },
      {
        "type": "tip",
        "body": "Consejo práctico: piensa en dónde está el hablante. BRING = mover algo hacia el lugar donde está el hablante (o donde va a estar) — va de la mano con \"come\". TAKE = mover algo lejos del hablante, hacia otro lugar — va de la mano con \"go\". Truco rápido: si combina bien con \"come here\" (bring it here), usa BRING; si combina con \"go there\" (take it there), usa TAKE."
      },
      {
        "type": "warn",
        "body": "El punto de referencia es el hablante EN ESE MOMENTO de la conversación, no la persona que escucha: \"I'll bring the food when I come to your party\" (yo llego, hacia mí).\""
      }
    ]
  },
  {
    "id": "say-tell-speak-talk",
    "cat": "diferencias",
    "title": "SAY / TELL / SPEAK / TALK",
    "tag": "Comparación",
    "blocks": [
      {
        "type": "def",
        "heading": "El problema",
        "body": "Las cuatro se traducen como \"decir/hablar\" en español, pero cada una se combina de forma distinta en inglés."
      },
      {
        "type": "compare",
        "esLabel": "🇲🇽 Español",
        "esBody": "Me dijo la verdad.\nDijo \"hola\".\nHablamos por dos horas.\nHabla inglés.",
        "enLabel": "🇺🇸 Inglés",
        "enBody": "He told me the truth.\nHe said \"hello\".\nWe talked for two hours.\nHe speaks English."
      },
      {
        "type": "tip",
        "body": "Consejo práctico: TELL siempre necesita a la persona justo después (tell + persona: tell me, tell him). SAY nunca lleva a la persona directamente después — si quieres mencionarla, necesitas \"to\" (say to me, o simplemente \"he said...\"). Truco rápido: \"TELL someone something\" / \"SAY something (to someone)\". Para SPEAK vs TALK: SPEAK suena más formal o para hablar de idiomas/discursos (speak English, speak in public); TALK es más informal, para conversaciones (talk to a friend, talk about the weekend)."
      },
      {
        "type": "warn",
        "body": "Error típico: \"Tell me\" ✅ vs \"Say me\" ❌ (incorrecto). Siempre: \"Say something to me\" o \"Tell me something\"."
      }
    ]
  },
  {
    "id": "glosario-terminos-gramaticales",
    "cat": "terminologia",
    "title": "Glosario: Términos Gramaticales",
    "tag": "Referencia",
    "blocks": [
      {
        "type": "def",
        "heading": "Español → Inglés: Términos Gramaticales",
        "body": ""
      },
      {
        "type": "table",
        "cols": [
          "ESPAÑOL",
          "ENGLISH",
          "EJEMPLO"
        ],
        "rows": [
          [
            "Sustantivo",
            "Noun",
            "book, dog, love"
          ],
          [
            "Pronombre",
            "Pronoun",
            "I, he, they, mine"
          ],
          [
            "Verbo",
            "Verb",
            "run, eat, be"
          ],
          [
            "Adjetivo",
            "Adjective",
            "big, beautiful, old"
          ],
          [
            "Adverbio",
            "Adverb",
            "quickly, very, here"
          ],
          [
            "Preposición",
            "Preposition",
            "in, on, at, by"
          ],
          [
            "Conjunción",
            "Conjunction",
            "and, but, because"
          ],
          [
            "Artículo",
            "Article",
            "a, an, the"
          ],
          [
            "Infinitivo",
            "Infinitive",
            "to speak, to go"
          ],
          [
            "Gerundio",
            "Gerund / -ing form",
            "speaking, going"
          ],
          [
            "Participio pasado",
            "Past participle",
            "spoken, gone, eaten"
          ],
          [
            "Oración / Frase",
            "Sentence / Clause",
            "She works here."
          ],
          [
            "Sujeto",
            "Subject",
            "She works here."
          ],
          [
            "Predicado",
            "Predicate",
            "She works here."
          ],
          [
            "Objeto directo",
            "Direct object",
            "She reads books."
          ],
          [
            "Objeto indirecto",
            "Indirect object",
            "Give me the book."
          ],
          [
            "Verbo auxiliar",
            "Auxiliary / Helper verb",
            "do, be, have, will"
          ],
          [
            "Verbo modal",
            "Modal verb",
            "can, must, should"
          ],
          [
            "Verbo frasal",
            "Phrasal verb",
            "give up, look after"
          ],
          [
            "Voz activa",
            "Active voice",
            "She wrote the book."
          ],
          [
            "Voz pasiva",
            "Passive voice",
            "The book was written."
          ],
          [
            "Oración relativa",
            "Relative clause",
            "the man who called"
          ],
          [
            "Singular / Plural",
            "Singular / Plural",
            "book / books"
          ],
          [
            "Contable / Incontable",
            "Countable / Uncountable",
            "apple / water"
          ]
        ]
      }
    ]
  },
  {
    "id": "tiempos-verbales-espanol-ingles",
    "cat": "terminologia",
    "title": "Tiempos Verbales: Español → Inglés",
    "tag": "Referencia",
    "blocks": [
      {
        "type": "def",
        "heading": "Equivalencias de tiempos verbales",
        "body": ""
      },
      {
        "type": "table",
        "cols": [
          "ESPAÑOL",
          "ENGLISH",
          "EJEMPLO EN"
        ],
        "rows": [
          [
            "Presente simple\nhablo",
            "Present Simple",
            "I speak"
          ],
          [
            "Presente continuo\nestoy hablando",
            "Present Continuous",
            "I am speaking"
          ],
          [
            "Pretérito perfecto\nhe hablado",
            "Present Perfect",
            "I have spoken"
          ],
          [
            "Pretérito perfecto continuo\nhe estado hablando",
            "Present Perfect Continuous",
            "I have been speaking"
          ],
          [
            "Pretérito indefinido\nhablé",
            "Past Simple",
            "I spoke"
          ],
          [
            "Pretérito imperfecto\nhablaba / estaba hablando",
            "Past Continuous / Used to",
            "I was speaking / I used to speak"
          ],
          [
            "Pluscuamperfecto\nhabía hablado",
            "Past Perfect",
            "I had spoken"
          ],
          [
            "Futuro simple\nhablaré",
            "Will + base verb",
            "I will speak"
          ],
          [
            "Futuro próximo\nvoy a hablar",
            "Going to",
            "I am going to speak"
          ],
          [
            "Condicional simple\nhablaría",
            "Would + base verb",
            "I would speak"
          ],
          [
            "Condicional perfecto\nhabría hablado",
            "Would have + past participle",
            "I would have spoken"
          ]
        ]
      }
    ]
  }
];
