import { Unit } from '@/types/grammar';

export const modalVerbsUnits: Record<number, Unit> = {
  "26": {
    "title": "Can, Could and (be) Able to",
    "topic": "Modal Verbs",
    "level": "A2",
    "explain": [
      {
        "head": "Can: habilidad o posibilidad",
        "body": "Usamos 'can' para habilidades y posibilidades generales en el presente: destrezas físicas (nadar, hablar un idioma) o hechos posibles en general. La misma palabra sirve para una habilidad personal o una verdad general — el contexto aclara cuál es.",
        "note": "I can swim. · Can you speak French? · The weather can be cold here."
      },
      {
        "head": "Could: habilidad general en pasado",
        "body": "'Could' es el pasado de 'can' y describe una habilidad que tenías durante un tiempo, no un logro puntual. Para UN éxito concreto en una ocasión se usa 'was/were able to'. Confundir ambos es un error muy común.",
        "note": "When I was young, I could run very fast. · She could speak three languages."
      },
      {
        "head": "Was/were able to: logro puntual",
        "body": "Para un logro concreto en una ocasión específica, sobre todo algo difícil, se usa 'was/were able to' en vez de 'could'. Marca un evento real con resultado, no una habilidad general: 'could' es la capacidad general, 'was able to' el logro puntual.",
        "note": "The fire spread, but everyone was able to escape. · I was able to find a parking space."
      },
      {
        "head": "Be able to: en otros tiempos",
        "body": "'Can' y 'could' son modales sin todos los tiempos (no existe futuro de 'can'). 'Be able to' los sustituye donde falten, conjugándose como un verbo normal: will be able to, have been able to, to be able to.",
        "note": "I will be able to help you tomorrow. · I've never been able to understand maths."
      }
    ],
    "syntaxChips": [
      {
        "label": "Present ability",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "can",
            "role": "verb"
          },
          {
            "text": "base verb",
            "role": "object"
          }
        ]
      },
      {
        "label": "Past ability (general)",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "could",
            "role": "verb"
          },
          {
            "text": "base verb",
            "role": "object"
          }
        ]
      },
      {
        "label": "Past success (specific)",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "was/were able to",
            "role": "verb"
          },
          {
            "text": "base verb",
            "role": "object"
          }
        ]
      },
      {
        "label": "Future ability",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "will be able to",
            "role": "verb"
          },
          {
            "text": "base verb",
            "role": "object"
          }
        ]
      }
    ],
    "contrastCard": {
      "left": {
        "label": "COULD — general",
        "example": "She could speak three languages when she was a diplomat.",
        "highlight": "could speak"
      },
      "right": {
        "label": "WAS ABLE TO — one success",
        "example": "After months of practice, she was able to pass the exam.",
        "highlight": "was able to pass"
      },
      "caption": "\"Could\" describes a general or repeated ability in the past. For ONE specific achievement, use \"was/were able to\" instead."
    },
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Can you speak any other languages?",
        "translation": "¿Sabes hablar algún otro idioma?"
      },
      {
        "speaker": "user",
        "text": "Yes, I can speak a bit of French.",
        "translation": "Sí, sé hablar un poco de francés."
      },
      {
        "speaker": "other",
        "text": "Could you always speak it, even as a kid?",
        "translation": "¿Siempre lo supiste hablar, incluso de niño?"
      },
      {
        "speaker": "user",
        "text": "Not really — but I was able to learn it fast at university.",
        "translation": "La verdad no — pero pude aprenderlo rápido en la universidad."
      }
    ],
    "tips": [
      "En inglés hablado, \"could\" suena más natural que \"was able to\" cuando cuentas una historia general del pasado.",
      "\"Can't\" y \"can\" a veces suenan casi igual en inglés rápido — escucha la vocal: can /kən/ (débil) vs can't /kænt/ (fuerte)."
    ],
    "dailyWords": [
      {
        "w": "ability",
        "ipa": "/əˈbɪləti/",
        "aprox": "abíliti",
        "def": "habilidad, capacidad",
        "ex": "She has a natural ability for languages."
      },
      {
        "w": "manage to",
        "ipa": "/ˈmænɪdʒ tuː/",
        "aprox": "mánich tu",
        "def": "lograr (con esfuerzo)",
        "ex": "I managed to finish on time."
      }
    ],
    "table": {
      "cols": [
        "Time",
        "Ability",
        "Negative"
      ],
      "rows": [
        [
          "Present",
          "can do",
          "can't do"
        ],
        [
          "Past (general)",
          "could do",
          "couldn't do"
        ],
        [
          "Past (specific success)",
          "was able to do",
          "wasn't able to do"
        ],
        [
          "Future",
          "will be able to",
          "won't be able to"
        ]
      ]
    },
    "quiz": [
      {
        "q": "The fire spread, but everyone ___ escape.",
        "opts": [
          "could",
          "was able to",
          "can",
          "managed"
        ],
        "ans": 1,
        "exp": "Logro puntual en el pasado → 'was able to escape'."
      },
      {
        "q": "When I was a child, I ___ climb trees very quickly.",
        "opts": [
          "was able to",
          "can",
          "could",
          "am able to"
        ],
        "ans": 2,
        "exp": "Habilidad general en el pasado → 'could'."
      },
      {
        "q": "'___ you help me for a moment, please?'",
        "opts": [
          "Can",
          "Could",
          "Are able",
          "Shall"
        ],
        "ans": 1,
        "exp": "'Could you help me?' es más cortés que 'Can you help me?'"
      },
      {
        "q": "I looked everywhere but I ___ find my passport.",
        "opts": [
          "couldn't",
          "can't",
          "wasn't able",
          "mustn't"
        ],
        "ans": 0,
        "exp": "Incapacidad en el pasado → 'couldn't find'."
      }
    ],
    "flashcards": [
      {
        "front": "Could vs Was/Were Able To (past)",
        "back": "COULD = general past ability:\n'I could swim when I was five.'\n\nWAS/WERE ABLE TO = specific past success:\n'I was able to swim across the river.' ✅\n'I could swim across the river.' ❌ (specific event)"
      }
    ]
  },
  "27": {
    "title": "Could (do) and Could Have (done)",
    "topic": "Modal Verbs",
    "level": "B2",
    "explain": [
      {
        "head": "Could do: posibilidad presente/futura",
        "body": "Usamos 'could' para algo posible ahora o en el futuro, sin comprometerte como algo seguro — más suave que decir que lo harás. Aquí 'could' apunta hacia adelante, a diferencia de los usos de pasado de este mismo tema.",
        "note": "I could go now if you want. · We could try a different approach."
      },
      {
        "head": "Could have done: posibilidad no realizada",
        "body": "'Could have done' describe algo que era posible en el pasado pero nunca ocurrió, a menudo con matiz de reproche: 'You could have called me!' implica que pudiste hacerlo y no quisiste. Se opone a 'was/were able to', que sí ocurrió.",
        "note": "You could have called me! (but you didn't) · She could have passed if she'd studied."
      },
      {
        "head": "Couldn't have done: imposibilidad pasada",
        "body": "'Couldn't have done' es el negativo de 'could have done': expresa certeza de que algo NO pudo pasar, según la evidencia — no es simple incapacidad. 'It couldn't have been Tom' significa que estamos seguros de que no fue él.",
        "note": "It couldn't have been Tom — he was abroad. · The letter couldn't have arrived already."
      }
    ],
    "quiz": [
      {
        "q": "You ___ told me earlier! I didn't know.",
        "opts": [
          "could",
          "could have",
          "should",
          "ought"
        ],
        "ans": 1,
        "exp": "Posibilidad pasada no realizada → 'could have told'."
      },
      {
        "q": "It ___ been Emma — she was at work all day.",
        "opts": [
          "couldn't have",
          "couldn't",
          "can't have",
          "can't"
        ],
        "ans": 0,
        "exp": "Imposibilidad en el pasado → 'couldn't have been'."
      },
      {
        "q": "I'm free this evening. We ___ go out if you want.",
        "opts": [
          "could",
          "could have",
          "should have",
          "might have"
        ],
        "ans": 0,
        "exp": "Opción presente/futura → 'could': 'We could go out.'"
      }
    ],
    "flashcards": [
      {
        "front": "Could have done — what does it mean?",
        "back": "= It was possible but it DIDN'T HAPPEN:\n'You could have helped me!' (but you didn't)\n'She could have been a doctor.' (but she chose otherwise)\n\nNOT the same as 'was able to' which means it DID happen."
      }
    ],
    "syntaxChips": [
      {
        "label": "Present/future possibility",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "could",
            "role": "verb"
          },
          {
            "text": "base verb",
            "role": "object"
          }
        ]
      },
      {
        "label": "Unrealized past possibility",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "could have",
            "role": "verb"
          },
          {
            "text": "past participle",
            "role": "object"
          }
        ]
      },
      {
        "label": "Past impossibility",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "couldn't have",
            "role": "verb"
          },
          {
            "text": "past participle",
            "role": "object"
          }
        ]
      }
    ],
    "contrastCard": {
      "left": {
        "label": "COULD HAVE — possible, didn't happen",
        "example": "You could have called me! I waited all night.",
        "highlight": "could have called"
      },
      "right": {
        "label": "COULDN'T HAVE — impossible",
        "example": "It couldn't have been Tom — he was abroad that week.",
        "highlight": "couldn't have been"
      },
      "caption": "\"Could have\" means something was possible but never happened; \"couldn't have\" means it was impossible for it to have happened at all."
    },
    "readingText": {
      "title": "A Missed Chance",
      "body": "When I was younger, I could run for hours without getting tired, and I could also play the guitar quite well. Last year, though, I had the chance to join a small band, but I turned it down because I was too busy with work. I could have said yes — it was completely possible — but I didn't, and now I regret it. My brother says I couldn't have joined anyway, since the band already had a guitarist, but I'm not so sure that's true.",
      "translation": "Cuando era más joven, podía correr durante horas sin cansarme, y también sabía tocar la guitarra bastante bien. El año pasado, sin embargo, tuve la oportunidad de unirme a una pequeña banda, pero la rechacé porque estaba demasiado ocupado con el trabajo. Podría haber dicho que sí — era totalmente posible — pero no lo hice, y ahora me arrepiento. Mi hermano dice que no podría haberme unido de todas formas, ya que la banda ya tenía un guitarrista, pero no estoy tan seguro de que eso sea cierto."
    },
    "tips": [
      "\"Could have\" se pronuncia \"could've\" /ˈkʊdəv/ en el habla natural — nunca lo escribas como \"could of\", aunque suene igual.",
      "\"Could have\" = era posible pero no pasó; \"couldn't have\" = es imposible que pasara. No los confundas con un simple \"didn't\"."
    ],
    "dailyWords": [
      {
        "w": "missed opportunity",
        "ipa": "/mɪst ˌɒpəˈtjuːnəti/",
        "aprox": "mist opotiúnati",
        "def": "oportunidad perdida",
        "ex": "Not applying for that job was a missed opportunity."
      },
      {
        "w": "last-minute",
        "ipa": "/ˌlɑːst ˈmɪnɪt/",
        "aprox": "last mínit",
        "def": "de último momento",
        "ex": "It was a last-minute decision to join the band."
      }
    ]
  },
  "28": {
    "title": "Must and Can't (deduction)",
    "topic": "Modal Verbs",
    "level": "B1",
    "explain": [
      {
        "head": "Must: seguro que es verdad",
        "body": "Usamos 'must' para una deducción lógica fuerte, no una obligación: la evidencia nos hace estar casi seguros de algo. Es decir 'seguro que...' basado en lo que observamos, por ejemplo si alguien lleva despierto desde las 5am.",
        "note": "You must be tired — you've been awake since 5am. · She must be at home — the lights are on."
      },
      {
        "head": "Can't: seguro que NO es verdad",
        "body": "'Can't' es la deducción negativa opuesta a 'must': la evidencia nos hace estar seguros de que algo es imposible o falso, no simplemente 'no obligatorio'. Si 'must' es 'seguro que sí', 'can't' es 'seguro que no'.",
        "note": "That can't be Tom — he's in Paris. · You can't be hungry! You just ate."
      },
      {
        "head": "Must have / can't have: deducción en pasado",
        "body": "Para deducir con la misma seguridad sobre el pasado, se añade 'have' + participio: 'must have done' si estamos seguros de que pasó, 'can't have done' si estamos seguros de que no pasó. Misma lógica que en presente, solo cambia el tiempo.",
        "note": "She must have left already. · They can't have arrived — the road was closed."
      }
    ],
    "quiz": [
      {
        "q": "You ___ be tired — you've been up since 5am.",
        "opts": [
          "can't",
          "must",
          "should",
          "have to"
        ],
        "ans": 1,
        "exp": "Deducción lógica (seguro que estás cansado) → 'must': 'You must be tired.'"
      },
      {
        "q": "That ___ be right — it's impossible!",
        "opts": [
          "must",
          "can",
          "can't",
          "mustn't"
        ],
        "ans": 2,
        "exp": "Seguro que NO es verdad → 'can't': 'That can't be right.'"
      },
      {
        "q": "She ___ have left already — her bag is still here.",
        "opts": [
          "must",
          "can't",
          "should",
          "could"
        ],
        "ans": 1,
        "exp": "Deducción en pasado (imposible que se fuera — su bolso está aquí) → 'can't have left'."
      }
    ],
    "flashcards": [
      {
        "front": "MUST vs CAN'T for deduction",
        "back": "MUST = I'm sure it's TRUE:\n'You must be tired.' (evidence: awake since 5am)\n\nCAN'T = I'm sure it's NOT TRUE:\n'That can't be right.' (it's impossible)"
      }
    ],
    "readingText": {
      "title": "The Locked Room",
      "body": "Detective Ray stood in the locked room and frowned. \"The window is closed, and the door was locked from the inside,\" he said. \"The thief must still be in this house — there's nowhere else to go.\" He picked up a coffee cup from the table. \"This is still warm, so someone must have been here just a few minutes ago.\" The guard shook his head. \"Nobody left through the front door, sir. It can't have been anyone from outside.\" Ray smiled and pointed at the old bookshelf. \"Then there must be another way out — a secret door, maybe.\" Behind a painting, he found it. \"I knew it! This must be how the thief escaped.\"",
      "translation": "El detective Ray se paró en la habitación cerrada y frunció el ceño. \"La ventana está cerrada, y la puerta fue cerrada con llave desde adentro\", dijo. \"El ladrón debe seguir en esta casa — no hay otro lugar adonde ir.\" Tomó una taza de café de la mesa. \"Todavía está tibia, así que alguien debe haber estado aquí hace solo unos minutos.\" El guardia negó con la cabeza. \"Nadie salió por la puerta principal, señor. No puede haber sido alguien de afuera.\" Ray sonrió y señaló la vieja estantería. \"Entonces debe haber otra salida — quizás una puerta secreta.\" Detrás de un cuadro, la encontró. \"¡Lo sabía! Así debe haber escapado el ladrón.\""
    }
  },
  "29": {
    "title": "May and Might 1",
    "topic": "Modal Verbs",
    "level": "B1",
    "explain": [
      {
        "head": "May / might: posibilidad",
        "body": "'May' y 'might' expresan que algo es posible en presente o futuro, como decir 'quizás' o 'tal vez'. Funcionan casi igual y suelen intercambiarse, a diferencia de 'must'/'can't', que expresan certeza en vez de mera posibilidad.",
        "note": "It may rain tomorrow. · She might be at home. · I might not come to the party."
      },
      {
        "head": "Might: un poco menos seguro",
        "body": "Aunque 'may' y 'might' son casi intercambiables, a veces 'might' sugiere un poco menos certeza que 'may' — un matiz sutil, no una regla estricta. En la práctica casi no cambia cómo se entiende la frase.",
        "note": "I may go out tonight. (quite possible) · I might go out. (a little less certain)"
      },
      {
        "head": "May I / might I: pedir permiso",
        "body": "'May' también sirve para pedir permiso de forma educada y algo formal: 'May I sit here?'. 'Might I' es aún más formal o anticuado, y suaviza una sugerencia, como en 'Might I suggest an alternative?'.",
        "note": "May I sit here? · May I ask you something? · Might I suggest an alternative?"
      }
    ],
    "quiz": [
      {
        "q": "I'm not sure where she is. She ___ be at home.",
        "opts": [
          "must",
          "should",
          "might",
          "will"
        ],
        "ans": 2,
        "exp": "Posibilidad incierta → 'might': 'She might be at home.'"
      },
      {
        "q": "Take an umbrella — it ___ rain later.",
        "opts": [
          "will",
          "must",
          "may",
          "should"
        ],
        "ans": 2,
        "exp": "Evento futuro posible → 'may' o 'might': 'it may rain'."
      },
      {
        "q": "___ I use your phone?",
        "opts": [
          "Should",
          "Must",
          "May",
          "Will"
        ],
        "ans": 2,
        "exp": "Pedir permiso educadamente → 'May I use your phone?'"
      }
    ],
    "flashcards": [
      {
        "front": "MAY vs MIGHT — difference",
        "back": "Both express POSSIBILITY (maybe, perhaps)\nMight is sometimes slightly less certain than may.\n\n'It may rain.' = possible\n'It might rain.' = a little less certain\n\nIn practice, they are usually interchangeable."
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Do you have any plans for the weekend?",
        "translation": "¿Tienes planes para el fin de semana?"
      },
      {
        "speaker": "user",
        "text": "I'm not sure yet. I might go hiking if the weather is good.",
        "translation": "Todavía no estoy seguro. Podría ir de excursión si hace buen tiempo."
      },
      {
        "speaker": "other",
        "text": "It may rain on Saturday, actually.",
        "translation": "De hecho, puede que llueva el sábado."
      },
      {
        "speaker": "user",
        "text": "Then I might just stay home and read instead.",
        "translation": "Entonces quizás me quede en casa leyendo."
      },
      {
        "speaker": "other",
        "text": "May I join you? I love reading too.",
        "translation": "¿Puedo unirme? A mí también me encanta leer."
      },
      {
        "speaker": "user",
        "text": "Of course! You might even borrow one of my books.",
        "translation": "¡Claro! Hasta podrías llevarte prestado uno de mis libros."
      }
    ]
  },
  "30": {
    "title": "May and Might 2",
    "topic": "Modal Verbs",
    "level": "B1",
    "explain": [
      {
        "head": "Might as well / may as well",
        "body": "'Might as well' (o 'may as well') se usa cuando no hay mejor opción, así que haces algo simplemente porque no hay nada más útil que hacer. Tiene un tono resignado y práctico, no de entusiasmo. Ambas formas significan exactamente lo mismo.",
        "note": "We might as well wait here. · You might as well tell the truth. · I may as well go home."
      },
      {
        "head": "May/might have done: posibilidad pasada",
        "body": "'May/might have done' expresan incertidumbre sobre algo que quizás pasó en el pasado — una explicación posible, no segura. Es más débil que 'must have done', que expresa casi certeza: 'She may have forgotten' es solo una posibilidad entre otras.",
        "note": "She may have forgotten about the meeting. · They might have left already."
      }
    ],
    "quiz": [
      {
        "q": "There's nothing to do. We ___ stay home.",
        "opts": [
          "should",
          "might as well",
          "could have",
          "must"
        ],
        "ans": 1,
        "exp": "No hay mejor opción → 'might as well': 'We might as well stay home.'"
      },
      {
        "q": "She's not here. She ___ have gone to the library.",
        "opts": [
          "must",
          "should",
          "might",
          "could"
        ],
        "ans": 2,
        "exp": "Posibilidad incierta en el pasado → 'might have gone'."
      }
    ],
    "flashcards": [
      {
        "front": "MIGHT AS WELL",
        "back": "= there's no better option, so let's do this:\n'We might as well wait.' (there's nothing better to do)\n\nSimilar to: 'We may as well wait.' or 'Let's just wait.'"
      }
    ],
    "readingText": {
      "title": "Nothing to Do",
      "body": "It was Sunday afternoon, and Clara had nothing planned. \"I might as well clean the house,\" she thought, \"since there's nothing better to do.\" While cleaning, she found an old letter under the sofa. It was addressed to her brother, but it looked like it had never been opened. \"He may have forgotten about this,\" she thought, \"or he might have never seen it at all.\" She decided to call him. \"I found an old letter here,\" she said. \"You might have dropped it years ago.\" Her brother laughed. \"I may as well come over and see it myself!\" An hour later, he arrived, and they spent the afternoon remembering old times.",
      "translation": "Era domingo por la tarde, y Clara no tenía nada planeado. \"Más vale que limpie la casa\", pensó, \"ya que no hay nada mejor que hacer.\" Mientras limpiaba, encontró una carta vieja debajo del sofá. Estaba dirigida a su hermano, pero parecía que nunca la habían abierto. \"Puede que se le haya olvidado\", pensó, \"o puede que nunca la haya visto.\" Decidió llamarlo. \"Encontré una carta vieja aquí\", dijo. \"Puede que se te haya caído hace años.\" Su hermano se rió. \"¡Mejor voy y la veo yo mismo!\" Una hora después, llegó, y pasaron la tarde recordando viejos tiempos."
    }
  },
  "31": {
    "title": "Have To and Must",
    "topic": "Modal Verbs",
    "level": "A2",
    "explain": [
      {
        "head": "Must: obligación personal",
        "body": "Usamos 'must' cuando la obligación viene del propio hablante — crees que algo es necesario, no porque una regla externa lo exija. 'I must call my mother' expresa tu propio sentir, no una norma impuesta.",
        "note": "I must call my mother. (I feel I should) · You must try this restaurant! (I strongly recommend)"
      },
      {
        "head": "Have to: obligación externa",
        "body": "'Have to' expresa una obligación que viene de fuera: una ley, una regla, un jefe. 'I have to be at work by 9' señala un horario impuesto por otro, al contrario que 'must', que nace del propio hablante.",
        "note": "I have to be at work by 9. (the rule) · She has to wear a uniform. (company rule)"
      },
      {
        "head": "Don't have to: sin obligación",
        "body": "'Don't have to' significa que no hay obligación alguna: la acción es opcional. Es muy distinto de 'mustn't', que prohíbe; 'don't have to' solo elimina el requisito, no prohíbe nada.",
        "note": "You don't have to come if you don't want to. · She doesn't have to work on Sundays."
      }
    ],
    "table": {
      "cols": [
        "Must",
        "Have to"
      ],
      "rows": [
        [
          "Speaker feels it's important",
          "External rule/obligation"
        ],
        [
          "I must call her (I think so)",
          "I have to call her (boss said so)"
        ],
        [
          "Mustn't = NOT allowed",
          "Don't have to = not necessary"
        ]
      ]
    },
    "quiz": [
      {
        "q": "All passengers ___ wear a seatbelt. It's the law.",
        "opts": [
          "must",
          "have to",
          "should",
          "need to"
        ],
        "ans": 1,
        "exp": "Obligación externa/ley → 'have to'."
      },
      {
        "q": "You ___ see this film! It's amazing. (strong recommendation)",
        "opts": [
          "have to",
          "must",
          "need to",
          "should"
        ],
        "ans": 1,
        "exp": "Sentimiento personal fuerte del hablante → 'must': 'You must see this film!'"
      },
      {
        "q": "You ___ come to the party if you don't want to.",
        "opts": [
          "mustn't",
          "don't have to",
          "must",
          "should"
        ],
        "ans": 1,
        "exp": "No es necesario (pero puedes hacerlo) → 'don't have to'."
      }
    ],
    "flashcards": [
      {
        "front": "MUST vs HAVE TO vs DON'T HAVE TO",
        "back": "MUST = I feel it's important (personal):\n'I must lose weight.' (my own decision)\n\nHAVE TO = external obligation:\n'I have to work late.' (boss said so)\n\nDON'T HAVE TO = not necessary:\n'You don't have to wear a tie.' (optional)"
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Do you have to wear a uniform at your new job?",
        "translation": "¿Tienes que usar uniforme en tu nuevo trabajo?"
      },
      {
        "speaker": "user",
        "text": "Yes, I have to wear a suit every day. It's company policy.",
        "translation": "Sí, tengo que usar traje todos los días. Es política de la empresa."
      },
      {
        "speaker": "other",
        "text": "That sounds strict. I must say, I really admire how professional you look.",
        "translation": "Suena estricto. Debo decir que admiro lo profesional que te ves."
      },
      {
        "speaker": "user",
        "text": "Thanks! But I don't have to wear a tie on Fridays, which is nice.",
        "translation": "¡Gracias! Pero no tengo que usar corbata los viernes, lo cual es agradable."
      },
      {
        "speaker": "other",
        "text": "I must remember to dress better for my interview tomorrow.",
        "translation": "Debo acordarme de vestirme mejor para mi entrevista de mañana."
      },
      {
        "speaker": "user",
        "text": "You really must! First impressions matter a lot.",
        "translation": "¡De verdad debes hacerlo! Las primeras impresiones importan mucho."
      }
    ]
  },
  "32": {
    "title": "Must / Mustn't / Needn't",
    "topic": "Modal Verbs",
    "level": "B1",
    "explain": [
      {
        "head": "Must: obligación",
        "body": "'Must' expresa una obligación o necesidad fuerte: algo que hay que hacer, ya sea por una regla o por convicción propia. Es más fuerte que sugerencias suaves como 'should'.",
        "note": "You must stop at a red light. · I must remember to call her."
      },
      {
        "head": "Mustn't: prohibición",
        "body": "'Mustn't' significa que una acción está prohibida bajo cualquier circunstancia. Es muy distinto de decir que algo no es necesario: 'mustn't' prohíbe activamente, no solo quita un requisito.",
        "note": "You mustn't smoke in here. · She mustn't tell anyone."
      },
      {
        "head": "Needn't / don't need to: no es necesario",
        "body": "'Needn't' y 'don't need to' significan que algo no es necesario, aunque puedes hacerlo si quieres. Es lo opuesto de 'mustn't': este prohíbe, 'needn't' solo quita la obligación.",
        "note": "You needn't worry. · You don't need to bring anything."
      }
    ],
    "quiz": [
      {
        "q": "You ___ tell anyone! It's a secret.",
        "opts": [
          "needn't",
          "don't have to",
          "mustn't",
          "couldn't"
        ],
        "ans": 2,
        "exp": "Prohibición (NO permitido) → 'mustn't': 'You mustn't tell anyone!'"
      },
      {
        "q": "You ___ hurry — we have plenty of time.",
        "opts": [
          "mustn't",
          "needn't",
          "must",
          "can't"
        ],
        "ans": 1,
        "exp": "No es necesario → 'needn't': 'You needn't hurry.' (= You don't need to hurry.)"
      }
    ],
    "flashcards": [
      {
        "front": "MUSTN'T vs NEEDN'T / DON'T HAVE TO",
        "back": "MUSTN'T = NOT ALLOWED:\n'You mustn't park here.' (it's forbidden)\n\nNEEDN'T / DON'T HAVE TO = NOT NECESSARY:\n'You needn't come.' (you can, but it's not required)"
      }
    ],
    "readingText": {
      "title": "Museum Rules",
      "body": "Our class visited the art museum yesterday. Before we went in, the teacher gave us some rules. \"You mustn't touch the paintings,\" she said, \"and you mustn't use flash photography — it damages the art.\" Then she smiled. \"But you needn't stay silent the whole time. You can talk quietly and ask questions.\" Inside, a guard reminded us again: \"You mustn't run in the gallery, and you mustn't eat or drink near the artworks.\" My friend asked if we needed tickets to enter each room. \"You needn't buy separate tickets,\" the guard answered. \"One ticket lets you see everything.\" We had a wonderful afternoon, and nobody broke any rules.",
      "translation": "Nuestra clase visitó el museo de arte ayer. Antes de entrar, la maestra nos dio algunas reglas. \"No deben tocar las pinturas\", dijo, \"y no deben usar flash al fotografiar — daña el arte.\" Luego sonrió. \"Pero no necesitan quedarse en silencio todo el tiempo. Pueden hablar en voz baja y hacer preguntas.\" Adentro, un guardia nos recordó de nuevo: \"No deben correr en la galería, y no deben comer ni beber cerca de las obras.\" Mi amiga preguntó si necesitábamos boletos para entrar a cada sala. \"No necesitan comprar boletos separados\", respondió el guardia. \"Un boleto les permite ver todo.\" Tuvimos una tarde maravillosa, y nadie rompió ninguna regla."
    }
  },
  "33": {
    "title": "Should 1",
    "topic": "Modal Verbs",
    "level": "A2",
    "explain": [
      {
        "head": "Should: consejo o recomendación",
        "body": "'Should' se usa para dar consejos u opinar sobre lo correcto, basándote en tu opinión, no en una regla estricta. Es más suave que 'must': 'You should see a doctor' es una recomendación que puedes ignorar.",
        "note": "You look pale. You should see a doctor. · She should study more if she wants to pass."
      },
      {
        "head": "Should: expectativa",
        "body": "'Should' también expresa lo que esperas que pase, según lo normal o lógico, no un consejo. 'The package should arrive tomorrow' expresa expectativa, sin la certeza fuerte de 'must'.",
        "note": "The package should arrive tomorrow. · You should be able to find it easily."
      },
      {
        "head": "Shouldn't: consejo en contra",
        "body": "'Shouldn't' es el negativo de 'should': aconseja no hacer algo porque en tu opinión no es buena idea. Es una recomendación, no una prohibición firme como 'mustn't'.",
        "note": "You shouldn't eat so much sugar. · We shouldn't be late."
      }
    ],
    "quiz": [
      {
        "q": "You look tired. You ___ get some rest.",
        "opts": [
          "must",
          "should",
          "shall",
          "would"
        ],
        "ans": 1,
        "exp": "Consejo → 'should': 'You should get some rest.'"
      },
      {
        "q": "The film ___ be good — it has 5-star reviews.",
        "opts": [
          "should",
          "must",
          "shall",
          "would"
        ],
        "ans": 0,
        "exp": "Expectativa → 'should': 'The film should be good.'"
      },
      {
        "q": "You ___ park here — it's illegal.",
        "opts": [
          "shouldn't",
          "mustn't",
          "needn't",
          "couldn't"
        ],
        "ans": 0,
        "exp": "Consejo en contra → 'shouldn't'. ('Mustn't' también es posible pero más fuerte — prohibición)"
      }
    ],
    "flashcards": [
      {
        "front": "SHOULD vs MUST — difference",
        "back": "SHOULD = mild advice/recommendation:\n'You should eat more vegetables.' (suggestion)\n\nMUST = strong obligation:\n'You must stop at a red light.' (law)\n\nSHOULD HAVE = past regret:\n'I should have studied harder.'"
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "I've had a terrible headache all day.",
        "translation": "He tenido un dolor de cabeza terrible todo el día."
      },
      {
        "speaker": "user",
        "text": "You should drink some water and rest for a while.",
        "translation": "Deberías tomar agua y descansar un rato."
      },
      {
        "speaker": "other",
        "text": "Maybe you're right. Do you think I should see a doctor?",
        "translation": "Tal vez tengas razón. ¿Crees que debería ir al médico?"
      },
      {
        "speaker": "user",
        "text": "If it doesn't go away by tomorrow, you should definitely go.",
        "translation": "Si no se te quita para mañana, definitivamente deberías ir."
      },
      {
        "speaker": "other",
        "text": "The pharmacy should still be open now, right?",
        "translation": "La farmacia debería seguir abierta ahora, ¿verdad?"
      },
      {
        "speaker": "user",
        "text": "Yes, it should be — they close at nine. You shouldn't wait any longer.",
        "translation": "Sí, debería estarlo — cierran a las nueve. No deberías esperar más."
      }
    ]
  },
  "34": {
    "title": "Should 2",
    "topic": "Modal Verbs",
    "level": "B1",
    "explain": [
      {
        "head": "Should have done: arrepentimiento",
        "body": "'Should have done' mira al pasado y dice que algo era lo correcto pero no pasó, con tono de arrepentimiento: 'I should have called her' implica que no la llamaste y ahora lo lamentas. 'Shouldn't have done' es al revés, para algo que sí pasó pero fue un error.",
        "note": "I should have called her. (I didn't, but it was the right thing to do) · You shouldn't have said that."
      },
      {
        "head": "Should tras suggest, recommend, insist",
        "body": "Tras verbos como 'suggest', 'recommend' o 'insist', el inglés suele usar 'should' + verbo base, aunque no sea un consejo. 'I suggested that he should go' expresa un deseo, y en inglés británico se puede omitir 'should': 'I suggested that he go'.",
        "note": "I suggested that he should go. · She insisted that I should come."
      }
    ],
    "quiz": [
      {
        "q": "I ___ called you earlier. I'm sorry I didn't.",
        "opts": [
          "would",
          "should have",
          "must have",
          "could"
        ],
        "ans": 1,
        "exp": "Arrepentimiento pasado → 'should have called': era lo correcto pero no pasó."
      },
      {
        "q": "You ___ said that. It was very rude.",
        "opts": [
          "should",
          "shouldn't have",
          "shouldn't",
          "mustn't have"
        ],
        "ans": 1,
        "exp": "Arrepentimiento de algo que sí pasó (estuvo mal) → 'shouldn't have said'."
      }
    ],
    "flashcards": [
      {
        "front": "SHOULD HAVE done",
        "back": "= It was the right thing but DIDN'T happen:\n'I should have studied harder.' (I didn't → I failed)\n\nSHOULDN'T HAVE done:\n'I shouldn't have eaten so much.' (I did → I regret it)"
      }
    ],
    "readingText": {
      "title": "Exam Regrets",
      "body": "Mark stared at his exam results and sighed. He should have studied harder — he knew that now. Instead of reading his notes the night before, he had gone out with friends, and now he regretted it. \"I shouldn't have wasted so much time watching movies,\" he thought. His teacher had suggested that he should ask for extra help weeks earlier, but Mark hadn't listened. \"I should have taken her advice,\" he admitted to himself. His friend Lisa, who had passed easily, said, \"You shouldn't have left everything until the last minute. Next time, you should start preparing early.\" Mark nodded. He knew she was right, and he promised himself things would be different next semester.",
      "translation": "Mark miró los resultados de su examen y suspiró. Debería haber estudiado más — ahora lo sabía. En lugar de leer sus apuntes la noche anterior, había salido con amigos, y ahora se arrepentía. \"No debería haber perdido tanto tiempo viendo películas\", pensó. Su maestra le había sugerido semanas antes que pidiera ayuda extra, pero Mark no había escuchado. \"Debería haber seguido su consejo\", se admitió a sí mismo. Su amiga Lisa, que había aprobado fácilmente, le dijo: \"No deberías haber dejado todo para el último momento. La próxima vez, deberías empezar a prepararte temprano.\" Mark asintió. Sabía que ella tenía razón, y se prometió que las cosas serían diferentes el próximo semestre."
    }
  },
  "35": {
    "title": "I'd Better / It's Time…",
    "topic": "Modal Verbs",
    "level": "B1",
    "explain": [
      {
        "head": "I'd better: consejo urgente",
        "body": "'I'd better' (de 'I had better') da un consejo urgente para una situación concreta, con una consecuencia negativa si no se sigue. Es parecido a 'should' pero más urgente: 'I'd better go now or I'll be late'.",
        "note": "I'd better go now or I'll be late. · You'd better not be late or he'll be angry."
      },
      {
        "head": "It's time: acción pendiente",
        "body": "'It's time' + sujeto + pasado simple indica que algo debería estar pasando ya, aunque no se refiera al pasado real. 'It's time you went to bed' significa que ya deberías estar acostándote — es una estructura fija propia de esta expresión.",
        "note": "It's time you went to bed. · It's time we left. · It's time he stopped complaining."
      }
    ],
    "quiz": [
      {
        "q": "You ___ better see a doctor about that cough.",
        "opts": [
          "had",
          "have",
          "should",
          "must"
        ],
        "ans": 0,
        "exp": "'I'd better' es la forma corta de 'I had better'."
      },
      {
        "q": "It's time you ___ to bed. It's midnight!",
        "opts": [
          "go",
          "went",
          "are going",
          "have gone"
        ],
        "ans": 1,
        "exp": "'It's time' + sujeto + pasado simple para algo pendiente: 'It's time you went'."
      }
    ],
    "flashcards": [
      {
        "front": "I'D BETTER vs IT'S TIME",
        "back": "I'D BETTER + base verb (urgent advice):\n'You'd better hurry or you'll miss the bus.'\n\nIT'S TIME + subject + past simple (overdue):\n'It's time you went to bed.' (you should have gone earlier)"
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "It's already 7:45! It's time we left for the airport.",
        "translation": "¡Ya son las 7:45! Ya es hora de que salgamos para el aeropuerto."
      },
      {
        "speaker": "user",
        "text": "You're right, we'd better hurry or we'll miss the flight.",
        "translation": "Tienes razón, mejor nos apuramos o perderemos el vuelo."
      },
      {
        "speaker": "other",
        "text": "Where are the passports? It's time you found them!",
        "translation": "¿Dónde están los pasaportes? ¡Ya es hora de que los encuentres!"
      },
      {
        "speaker": "user",
        "text": "I've got them. We'd better call a taxi right now.",
        "translation": "Los tengo. Mejor pedimos un taxi ahora mismo."
      },
      {
        "speaker": "other",
        "text": "You'd better not forget your phone charger again.",
        "translation": "Mejor no olvides tu cargador de teléfono otra vez."
      },
      {
        "speaker": "user",
        "text": "Don't worry, it's already in my bag. It's time to go!",
        "translation": "No te preocupes, ya está en mi bolso. ¡Es hora de irnos!"
      }
    ]
  },
  "36": {
    "title": "Would",
    "topic": "Modal Verbs",
    "level": "B1",
    "explain": [
      {
        "head": "Would: condicional",
        "body": "'Would' aparece en la consecuencia de oraciones condicionales de segundo tipo, describiendo un resultado imaginario si se cumpliera una condición irreal. 'If I had more time, I would learn to paint' imagina algo que no es real ahora.",
        "note": "If I had more time, I would learn to paint. · She would call you if she had your number."
      },
      {
        "head": "Would: peticiones corteses",
        "body": "'Would' también suaviza peticiones, sonando más cortés y formal que 'will'. 'Would you help me, please?' es más educado que 'Will you help me?', que puede sonar a orden directa.",
        "note": "Would you help me please? · Would you mind waiting?"
      },
      {
        "head": "Would: hábitos en pasado",
        "body": "'Would' + verbo base describe una acción repetida o hábito en el pasado, similar a 'used to'. A diferencia de 'used to', solo sirve para acciones repetidas, no estados: se dice 'I used to live in Spain' pero no 'I would live in Spain' con ese sentido.",
        "note": "When I was a child, I would go fishing with my father every weekend."
      }
    ],
    "quiz": [
      {
        "q": "If I were rich, I ___ travel the world.",
        "opts": [
          "will",
          "would",
          "had",
          "should"
        ],
        "ans": 1,
        "exp": "Consecuencia del segundo condicional → 'would': 'I would travel the world.'"
      },
      {
        "q": "___ you mind closing the door?",
        "opts": [
          "Will",
          "Would",
          "Could",
          "Should"
        ],
        "ans": 1,
        "exp": "Petición cortés → 'Would you mind…?'"
      },
      {
        "q": "When I was a child, I ___ visit my grandparents every Sunday.",
        "opts": [
          "used to",
          "would",
          "will",
          "was"
        ],
        "ans": 1,
        "exp": "Hábito repetido en el pasado → 'would': 'I would visit…' (o 'used to visit')."
      }
    ],
    "flashcards": [
      {
        "front": "WOULD — three main uses",
        "back": "1. CONDITIONAL: 'If I had time, I would help.'\n2. POLITE REQUEST: 'Would you mind waiting?'\n3. PAST HABIT: 'We would go fishing every Sunday.' (= used to)"
      }
    ],
    "readingText": {
      "title": "Grandmother's Stories",
      "body": "When I was a child, my grandmother would tell me stories every night before bed. We would sit by the fireplace, and she would describe magical worlds full of dragons and castles. I loved those evenings so much that sometimes I wonder: if she were still here, what would she think of the stories I write now? I think she would be proud. Sometimes I imagine calling her and asking, \"Would you like to hear my new story?\" She would probably smile and say, \"Of course, dear — I would love that.\" I miss those simple evenings, and I would give anything to hear her voice again.",
      "translation": "Cuando era niño, mi abuela me contaba historias cada noche antes de dormir. Nos sentábamos junto a la chimenea, y ella describía mundos mágicos llenos de dragones y castillos. Me encantaban tanto esas noches que a veces me pregunto: si ella todavía estuviera aquí, ¿qué pensaría de las historias que escribo ahora? Creo que estaría orgullosa. A veces imagino llamarla y preguntarle: \"¿Te gustaría escuchar mi nueva historia?\" Probablemente sonreiría y diría: \"Claro que sí, querido — me encantaría.\" Extraño esas tardes sencillas, y daría cualquier cosa por escuchar su voz de nuevo."
    }
  },
  "37": {
    "title": "Can / Could / Would you…? (Requests)",
    "topic": "Modal Verbs",
    "level": "A2",
    "explain": [
      {
        "head": "Peticiones: escala de cortesía",
        "body": "Estas tres formas de pedir algo van de menos a más cortés: 'Can you...?' es directo e informal, 'Could you...?' es más educado, y 'Would you mind...?' es la más cortés e indirecta. La elección depende de la situación y de lo grande que sea el favor.",
        "note": "Can you help me? (informal) · Could you help me? (more polite) · Would you mind helping me? (very polite)"
      },
      {
        "head": "Would you mind…?: exige -ing",
        "body": "'Would you mind' siempre va seguido de -ing (gerundio), nunca de verbo base o 'to' + verbo: 'Would you mind closing the door?' es correcto, 'Would you mind to close' no. Aquí 'mind' funciona como verbo que lleva gerundio.",
        "note": "Would you mind closing the door? · Would you mind waiting a moment?"
      },
      {
        "head": "Do you mind if I…?: pedir permiso",
        "body": "'Do you mind if I...?' pide permiso para hacer algo tú mismo, no para pedirle algo a otro. Como pregunta si algo molestaría, decir 'no' o 'not at all' significa que sí se concede el permiso — puede confundir porque aquí 'no' es afirmativo.",
        "note": "Do you mind if I open the window? · Would you mind if I left early?"
      }
    ],
    "quiz": [
      {
        "q": "___ you lend me your pen for a second?",
        "opts": [
          "Should",
          "Shall",
          "Could",
          "Must"
        ],
        "ans": 2,
        "exp": "Petición cortés → 'Could you lend me…?'"
      },
      {
        "q": "Would you mind ___ the TV? I'm trying to work.",
        "opts": [
          "to turn off",
          "turn off",
          "turning off",
          "turned off"
        ],
        "ans": 2,
        "exp": "Tras 'would you mind' va -ing: 'turning off the TV'."
      }
    ],
    "flashcards": [
      {
        "front": "Requests: CAN vs COULD vs WOULD YOU MIND",
        "back": "CAN you help me? (informal, direct)\nCOULD you help me? (more polite)\nWOULD YOU MIND helping me? (very polite)\n\n'Would you mind' → always + -ing"
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Excuse me, could you help me carry these boxes?",
        "translation": "Disculpa, ¿podrías ayudarme a cargar estas cajas?"
      },
      {
        "speaker": "user",
        "text": "Of course! Can you tell me where they need to go?",
        "translation": "¡Claro! ¿Puedes decirme adónde tienen que ir?"
      },
      {
        "speaker": "other",
        "text": "To the meeting room upstairs, please. Would you mind taking the heavier one?",
        "translation": "A la sala de reuniones de arriba, por favor. ¿Te importaría llevar la más pesada?"
      },
      {
        "speaker": "user",
        "text": "Not at all. Would you mind holding the door for me?",
        "translation": "Para nada. ¿Te importaría sostenerme la puerta?"
      },
      {
        "speaker": "other",
        "text": "Sure. Do you mind if I go ahead and turn on the lights?",
        "translation": "Claro. ¿Te molesta si me adelanto y enciendo las luces?"
      },
      {
        "speaker": "user",
        "text": "Not at all, go ahead. Could you also grab my notebook from the desk?",
        "translation": "Para nada, adelante. ¿Podrías también agarrar mi cuaderno del escritorio?"
      }
    ]
  }
};
