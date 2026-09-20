import { Unit } from '@/types/grammar';

export const passiveVoiceUnits: Record<number, Unit> = {
  "42": {
    "title": "Passive 1 (is done / was done)",
    "topic": "Passive Voice",
    "level": "B1",
    "explain": [
      {
        "head": "La pasiva: forma",
        "body": "En una frase activa el sujeto realiza la acción ('Somebody cleans the office'); en la pasiva, el sujeto la recibe ('The office is cleaned'). Se forma con BE + participio pasado. En inglés la pasiva se usa mucho más que en español, donde solemos preferir 'se limpia la oficina'.",
        "note": "Active: Somebody cleans the office. Passive: The office is cleaned."
      },
      {
        "head": "Presente pasivo",
        "body": "El presente pasivo (am/is/are + participio) describe acciones habituales o verdaderas ahora, centrando la atención en lo afectado, no en quién actúa. Es útil cuando quien hace la acción no importa, no se sabe, o es obvio por el contexto.",
        "note": "The windows are cleaned every week. · English is spoken here. · I am paid monthly."
      },
      {
        "head": "Pasado pasivo",
        "body": "El pasado pasivo (was/were + participio) funciona igual que el presente pero sitúa la acción en el pasado. El foco sigue en quien recibe la acción, por eso el sujeto cambia respecto a la frase activa equivalente.",
        "note": "The office was cleaned yesterday. · The letter was written by Sarah."
      },
      {
        "head": "BY + agente",
        "body": "Aunque la pasiva suele omitir quién hace la acción, puedes añadirlo con 'by' cuando de verdad aporta algo, como un nombre conocido. Compara 'The window was broken' (no sabemos quién) con 'The window was broken by the storm' (la causa interesa nombrarla).",
        "note": "The Mona Lisa was painted by Leonardo da Vinci. · The window was broken. (agent unknown)"
      }
    ],
    "table": {
      "cols": [
        "Tense",
        "Active",
        "Passive"
      ],
      "rows": [
        [
          "Present",
          "They clean the office.",
          "The office is cleaned."
        ],
        [
          "Past",
          "She wrote the letter.",
          "The letter was written."
        ],
        [
          "Future",
          "They will build a hotel.",
          "A hotel will be built."
        ]
      ]
    },
    "quiz": [
      {
        "q": "The office ___ every day.",
        "opts": [
          "cleans",
          "is cleaned",
          "was cleaned",
          "cleaned"
        ],
        "ans": 1,
        "exp": "Presente pasivo para una acción habitual: 'is cleaned'."
      },
      {
        "q": "The Mona Lisa ___ by Leonardo da Vinci.",
        "opts": [
          "was painted",
          "is painted",
          "painted",
          "were painted"
        ],
        "ans": 0,
        "exp": "Pasado pasivo + agente con 'by': 'was painted by'."
      },
      {
        "q": "A new hospital ___ next year.",
        "opts": [
          "is built",
          "was built",
          "will be built",
          "builds"
        ],
        "ans": 2,
        "exp": "Pasiva de futuro: 'will be built'."
      }
    ],
    "flashcards": [
      {
        "front": "How do you form the passive?",
        "back": "am/is/are/was/were/will be + PAST PARTICIPLE\n\nPresent: The room is cleaned daily.\nPast: The window was broken.\nFuture: The bridge will be built next year."
      },
      {
        "front": "When do you use the passive voice?",
        "back": "✅ When the action matters more than who did it.\n✅ When the doer is unknown or obvious.\n✅ In formal/academic writing.\n\nThe window was broken. (we don't know who)"
      }
    ],
    "syntaxChips": [
      {
        "label": "Present passive",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "am/is/are",
            "role": "verb"
          },
          {
            "text": "past participle",
            "role": "object"
          }
        ]
      },
      {
        "label": "Past passive",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "was/were",
            "role": "verb"
          },
          {
            "text": "past participle",
            "role": "object"
          }
        ]
      },
      {
        "label": "With agent",
        "chips": [
          {
            "text": "...+ past participle",
            "role": "verb"
          },
          {
            "text": "by",
            "role": "connector"
          },
          {
            "text": "agent",
            "role": "object"
          }
        ]
      }
    ],
    "contrastCard": {
      "left": {
        "label": "ACTIVE",
        "example": "Leonardo da Vinci painted the Mona Lisa.",
        "highlight": "painted"
      },
      "right": {
        "label": "PASSIVE",
        "example": "The Mona Lisa was painted by Leonardo da Vinci.",
        "highlight": "was painted"
      },
      "caption": "Active puts the doer first. Passive puts the receiver of the action first — useful when the doer is unknown, obvious, or less important than the result."
    },
    "readingText": {
      "title": "The Museum Robbery",
      "body": "Every year, thousands of visitors are welcomed at the National Museum. Last month, however, something unusual happened: a small painting was stolen during the night. The alarm wasn't triggered, and no windows were broken, so the police were confused. Cameras are installed all around the building, but the footage was somehow deleted. Eventually, the painting was found in a nearby flat, and two men were arrested. The museum director said security procedures will be reviewed by next year.",
      "translation": "Cada año, miles de visitantes son recibidos en el Museo Nacional. El mes pasado, sin embargo, ocurrió algo inusual: un pequeño cuadro fue robado durante la noche. La alarma no se activó, y no se rompió ninguna ventana, así que la policía estaba desconcertada. Hay cámaras instaladas por todo el edificio, pero las grabaciones fueron borradas de alguna manera. Finalmente, el cuadro fue encontrado en un piso cercano, y dos hombres fueron arrestados. El director del museo dijo que los procedimientos de seguridad serán revisados el año que viene."
    },
    "tips": [
      "La pasiva se forma siempre con BE (am/is/are/was/were/will be) + participio pasado — nunca olvides el 'be'.",
      "Usa la pasiva cuando quien hace la acción no importa, no se sabe, o es obvio por el contexto — si el agente sí importa, añádelo con BY."
    ],
    "dailyWords": [
      {
        "w": "footage",
        "ipa": "/ˈfʊtɪdʒ/",
        "aprox": "fútich",
        "def": "imágenes grabadas, metraje",
        "ex": "The security footage was deleted."
      },
      {
        "w": "alarm",
        "ipa": "/əˈlɑːrm/",
        "aprox": "aláarm",
        "def": "alarma",
        "ex": "The alarm didn't go off during the robbery."
      }
    ]
  },
  "43": {
    "title": "Passive 2 (be done / been done)",
    "topic": "Passive Voice",
    "level": "B1",
    "explain": [
      {
        "head": "Pasiva con modales",
        "body": "Después de un modal (must, can, should...) siempre va la forma base, y en pasiva esa forma base es 'be' — nunca 'is' ni 'are'. El patrón queda: modal + be + participio. Error típico: decir 'must is done' en vez de 'must be done'.",
        "note": "The work must be done today. · The problem can be solved. · Mistakes might be made."
      },
      {
        "head": "Pasiva con perfecto",
        "body": "El presente perfecto pasivo une el matiz del perfecto (acción pasada conectada con el presente) con el enfoque pasivo en quien recibe la acción. Se forma con have/has been + participio: 'They have sent the letter' → 'The letter has been sent'.",
        "note": "The letter has been sent. · Three people have been arrested. · The bridge has been closed."
      }
    ],
    "quiz": [
      {
        "q": "The work ___ finished by tomorrow.",
        "opts": [
          "must be",
          "must is",
          "must has been",
          "must been"
        ],
        "ans": 0,
        "exp": "Pasiva con modal → modal + be + pp: 'must be finished'."
      },
      {
        "q": "Three people ___ in the accident.",
        "opts": [
          "injured",
          "were injured",
          "have been injured",
          "are injuring"
        ],
        "ans": 2,
        "exp": "Pasiva de presente perfecto: 'have been injured'."
      }
    ],
    "flashcards": [
      {
        "front": "Passive with modals",
        "back": "Modal + BE + past participle:\n'The work must be done.' (not 'must is done')\n'This can be fixed.' · 'It should be reported.'"
      }
    ],
    "syntaxChips": [
      {
        "label": "Modal passive",
        "chips": [
          {
            "text": "modal",
            "role": "verb"
          },
          {
            "text": "be",
            "role": "connector"
          },
          {
            "text": "past participle",
            "role": "object"
          }
        ]
      },
      {
        "label": "Present perfect passive",
        "chips": [
          {
            "text": "has/have",
            "role": "verb"
          },
          {
            "text": "been",
            "role": "connector"
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
        "label": "Modal + BE + pp",
        "example": "The bridge must be repaired before winter.",
        "highlight": "must be repaired"
      },
      "right": {
        "label": "HAVE BEEN + pp",
        "example": "The bridge has been repaired already.",
        "highlight": "has been repaired"
      },
      "caption": "Modal passive expresses obligation or possibility about the future (must be done). Present perfect passive reports something already completed with present relevance (has been done)."
    },
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Has the report been finished yet?",
        "translation": "¿Se ha terminado ya el informe?"
      },
      {
        "speaker": "user",
        "text": "Not yet, but it must be sent by five o'clock.",
        "translation": "Todavía no, pero debe enviarse antes de las cinco."
      },
      {
        "speaker": "other",
        "text": "I heard two people have already been asked to help you.",
        "translation": "Escuché que ya se les ha pedido a dos personas que te ayuden."
      },
      {
        "speaker": "user",
        "text": "Yes, and honestly, this problem could be solved much faster with more staff.",
        "translation": "Sí, y sinceramente, este problema podría resolverse mucho más rápido con más personal."
      }
    ],
    "tips": [
      "Después de un modal (must, can, should) siempre va BE, nunca 'is' o 'are': 'must be done', no 'must is done'.",
      "'Have/has been' + participio combina la idea de 'ya pasó y sigue siendo relevante' con el enfoque pasivo en quién recibe la acción."
    ],
    "dailyWords": [
      {
        "w": "staff",
        "ipa": "/stɑːf/",
        "aprox": "staaf",
        "def": "personal, plantilla",
        "ex": "We need more staff this month."
      },
      {
        "w": "arrest",
        "ipa": "/əˈrest/",
        "aprox": "arrést",
        "def": "arrestar, detener",
        "ex": "Three people have been arrested."
      }
    ]
  },
  "44": {
    "title": "Passive 3 (two objects / get / born)",
    "topic": "Passive Voice",
    "level": "B2",
    "explain": [
      {
        "head": "Pasiva con dos objetos",
        "body": "Verbos como give, send, show, offer, pay o tell llevan objeto indirecto (persona) y directo (cosa), así que cualquiera puede pasar a sujeto en pasiva. Poner a la persona como sujeto ('I was given a watch') es más natural y frecuente que poner la cosa ('A watch was given to me').",
        "note": "I was given a watch. (indirect object as subject) · A watch was given to me. (direct object as subject)"
      },
      {
        "head": "GET como alternativa",
        "body": "En inglés informal, 'get' puede sustituir a 'be' como auxiliar pasivo, sobre todo para cosas repentinas o desafortunadas (get caught, get hurt, get fired). El significado es igual que con 'be', pero suena más coloquial; en textos formales conviene usar 'be'.",
        "note": "get married · get paid · get caught · get hurt"
      },
      {
        "head": "BORN: siempre pasiva",
        "body": "'Born' solo existe como participio pasivo — no hay verbo activo 'nacerse' — así que siempre acompaña a 'was/were'. Es una excepción fija que conviene memorizar: para hablar de un nacimiento, 'was/were born' es la única opción correcta.",
        "note": "She was born in Brazil in 1990. · Where were you born?"
      }
    ],
    "quiz": [
      {
        "q": "I ___ a watch for my birthday.",
        "opts": [
          "gave",
          "was given",
          "was giving",
          "am given"
        ],
        "ans": 1,
        "exp": "Pasiva con dos objetos: 'I was given a watch' (el objeto indirecto pasa a sujeto)."
      },
      {
        "q": "They ___ married last summer.",
        "opts": [
          "got",
          "got got",
          "were get",
          "get"
        ],
        "ans": 0,
        "exp": "'Get married' = pasiva informal con 'get'."
      },
      {
        "q": "She ___ in Brazil in 1990.",
        "opts": [
          "born",
          "was born",
          "is born",
          "borns"
        ],
        "ans": 1,
        "exp": "'Born' siempre es pasiva: 'was/were born'."
      }
    ],
    "flashcards": [
      {
        "front": "Passive with two objects",
        "back": "Verbs like give/send/show/offer/pay/tell can form the passive two ways:\n'I was given a watch.' (indirect object as subject) ✅\n'A watch was given to me.' (direct object as subject) ✅"
      },
      {
        "front": "GET as a passive alternative",
        "back": "Informal English often uses GET instead of BE for passives, especially for things that happen suddenly or unluckily:\nget married · get paid · get caught · get hurt"
      }
    ],
    "syntaxChips": [
      {
        "label": "Two objects → person as subject",
        "chips": [
          {
            "text": "I",
            "role": "subject"
          },
          {
            "text": "was given",
            "role": "verb"
          },
          {
            "text": "a watch",
            "role": "object"
          }
        ]
      },
      {
        "label": "GET passive (informal)",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "got",
            "role": "verb"
          },
          {
            "text": "past participle",
            "role": "object"
          }
        ]
      },
      {
        "label": "BORN (always passive)",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "was/were born",
            "role": "verb"
          }
        ]
      }
    ],
    "contrastCard": {
      "left": {
        "label": "BE passive (neutral)",
        "example": "He was fired last month.",
        "highlight": "was fired"
      },
      "right": {
        "label": "GET passive (informal, sudden)",
        "example": "He got fired last month.",
        "highlight": "got fired"
      },
      "caption": "BE is the standard, neutral passive. GET is more informal and often suggests something sudden, unlucky, or unplanned."
    },
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Did you hear? Marcos got fired from his job yesterday!",
        "translation": "¿Te enteraste? ¡A Marcos lo despidieron ayer de su trabajo!"
      },
      {
        "speaker": "user",
        "text": "No way! Where was he born, again? Maybe he'll go back home.",
        "translation": "¡No puede ser! ¿Dónde nació, otra vez? Igual vuelve a casa."
      },
      {
        "speaker": "other",
        "text": "He was born in Chile, but he got married here last year.",
        "translation": "Nació en Chile, pero se casó aquí el año pasado."
      },
      {
        "speaker": "user",
        "text": "Well, at least he was given a good severance package, I heard.",
        "translation": "Bueno, al menos le dieron una buena indemnización, según escuché."
      }
    ],
    "tips": [
      "'Born' solo existe en forma pasiva — siempre 'was/were born', nunca como verbo activo.",
      "GET + participio suena más informal que BE + participio, y suele implicar algo repentino o desafortunado: get fired, get caught, get hurt."
    ],
    "dailyWords": [
      {
        "w": "severance",
        "ipa": "/ˈsevərəns/",
        "aprox": "séverans",
        "def": "indemnización (por despido)",
        "ex": "He received a severance package when he was fired."
      },
      {
        "w": "fired",
        "ipa": "/ˈfaɪərd/",
        "aprox": "fáierd",
        "def": "despedido",
        "ex": "She got fired after just two months."
      }
    ]
  },
  "45": {
    "title": "Passive 3 (it is said that…)",
    "topic": "Passive Voice",
    "level": "B2",
    "explain": [
      {
        "head": "Se dice que... (impersonal)",
        "body": "Estas estructuras pasivas impersonales sirven para transmitir una opinión o creencia general sin decir quién la sostiene. 'It is said that + oración' y 'sujeto + is said to + infinitivo' significan lo mismo con distinta gramática; se usan mucho en noticias y textos formales.",
        "note": "It is said that he is very rich. = He is said to be very rich. · It is believed that the earth is 4.5 billion years old."
      },
      {
        "head": "Otros verbos de este tipo",
        "body": "El mismo patrón funciona con otros verbos — thought, believed, known, claimed, expected — cada uno con su matiz de certeza o rumor. La gramática es siempre igual; solo cambia el verbo y cuánto se confía en la información, desde casi un hecho ('it is known') hasta un rumor ('it is thought').",
        "note": "It is thought that prices will rise. · She is known to be an expert. · They are expected to arrive soon."
      }
    ],
    "quiz": [
      {
        "q": "It ___ that he is extremely wealthy.",
        "opts": [
          "said",
          "is saying",
          "is said",
          "says"
        ],
        "ans": 2,
        "exp": "Pasiva de rumor/creencia → 'It is said that…'"
      },
      {
        "q": "She ___ to be the best player in the team.",
        "opts": [
          "is saying",
          "said",
          "is said",
          "says"
        ],
        "ans": 2,
        "exp": "Pasiva personal: 'She is said to be…'"
      }
    ],
    "flashcards": [
      {
        "front": "IT IS SAID THAT vs HE IS SAID TO",
        "back": "It is said that he is rich. (impersonal)\n= He is said to be rich. (personal)\n\nOther verbs: thought, believed, known, expected, reported, claimed\n'It is believed that...' / 'She is believed to be...'"
      }
    ],
    "syntaxChips": [
      {
        "label": "Impersonal",
        "chips": [
          {
            "text": "It is",
            "role": "subject"
          },
          {
            "text": "said / thought / believed",
            "role": "verb"
          },
          {
            "text": "that + clause",
            "role": "object"
          }
        ]
      },
      {
        "label": "Personal",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "is said / thought",
            "role": "verb"
          },
          {
            "text": "to + infinitive",
            "role": "object"
          }
        ]
      }
    ],
    "contrastCard": {
      "left": {
        "label": "IT IS SAID THAT (impersonal)",
        "example": "It is said that the house is haunted.",
        "highlight": "it is said that"
      },
      "right": {
        "label": "SUBJECT IS SAID TO (personal)",
        "example": "The house is said to be haunted.",
        "highlight": "is said to be"
      },
      "caption": "Both mean exactly the same thing — a general belief without naming who believes it. Choose whichever fits the sentence structure better."
    },
    "readingText": {
      "title": "The Old House on the Hill",
      "body": "It is said that the old house on the hill has been empty for fifty years. Nobody knows exactly why, but it is believed that the last family who lived there left suddenly one night. The house is thought to be haunted by local children, although most adults just laugh at the idea. It is claimed that strange lights are sometimes seen in the windows, and the owner is known to refuse every offer to buy it. Whatever the truth is, the house is expected to remain empty for many more years.",
      "translation": "Se dice que la vieja casa de la colina ha estado vacía durante cincuenta años. Nadie sabe exactamente por qué, pero se cree que la última familia que vivió allí se marchó de repente una noche. Los niños del pueblo piensan que la casa está encantada, aunque la mayoría de los adultos simplemente se ríen de la idea. Se afirma que a veces se ven luces extrañas en las ventanas, y se sabe que el dueño rechaza cualquier oferta para comprarla. Sea cual sea la verdad, se espera que la casa siga vacía muchos años más."
    },
    "tips": [
      "'It is said that + oración' y 'Sujeto + is said to + infinitivo' significan exactamente lo mismo — usa el que encaje mejor en la frase.",
      "Otros verbos siguen el mismo patrón: thought, believed, known, claimed, expected, reported — todos funcionan igual que 'said'."
    ],
    "dailyWords": [
      {
        "w": "haunted",
        "ipa": "/ˈhɔːntɪd/",
        "aprox": "jóntid",
        "def": "encantado (por fantasmas)",
        "ex": "They say the old castle is haunted."
      },
      {
        "w": "rumour",
        "ipa": "/ˈruːmər/",
        "aprox": "rúmer",
        "def": "rumor",
        "ex": "There's a rumour that the shop is closing."
      }
    ]
  },
  "46": {
    "title": "Have Something Done",
    "topic": "Passive Voice",
    "level": "B2",
    "explain": [
      {
        "head": "HAVE something done",
        "body": "Describe un servicio que otra persona hace para ti, aunque el sujeto gramatical seas tú: lo mandas hacer, no lo haces con tus manos. Patrón: have + objeto + participio. Compara 'I cut my hair' (lo hice yo) con 'I had my hair cut' (me lo hizo un peluquero).",
        "note": "I'm having my hair cut. · We're having the house painted. · I had my car repaired."
      },
      {
        "head": "GET, versión informal",
        "body": "'Get + objeto + participio' expresa la misma idea de servicio encargado que 'have', pero con tono más informal y coloquial. La diferencia entre 'have' y 'get' aquí es de registro, no de significado; en conversación se oye 'get' tanto o más que 'have'.",
        "note": "I need to get my watch fixed. · She got her hair done before the party."
      }
    ],
    "quiz": [
      {
        "q": "I'm ___ my car ___ at the garage tomorrow.",
        "opts": [
          "having/repaired",
          "getting/repair",
          "having/repair",
          "making/repaired"
        ],
        "ans": 0,
        "exp": "Have + objeto + participio: 'having my car repaired'."
      },
      {
        "q": "They ___ their house ___ last year.",
        "opts": [
          "had/painted",
          "made/paint",
          "did/paint",
          "let/paint"
        ],
        "ans": 0,
        "exp": "Have something done (pasado): 'had their house painted'."
      }
    ],
    "flashcards": [
      {
        "front": "HAVE SOMETHING DONE",
        "back": "= you ARRANGE for someone to do it for you\n\nI cut my hair. (I did it myself)\nI had my hair cut. (a hairdresser did it — I arranged it)\n\nStructure: HAVE + object + past participle"
      }
    ],
    "syntaxChips": [
      {
        "label": "HAVE + object + pp",
        "chips": [
          {
            "text": "have",
            "role": "verb"
          },
          {
            "text": "object",
            "role": "object"
          },
          {
            "text": "past participle",
            "role": "verb"
          }
        ]
      },
      {
        "label": "GET + object + pp (informal)",
        "chips": [
          {
            "text": "get",
            "role": "verb"
          },
          {
            "text": "object",
            "role": "object"
          },
          {
            "text": "past participle",
            "role": "verb"
          }
        ]
      }
    ],
    "contrastCard": {
      "left": {
        "label": "Doing it yourself",
        "example": "I cut my hair myself last night.",
        "highlight": "cut my hair"
      },
      "right": {
        "label": "Arranging the service",
        "example": "I had my hair cut at the salon.",
        "highlight": "had my hair cut"
      },
      "caption": "Doing an action yourself uses the normal active form. Arranging for someone else to do it for you uses HAVE/GET + object + past participle."
    },
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Your hair looks great! Did you cut it yourself?",
        "translation": "¡Tu pelo se ve genial! ¿Te lo cortaste tú misma?"
      },
      {
        "speaker": "user",
        "text": "No, I had it cut at a new salon downtown.",
        "translation": "No, me lo cortaron en un salón nuevo del centro."
      },
      {
        "speaker": "other",
        "text": "Nice. I need to get my car fixed this week too.",
        "translation": "Qué bien. Yo también necesito que me arreglen el coche esta semana."
      },
      {
        "speaker": "user",
        "text": "You should — I got mine repaired last month and it drives so much better now.",
        "translation": "Deberías — el mío lo arreglaron el mes pasado y ahora conduce mucho mejor."
      }
    ],
    "tips": [
      "'Have something done' no significa que TÚ hagas la acción, sino que la pides o pagas para que otro la haga por ti.",
      "GET + objeto + participio es la versión más informal de HAVE + objeto + participio — el significado es idéntico."
    ],
    "dailyWords": [
      {
        "w": "salon",
        "ipa": "/səˈlɒn/",
        "aprox": "salón",
        "def": "salón de belleza/peluquería",
        "ex": "She booked an appointment at the hair salon."
      },
      {
        "w": "repair",
        "ipa": "/rɪˈpeər/",
        "aprox": "ripéer",
        "def": "reparar, arreglar",
        "ex": "I need to get my bike repaired."
      }
    ]
  }
};
