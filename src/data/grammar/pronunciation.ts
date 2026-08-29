import { PronunUnit } from '@/types/grammar';

// Anchors: only some units have pronunciation/vocab data. getPronunVocab()
// falls back to the nearest lower anchor, so later units in a topic reuse
// the anchor closest to (and at or below) them.
export const PRONUN_DATA: Record<number, PronunUnit> = {
  "1": {
    "tips": [
      {
        "head": "Pronunciación de -ING",
        "body": "La terminación -ing se pronuncia /ɪŋ/, NO /ɪng/. La 'g' no se pronuncia.",
        "examples": [
          "working /ˈwɜːrkɪŋ/",
          "eating /ˈiːtɪŋ/",
          "going /ˈɡoʊɪŋ/"
        ]
      },
      {
        "head": "Contracciones",
        "body": "En inglés hablado siempre se usan contracciones. Practica: I'm, you're, he's, she's, we're, they're.",
        "examples": [
          "I am → I'm /aɪm/",
          "He is → He's /hiːz/",
          "They are → They're /ðeər/"
        ]
      }
    ],
    "vocab": [
      {
        "w": "concentrate",
        "ipa": "/ˈkɒnsəntreɪt/",
        "def": "concentrarse",
        "ex": "I'm trying to concentrate."
      },
      {
        "w": "at the moment",
        "ipa": "/æt ðə ˈmoʊmənt/",
        "def": "en este momento",
        "ex": "I'm busy at the moment."
      },
      {
        "w": "currently",
        "ipa": "/ˈkɜːrəntli/",
        "def": "actualmente",
        "ex": "She's currently working from home."
      },
      {
        "w": "still",
        "ipa": "/stɪl/",
        "def": "todavía",
        "ex": "Are you still waiting?"
      },
      {
        "w": "right now",
        "ipa": "/raɪt naʊ/",
        "def": "ahora mismo",
        "ex": "I can't talk right now."
      },
      {
        "w": "getting better",
        "ipa": "/ˈɡetɪŋ ˈbetər/",
        "def": "mejorando",
        "ex": "My English is getting better."
      }
    ]
  },
  "2": {
    "tips": [
      {
        "head": "La -s de 3ª persona",
        "body": "La -s final tiene 3 pronunciaciones: /s/, /z/, o /ɪz/.",
        "examples": [
          "works /wɜːrks/ → tras consonante sorda",
          "lives /lɪvz/ → tras consonante sonora",
          "watches /ˈwɒtʃɪz/ → tras -s, -sh, -ch, -x, -z"
        ]
      },
      {
        "head": "Do / Does en preguntas",
        "body": "Do se pronuncia /duː/ con énfasis, /də/ sin énfasis. Does = /dʌz/.",
        "examples": [
          "Do you like it? /də jʊ ˈlaɪk ɪt/",
          "Does she work? /dʌz ʃiː wɜːrk/"
        ]
      }
    ],
    "vocab": [
      {
        "w": "usually",
        "ipa": "/ˈjuːʒuəli/",
        "def": "normalmente / generalmente",
        "ex": "I usually wake up at 7."
      },
      {
        "w": "always",
        "ipa": "/ˈɔːlweɪz/",
        "def": "siempre",
        "ex": "She always drinks coffee."
      },
      {
        "w": "never",
        "ipa": "/ˈnevər/",
        "def": "nunca",
        "ex": "He never eats meat."
      },
      {
        "w": "sometimes",
        "ipa": "/ˈsʌmtaɪmz/",
        "def": "a veces",
        "ex": "I sometimes work late."
      },
      {
        "w": "often",
        "ipa": "/ˈɒfən/",
        "def": "frecuentemente",
        "ex": "Do you often go to the gym?"
      },
      {
        "w": "every day",
        "ipa": "/ˈevri deɪ/",
        "def": "todos los días",
        "ex": "I study English every day."
      }
    ]
  },
  "5": {
    "tips": [
      {
        "head": "Pasado de verbos regulares -ed",
        "body": "La -ed tiene 3 pronunciaciones según el sonido final del verbo.",
        "examples": [
          "worked /wɜːrkt/ → /t/ tras consonante sorda (p,k,f,s,sh)",
          "lived /lɪvd/ → /d/ tras consonante sonora o vocal",
          "wanted /ˈwɒntɪd/ → /ɪd/ solo tras t o d"
        ]
      },
      {
        "head": "Verbos irregulares clave",
        "body": "Estos no siguen reglas — hay que memorizarlos.",
        "examples": [
          "go-went /went/",
          "see-saw /sɔː/",
          "buy-bought /bɔːt/",
          "come-came /keɪm/"
        ]
      }
    ],
    "vocab": [
      {
        "w": "yesterday",
        "ipa": "/ˈjestərdeɪ/",
        "def": "ayer",
        "ex": "I called her yesterday."
      },
      {
        "w": "last week",
        "ipa": "/læst wiːk/",
        "def": "la semana pasada",
        "ex": "We met last week."
      },
      {
        "w": "ago",
        "ipa": "/əˈɡoʊ/",
        "def": "hace (tiempo)",
        "ex": "I saw him two days ago."
      },
      {
        "w": "in 2020",
        "ipa": "/ɪn ˌtwenti ˈtwenti/",
        "def": "en 2020",
        "ex": "She was born in 2020."
      },
      {
        "w": "suddenly",
        "ipa": "/ˈsʌdənli/",
        "def": "de repente",
        "ex": "Suddenly the phone rang."
      },
      {
        "w": "immediately",
        "ipa": "/ɪˈmiːdiətli/",
        "def": "inmediatamente",
        "ex": "She left immediately."
      }
    ]
  },
  "7": {
    "tips": [
      {
        "head": "Have vs Has",
        "body": "I/you/we/they → HAVE /hæv/. He/she/it → HAS /hæz/. En forma débil (sin énfasis): /həv/ y /həz/.",
        "examples": [
          "I've /aɪv/",
          "She's (= she has) /ʃiːz/",
          "They've /ðeɪv/"
        ]
      },
      {
        "head": "Past participles irregulares",
        "body": "¡Cuidado con estos participios irregulares muy comunes!",
        "examples": [
          "go → gone /ɡɒn/",
          "see → seen /siːn/",
          "write → written /ˈrɪtən/",
          "eat → eaten /ˈiːtən/"
        ]
      }
    ],
    "vocab": [
      {
        "w": "just",
        "ipa": "/dʒʌst/",
        "def": "justo / recién",
        "ex": "I've just arrived."
      },
      {
        "w": "already",
        "ipa": "/ɔːlˈredi/",
        "def": "ya",
        "ex": "She's already left."
      },
      {
        "w": "yet",
        "ipa": "/jet/",
        "def": "todavía / ya (preguntas)",
        "ex": "Have you finished yet?"
      },
      {
        "w": "ever",
        "ipa": "/ˈevər/",
        "def": "alguna vez",
        "ex": "Have you ever been to Japan?"
      },
      {
        "w": "never",
        "ipa": "/ˈnevər/",
        "def": "nunca",
        "ex": "I've never tried sushi."
      },
      {
        "w": "recently",
        "ipa": "/ˈriːsəntli/",
        "def": "recientemente",
        "ex": "Have you seen him recently?"
      }
    ]
  },
  "15": {
    "tips": [
      {
        "head": "Had — forma débil",
        "body": "En habla natural, 'had' se reduce. La contracción 'd se usa mucho.",
        "examples": [
          "I had → I'd /aɪd/",
          "She had → She'd /ʃiːd/",
          "They had → They'd /ðeɪd/"
        ]
      }
    ],
    "vocab": [
      {
        "w": "by the time",
        "ipa": "/baɪ ðə taɪm/",
        "def": "cuando / para cuando",
        "ex": "By the time I arrived, she had left."
      },
      {
        "w": "already",
        "ipa": "/ɔːlˈredi/",
        "def": "ya (énfasis en pasado)",
        "ex": "He had already eaten."
      },
      {
        "w": "before",
        "ipa": "/bɪˈfɔːr/",
        "def": "antes",
        "ex": "I had met her before."
      },
      {
        "w": "after",
        "ipa": "/ˈæftər/",
        "def": "después de",
        "ex": "After she had left, I called."
      }
    ]
  },
  "26": {
    "tips": [
      {
        "head": "CAN y COULD — pronunciación",
        "body": "CAN sin énfasis = /kən/. CON énfasis (negación) = /kæn/. COULD = /kʊd/.",
        "examples": [
          "I can do it. /aɪ kən ˈduː ɪt/",
          "I CAN'T do it. /aɪ ˈkænt duː ɪt/",
          "Could you help? /kʊd jʊ help/"
        ]
      },
      {
        "head": "Modal verbs: sin TO",
        "body": "Los modales van seguidos del infinitivo sin TO: can SWIM, must GO, should STUDY.",
        "examples": [
          "She can speak French. ✅",
          "She can to speak French. ❌",
          "You must go now. ✅"
        ]
      }
    ],
    "vocab": [
      {
        "w": "manage to",
        "ipa": "/ˈmænɪdʒ tʊ/",
        "def": "lograr / poder (con esfuerzo)",
        "ex": "I managed to pass the exam."
      },
      {
        "w": "be able to",
        "ipa": "/biː ˈeɪbəl tʊ/",
        "def": "ser capaz de / poder",
        "ex": "Will you be able to come?"
      },
      {
        "w": "succeed in",
        "ipa": "/səkˈsiːd ɪn/",
        "def": "tener éxito en / lograr",
        "ex": "She succeeded in finding a job."
      },
      {
        "w": "fluent",
        "ipa": "/ˈfluːənt/",
        "def": "fluido / con fluidez",
        "ex": "He's fluent in Spanish."
      },
      {
        "w": "capable of",
        "ipa": "/ˈkeɪpəbəl əv/",
        "def": "capaz de",
        "ex": "She's capable of great things."
      },
      {
        "w": "struggle to",
        "ipa": "/ˈstrʌɡəl tʊ/",
        "def": "luchar por / tener dificultad para",
        "ex": "I struggle to wake up early."
      }
    ]
  },
  "38": {
    "tips": [
      {
        "head": "IF en condicionales",
        "body": "La cláusula con IF puede ir al inicio o al final. Si va al inicio, se pone coma.",
        "examples": [
          "If it rains, we'll stay home. (coma)",
          "We'll stay home if it rains. (sin coma)"
        ]
      },
      {
        "head": "WOULD — forma débil",
        "body": "'Would' se contrae a 'd en el habla natural.",
        "examples": [
          "I would → I'd /aɪd/",
          "She would → She'd /ʃiːd/",
          "What would /wɒt wʊd/ → What'd /wɒtəd/ (informal)"
        ]
      }
    ],
    "vocab": [
      {
        "w": "suppose",
        "ipa": "/səˈpoʊz/",
        "def": "suponer / imaginar",
        "ex": "Suppose you won the lottery..."
      },
      {
        "w": "unless",
        "ipa": "/ənˈles/",
        "def": "a menos que",
        "ex": "I'll go unless it rains."
      },
      {
        "w": "provided that",
        "ipa": "/prəˈvaɪdɪd ðæt/",
        "def": "siempre que / con tal de que",
        "ex": "I'll help provided that you try."
      },
      {
        "w": "in that case",
        "ipa": "/ɪn ðæt keɪs/",
        "def": "en ese caso",
        "ex": "In that case, I'd stay home."
      },
      {
        "w": "otherwise",
        "ipa": "/ˈʌðərwaɪz/",
        "def": "de lo contrario",
        "ex": "Study hard, otherwise you'll fail."
      },
      {
        "w": "as long as",
        "ipa": "/æz lɒŋ æz/",
        "def": "siempre que / mientras que",
        "ex": "You can come as long as you're quiet."
      }
    ]
  },
  "42": {
    "tips": [
      {
        "head": "Pasiva con BY",
        "body": "'By' en pasiva se pronuncia /baɪ/ con énfasis o /bɪ/ sin énfasis.",
        "examples": [
          "It was written BY Shakespeare. /baɪ/",
          "The house was built /bɪlt/ in 1900."
        ]
      },
      {
        "head": "Participios irregulares para pasiva",
        "body": "Recuerda los participios más usados en la pasiva.",
        "examples": [
          "write → written /ˈrɪtən/",
          "build → built /bɪlt/",
          "make → made /meɪd/",
          "break → broken /ˈbroʊkən/"
        ]
      }
    ],
    "vocab": [
      {
        "w": "be made of",
        "ipa": "/biː meɪd ʌv/",
        "def": "estar hecho de",
        "ex": "The table is made of wood."
      },
      {
        "w": "be built in",
        "ipa": "/biː bɪlt ɪn/",
        "def": "ser construido en",
        "ex": "The bridge was built in 1950."
      },
      {
        "w": "be known as",
        "ipa": "/biː noʊn æz/",
        "def": "ser conocido como",
        "ex": "He's known as a great teacher."
      },
      {
        "w": "be sent",
        "ipa": "/biː sent/",
        "def": "ser enviado",
        "ex": "The letter was sent yesterday."
      },
      {
        "w": "be expected",
        "ipa": "/biː ɪkˈspektɪd/",
        "def": "se espera que",
        "ex": "She is expected to arrive soon."
      },
      {
        "w": "be considered",
        "ipa": "/biː kənˈsɪdərd/",
        "def": "ser considerado",
        "ex": "It's considered rude to interrupt."
      }
    ]
  },
  "69": {
    "tips": [
      {
        "head": "THE vs sin artículo",
        "body": "THE = /ðə/ antes de consonante. THE = /ðiː/ antes de vocal o para énfasis.",
        "examples": [
          "the book /ðə bʊk/",
          "the apple /ðiː ˈæpəl/",
          "THE best! /ðiː best/ (énfasis)"
        ]
      },
      {
        "head": "A vs AN",
        "body": "A antes de sonido consonántico. AN antes de sonido vocálico (no letra, sino SONIDO).",
        "examples": [
          "a university /ə juːnɪˈvɜːrsɪti/ (u = /j/)",
          "an hour /ən ˈaʊər/ (h muda)",
          "a European /ə jʊərəˈpiːən/"
        ]
      }
    ],
    "vocab": [
      {
        "w": "the Internet",
        "ipa": "/ðə ˈɪntərnet/",
        "def": "el internet (siempre con 'the')",
        "ex": "I found it on the Internet."
      },
      {
        "w": "a couple of",
        "ipa": "/ə ˈkʌpəl əv/",
        "def": "un par de",
        "ex": "I'll be there in a couple of minutes."
      },
      {
        "w": "in general",
        "ipa": "/ɪn ˈdʒenərəl/",
        "def": "en general",
        "ex": "In general, I like coffee."
      },
      {
        "w": "specific",
        "ipa": "/spəˈsɪfɪk/",
        "def": "específico",
        "ex": "Is there a specific reason?"
      },
      {
        "w": "introduce",
        "ipa": "/ˌɪntrəˈdjuːs/",
        "def": "presentar / mencionar por primera vez",
        "ex": "Let me introduce a new concept."
      },
      {
        "w": "unique",
        "ipa": "/juːˈniːk/",
        "def": "único",
        "ex": "The sun is unique in our solar system."
      }
    ]
  },
  "82": {
    "tips": [
      {
        "head": "WHO vs WHICH vs THAT",
        "body": "WHO = personas /huː/. WHICH = cosas /wɪtʃ/. THAT = personas o cosas /ðæt/.",
        "examples": [
          "the man who called /huː/",
          "the book which I read /wɪtʃ/",
          "the car that broke /ðæt/"
        ]
      }
    ],
    "vocab": [
      {
        "w": "relative clause",
        "ipa": "/ˈrelətɪv klɔːz/",
        "def": "oración de relativo",
        "ex": "The man who called is my boss."
      },
      {
        "w": "refer to",
        "ipa": "/rɪˈfɜːr tʊ/",
        "def": "referirse a",
        "ex": "Who does 'he' refer to?"
      },
      {
        "w": "identify",
        "ipa": "/aɪˈdentɪfaɪ/",
        "def": "identificar",
        "ex": "Which clause identifies the person?"
      },
      {
        "w": "define",
        "ipa": "/dɪˈfaɪn/",
        "def": "definir",
        "ex": "A defining clause gives essential information."
      }
    ]
  },
  "101": {
    "tips": [
      {
        "head": "ALTHOUGH vs DESPITE",
        "body": "Although /ɔːlˈðoʊ/ + cláusula. Despite /dɪˈspaɪt/ + sustantivo/-ing.",
        "examples": [
          "although it was cold... /ɔːlˈðoʊ/",
          "despite the cold... /dɪˈspaɪt/",
          "despite being cold... /dɪˈspaɪt ˈbiːɪŋ/"
        ]
      }
    ],
    "vocab": [
      {
        "w": "nevertheless",
        "ipa": "/ˌnevərðəˈles/",
        "def": "sin embargo / no obstante",
        "ex": "It was hard. Nevertheless, she succeeded."
      },
      {
        "w": "however",
        "ipa": "/haʊˈevər/",
        "def": "sin embargo",
        "ex": "I was tired. However, I kept going."
      },
      {
        "w": "even so",
        "ipa": "/ˈiːvən soʊ/",
        "def": "aun así",
        "ex": "It rained. Even so, we went out."
      },
      {
        "w": "in spite of this",
        "ipa": "/ɪn spaɪt əv ðɪs/",
        "def": "a pesar de esto",
        "ex": "In spite of this, she passed."
      }
    ]
  },
  "105": {
    "tips": [
      {
        "head": "Comparativos y superlativas — acento",
        "body": "En comparativos, el acento cae en la primera sílaba del adjetivo.",
        "examples": [
          "BIG-ger /ˈbɪɡər/",
          "MORE ex-PEN-sive /mɔːr ɪkˈspensɪv/",
          "the BEST /ðə best/"
        ]
      },
      {
        "head": "THAN en comparaciones",
        "body": "'Than' sin énfasis se pronuncia /ðən/, no /ðæn/.",
        "examples": [
          "bigger than me /ˈbɪɡər ðən miː/",
          "better than expected /ˈbetər ðən ɪkˈspektɪd/"
        ]
      }
    ],
    "vocab": [
      {
        "w": "slightly",
        "ipa": "/ˈslaɪtli/",
        "def": "ligeramente",
        "ex": "It's slightly better than before."
      },
      {
        "w": "considerably",
        "ipa": "/kənˈsɪdərəbli/",
        "def": "considerablemente",
        "ex": "It's considerably more expensive."
      },
      {
        "w": "far more",
        "ipa": "/fɑːr mɔːr/",
        "def": "mucho más",
        "ex": "This is far more interesting."
      },
      {
        "w": "by far",
        "ipa": "/baɪ fɑːr/",
        "def": "con diferencia",
        "ex": "She's by far the best student."
      },
      {
        "w": "whereas",
        "ipa": "/weərˈæz/",
        "def": "mientras que (contraste)",
        "ex": "He's tall, whereas his brother is short."
      },
      {
        "w": "in comparison",
        "ipa": "/ɪn kəmˈpærɪsən/",
        "def": "en comparación",
        "ex": "In comparison, this is much cheaper."
      }
    ]
  },
  "109": {
    "tips": [
      {
        "head": "AT / ON / IN — pronunciación rápida",
        "body": "En habla natural estas preposiciones se pronuncian reducidas.",
        "examples": [
          "at /ət/ (débil)",
          "on /ɒn/ o /ən/ (débil)",
          "in /ɪn/"
        ]
      }
    ],
    "vocab": [
      {
        "w": "on time",
        "ipa": "/ɒn taɪm/",
        "def": "puntual / a tiempo",
        "ex": "The train arrived on time."
      },
      {
        "w": "in time",
        "ipa": "/ɪn taɪm/",
        "def": "a tiempo (suficiente)",
        "ex": "We arrived in time to catch the train."
      },
      {
        "w": "at the moment",
        "ipa": "/æt ðə ˈmoʊmənt/",
        "def": "en este momento",
        "ex": "She's busy at the moment."
      },
      {
        "w": "in the end",
        "ipa": "/ɪn ðə end/",
        "def": "al final / finalmente",
        "ex": "In the end, everything worked out."
      },
      {
        "w": "at last",
        "ipa": "/æt læst/",
        "def": "por fin",
        "ex": "At last, the weekend is here!"
      },
      {
        "w": "by now",
        "ipa": "/baɪ naʊ/",
        "def": "a estas alturas / para ahora",
        "ex": "She should be home by now."
      }
    ]
  },
  "113": {
    "tips": [
      {
        "head": "Phrasal verbs: partícula tónica",
        "body": "En los phrasal verbs, la partícula (up, off, on, out) lleva el acento principal.",
        "examples": [
          "give UP /ɡɪv ˈʌp/",
          "turn OFF /tɜːrn ˈɒf/",
          "look FOR /lʊk ˈfɔːr/"
        ]
      }
    ],
    "vocab": [
      {
        "w": "give up",
        "ipa": "/ɡɪv ˈʌp/",
        "def": "rendirse / dejar de",
        "ex": "Don't give up! Keep trying."
      },
      {
        "w": "look after",
        "ipa": "/lʊk ˈæftər/",
        "def": "cuidar de",
        "ex": "Can you look after the kids?"
      },
      {
        "w": "find out",
        "ipa": "/faɪnd ˈaʊt/",
        "def": "descubrir / enterarse",
        "ex": "I need to find out what happened."
      },
      {
        "w": "put off",
        "ipa": "/pʊt ˈɒf/",
        "def": "posponer",
        "ex": "Don't put off what you can do today."
      },
      {
        "w": "carry on",
        "ipa": "/ˌkæri ˈɒn/",
        "def": "continuar / seguir",
        "ex": "Carry on — you're doing great."
      },
      {
        "w": "run out of",
        "ipa": "/rʌn ˈaʊt əv/",
        "def": "quedarse sin",
        "ex": "We've run out of milk."
      }
    ]
  }
};
