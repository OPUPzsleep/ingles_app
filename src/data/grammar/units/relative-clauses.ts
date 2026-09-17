import { Unit } from '@/types/grammar';

export const relativeClausesUnits: Record<number, Unit> = {
  "92": {
    "title": "Relative Clauses 1 (who/that/which)",
    "topic": "Relative Clauses",
    "explain": [
      {
        "head": "WHO: para personas",
        "body": "Introduce información sobre una persona, igual que el 'que' español en 'el hombre que vive al lado'. Nunca se usa con cosas. Dentro de su propia frase puede funcionar como sujeto o como objeto.",
        "note": "The man who lives next door is a doctor. · The woman who called you is my sister."
      },
      {
        "head": "WHICH: para cosas",
        "body": "Hace el mismo trabajo que 'who', pero con cosas, animales o ideas. En español usamos 'que' para todo; en inglés hay que elegir: persona → who, cosa → which. Confundirlos es el fallo más típico.",
        "note": "The book which I'm reading is great. · The car which broke down was brand new."
      },
      {
        "head": "THAT: vale para ambos",
        "body": "Sustituye tanto a 'who' como a 'which' en las frases sin comas, las que identifican de quién o de qué hablas. Es la opción más cómoda al hablar. Lo que no puede es aparecer después de una coma.",
        "note": "The man that lives next door is a doctor. · The book that I'm reading is great."
      }
    ],
    "quiz": [
      {
        "q": "The woman ___ lives next door is a teacher.",
        "opts": [
          "which",
          "who",
          "what",
          "where"
        ],
        "ans": 1,
        "exp": "Persona → 'who': 'The woman who lives next door.'"
      },
      {
        "q": "The book ___ I'm reading is very interesting.",
        "opts": [
          "who",
          "what",
          "which",
          "where"
        ],
        "ans": 2,
        "exp": "Cosa → 'which' (o 'that'): 'The book which I'm reading.'"
      }
    ],
    "flashcards": [
      {
        "front": "WHO / WHICH / THAT in relative clauses",
        "back": "WHO → people:\n'The man who called me.'\n\nWHICH → things:\n'The car which broke down.'\n\nTHAT → people or things:\n'The man that called.' / 'The car that broke down.'"
      }
    ],
    "syntaxChips": [
      { "label": "WHO — people", "chips": [
        { "text": "noun (person)", "role": "subject" }, { "text": "who", "role": "connector" }, { "text": "clause", "role": "object" }
      ] },
      { "label": "WHICH — things", "chips": [
        { "text": "noun (thing)", "role": "subject" }, { "text": "which", "role": "connector" }, { "text": "clause", "role": "object" }
      ] },
      { "label": "THAT — people or things", "chips": [
        { "text": "noun", "role": "subject" }, { "text": "that", "role": "connector" }, { "text": "clause", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "WHO (people)", "example": "The man who called you is my boss.", "highlight": "who called" },
      "right": { "label": "WHICH (things)", "example": "The car which broke down is mine.", "highlight": "which broke down" },
      "caption": "WHO only introduces clauses about people. WHICH only introduces clauses about things, animals or ideas. THAT can replace either one in defining clauses."
    },
    "readingText": {
      "title": "A Small Mystery",
      "body": "The woman who lives next to me found a strange package yesterday. It was a box which had no name on it, just an address that nobody recognised. She called her neighbour, a man who works at the police station, and he brought a colleague that specializes in these cases. Inside was an old letter which mentioned a house that had been sold thirty years ago. The man who wrote the letter, it turned out, was the woman's own grandfather.",
      "translation": "La mujer que vive al lado de mi casa encontró un paquete extraño ayer. Era una caja que no tenía ningún nombre, solo una dirección que nadie reconocía. Llamó a su vecino, un hombre que trabaja en la comisaría, y él trajo a un compañero que se especializa en estos casos. Dentro había una carta antigua que mencionaba una casa que se había vendido hace treinta años. El hombre que escribió la carta, resultó ser, era el propio abuelo de la mujer."
    },
    "tips": [
      "WHO es solo para personas y WHICH es solo para cosas — no se pueden intercambiar, aunque THAT sirve para ambos.",
      "THAT no se puede usar después de una coma (en cláusulas no definitorias) — ahí siempre hace falta who o which."
    ],
    "dailyWords": [
      { "w": "neighbour", "ipa": "/ˈneɪbər/", "aprox": "néibor", "def": "vecino/a", "ex": "My neighbour is a very kind person." },
      { "w": "package", "ipa": "/ˈpækɪdʒ/", "aprox": "pákich", "def": "paquete", "ex": "I received a package this morning." }
    ]
  },
  "93": {
    "title": "Relative Clauses 2 (with/without who/that/which)",
    "topic": "Relative Clauses",
    "explain": [
      {
        "head": "Omitir el pronombre: objeto",
        "body": "Cuando who/that/which es el OBJETO de su propia cláusula (otra persona o cosa hace la acción), puedes omitirlo sin problema. Es muy común en el habla cotidiana, donde suena más natural que incluirlo. Truco: pregunta quién hace la acción dentro de la cláusula; si no es el pronombre, se puede quitar.",
        "note": "The book (that) I'm reading is good. (that = object) · The man (who) I met was kind."
      },
      {
        "head": "No se puede omitir: sujeto",
        "body": "Cuando el pronombre relativo ES el sujeto de la cláusula (el que realiza la acción), debe quedarse siempre — quitarlo dejaría la cláusula sin sujeto. Es lo contrario del caso anterior: objeto opcional, sujeto obligatorio. Truco: si justo después va un verbo, es sujeto y no se omite.",
        "note": "The man who called me was Tom. (who = subject — cannot omit) · The book which changed my life."
      }
    ],
    "quiz": [
      {
        "q": "The hotel ___ we stayed at was very expensive.",
        "opts": [
          "—",
          "who",
          "what",
          "there"
        ],
        "ans": 0,
        "exp": "'We stayed at' → 'hotel' es el objeto de 'stayed at', así que el pronombre relativo se puede omitir."
      },
      {
        "q": "The woman ___ phoned was my sister.",
        "opts": [
          "—",
          "who",
          "what",
          "whose"
        ],
        "ans": 1,
        "exp": "'Phoned' → 'woman' es el SUJETO, así que no se puede omitir: 'who phoned'."
      }
    ],
    "flashcards": [
      {
        "front": "When can you omit who/that/which?",
        "back": "OBJECT clause → CAN omit:\n'The book (that) I read was good.' (I read it → 'that' is object)\n\nSUBJECT clause → CANNOT omit:\n'The book that changed my life.' (book changed it → 'that' is subject)"
      }
    ],
    "syntaxChips": [
      { "label": "Object clause — can omit", "chips": [
        { "text": "noun", "role": "subject" }, { "text": "(that)", "role": "connector" }, { "text": "subject + verb", "role": "object" }
      ] },
      { "label": "Subject clause — cannot omit", "chips": [
        { "text": "noun", "role": "subject" }, { "text": "who/that/which", "role": "connector" }, { "text": "verb", "role": "verb" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "Object — can omit", "example": "The book (that) I'm reading is great.", "highlight": "(that)" },
      "right": { "label": "Subject — cannot omit", "example": "The man who called me was Tom.", "highlight": "who called" },
      "caption": "When the pronoun is the OBJECT of its clause, you can drop it. When it's the SUBJECT, it must stay — otherwise the clause loses its subject."
    },
    "readingText": {
      "title": "Lost and Found",
      "body": "The wallet I found on the bus yesterday belonged to a man who lives on my street. The card inside, which had his name on it, helped me identify him quickly. The neighbour I asked for his address was very helpful — she's a woman who knows everyone around here. When I finally returned the wallet, the man I met was incredibly grateful, and the story I told him about finding it made him laugh.",
      "translation": "La cartera que encontré en el autobús ayer pertenecía a un hombre que vive en mi calle. La tarjeta de dentro, que tenía su nombre, me ayudó a identificarlo rápidamente. La vecina a la que le pregunté por su dirección fue muy amable — es una mujer que conoce a todo el mundo por aquí. Cuando finalmente devolví la cartera, el hombre que conocí estaba increíblemente agradecido, y la historia que le conté sobre cómo la encontré le hizo reír."
    },
    "tips": [
      "Truco rápido: mira la palabra justo después de who/that/which — si es un verbo, es sujeto y NO se puede quitar; si es otro sustantivo o pronombre, es objeto y sí se puede quitar.",
      "En el habla cotidiana, omitir el pronombre objeto (the book I read, not the book that I read) suena más natural que incluirlo."
    ],
    "dailyWords": [
      { "w": "wallet", "ipa": "/ˈwɒlɪt/", "aprox": "uólit", "def": "cartera, billetera", "ex": "I lost my wallet on the bus." },
      { "w": "grateful", "ipa": "/ˈɡreɪtfl/", "aprox": "gréitful", "def": "agradecido", "ex": "She was very grateful for the help." }
    ]
  },
  "94": {
    "title": "Relative Clauses 3 (whose/whom/where)",
    "topic": "Relative Clauses",
    "explain": [
      {
        "head": "WHOSE: posesivo",
        "body": "'Whose' muestra posesión (de quién es algo) y sustituye a un posesivo como 'his', 'her' o 'their'. A diferencia de 'who', puede usarse tanto con personas como con cosas. Piensa en él como fusionar dos frases: 'I know a man. His brother is famous' → 'I know a man whose brother is famous'.",
        "note": "The woman whose car was stolen is very upset. · I know a man whose brother is a famous actor."
      },
      {
        "head": "WHOM: objeto formal",
        "body": "'Whom' es la forma objeto de 'who', usada cuando la persona es el OBJETO de la cláusula. Pertenece al inglés formal o escrito; en conversación normal casi todos dicen simplemente 'who', o lo omiten directamente. Sirve sobre todo para reconocerlo al leer.",
        "note": "The man whom I met was kind. (formal) = The man I met was kind. (informal)"
      },
      {
        "head": "WHERE: lugares",
        "body": "'Where' introduce una cláusula sobre un lugar, evitando combinaciones incómodas como 'in which' o 'at which'. Funciona igual en cláusulas definitorias (identifican el lugar) y no definitorias (dan un dato extra). Es el equivalente de 'who' (personas) y 'which' (cosas), pero para lugares.",
        "note": "The city where I was born is in the south. · The hotel where we stayed was lovely."
      }
    ],
    "quiz": [
      {
        "q": "The student ___ phone rang had to leave.",
        "opts": [
          "who",
          "which",
          "whose",
          "whom"
        ],
        "ans": 2,
        "exp": "Posesivo → 'whose': 'The student whose phone rang.'"
      },
      {
        "q": "That's the restaurant ___ we had our first date.",
        "opts": [
          "which",
          "who",
          "where",
          "that"
        ],
        "ans": 2,
        "exp": "Lugar → 'where': 'the restaurant where we had our first date'."
      }
    ],
    "flashcards": [
      {
        "front": "WHOSE / WHOM / WHERE in relative clauses",
        "back": "WHOSE = possessive:\n'The man whose car was stolen.'\n\nWHOM = formal object (person):\n'The woman whom I met.' (= who I met)\n\nWHERE = place:\n'The city where I was born.'"
      }
    ],
    "syntaxChips": [
      { "label": "WHOSE — possessive", "chips": [
        { "text": "noun", "role": "subject" }, { "text": "whose", "role": "connector" }, { "text": "+ noun", "role": "object" }
      ] },
      { "label": "WHOM — formal object", "chips": [
        { "text": "noun (person)", "role": "subject" }, { "text": "whom", "role": "connector" }, { "text": "subject + verb", "role": "object" }
      ] },
      { "label": "WHERE — places", "chips": [
        { "text": "place", "role": "subject" }, { "text": "where", "role": "connector" }, { "text": "clause", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "WHOM (formal)", "example": "The man whom I met was kind.", "highlight": "whom I met" },
      "right": { "label": "WHO / no pronoun (informal)", "example": "The man I met was kind.", "highlight": "I met" },
      "caption": "WHOM is the traditional object form of who, used mainly in formal writing. In everyday speech, people usually say 'who' or simply drop the pronoun."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "Whose house is that, the big one on the corner?", "translation": "¿De quién es esa casa, la grande de la esquina?" },
      { "speaker": "user", "text": "That's the house where my grandparents used to live.", "translation": "Esa es la casa donde solían vivir mis abuelos." },
      { "speaker": "other", "text": "Really? And who's the woman whose car is parked outside?", "translation": "¿En serio? ¿Y quién es la mujer cuyo coche está aparcado fuera?" },
      { "speaker": "user", "text": "That's my aunt, the one whom I told you about last week.", "translation": "Esa es mi tía, de la que te hablé la semana pasada." }
    ],
    "tips": [
      "WHOSE muestra posesión (de quién es algo) y puede usarse tanto con personas como con cosas — no lo confundas con 'who's' (who is).",
      "WHOM casi ha desaparecido del inglés hablado; en conversación normal se usa 'who' o simplemente se omite el pronombre."
    ],
    "dailyWords": [
      { "w": "grandparents", "ipa": "/ˈɡrænpeərənts/", "aprox": "gránpearents", "def": "abuelos", "ex": "My grandparents live in the countryside." },
      { "w": "aunt", "ipa": "/ɑːnt/", "aprox": "aant", "def": "tía", "ex": "My aunt is visiting us this weekend." }
    ]
  },
  "95": {
    "title": "Relative Clauses 4 (extra information)",
    "topic": "Relative Clauses",
    "explain": [
      {
        "head": "Cláusulas no definitorias",
        "body": "Una cláusula no definitoria añade información extra, no esencial, sobre algo ya identificado del todo — la frase tendría sentido sin ella. Por eso va entre comas, como un inciso. Se diferencia de las definitorias, que no llevan comas porque su información es imprescindible.",
        "note": "My brother, who lives in London, is a doctor. (extra info — I only have one brother) · Paris, which is the capital of France, is beautiful."
      },
      {
        "head": "Definitorias vs no definitorias",
        "body": "Las comas indican el tipo de cláusula: sin comas es definitoria (esencial para saber de quién o qué hablamos); con comas es no definitoria (info extra y prescindible, como con 'my sister'). Truco: quita la cláusula mentalmente — si cambia el significado, es definitoria; si solo pierdes un dato, no lo es.",
        "note": "'The woman who called me is my sister.' (needed — which woman?) · 'My sister, who called me, is a teacher.' (extra info)"
      }
    ],
    "quiz": [
      {
        "q": "My sister, ___ is a doctor, lives in Paris.",
        "opts": [
          "that",
          "which",
          "who",
          "whose"
        ],
        "ans": 2,
        "exp": "No definitoria (info extra, con comas) + persona → 'who'. ('That' nunca se usa en no definitorias)."
      },
      {
        "q": "The man ___ called was my boss.",
        "opts": [
          "who",
          ", who,",
          "which",
          "that,"
        ],
        "ans": 0,
        "exp": "Cláusula definitoria (necesaria para identificar al hombre) → sin comas, 'who'."
      }
    ],
    "flashcards": [
      {
        "front": "Defining vs Non-defining relative clauses",
        "back": "DEFINING (no comma) = needed to identify:\n'The man who stole my bag was arrested.'\n\nNON-DEFINING (commas) = extra info:\n'My brother, who lives in London, is a doctor.'\n\nNote: NEVER use 'that' in non-defining clauses!"
      }
    ],
    "syntaxChips": [
      { "label": "Defining (no commas)", "chips": [
        { "text": "noun", "role": "subject" }, { "text": "who/that/which", "role": "connector" }, { "text": "essential info", "role": "object" }
      ] },
      { "label": "Non-defining (commas)", "chips": [
        { "text": "noun", "role": "subject" }, { "text": ", who/which,", "role": "connector" }, { "text": "extra info", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "Defining (essential)", "example": "The woman who called me is my sister.", "highlight": "who called me" },
      "right": { "label": "Non-defining (extra info)", "example": "My sister, who called me, is a teacher.", "highlight": ", who called me," },
      "caption": "No commas = the clause is essential to know WHICH person or thing is meant. Commas = the clause just adds extra, removable detail."
    },
    "readingText": {
      "title": "Meeting the Family",
      "body": "My brother, who lives in London, came to visit us last weekend. He brought his girlfriend, whose name is Clara, and we all had dinner together. The restaurant where we ate, which is famous for its seafood, was fully booked, but the waiter who took our reservation found us a table anyway. My mother, who rarely goes out, was thrilled to meet Clara, and the friend who introduced them years ago was there too, laughing about how it all started.",
      "translation": "Mi hermano, que vive en Londres, vino a visitarnos el fin de semana pasado. Trajo a su novia, cuyo nombre es Clara, y todos cenamos juntos. El restaurante donde comimos, que es famoso por sus mariscos, estaba completo, pero el camarero que tomó nuestra reserva nos encontró una mesa de todos modos. Mi madre, que rara vez sale, estaba encantada de conocer a Clara, y el amigo que los presentó hace años también estaba allí, riéndose de cómo empezó todo."
    },
    "tips": [
      "Prueba rápida: quita la cláusula mentalmente — si cambia a quién o qué te refieres, es definitoria (sin comas); si solo pierdes un dato extra, es no definitoria (con comas).",
      "THAT nunca se usa en cláusulas no definitorias — en esos casos hace falta who o which, aunque hables de una persona."
    ],
    "dailyWords": [
      { "w": "reservation", "ipa": "/ˌrezəˈveɪʃn/", "aprox": "rezervéishon", "def": "reserva", "ex": "We made a reservation for eight o'clock." },
      { "w": "thrilled", "ipa": "/θrɪld/", "aprox": "zrild", "def": "encantado, emocionadísimo", "ex": "She was thrilled to see her old friend." }
    ]
  },
  "96": {
    "title": "Relative Clauses 5 (-ing and -ed clauses)",
    "topic": "Relative Clauses",
    "explain": [
      {
        "head": "-ING sustituye verbo activo",
        "body": "Cuando la cláusula usa who/which + forma continua activa (is/are/was + -ing), se puede acortar quitando el pronombre y el verbo 'be', dejando solo el gerundio. El -ing por sí solo ya comunica una acción activa en curso, de forma más económica. Para significado pasivo se usa -ed (ver abajo).",
        "note": "The man who is standing in the corner → The man standing in the corner. · The car which is parked outside → The car parked outside."
      },
      {
        "head": "-ED sustituye verbo pasivo",
        "body": "Cuando la cláusula usa who/which + verbo pasivo (was/were/is + participio), se acorta igual pero conservando el participio pasado, regular o irregular ('written', 'built'). El participio indica que el sustantivo recibe la acción, no la realiza. Es el espejo del -ing: activo → -ing, pasivo → -ed.",
        "note": "The letter which was written by Tom → The letter written by Tom. · The bridge that was built in 1900 → The bridge built in 1900."
      }
    ],
    "quiz": [
      {
        "q": "The woman ___ in the corner is my colleague. (who is sitting)",
        "opts": [
          "seated",
          "sitting",
          "sat",
          "to sit"
        ],
        "ans": 1,
        "exp": "Verbo activo → -ing: 'the woman sitting in the corner'."
      },
      {
        "q": "The car ___ outside belongs to Tom. (which was parked)",
        "opts": [
          "parking",
          "to park",
          "parked",
          "parks"
        ],
        "ans": 2,
        "exp": "Verbo pasivo → -ed: 'the car parked outside'."
      }
    ],
    "flashcards": [
      {
        "front": "-ing vs -ed to shorten relative clauses",
        "back": "-ING replaces who/which + ACTIVE verb:\n'The man standing there' (= who is standing)\n\n-ED replaces who/which + PASSIVE verb:\n'The letter written by Tom' (= which was written)"
      }
    ],
    "syntaxChips": [
      { "label": "who/which + is -ing → -ing", "chips": [
        { "text": "noun", "role": "subject" }, { "text": "-ing verb", "role": "verb" }
      ] },
      { "label": "who/which + was pp → -ed/pp", "chips": [
        { "text": "noun", "role": "subject" }, { "text": "past participle", "role": "verb" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "-ING (active)", "example": "The man standing in the corner is my uncle.", "highlight": "standing" },
      "right": { "label": "-ED (passive)", "example": "The letter written by Tom arrived today.", "highlight": "written" },
      "caption": "-ING replaces 'who/which is/was' + active verb. -ED (past participle) replaces 'who/which is/was' + passive verb."
    },
    "readingText": {
      "title": "At the Exhibition",
      "body": "The woman standing near the entrance is the artist herself. The paintings hanging on the wall behind her were all finished last year. Next to them, there's a sculpture made from old bicycle parts, created by a local student. The photographs displayed in the smaller room were taken during her trip to Japan, and the letter written by her grandmother, which inspired the whole exhibition, is kept in a glass box near the door.",
      "translation": "La mujer que está de pie cerca de la entrada es la propia artista. Los cuadros colgados en la pared detrás de ella se terminaron todos el año pasado. Al lado, hay una escultura hecha con piezas viejas de bicicleta, creada por un estudiante local. Las fotografías expuestas en la sala más pequeña se tomaron durante su viaje a Japón, y la carta escrita por su abuela, que inspiró toda la exposición, se guarda en una caja de cristal cerca de la puerta."
    },
    "tips": [
      "Si el sustantivo HACE la acción, usa -ING (the man talking = who is talking); si la RECIBE, usa el participio pasado (the letter written = which was written).",
      "Con verbos irregulares, el participio pasado no siempre termina en -ed: 'built', 'written', 'made' funcionan igual que 'painted' o 'parked'."
    ],
    "dailyWords": [
      { "w": "exhibition", "ipa": "/ˌeksɪˈbɪʃn/", "aprox": "eksibíshon", "def": "exposición", "ex": "We visited an art exhibition last Sunday." },
      { "w": "sculpture", "ipa": "/ˈskʌlptʃər/", "aprox": "skálpcher", "def": "escultura", "ex": "The sculpture in the garden is beautiful." }
    ]
  },
  "97": {
    "title": "-ing and -ed Clauses",
    "topic": "Relative Clauses",
    "explain": [
      {
        "head": "-ING: significado activo",
        "body": "Poner un gerundio justo después de un sustantivo equivale a decir 'who/which is/was' + esa acción, sin necesitar el pronombre ni 'be'. Solo funciona cuando el sustantivo HACE la acción, no cuando la recibe. Es muy frecuente en noticias y descripciones cotidianas.",
        "note": "The man talking to Sarah is my brother. (= who is talking) · Police stopped a car driving the wrong way."
      },
      {
        "head": "-ED: significado pasivo",
        "body": "Un participio pasado (regular o irregular, como 'injured' o 'written') justo después de un sustantivo comprime 'who/which is/was' + participio, con significado PASIVO: el sustantivo recibe la acción. Es el espejo del -ing: uno marca quien actúa, el otro quien la recibe.",
        "note": "The boy injured in the accident is in hospital. (= who was injured) · Documents written in English are accepted."
      },
      {
        "head": "¿Para qué sirven?",
        "body": "Además de ser más cortas, estas cláusulas evitan repetir 'who/which/that + be' una y otra vez, algo que suena forzado al describir varias cosas seguidas. Por eso aparecen tanto en noticias y textos formales. Saber reconocerlas al leer es tan importante como saber producirlas.",
        "note": "The people invited to the party all came. (= who were invited)"
      }
    ],
    "quiz": [
      {
        "q": "The woman ___ to the manager is my aunt.",
        "opts": [
          "talk",
          "talking",
          "talked",
          "talks"
        ],
        "ans": 1,
        "exp": "Significado activo → cláusula con -ing."
      },
      {
        "q": "The window ___ in the storm needs fixing.",
        "opts": [
          "breaking",
          "break",
          "broken",
          "breaks"
        ],
        "ans": 2,
        "exp": "Significado pasivo (the window was broken) → cláusula con -ed."
      },
      {
        "q": "Do you know the man ___ over there?",
        "opts": [
          "standing",
          "stood",
          "stand",
          "stands"
        ],
        "ans": 0,
        "exp": "Activo → -ing."
      }
    ],
    "flashcards": [
      {
        "front": "-ING (active) vs -ED (passive) clauses",
        "back": "-ING = active: \"the man SPEAKING\" (who is speaking)\n-ED = passive: \"the language SPOKEN here\" (which is spoken)"
      }
    ],
    "syntaxChips": [
      { "label": "-ING = active meaning", "chips": [
        { "text": "noun", "role": "subject" }, { "text": "-ing verb", "role": "verb" }, { "text": "(= who/which is doing)", "role": "connector" }
      ] },
      { "label": "-ED = passive meaning", "chips": [
        { "text": "noun", "role": "subject" }, { "text": "past participle", "role": "verb" }, { "text": "(= who/which is done to)", "role": "connector" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "-ING (doer)", "example": "Police stopped a car driving the wrong way.", "highlight": "driving" },
      "right": { "label": "-ED (receiver)", "example": "The boy injured in the accident is in hospital.", "highlight": "injured" },
      "caption": "-ING marks the noun as the one DOING the action. -ED (past participle) marks the noun as the one the action happens TO."
    },
    "readingText": {
      "title": "Local News: Morning Update",
      "body": "Police stopped a car driving the wrong way on the motorway this morning. The driver, a man travelling to work, was not injured. Meanwhile, the boy injured in yesterday's accident near the school is recovering well in hospital, according to doctors treating him. Documents written in three languages were found in his bag, but the people investigating the case have not yet identified him. Residents living nearby say they heard nothing unusual overnight.",
      "translation": "La policía detuvo esta mañana a un coche que conducía en dirección contraria en la autopista. El conductor, un hombre que iba camino al trabajo, no resultó herido. Mientras tanto, el chico herido en el accidente de ayer cerca del colegio se está recuperando bien en el hospital, según los médicos que lo atienden. Se encontraron documentos escritos en tres idiomas en su bolsa, pero las personas que investigan el caso todavía no lo han identificado. Los vecinos que viven cerca dicen que no oyeron nada fuera de lo común durante la noche."
    },
    "tips": [
      "Estas cláusulas reducidas son muy comunes en noticias y textos formales porque evitan repetir 'who/which is/was' una y otra vez.",
      "Pregúntate siempre: ¿el sustantivo hace la acción (-ing) o la recibe (participio pasado)? Esa es la única regla que necesitas."
    ],
    "dailyWords": [
      { "w": "motorway", "ipa": "/ˈməʊtəweɪ/", "aprox": "móuteuei", "def": "autopista (inglés británico)", "ex": "There was an accident on the motorway this morning." },
      { "w": "resident", "ipa": "/ˈrezɪdənt/", "aprox": "rézident", "def": "residente, vecino", "ex": "Local residents complained about the noise." }
    ]
  }
};
