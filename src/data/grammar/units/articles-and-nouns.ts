import { Unit } from '@/types/grammar';

export const articlesAndNounsUnits: Record<number, Unit> = {
  "69": {
    "title": "Countable and Uncountable Nouns 1",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Sustantivos contables",
        "body": "Nombran cosas que puedes contar una a una, así que tienen singular (a dog) y plural (two dogs). Al ser unidades separadas, admiten 'a/an' delante del singular o un número delante del plural.",
        "note": "a dog / two dogs · a chair / three chairs · a book / many books"
      },
      {
        "head": "Sustantivos incontables",
        "body": "Nombran una masa, sustancia o idea, no unidades sueltas. No tienen plural ni llevan 'a/an': se dice 'some water' o 'a glass of water'. Como se ven como un todo, siempre van con verbo en singular.",
        "note": "water · music · information · advice · furniture · luggage · knowledge · money · news"
      },
      {
        "head": "Errores frecuentes",
        "body": "Palabras que en español sí contamos (una información, un consejo) en inglés son incontables: information, advice, furniture, news. Nunca llevan 'a/an' ni '-s'. Para referirte a una sola unidad usa 'a piece of advice' o 'a piece of information'.",
        "note": "information (not 'an information' ❌) · advice (not 'an advice' ❌) · news is (not 'news are' ❌)"
      }
    ],
    "quiz": [
      {
        "q": "I need some ___ about the train times.",
        "opts": [
          "information",
          "informations",
          "an information",
          "the information"
        ],
        "ans": 0,
        "exp": "'Information' es incontable: sin plural y sin 'an'. Va 'some information'."
      },
      {
        "q": "She gave me a useful ___.",
        "opts": [
          "advice",
          "advices",
          "piece of advice",
          "informations"
        ],
        "ans": 2,
        "exp": "'Advice' es incontable; para una sola unidad se dice 'a piece of advice'."
      }
    ],
    "flashcards": [
      {
        "front": "Common uncountable nouns (no plural, no a/an)",
        "back": "information · advice · news · furniture · luggage · equipment\nmoney · knowledge · music · traffic · weather · research\n\n'The news IS good.' ✅ (not 'The news are' ❌)"
      }
    ],
    "syntaxChips": [
      { "label": "Countable — singular", "chips": [
        { "text": "a/an", "role": "connector" }, { "text": "book", "role": "object" }
      ] },
      { "label": "Countable — plural", "chips": [
        { "text": "two", "role": "connector" }, { "text": "books", "role": "object" }
      ] },
      { "label": "Uncountable — mass", "chips": [
        { "text": "some", "role": "connector" }, { "text": "furniture", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "COUNTABLE", "example": "I bought a chair and two lamps.", "highlight": "a chair" },
      "right": { "label": "UNCOUNTABLE", "example": "I bought some furniture and advice.", "highlight": "some furniture" },
      "caption": "Countable nouns have singular/plural forms and take a/an or a number. Uncountable nouns have no plural and never take a/an — use \"some\" instead."
    },
    "readingText": {
      "title": "Moving Day",
      "body": "Today I moved into my new flat. I don't have much furniture yet — just a bed, a table, and two chairs. My neighbor gave me some useful advice about the local shops, and I found a lot of information online about the buses. I still need a lamp and some plates, but I don't have much money left this month! Luckily, I have plenty of energy and a little help from my friends.",
      "translation": "Hoy me mudé a mi nuevo piso. Todavía no tengo mucho mobiliario — solo una cama, una mesa y dos sillas. Mi vecino me dio algunos consejos útiles sobre las tiendas de la zona, y encontré mucha información en internet sobre los autobuses. Todavía necesito una lámpara y algunos platos, ¡pero no me queda mucho dinero este mes! Por suerte, tengo mucha energía y un poco de ayuda de mis amigos."
    },
    "tips": [
      "Ojo con 'information', 'advice', 'furniture' y 'news': aunque en español sí se pueden contar (una información, un consejo), en inglés son incontables — nunca llevan 'a/an' ni '-s'.",
      "Para contar un incontable, usa 'a piece of...': 'a piece of advice', 'a piece of furniture' — así distingues uno solo dentro de la masa."
    ],
    "dailyWords": [
      { "w": "furniture", "ipa": "/ˈfɜːrnɪtʃər/", "aprox": "férnicher", "def": "muebles (incontable)", "ex": "We need to buy some furniture for the living room." },
      { "w": "piece of advice", "ipa": "/piːs əv ədˈvaɪs/", "aprox": "piis ov adváis", "def": "un consejo", "ex": "Let me give you a piece of advice before your interview." }
    ]
  },
  "70": {
    "title": "Countable and Uncountable Nouns 2",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Doble uso: contable o incontable",
        "body": "Algunas palabras cambian de sentido según sean contables o no: 'coffee' sin artículo es el café en general, pero 'a coffee' o 'two coffees' son tazas concretas. Igual pasa con 'hair': en general es incontable, pero 'a hair' es un solo pelo.",
        "note": "coffee (uncountable: I like coffee) vs 'two coffees' (two cups). Hair (general) vs 'a hair' (one strand)."
      },
      {
        "head": "Cuantificadores según el tipo",
        "body": "El cuantificador debe coincidir con el tipo de sustantivo: 'some/any/no' sirven para ambos, 'many/few' solo con contables en plural, y 'much/little' solo con incontables. Si dudas, usa 'a lot of' o 'plenty of', que valen para los dos casos.",
        "note": "some/any/no: both · many/few: countable · much/little: uncountable · a lot of/lots of/plenty of: both"
      }
    ],
    "quiz": [
      {
        "q": "There isn't ___ milk left.",
        "opts": [
          "many",
          "much",
          "a few",
          "several"
        ],
        "ans": 1,
        "exp": "'Milk' es incontable → se usa 'much': 'not much milk'."
      },
      {
        "q": "There are ___ people waiting outside.",
        "opts": [
          "much",
          "little",
          "a few",
          "a little"
        ],
        "ans": 2,
        "exp": "'People' es contable (plural) → se usa 'a few': 'a few people'."
      }
    ],
    "flashcards": [
      {
        "front": "MANY / MUCH / FEW / LITTLE",
        "back": "MANY + countable plural: many people, many books\nMUCH + uncountable: much money, much time\nFEW + countable: few friends (= not many)\nLITTLE + uncountable: little time (= not much)"
      }
    ],
    "syntaxChips": [
      { "label": "Countable quantifier", "chips": [
        { "text": "many/few", "role": "connector" }, { "text": "books", "role": "object" }
      ] },
      { "label": "Uncountable quantifier", "chips": [
        { "text": "much/little", "role": "connector" }, { "text": "water", "role": "object" }
      ] },
      { "label": "Countable use of an uncountable noun", "chips": [
        { "text": "a", "role": "connector" }, { "text": "coffee", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "UNCOUNTABLE (substance)", "example": "I love coffee in the morning.", "highlight": "coffee" },
      "right": { "label": "COUNTABLE (one serving)", "example": "Could I have two coffees, please?", "highlight": "two coffees" },
      "caption": "The same noun can be uncountable (the substance in general) or countable (one type/serving) — the meaning shifts with the grammar."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "What would you like?", "translation": "¿Qué te gustaría tomar?" },
      { "speaker": "user", "text": "I'll have a coffee, please — and could I have a few biscuits too?", "translation": "Tomaré un café, por favor... ¿y podría tener unas galletas también?" },
      { "speaker": "other", "text": "Sure. We don't have much milk left, is black coffee OK?", "translation": "Claro. No nos queda mucha leche, ¿café solo está bien?" },
      { "speaker": "user", "text": "That's fine. I don't drink much milk anyway.", "translation": "Está bien. De todos modos no bebo mucha leche." }
    ],
    "tips": [
      "Muchos incontables se vuelven contables cuando piden una porción concreta: 'coffee' (la bebida) → 'a coffee' (una taza).",
      "'Much' va con incontables ('much milk') y 'many' con contables en plural ('many biscuits') — no los mezcles."
    ],
    "dailyWords": [
      { "w": "biscuit", "ipa": "/ˈbɪskɪt/", "aprox": "bísket", "def": "galleta (BrE)", "ex": "She had a biscuit with her tea." },
      { "w": "a couple of", "ipa": "/ə ˈkʌpəl əv/", "aprox": "e cápol ov", "def": "un par de, un par", "ex": "Can I get a couple of coffees to go?" }
    ]
  },
  "71": {
    "title": "Countable Nouns with A/An and Some",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "A/An: contable singular",
        "body": "'A' o 'an' se usan antes de un sustantivo contable singular para referirse a uno cualquiera, sin especificar cuál. Se usa 'an' antes de sonido vocálico y 'a' antes de consonante. Nunca se usan con plurales ni incontables.",
        "note": "I need a pen. · She bought an apple. · There's a dog in the garden."
      },
      {
        "head": "Some: contable plural (afirmativa)",
        "body": "'Some' se usa en frases afirmativas para indicar una cantidad sin decir un número exacto. Sirve tanto para contables en plural ('some pens') como para incontables ('some water'). En negativas y preguntas se cambia a 'any'.",
        "note": "I need some pens. · She bought some apples. · I have some friends coming."
      },
      {
        "head": "Any: negativas y preguntas",
        "body": "'Any' sustituye a 'some' en negaciones y en la mayoría de preguntas, porque ahí se habla de una cantidad que podría ser cero. Funciona igual con plurales contables e incontables. Regla práctica: afirmativa → some; negativa o pregunta → any.",
        "note": "I don't have any pens. · Do you have any questions? · Are there any tickets left?"
      }
    ],
    "quiz": [
      {
        "q": "I need ___ envelope to send this letter.",
        "opts": [
          "some",
          "any",
          "an",
          "the"
        ],
        "ans": 2,
        "exp": "Contable singular, primera mención → 'an': 'an envelope'."
      },
      {
        "q": "There aren't ___ tickets left.",
        "opts": [
          "some",
          "an",
          "a",
          "any"
        ],
        "ans": 3,
        "exp": "Frase negativa, contable plural → 'any': 'aren't any tickets'."
      }
    ],
    "flashcards": [
      {
        "front": "A/AN vs SOME vs ANY",
        "back": "A/AN: singular countable (not specific):\n'I need a pen.'\n\nSOME: plural countable / uncountable (positive):\n'I have some books.' / 'I need some water.'\n\nANY: negative & questions:\n'I don't have any money.' / 'Do you have any?'"
      }
    ],
    "syntaxChips": [
      { "label": "A/AN — one item", "chips": [
        { "text": "a/an", "role": "connector" }, { "text": "pen", "role": "object" }
      ] },
      { "label": "SOME — positive", "chips": [
        { "text": "some", "role": "connector" }, { "text": "pens", "role": "object" }
      ] },
      { "label": "ANY — negative/question", "chips": [
        { "text": "not... any / any?", "role": "connector" }, { "text": "pens", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "SOME — positive", "example": "I have some pens in my bag.", "highlight": "some pens" },
      "right": { "label": "ANY — negative/question", "example": "I don't have any pens. Do you have any?", "highlight": "any pens" },
      "caption": "Use \"some\" in positive sentences and \"any\" in negatives and most questions."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "Do we have any eggs left?", "translation": "¿Nos quedan huevos?" },
      { "speaker": "user", "text": "No, but I bought some milk and an onion at the shop.", "translation": "No, pero compré leche y una cebolla en la tienda." },
      { "speaker": "other", "text": "Great. Can you get some bread too? There isn't any at home.", "translation": "Genial. ¿Puedes comprar pan también? No queda nada en casa." },
      { "speaker": "user", "text": "Sure — I'll get a loaf and some fruit as well.", "translation": "Claro, compraré una barra y también algo de fruta." }
    ],
    "tips": [
      "Regla rápida: afirmativa → 'some'; negativa o pregunta → 'any'. 'Some questions' (afirm.) vs 'any questions?' (pregunta).",
      "En ofertas o peticiones educadas usamos 'some' incluso en preguntas: 'Would you like some tea?'"
    ],
    "dailyWords": [
      { "w": "loaf (of bread)", "ipa": "/loʊf/", "aprox": "lóuf", "def": "barra o pan de molde", "ex": "I bought a loaf of bread this morning." },
      { "w": "leftover(s)", "ipa": "/ˈleftoʊvər(z)/", "aprox": "léftouver(s)", "def": "sobras", "ex": "We had some leftovers for dinner." }
    ]
  },
  "72": {
    "title": "A/An and The",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "A/An: primera mención",
        "body": "Se usa 'a/an' la primera vez que mencionas algo, cuando el oyente aún no sabe cuál en concreto. Indica 'uno cualquiera de este tipo'. Cuando ya se conoce o queda claro por el contexto, se pasa a usar 'the'.",
        "note": "I saw a dog. · She's an engineer. · I need a pen."
      },
      {
        "head": "The: algo conocido y específico",
        "body": "'The' marca algo específico e identificable, cuando tú y tu oyente ya sabéis exactamente de cuál se habla — a menudo tras haberlo introducido con 'a/an'. Truco: si el oyente puede señalar exactamente cuál es, usa 'the'.",
        "note": "I saw a dog. The dog was barking. · Can you close the window? (the specific one in this room)"
      },
      {
        "head": "The: cosas únicas",
        "body": "'The' también se usa con cosas únicas en el mundo, donde no hay duda de a cuál te refieres: the sun, the moon, the sky, the internet. Es la misma lógica de 'the' conocido, aplicada a algo siempre específico por naturaleza.",
        "note": "the sun · the moon · the sky · the world · the internet · the earth"
      }
    ],
    "quiz": [
      {
        "q": "She's ___ nurse. She works at a hospital.",
        "opts": [
          "a",
          "an",
          "the",
          "—"
        ],
        "ans": 0,
        "exp": "Profesión → 'a': 'She's a nurse.'"
      },
      {
        "q": "___ sun rises in the east.",
        "opts": [
          "A",
          "An",
          "The",
          "—"
        ],
        "ans": 2,
        "exp": "Algo único → 'The sun'."
      },
      {
        "q": "I need ___ umbrella. It's raining!",
        "opts": [
          "a",
          "an",
          "the",
          "—"
        ],
        "ans": 1,
        "exp": "Primera mención, sonido vocálico → 'an umbrella'."
      }
    ],
    "flashcards": [
      {
        "front": "A vs THE — the basic rule",
        "back": "A/AN = first mention or not specific:\n'I saw a dog.' (any dog, first mention)\n\nTHE = already known or specific:\n'The dog barked at me.' (the same dog)\n\n'Close THE door.' (the specific door here)"
      }
    ],
    "syntaxChips": [
      { "label": "First mention → A/AN", "chips": [
        { "text": "I saw", "role": "subject" }, { "text": "a dog", "role": "object" }
      ] },
      { "label": "Already known → THE", "chips": [
        { "text": "The dog", "role": "subject" }, { "text": "was barking", "role": "verb" }
      ] },
      { "label": "Unique thing → THE", "chips": [
        { "text": "the sun", "role": "object" }, { "text": "/ the moon", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "A/AN — first mention", "example": "I saw a dog in the park.", "highlight": "a dog" },
      "right": { "label": "THE — already known", "example": "The dog started barking at me.", "highlight": "The dog" },
      "caption": "Use \"a/an\" the first time you mention something; switch to \"the\" once it is already known to the listener."
    },
    "readingText": {
      "title": "A Strange Noise",
      "body": "Last night I heard a strange noise outside. I opened the window and saw a cat on the roof. The cat looked scared, so I went outside to help. Suddenly, I noticed a man standing near the gate. The man was actually my neighbor, looking for his cat! We laughed about the whole thing under the moon.",
      "translation": "Anoche escuché un ruido extraño afuera. Abrí la ventana y vi un gato en el tejado. El gato parecía asustado, así que salí a ayudar. De repente noté a un hombre parado cerca de la puerta. El hombre era en realidad mi vecino, ¡buscando a su gato! Nos reímos de todo el asunto bajo la luna."
    },
    "tips": [
      "'The' se usa para algo único en el mundo (the sun, the moon, the internet) — nunca 'a sun' ni 'a moon'.",
      "Truco: si tu oyente puede señalar exactamente de qué hablas, usa 'the'; si no, usa 'a/an'."
    ],
    "dailyWords": [
      { "w": "gate", "ipa": "/ɡeɪt/", "aprox": "guéit", "def": "portón, verja", "ex": "He was waiting by the gate." },
      { "w": "roof", "ipa": "/ruːf/", "aprox": "ruf", "def": "tejado, techo", "ex": "There's a cat on the roof again." }
    ]
  },
  "73": {
    "title": "The 1 (the giraffe / the telephone)",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "The con especies e inventos",
        "body": "'The' puede referirse a toda una especie o invento como concepto general, no a un ejemplar concreto: 'the whale' son las ballenas como especie, y 'the telephone' es el teléfono como invento. Es un uso más formal, distinto del 'the' cotidiano que señala algo conocido.",
        "note": "The whale is the largest mammal. · The telephone was invented by Bell."
      },
      {
        "head": "The + adjetivo = grupo de personas",
        "body": "Poner 'the' delante de ciertos adjetivos crea un sustantivo que nombra a todo un grupo de personas: 'the rich' son los ricos en general. Estas frases son siempre plurales y llevan verbo en plural, aunque no lleven '-s'. Solo funciona con un grupo limitado de adjetivos sobre personas.",
        "note": "the rich, the poor, the elderly, the sick, the unemployed, the homeless"
      },
      {
        "head": "The + nacionalidad = todo un pueblo",
        "body": "'The' también se combina con adjetivos de nacionalidad para hablar del pueblo entero: 'the French' son los franceses en general. Funciona con nacionalidades que son adjetivos (French, Chinese, British) y, como arriba, lleva verbo en plural sin '-s' visible.",
        "note": "The French love food. · The Chinese invented paper. · The British drink a lot of tea."
      }
    ],
    "quiz": [
      {
        "q": "___ telephone was invented by Alexander Bell.",
        "opts": [
          "A",
          "The",
          "An",
          "—"
        ],
        "ans": 1,
        "exp": "Referirse al invento en general → 'The telephone'."
      },
      {
        "q": "The government should do more to help ___ poor.",
        "opts": [
          "a",
          "the",
          "some",
          "—"
        ],
        "ans": 1,
        "exp": "'The + adjetivo' se refiere al grupo: 'the poor'."
      }
    ],
    "flashcards": [
      {
        "front": "THE with adjectives as nouns",
        "back": "the + adjective = a group of people:\nthe RICH (= rich people in general)\nthe POOR · the ELDERLY · the SICK\nthe UNEMPLOYED · the HOMELESS\n\n'The government should help the homeless.'"
      }
    ],
    "syntaxChips": [
      { "label": "THE + noun = species/invention", "chips": [
        { "text": "the telephone", "role": "object" }, { "text": "was invented...", "role": "verb" }
      ] },
      { "label": "THE + adjective = group of people", "chips": [
        { "text": "the", "role": "connector" }, { "text": "homeless", "role": "object" }
      ] },
      { "label": "THE + nationality adjective = a people", "chips": [
        { "text": "the", "role": "connector" }, { "text": "French", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "THE + noun — a whole species", "example": "The whale is the largest mammal on Earth.", "highlight": "The whale" },
      "right": { "label": "THE + adjective — a group of people", "example": "The government must help the homeless.", "highlight": "the homeless" },
      "caption": "\"The\" can generalize an entire species or invention, or turn an adjective into a noun meaning \"the people who are...\"."
    },
    "readingText": {
      "title": "A News Report",
      "body": "The telephone changed the way people communicate forever. Today, charities say more must be done to help the homeless, especially the elderly, during the cold winter months. Meanwhile, in France, the French are debating a new law, and the government has promised more support for the unemployed across the country.",
      "translation": "El teléfono cambió para siempre la forma en que las personas se comunican. Hoy, las organizaciones benéficas dicen que hay que hacer más para ayudar a las personas sin hogar, especialmente a los ancianos, durante los fríos meses de invierno. Mientras tanto, en Francia, los franceses están debatiendo una nueva ley, y el gobierno ha prometido más apoyo para los desempleados en todo el país."
    },
    "tips": [
      "'The + adjetivo' (the poor, the rich, the elderly) siempre es plural y no lleva '-s': 'The poor need help', no 'the poors'.",
      "Para nacionalidades sin forma de sustantivo propia (French, Chinese, British), usa 'the' + adjetivo para hablar del pueblo entero: 'the French'."
    ],
    "dailyWords": [
      { "w": "homeless", "ipa": "/ˈhoʊmləs/", "aprox": "jóumles", "def": "sin hogar", "ex": "The shelter helps the homeless find a place to sleep." },
      { "w": "charity", "ipa": "/ˈtʃærəti/", "aprox": "chárati", "def": "organización benéfica", "ex": "She works for a charity that supports the elderly." }
    ]
  },
  "74": {
    "title": "The 2 (names with/without the)",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Nombres geográficos con The",
        "body": "Ríos, océanos, cadenas montañosas, desiertos, grupos de islas y países cuyo nombre oficial es plural o incluye 'republic/kingdom/states' siempre llevan 'the'. El nexo común: describen algo formado por varias partes, como un conjunto de montañas o islas.",
        "note": "the Thames · the Pacific · the Alps · the Sahara · the Philippines · the United States"
      },
      {
        "head": "Nombres geográficos sin artículo",
        "body": "La mayoría de nombres geográficos de un solo lugar autónomo no llevan artículo: continentes, casi todos los países, lagos individuales, montañas sueltas y ciudades. Funcionan como un nombre propio, igual que el nombre de una persona.",
        "note": "Europe, Brazil, Lake Victoria, Mount Everest, Paris (no 'the')"
      },
      {
        "head": "Calles y lugares",
        "body": "La misma regla de 'sin artículo' se aplica a la mayoría de calles, parques, estaciones y aeropuertos con nombre propio: Oxford Street, Hyde Park, Heathrow Airport. Hay pocas excepciones históricas (como 'the Mall'), pero en general no llevan 'the'.",
        "note": "Oxford Street, Hyde Park, Heathrow Airport, Euston Station (no 'the')"
      }
    ],
    "quiz": [
      {
        "q": "___ Amazon is the longest river in South America.",
        "opts": [
          "—",
          "A",
          "The",
          "An"
        ],
        "ans": 2,
        "exp": "Río → 'the': 'The Amazon'."
      },
      {
        "q": "I've always wanted to visit ___ Japan.",
        "opts": [
          "the",
          "a",
          "—",
          "an"
        ],
        "ans": 2,
        "exp": "La mayoría de países → sin artículo: 'visit Japan'."
      }
    ],
    "flashcards": [
      {
        "front": "Geographical names: THE or no article?",
        "back": "THE: rivers (the Nile), oceans (the Atlantic), mountain ranges (the Rockies), deserts (the Sahara), plural countries (the Netherlands)\n\nNO ARTICLE: continents, most countries, cities, lakes, single mountains"
      }
    ],
    "syntaxChips": [
      { "label": "THE + composite/plural geographic name", "chips": [
        { "text": "the", "role": "connector" }, { "text": "Amazon / the Alps", "role": "object" }
      ] },
      { "label": "No article + single place", "chips": [
        { "text": "Brazil / Paris", "role": "object" }
      ] },
      { "label": "No article + street/park/station", "chips": [
        { "text": "Oxford Street / Hyde Park", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "THE — rivers, ranges, unions", "example": "The Amazon flows through the Andes.", "highlight": "The Amazon" },
      "right": { "label": "No article — countries, cities", "example": "We flew from Brazil to Paris.", "highlight": "Brazil" },
      "caption": "Rivers, oceans, mountain ranges and plural/union countries take \"the\"; most single countries, cities and lakes take no article."
    },
    "readingText": {
      "title": "A Trip Around the World",
      "body": "Our trip started in Brazil, where we visited a small town near the Amazon. From there we flew to Europe and crossed the Alps by train before arriving in Paris. Later we travelled to the Philippines, and finally to the United States, where we saw Lake Michigan and walked along Oxford Street's American cousin, Fifth Avenue.",
      "translation": "Nuestro viaje empezó en Brasil, donde visitamos un pueblo pequeño cerca del Amazonas. Desde allí volamos a Europa y cruzamos los Alpes en tren antes de llegar a París. Más tarde viajamos a Filipinas, y finalmente a Estados Unidos, donde vimos el lago Michigan y caminamos por la prima estadounidense de Oxford Street, la Quinta Avenida."
    },
    "tips": [
      "Ríos, océanos, cadenas montañosas y países 'plurales' (the Philippines, the Netherlands) siempre llevan 'the'.",
      "Países individuales, ciudades y lagos normalmente NO llevan artículo: 'Brazil', 'Paris', 'Lake Michigan' — igual que un nombre propio."
    ],
    "dailyWords": [
      { "w": "range (mountain range)", "ipa": "/reɪndʒ/", "aprox": "réinch", "def": "cadena montañosa", "ex": "The Andes is the longest mountain range in the world." },
      { "w": "overseas", "ipa": "/ˌoʊvərˈsiːz/", "aprox": "óuversís", "def": "en el extranjero, allende los mares", "ex": "He got a job overseas last year." }
    ]
  },
  "75": {
    "title": "The 3 (school / the school)",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Actividad habitual: sin The",
        "body": "Palabras como school, university, prison, church o bed pierden el artículo cuando hablas de su actividad normal: estudiar, cumplir condena, rezar, dormir. El foco está en la actividad, no en el edificio, así que 'go to school' significa 'ser estudiante'.",
        "note": "go to school (study) · go to prison (be punished) · go to bed (sleep)"
      },
      {
        "head": "El edificio concreto: con The",
        "body": "En cuanto hablas del edificio en sí, por otro motivo distinto a su función habitual, vuelve 'the': 'go to the school' es visitar el edificio, no asistir como alumno. Mismo lugar, misma palabra, pero 'the' aparece cuando cambia el propósito.",
        "note": "go to the school (visit, e.g. to talk to a teacher) · go to the prison (deliver something)"
      },
      {
        "head": "In hospital (inglés británico)",
        "body": "'Hospital' sigue la misma lógica: en inglés británico, 'in hospital' (sin artículo) significa estar allí como paciente, igual que 'in school'. El inglés americano no distingue y suele decir 'in the hospital' incluso para un paciente.",
        "note": "She's in hospital. She broke her leg."
      }
    ],
    "quiz": [
      {
        "q": "I go to ___ every day.",
        "opts": [
          "the school",
          "school",
          "a school",
          "schools"
        ],
        "ans": 1,
        "exp": "'Go to school' (actividad general, sin 'the')."
      },
      {
        "q": "I went to ___ to talk to the teacher.",
        "opts": [
          "school",
          "the school",
          "a school",
          "schools"
        ],
        "ans": 1,
        "exp": "Con 'the' = el edificio concreto, no como alumno."
      },
      {
        "q": "She's ___. She broke her leg.",
        "opts": [
          "in the hospital",
          "in hospital",
          "at hospital",
          "hospital"
        ],
        "ans": 1,
        "exp": "Inglés británico: 'in hospital' (como paciente) — sin 'the'."
      }
    ],
    "flashcards": [
      {
        "front": "General activity vs specific building",
        "back": "school · university · prison · church · bed — no THE when you use them for their normal purpose:\n'go to bed' (sleep) · 'go to school' (study) · 'go to prison' (be punished)\nWith THE = the actual building, for another reason:\n'go to the school' (visit) · 'go to the prison' (deliver something)"
      }
    ],
    "syntaxChips": [
      { "label": "No article — normal purpose", "chips": [
        { "text": "go to", "role": "verb" }, { "text": "school", "role": "object" }
      ] },
      { "label": "THE — the actual building", "chips": [
        { "text": "go to", "role": "verb" }, { "text": "the school", "role": "object" }
      ] },
      { "label": "British English — as a patient", "chips": [
        { "text": "in", "role": "connector" }, { "text": "hospital", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "No THE — the normal activity", "example": "My son goes to school every morning.", "highlight": "goes to school" },
      "right": { "label": "WITH THE — the building itself", "example": "I went to the school to talk to his teacher.", "highlight": "the school" },
      "caption": "Drop \"the\" for the expected purpose of a place (studying, sleeping); add \"the\" when you mean the physical building for another reason."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "Where's Tom? Is he at school?", "translation": "¿Dónde está Tom? ¿Está en el colegio?" },
      { "speaker": "user", "text": "Yes, he goes to school every day until three.", "translation": "Sí, va al colegio todos los días hasta las tres." },
      { "speaker": "other", "text": "Actually, I need to go to the school myself this afternoon — a meeting with his teacher.", "translation": "De hecho, yo mismo tengo que ir al colegio esta tarde... una reunión con su profesor." },
      { "speaker": "user", "text": "Oh, and by the way, my grandmother is in hospital again.", "translation": "Ah, y por cierto, mi abuela está otra vez en el hospital." },
      { "speaker": "other", "text": "I'm sorry to hear that. I hope she's better soon.", "translation": "Lo siento mucho. Espero que se mejore pronto." }
    ],
    "tips": [
      "'Go to school/bed/church' sin 'the' habla de la función normal (estudiar, dormir, rezar); con 'the' hablas del edificio en sí.",
      "En inglés británico, 'in hospital' (sin 'the') significa que alguien es paciente; en inglés americano se dice normalmente 'in the hospital'."
    ],
    "dailyWords": [
      { "w": "patient", "ipa": "/ˈpeɪʃənt/", "aprox": "péishent", "def": "paciente (de un hospital)", "ex": "She's been a patient at this hospital before." },
      { "w": "meeting", "ipa": "/ˈmiːtɪŋ/", "aprox": "míting", "def": "reunión", "ex": "I have a meeting with the teacher tomorrow." }
    ]
  },
  "76": {
    "title": "The 4 (instruments, media, meals)",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Instrumentos musicales: con The",
        "body": "Al hablar de tocar un instrumento musical, el inglés añade 'the': 'play the guitar', 'play the piano'. Es un patrón fijo solo para instrumentos; los deportes y juegos no llevan artículo ('play tennis', 'play chess').",
        "note": "play the guitar · play the piano · play the violin"
      },
      {
        "head": "Comidas: sin artículo",
        "body": "Los nombres de comidas (breakfast, lunch, dinner) no llevan artículo cuando hablas de la rutina en general: 'have breakfast', 'have dinner'. Solo aparece un artículo si la comida lleva un adjetivo delante: 'we had a lovely dinner'.",
        "note": "have breakfast/lunch/dinner (NOT: have the dinner ❌)"
      },
      {
        "head": "Medios: expresiones fijas",
        "body": "Las expresiones sobre medios no siguen una única regla: 'on the radio' y 'on the phone' llevan 'the', pero 'on television' normalmente no lo lleva. Al no haber una regla general, conviene memorizar cada expresión por separado.",
        "note": "I heard it on the radio. · What is on television tonight?"
      }
    ],
    "quiz": [
      {
        "q": "Can you play ___ guitar?",
        "opts": [
          "—",
          "a",
          "the",
          "some"
        ],
        "ans": 2,
        "exp": "Se usa 'the' con instrumentos musicales: 'play the guitar'."
      },
      {
        "q": "I heard it ___ radio.",
        "opts": [
          "in the",
          "on the",
          "at the",
          "on"
        ],
        "ans": 1,
        "exp": "'On the radio' (expresión fija con 'the')."
      },
      {
        "q": "We have ___ dinner at 8.",
        "opts": [
          "the",
          "a",
          "—",
          "an"
        ],
        "ans": 2,
        "exp": "Sin artículo con comidas en general: 'have dinner/lunch/breakfast'."
      }
    ],
    "flashcards": [
      {
        "front": "THE with instruments, without meals",
        "back": "Musical instruments → THE: play THE piano, THE guitar, THE violin.\nMeals in general → no article: have breakfast/lunch/dinner.\nMedia → ON THE radio/phone, but ON television (no THE)."
      }
    ],
    "syntaxChips": [
      { "label": "Instrument → THE", "chips": [
        { "text": "play", "role": "verb" }, { "text": "the guitar", "role": "object" }
      ] },
      { "label": "Sport/game → no article", "chips": [
        { "text": "play", "role": "verb" }, { "text": "tennis", "role": "object" }
      ] },
      { "label": "Meal → no article", "chips": [
        { "text": "have", "role": "verb" }, { "text": "breakfast", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "Instruments — WITH THE", "example": "She plays the piano beautifully.", "highlight": "the piano" },
      "right": { "label": "Sports/games — no article", "example": "She also plays tennis on Sundays.", "highlight": "tennis" },
      "caption": "Musical instruments take \"the\" (play the guitar), but sports and games take no article at all (play tennis)."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "Do you play any instruments?", "translation": "¿Tocas algún instrumento?" },
      { "speaker": "user", "text": "Yes, I play the guitar, and I'm learning the piano too.", "translation": "Sí, toco la guitarra, y también estoy aprendiendo piano." },
      { "speaker": "other", "text": "Nice! Do you also play any sports?", "translation": "¡Qué bien! ¿También practicas algún deporte?" },
      { "speaker": "user", "text": "I play tennis on weekends. In the evenings I usually just have dinner and watch television.", "translation": "Juego al tenis los fines de semana. Por las noches normalmente solo ceno y veo la televisión." },
      { "speaker": "other", "text": "Sounds relaxing. I heard there's a good documentary on tonight.", "translation": "Suena relajante. Escuché que hay un buen documental esta noche." },
      { "speaker": "user", "text": "Really? I didn't hear anything about it on the radio.", "translation": "¿En serio? No escuché nada sobre eso en la radio." }
    ],
    "tips": [
      "Instrumentos musicales siempre con 'the': 'play the violin', 'play the drums' — pero deportes sin artículo: 'play football'.",
      "'On the radio' y 'on the phone' llevan 'the', pero 'on television' normalmente no — son excepciones que hay que memorizar."
    ],
    "dailyWords": [
      { "w": "instrument", "ipa": "/ˈɪnstrəmənt/", "aprox": "ínstrument", "def": "instrumento (musical)", "ex": "The violin is a difficult instrument to learn." },
      { "w": "documentary", "ipa": "/ˌdɒkjuˈmentri/", "aprox": "dokiuméntri", "def": "documental", "ex": "We watched a documentary about the ocean." }
    ]
  },
  "77": {
    "title": "Names with/without The 1 (countries, continents)",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Países y continentes: sin artículo",
        "body": "Los continentes y la mayoría de países, sobre todo los de una sola palabra (Japan, Brazil, Mexico), no llevan artículo: funcionan como un nombre propio. Es el patrón por defecto salvo que el país entre en una de las categorías especiales siguientes.",
        "note": "Africa · Japan · Brazil · Mexico"
      },
      {
        "head": "Países plurales o 'republic/kingdom': con The",
        "body": "Los países llevan 'the' cuando su nombre oficial es plural (the Netherlands, the Philippines) o describe una unión, república o reino (the United States, the United Kingdom). La lógica es la misma que con accidentes geográficos: un nombre que describe varias partes se comporta como plural.",
        "note": "the Netherlands · the United States · the United Kingdom · the Philippines"
      },
      {
        "head": "Ciudades y calles: normalmente sin artículo",
        "body": "Al igual que la mayoría de países, ciudades, calles, parques y plazas se tratan como nombres propios y no llevan 'the': London, Oxford Street, Central Park. El propio nombre ya es suficientemente específico para identificar el lugar.",
        "note": "London · Oxford Street · Central Park"
      }
    ],
    "table": {
      "cols": [
        "Category",
        "No THE",
        "With THE"
      ],
      "rows": [
        [
          "Continents",
          "Africa · Asia · Europe",
          "—"
        ],
        [
          "Most countries",
          "France · Japan · Brazil",
          "—"
        ],
        [
          "Plural / union countries",
          "—",
          "the Netherlands · the United States · the Philippines"
        ],
        [
          "Cities, streets",
          "London · Oxford Street",
          "—"
        ]
      ]
    },
    "quiz": [
      {
        "q": "___ is a beautiful country.",
        "opts": [
          "The Japan",
          "Japan",
          "A Japan",
          "The Japans"
        ],
        "ans": 1,
        "exp": "Los países normalmente no llevan artículo."
      },
      {
        "q": "___ has 50 states.",
        "opts": [
          "United States",
          "The United States",
          "A United States",
          "United State"
        ],
        "ans": 1,
        "exp": "Nombre de país plural o de unión → 'the'."
      },
      {
        "q": "She lives in ___.",
        "opts": [
          "the London",
          "London",
          "a London",
          "Londons"
        ],
        "ans": 1,
        "exp": "Las ciudades no llevan artículo."
      }
    ],
    "flashcards": [
      {
        "front": "Countries and continents: THE or not?",
        "back": "No THE: continents, most countries (Japan, Brazil, France), cities.\nWITH THE: plural/union names (the United States, the Netherlands, the Philippines, the UK)."
      }
    ],
    "syntaxChips": [
      { "label": "No article — most countries/continents", "chips": [
        { "text": "Japan / Africa", "role": "object" }
      ] },
      { "label": "THE — plural/union countries", "chips": [
        { "text": "the", "role": "connector" }, { "text": "United States", "role": "object" }
      ] },
      { "label": "No article — cities/streets", "chips": [
        { "text": "London / Oxford Street", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "No THE — single-name country", "example": "Japan is famous for its technology.", "highlight": "Japan" },
      "right": { "label": "THE — plural/union name", "example": "The United States has fifty states.", "highlight": "The United States" },
      "caption": "Ordinary single-word countries take no article, like a person's name. Countries with a plural or \"union/republic/kingdom\" name take \"the\"."
    },
    "readingText": {
      "title": "Planning a Trip",
      "body": "We're planning a big trip next year. First, we'll visit Japan, then fly to Australia. After that, we want to see the Philippines and spend two weeks in the United States, starting in New York. My sister suggested we also visit the Netherlands before flying home through France.",
      "translation": "Estamos planeando un gran viaje para el próximo año. Primero visitaremos Japón, luego volaremos a Australia. Después, queremos ver Filipinas y pasar dos semanas en Estados Unidos, empezando por Nueva York. Mi hermana sugirió que también visitemos los Países Bajos antes de volar a casa pasando por Francia."
    },
    "tips": [
      "La mayoría de países y todos los continentes van sin artículo: 'Japan', 'Australia', 'Africa' — como un nombre propio.",
      "Si el nombre del país es plural o incluye 'republic/kingdom/states', lleva 'the': 'the Philippines', 'the United Kingdom'."
    ],
    "dailyWords": [
      { "w": "trip", "ipa": "/trɪp/", "aprox": "trip", "def": "viaje (corto)", "ex": "We're planning a trip to Japan next year." },
      { "w": "overseas", "ipa": "/ˌoʊvərˈsiːz/", "aprox": "óuversís", "def": "en el extranjero, allende los mares", "ex": "She has never lived overseas before." }
    ]
  },
  "78": {
    "title": "Names with/without The 2 (mountains, lakes, water)",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Montañas y lagos individuales: sin artículo",
        "body": "Una montaña o lago individual, nombrado por su propio nombre, no lleva artículo: Everest, Kilimanjaro, Lake Superior — igual que ciudades y países de un solo nombre. Cada nombre ya señala un lugar único, así que 'the' sería redundante.",
        "note": "Everest · Kilimanjaro · Lake Superior"
      },
      {
        "head": "Cadenas montañosas e islas: con The",
        "body": "En cuanto varias montañas o islas se nombran juntas como cadena o grupo, el nombre lleva 'the': the Alps, the Andes, the Canary Islands. El nombre describe realmente un conjunto de picos o islas, que se comporta como un plural.",
        "note": "the Alps · the Andes · the Canary Islands"
      },
      {
        "head": "Océanos, mares, ríos y canales: siempre con The",
        "body": "Océanos, mares, ríos y canales siempre llevan 'the', sea cual sea la forma del nombre: the Pacific, the Nile, the Suez Canal. Se piensan como un sistema continuo y conectado, no como un lugar delimitado; es una regla fija que memorizar.",
        "note": "the Pacific · the Mediterranean · the Nile · the Suez Canal"
      }
    ],
    "table": {
      "cols": [
        "Category",
        "No THE",
        "With THE"
      ],
      "rows": [
        [
          "Single mountains",
          "Everest · Kilimanjaro",
          "—"
        ],
        [
          "Mountain ranges",
          "—",
          "the Alps · the Rockies · the Andes"
        ],
        [
          "Lakes",
          "Lake Superior · Lake Titicaca",
          "—"
        ],
        [
          "Oceans, seas, rivers, canals",
          "—",
          "the Pacific · the Nile · the Suez Canal"
        ]
      ]
    },
    "quiz": [
      {
        "q": "___ is the highest mountain in the world.",
        "opts": [
          "The Everest",
          "Everest",
          "An Everest",
          "Everests"
        ],
        "ans": 1,
        "exp": "Montañas individuales: sin artículo."
      },
      {
        "q": "___ separate Europe from Asia in the south.",
        "opts": [
          "Urals",
          "The Urals",
          "An Urals",
          "Ural"
        ],
        "ans": 1,
        "exp": "Las cadenas montañosas llevan 'the'."
      },
      {
        "q": "The ship crossed ___.",
        "opts": [
          "Atlantic",
          "the Atlantic",
          "an Atlantic",
          "Atlantics"
        ],
        "ans": 1,
        "exp": "Los océanos siempre llevan 'the'."
      }
    ],
    "flashcards": [
      {
        "front": "Mountains/lakes vs ranges/oceans: THE or not?",
        "back": "No THE: a single mountain or lake (Everest, Lake Superior).\nWITH THE: mountain ranges, island groups, oceans, seas, rivers, canals (the Andes, the Nile, the Pacific)."
      }
    ],
    "syntaxChips": [
      { "label": "No article — single mountain/lake", "chips": [
        { "text": "Everest / Lake Superior", "role": "object" }
      ] },
      { "label": "THE — ranges/island groups", "chips": [
        { "text": "the", "role": "connector" }, { "text": "Alps / the Andes", "role": "object" }
      ] },
      { "label": "THE — oceans, seas, rivers, canals", "chips": [
        { "text": "the", "role": "connector" }, { "text": "Pacific / the Nile", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "No THE — one single peak", "example": "Everest is the highest mountain on Earth.", "highlight": "Everest" },
      "right": { "label": "THE — a whole range", "example": "The Andes stretch across seven countries.", "highlight": "The Andes" },
      "caption": "A single mountain or lake takes no article, but a range or group made of many peaks or islands takes \"the\"."
    },
    "readingText": {
      "title": "Climbing Everest",
      "body": "Before climbing Everest, the team trained for months in the Alps. They also spent time near Lake Superior, practising in cold weather. Their final expedition crossed the Andes before flying to Nepal. Along the way, they sailed across part of the Pacific and camped beside a quiet lake with no name at all.",
      "translation": "Antes de escalar el Everest, el equipo entrenó durante meses en los Alpes. También pasaron tiempo cerca del lago Superior, practicando con clima frío. Su expedición final cruzó los Andes antes de volar a Nepal. En el camino, navegaron por una parte del Pacífico y acamparon junto a un lago tranquilo sin nombre."
    },
    "tips": [
      "Una montaña o lago individual no lleva artículo: 'Everest', 'Lake Titicaca' — funcionan como un nombre propio.",
      "Océanos, mares, ríos y canales SIEMPRE llevan 'the', sin importar si sus nombres suenan singulares o plurales: 'the Pacific', 'the Nile'."
    ],
    "dailyWords": [
      { "w": "peak", "ipa": "/piːk/", "aprox": "pik", "def": "cima, pico", "ex": "They reached the peak just before sunset." },
      { "w": "expedition", "ipa": "/ˌekspəˈdɪʃən/", "aprox": "ekspedíshon", "def": "expedición", "ex": "The expedition to Everest took two months." }
    ]
  },
  "79": {
    "title": "Singular and Plural",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Plurales regulares: -s o -es",
        "body": "La mayoría de sustantivos añaden '-s' para el plural (book→books). Los que terminan en un sonido difícil de pronunciar con solo '-s' (-s, -sh, -ch, -x, -o) añaden '-es' (bus→buses). Si terminan en consonante + y, la y cambia a i (baby→babies).",
        "note": "book→books · bus→buses · church→churches · baby→babies · photo→photos"
      },
      {
        "head": "Plurales irregulares",
        "body": "Un grupo reducido de sustantivos muy comunes cambia de forma por completo: man→men, woman→women, child→children, foot→feet, tooth→teeth, mouse→mice, person→people. No siguen ninguna regla; hay que memorizarlos, pero son palabras muy frecuentes.",
        "note": "man→men · woman→women · child→children · foot→feet · tooth→teeth · mouse→mice · person→people"
      },
      {
        "head": "Sustantivos siempre singulares",
        "body": "Algunas palabras parecen plurales por terminar en '-s', pero son siempre singulares y llevan verbo en singular: news, mathematics, physics, economics, measles. Por eso 'The news is good' es correcto, aunque 'news' acabe en '-s' como un plural normal.",
        "note": "news (is) · mathematics (is) · physics (is) · economics (is) · measles (is)"
      }
    ],
    "quiz": [
      {
        "q": "The ___ are playing in the garden. (more than one child)",
        "opts": [
          "childs",
          "childrens",
          "children",
          "child"
        ],
        "ans": 2,
        "exp": "Plural irregular: child → children."
      },
      {
        "q": "The news ___ good today.",
        "opts": [
          "are",
          "were",
          "is",
          "be"
        ],
        "ans": 2,
        "exp": "'News' es singular pese a la '-s': 'The news is good.'"
      }
    ],
    "flashcards": [
      {
        "front": "Irregular plurals: man/woman/child/foot/tooth/mouse/person",
        "back": "man → MEN\nwoman → WOMEN\nchild → CHILDREN\nfoot → FEET\ntooth → TEETH\nmouse → MICE\nperson → PEOPLE"
      }
    ],
    "syntaxChips": [
      { "label": "Regular plural", "chips": [
        { "text": "book", "role": "object" }, { "text": "→ books", "role": "object" }
      ] },
      { "label": "Irregular plural", "chips": [
        { "text": "child", "role": "object" }, { "text": "→ children", "role": "object" }
      ] },
      { "label": "Always singular (looks plural)", "chips": [
        { "text": "the news", "role": "subject" }, { "text": "is", "role": "verb" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "Irregular plural", "example": "The children played with their feet in the sand.", "highlight": "children" },
      "right": { "label": "Always singular (ends in -s)", "example": "The news was surprising today.", "highlight": "The news was" },
      "caption": "Some nouns change form completely in the plural (child→children); others end in -s but are always grammatically singular (the news IS)."
    },
    "readingText": {
      "title": "A Busy Family Morning",
      "body": "Every morning is busy in our house. The children wake up early and run around with bare feet, brushing their teeth before breakfast. My husband always listens to the news while he makes coffee, even though the news is rarely good these days! Meanwhile, our two mice — yes, we have pet mice — squeak loudly in their cage, and the family dog wants to play with everyone.",
      "translation": "Cada mañana es ajetreada en nuestra casa. Los niños se despiertan temprano y corren descalzos, cepillándose los dientes antes del desayuno. Mi esposo siempre escucha las noticias mientras prepara el café, ¡aunque las noticias rara vez son buenas hoy en día! Mientras tanto, nuestros dos ratones — sí, tenemos ratones como mascotas — chillan fuerte en su jaula, y el perro de la familia quiere jugar con todos."
    },
    "tips": [
      "Los plurales irregulares más comunes (man→men, child→children, foot→feet, tooth→teeth, mouse→mice) no siguen ninguna regla — hay que memorizarlos.",
      "Palabras como 'news', 'mathematics' o 'physics' terminan en '-s' pero llevan verbo singular: 'The news IS good', no 'are'."
    ],
    "dailyWords": [
      { "w": "toothbrush", "ipa": "/ˈtuːθbrʌʃ/", "aprox": "túzbrash", "def": "cepillo de dientes", "ex": "Don't forget your toothbrush before bed." },
      { "w": "barefoot", "ipa": "/ˈberfʊt/", "aprox": "bérfut", "def": "descalzo", "ex": "The kids love running barefoot on the beach." }
    ]
  },
  "80": {
    "title": "Noun + Noun",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Sustantivos compuestos",
        "body": "El inglés combina dos sustantivos en uno compuesto, donde el primero funciona como adjetivo y describe al segundo. 'Bus stop' es una parada (lo principal) que es para autobuses. Reconocer cuál es la palabra principal (la segunda) ayuda a entender el significado.",
        "note": "bus stop · car park · kitchen table · football match · phone call"
      },
      {
        "head": "El primer sustantivo va en singular",
        "body": "Aunque el significado sea plural, el primer sustantivo del compuesto se queda en singular, porque funciona como adjetivo: 'a bookshop' es una tienda de libros, no 'booksshop'. Igual pasa con números: 'a five-minute walk', nunca 'five-minutes'.",
        "note": "a bookshop (= a shop for books) · a five-minute walk · a three-hour journey"
      }
    ],
    "quiz": [
      {
        "q": "I'm going to the ___ to post a letter.",
        "opts": [
          "posts office",
          "post offices",
          "post office",
          "posting office"
        ],
        "ans": 2,
        "exp": "Sustantivo compuesto: 'post office' (primer sustantivo en singular)."
      },
      {
        "q": "It's only a ___ walk from here.",
        "opts": [
          "five-minutes",
          "five minutes",
          "five-minute",
          "minutes five"
        ],
        "ans": 2,
        "exp": "Adjetivo compuesto: 'a five-minute walk' (con guion, sin '-s')."
      }
    ],
    "flashcards": [
      {
        "front": "Noun + Noun compounds",
        "back": "First noun = modifier (stays SINGULAR):\nbus STOP · car PARK · shoe BOX\na three-hour JOURNEY ✅\na three-hours journey ❌\n\nMeaning: 'a bus stop' = a stop FOR buses"
      }
    ],
    "syntaxChips": [
      { "label": "Compound noun", "chips": [
        { "text": "noun (modifier, singular)", "role": "connector" }, { "text": "+ noun (head)", "role": "object" }
      ] },
      { "label": "Example", "chips": [
        { "text": "bus", "role": "connector" }, { "text": "stop", "role": "object" }
      ] },
      { "label": "Compound adjective with a number", "chips": [
        { "text": "five-minute", "role": "connector" }, { "text": "walk", "role": "object" }
      ] }
    ],
    "readingText": {
      "title": "A Walk Through Town",
      "body": "It's only a ten-minute walk from my house to the bus stop. On the way, I usually pass the car park behind the post office and stop for a phone call outside the coffee shop. Yesterday, after a long football match at the sports centre, I sat at the kitchen table and finally relaxed.",
      "translation": "Es solo una caminata de diez minutos desde mi casa hasta la parada de autobús. En el camino, normalmente paso por el aparcamiento detrás de la oficina de correos y me detengo para hacer una llamada afuera de la cafetería. Ayer, después de un largo partido de fútbol en el polideportivo, me senté en la mesa de la cocina y por fin descansé."
    },
    "tips": [
      "En un compuesto noun+noun, el primer sustantivo siempre queda en singular aunque el significado sea plural: 'a bookshop' (tienda de libros), no 'booksshop'.",
      "Con números, el adjetivo compuesto tampoco lleva '-s': 'a five-minute walk', no 'a five-minutes walk'."
    ],
    "dailyWords": [
      { "w": "car park", "ipa": "/kɑːr pɑːrk/", "aprox": "car park", "def": "aparcamiento (BrE)", "ex": "I left my car in the car park near the station." },
      { "w": "sports centre", "ipa": "/spɔːrts ˈsentər/", "aprox": "espórts sénter", "def": "polideportivo", "ex": "We play basketball at the sports centre every week." }
    ]
  },
  "81": {
    "title": "'s and of…",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Apóstrofo 's: personas y animales",
        "body": "El posesivo 's es la forma natural de mostrar que algo pertenece a una persona o animal: Tom's car, my sister's room, the cat's tail. El orden (dueño + 's + cosa) es el habitual para seres vivos, y se prefiere frente a 'of' cuando el poseedor es animado.",
        "note": "Tom's car · my sister's room · the cat's tail · the company's director"
      },
      {
        "head": "Of: cosas e ideas",
        "body": "Cuando el 'dueño' es una cosa o idea abstracta, se usa 'of' en vez de 's: 'the end of the film', 'the door of the car'. Los objetos no 'poseen' nada como una persona; es más bien una relación de parte y todo.",
        "note": "the end of the film · the door of the car · the price of the tickets"
      },
      {
        "head": "Posesivo doble: a friend of Tom's",
        "body": "El posesivo doble (a/this/that + sustantivo + of + posesivo) señala un elemento entre varios de alguien: 'a friend of Tom's' es uno de los (probablemente muchos) amigos de Tom. Funciona igual con pronombres posesivos: 'a colleague of mine'.",
        "note": "She's a friend of Tom's. · He's a colleague of mine. · I'm a fan of hers."
      }
    ],
    "quiz": [
      {
        "q": "Have you met ___ wife?",
        "opts": [
          "Paul wife",
          "the wife of Paul",
          "Paul's wife",
          "Pauls wife"
        ],
        "ans": 2,
        "exp": "Posesión de una persona → apóstrofo 's: 'Paul's wife'."
      },
      {
        "q": "What's ___ the film?",
        "opts": [
          "the end of",
          "the film's end",
          "the end's of",
          "end of the"
        ],
        "ans": 0,
        "exp": "Para cosas → 'of': 'the end of the film'."
      }
    ],
    "flashcards": [
      {
        "front": "'S vs OF — when to use each",
        "back": "PEOPLE & ANIMALS → 's:\n'Tom's car' · 'the dog's bone'\n\nTHINGS & IDEAS → of:\n'the end of the film' · 'the cost of living'\n\nTIME EXPRESSIONS → both:\n'yesterday's news' / 'the news of yesterday'"
      }
    ],
    "syntaxChips": [
      { "label": "People/animals → 'S", "chips": [
        { "text": "Tom's", "role": "connector" }, { "text": "car", "role": "object" }
      ] },
      { "label": "Things/ideas → OF", "chips": [
        { "text": "the end", "role": "object" }, { "text": "of the film", "role": "connector" }
      ] },
      { "label": "Double possessive", "chips": [
        { "text": "a friend", "role": "object" }, { "text": "of Tom's", "role": "connector" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "PEOPLE/ANIMALS — 'S", "example": "Tom's car broke down this morning.", "highlight": "Tom's car" },
      "right": { "label": "THINGS/IDEAS — OF", "example": "The door of the car wouldn't close.", "highlight": "The door of the car" },
      "caption": "Use 's for people and animals (the possessor comes first); use \"of\" for things and ideas (the whole comes first)."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "Is that Tom's car outside?", "translation": "¿Ese es el coche de Tom que está afuera?" },
      { "speaker": "user", "text": "Yes, but the door of the car is broken — he can't close it properly.", "translation": "Sí, pero la puerta del coche está rota... no puede cerrarla bien." },
      { "speaker": "other", "text": "That's bad luck. By the way, is he a friend of yours?", "translation": "Qué mala suerte. Por cierto, ¿es amigo tuyo?" },
      { "speaker": "user", "text": "Yes, he's an old friend of mine from university.", "translation": "Sí, es un viejo amigo mío de la universidad." }
    ],
    "tips": [
      "Con personas y animales, usa 's: 'my sister's room', 'the cat's tail'. Con cosas e ideas, usa 'of': 'the end of the film'.",
      "El posesivo doble ('a friend of mine', no 'a friend of me') siempre usa el pronombre posesivo, nunca el pronombre objeto."
    ],
    "dailyWords": [
      { "w": "owner", "ipa": "/ˈoʊnər/", "aprox": "óuner", "def": "dueño, propietario", "ex": "Who is the owner of this car?" },
      { "w": "colleague", "ipa": "/ˈkɒliːɡ/", "aprox": "cólig", "def": "colega, compañero de trabajo", "ex": "She's a colleague of mine from work." }
    ]
  }
};
