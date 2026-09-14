import { Unit } from '@/types/grammar';

export const articlesAndNounsUnits: Record<number, Unit> = {
  "69": {
    "title": "Countable and Uncountable Nouns 1",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Countable nouns (can count)",
        "body": "Countable nouns refer to individual things you can count one by one, so they exist in two forms: singular (a dog) and plural (two dogs). Because each one is a separate unit, you can put a/an in front of the singular form or a number in front of the plural. This is different from uncountable nouns, which describe things as a whole mass rather than separate items, so they don't behave the same way with a/an or numbers.",
        "note": "a dog / two dogs · a chair / three chairs · a book / many books"
      },
      {
        "head": "Uncountable nouns (cannot count)",
        "body": "Uncountable nouns describe things as a substance, idea, or mass rather than as separate countable units — liquids, abstract concepts, or collections treated as a whole. Because there's no way to count them one by one, they have no plural form and never take 'a/an'; instead you say 'some water' or 'a glass of water'. Since they're treated as one single mass, the verb that goes with them is always singular, even though the word might look like it could be plural.",
        "note": "water · music · information · advice · furniture · luggage · knowledge · money · news"
      },
      {
        "head": "Common mistakes",
        "body": "A frequent source of errors for Spanish speakers is that some nouns which are countable in Spanish (una información, un consejo) are uncountable in English, so learners naturally try to add 'a/an' or a plural -s to them out of habit. Words like 'information', 'advice', 'furniture' and 'news' must be treated as uncountable in English regardless of how they behave in Spanish. When you need to count one instance of these, English uses a counting phrase instead, such as 'a piece of advice' or 'a piece of information'.",
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
        "exp": "'Information' is uncountable → no plural, no 'an': 'some information'."
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
        "exp": "Advice is uncountable. Use 'a piece of advice' for one."
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
      { "w": "furniture", "ipa": "/ˈfɜːrnɪtʃər/", "def": "muebles (incontable)", "ex": "We need to buy some furniture for the living room." },
      { "w": "piece of advice", "ipa": "/piːs əv ədˈvaɪs/", "def": "un consejo", "ex": "Let me give you a piece of advice before your interview." }
    ]
  },
  "70": {
    "title": "Countable and Uncountable Nouns 2",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Some nouns can be countable or uncountable",
        "body": "A number of nouns can be either countable or uncountable depending on what you mean, and the meaning shifts along with the grammar. Used uncountably, a noun like 'coffee' refers to the substance in general, but used countably as 'a coffee' or 'two coffees', it refers to individual servings or cups. The same pattern applies to 'hair': uncountable use means hair in general, while countable use ('a hair') means one single strand.",
        "note": "coffee (uncountable: I like coffee) vs 'two coffees' (two cups). Hair (general) vs 'a hair' (one strand)."
      },
      {
        "head": "Quantifiers with countable and uncountable",
        "body": "Because countable and uncountable nouns behave differently, the quantifier you choose has to match the type of noun you're describing. Words like 'some', 'any' and 'no' are flexible and work with both types, but 'many' and 'few' only pair with countable plural nouns, while 'much' and 'little' only pair with uncountable nouns. 'A lot of', 'lots of' and 'plenty of' are the safest choice when you're unsure, since they work with both.",
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
        "exp": "'Milk' is uncountable → use 'much': 'not much milk'."
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
        "exp": "'People' is countable (plural) → use 'a few': 'a few people'."
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
      { "w": "biscuit", "ipa": "/ˈbɪskɪt/", "def": "galleta (BrE)", "ex": "She had a biscuit with her tea." },
      { "w": "a couple of", "ipa": "/ə ˈkʌpəl əv/", "def": "un par de, un par", "ex": "Can I get a couple of coffees to go?" }
    ]
  },
  "71": {
    "title": "Countable Nouns with A/An and Some",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "A/An — singular countable",
        "body": "'A' or 'an' goes in front of a singular countable noun when you're talking about one example of something without saying exactly which one — any pen, any apple, any dog. Choose 'an' before a vowel sound and 'a' before a consonant sound. Because it marks something as one unspecified item, a/an only works with singular countable nouns, never with plurals or uncountables.",
        "note": "I need a pen. · She bought an apple. · There's a dog in the garden."
      },
      {
        "head": "Some — plural countable (positive)",
        "body": "'Some' is the natural choice when you want to say there's a quantity of something in a positive sentence, without stating an exact number. It works with plural countable nouns ('some pens', 'some friends') and equally with uncountable nouns ('some water'), since in both cases you're pointing to 'an amount of' something rather than one single item. In negative sentences and most questions, English switches to 'any' instead, covered next.",
        "note": "I need some pens. · She bought some apples. · I have some friends coming."
      },
      {
        "head": "Any — plural countable (negative/questions)",
        "body": "'Any' takes over from 'some' in negative sentences and in most questions, because in these contexts you're talking about a quantity that might not exist at all (zero pens), rather than confirming a positive amount. It works with plural countable nouns ('any pens') and uncountables ('any water') the same way 'some' does in positive sentences. As a rule of thumb: positive statement → some, negative or question → any.",
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
        "exp": "Singular countable, first mention → 'an': 'an envelope'."
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
        "exp": "Negative sentence, plural countable → 'any': 'aren't any tickets'."
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
      { "w": "loaf (of bread)", "ipa": "/loʊf/", "def": "barra o pan de molde", "ex": "I bought a loaf of bread this morning." },
      { "w": "leftover(s)", "ipa": "/ˈleftoʊvər(z)/", "def": "sobras", "ex": "We had some leftovers for dinner." }
    ]
  },
  "72": {
    "title": "A/An and The",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "A/AN — indefinite (first mention / not specific)",
        "body": "Use 'a/an' the first time you mention something, when your listener has no way of knowing yet which specific one you mean. It signals 'one example of this type of thing' rather than a particular, identifiable item. Once that thing has already been mentioned or is clear from context, English switches to 'the' instead, because now both speaker and listener know exactly which one is meant.",
        "note": "I saw a dog. · She's an engineer. · I need a pen."
      },
      {
        "head": "THE — definite (known / specific)",
        "body": "'The' marks something as specific and identifiable — you use it when both you and your listener know exactly which person, thing, or place is being talked about. This often happens after something has already been introduced with 'a/an' ('I saw a dog. The dog was barking'), but it can also apply to something obvious from the situation, like 'the window' in the room you're both in. A useful test: could the listener point to the exact one you mean? If yes, use 'the'.",
        "note": "I saw a dog. The dog was barking. · Can you close the window? (the specific one in this room)"
      },
      {
        "head": "THE — unique things",
        "body": "'The' is also used for things that are unique — there's only one of them in the world (or in our shared experience), so there's never any doubt about which one you mean. The sun, the moon, the sky and the internet fall into this category, since there's nothing to distinguish them from other examples of the same kind. This is really the same logic as the 'known/specific' use above, just applied to things that are always specific by their very nature.",
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
        "exp": "Job description → 'a': 'She's a nurse.'"
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
        "exp": "Unique thing → 'The sun'."
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
        "exp": "First mention, vowel sound → 'an umbrella'."
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
      { "w": "gate", "ipa": "/ɡeɪt/", "def": "portón, verja", "ex": "He was waiting by the gate." },
      { "w": "roof", "ipa": "/ruːf/", "def": "tejado, techo", "ex": "There's a cat on the roof again." }
    ]
  },
  "73": {
    "title": "The 1 (the giraffe / the telephone)",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "The with species/inventions",
        "body": "'The' can refer to an entire species or category as a single representative concept, not one specific animal or object. Saying 'the whale' means whales as a species in general, and 'the telephone' means the telephone as an invention or category of device, not any particular whale or phone. This is a special, more formal use of 'the' for generalizing, distinct from its everyday use to point at one specific, known item.",
        "note": "The whale is the largest mammal. · The telephone was invented by Bell."
      },
      {
        "head": "The with adjectives as nouns",
        "body": "Putting 'the' directly in front of certain adjectives turns them into a noun phrase naming a whole group of people who share that characteristic — 'the rich' means rich people in general, not one specific rich person. These phrases are always plural in meaning and take a plural verb, even though there's no separate plural noun visible. This pattern only works with a limited set of adjectives describing people (the poor, the elderly, the unemployed, the homeless), not with adjectives in general.",
        "note": "the rich, the poor, the elderly, the sick, the unemployed, the homeless"
      },
      {
        "head": "The with nationality words",
        "body": "Similarly, 'the' combines with certain nationality adjectives to mean the people of that nation as a whole, rather than one individual — 'the French' means French people in general. This works with nationality words that are adjectives rather than nouns (French, Chinese, British), and like 'the rich' above, the phrase takes a plural verb even without a visible plural ending. For nationalities with a separate noun form (a Spaniard, an Italian), you can also just add -s normally to make a countable plural.",
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
        "exp": "Referring to the invention in general → 'The telephone'."
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
        "exp": "'The + adjective' refers to the group: 'the poor'."
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
      { "w": "homeless", "ipa": "/ˈhoʊmləs/", "def": "sin hogar", "ex": "The shelter helps the homeless find a place to sleep." },
      { "w": "charity", "ipa": "/ˈtʃærəti/", "def": "organización benéfica", "ex": "She works for a charity that supports the elderly." }
    ]
  },
  "74": {
    "title": "The 2 (names with/without the)",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Geographical names — THE",
        "body": "Certain categories of geographical name always take 'the': rivers, oceans and seas, mountain ranges, deserts, groups of islands, and countries whose official name is plural or contains a word like 'republic', 'kingdom' or 'states'. The common thread is that these names describe something made up of multiple parts (a chain of mountains, a group of islands) or that originally described a place rather than functioning as a pure proper name. Compare this with single, standalone geographical features below, which normally take no article at all.",
        "note": "the Thames · the Pacific · the Alps · the Sahara · the Philippines · the United States"
      },
      {
        "head": "Geographical names — NO article",
        "body": "Most geographical names that refer to one single, self-contained place take no article at all: continents, most countries, individual lakes, single mountains, and cities. These names function as ordinary proper nouns, the same way a person's name does, so they don't need 'the' to mark them as specific — the name alone already does that job. This is the opposite pattern from the 'the'-taking categories above, which describe something plural or composite in nature.",
        "note": "Europe, Brazil, Lake Victoria, Mount Everest, Paris (no 'the')"
      },
      {
        "head": "Streets, places",
        "body": "The same no-article rule extends to most named streets, parks, stations and airports, since these are also treated as proper names that already identify one specific place on their own — Oxford Street, Hyde Park, Heathrow Airport. You don't need 'the' in front of them any more than you would in front of a person's name. There are a few historical exceptions (like 'the Mall'), but as a general rule, named streets and landmarks skip the article.",
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
        "exp": "River → 'the': 'The Amazon'."
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
        "exp": "Most countries → no article: 'visit Japan'."
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
      { "w": "range (mountain range)", "ipa": "/reɪndʒ/", "def": "cadena montañosa", "ex": "The Andes is the longest mountain range in the world." },
      { "w": "overseas", "ipa": "/ˌoʊvərˈsiːz/", "def": "en el extranjero, allende los mares", "ex": "He got a job overseas last year." }
    ]
  },
  "75": {
    "title": "The 3 (school / the school)",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "General activity — no THE",
        "body": "A small group of nouns — school, university, prison, church, bed — drop the article when you're talking about the normal, expected activity associated with that place: studying, being punished, worshipping, sleeping. In this use, the focus is on the activity or purpose, not on the building itself, so 'go to school' means 'be a student', regardless of which building is involved. This is a special exception to the usual rule that a specific place needs 'the'.",
        "note": "go to school (study) · go to prison (be punished) · go to bed (sleep)"
      },
      {
        "head": "The specific building — WITH THE",
        "body": "As soon as you're referring to the physical building itself, for a reason other than its normal purpose, 'the' comes back — 'go to the school' means visiting the building (for a meeting, say), not attending as a student. The contrast with the block above is entirely about purpose: same word, same place, but 'the' appears the moment the normal function isn't what's meant. This distinction — no article for the institution's purpose, 'the' for the physical building — is a common trap for learners.",
        "note": "go to the school (visit, e.g. to talk to a teacher) · go to the prison (deliver something)"
      },
      {
        "head": "IN HOSPITAL (British English)",
        "body": "'Hospital' follows the same institution-vs-building logic as school, but with a regional twist: in British English, 'in hospital' (with no article) means being there as a patient, following the same pattern as 'in school'. American English doesn't make this distinction and normally says 'in the hospital' even for a patient. If you're following British usage, remember to drop 'the' specifically for this meaning, even though American media may make 'the hospital' sound more natural.",
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
        "exp": "'Go to school' (general activity, no 'the')."
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
        "exp": "With 'the' = the specific building, not as a student."
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
        "exp": "British English: 'in hospital' (as a patient) — no 'the'."
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
      { "w": "patient", "ipa": "/ˈpeɪʃənt/", "def": "paciente (de un hospital)", "ex": "She's been a patient at this hospital before." },
      { "w": "meeting", "ipa": "/ˈmiːtɪŋ/", "def": "reunión", "ex": "I have a meeting with the teacher tomorrow." }
    ]
  },
  "76": {
    "title": "The 4 (instruments, media, meals)",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Musical instruments — WITH THE",
        "body": "When you talk about someone's ability or activity of playing a musical instrument, English adds 'the' in front of the instrument's name — 'play the guitar', 'play the piano' — treating the instrument almost like a unique category, similar to how 'the' works with inventions. This is a fixed pattern specific to instruments; it doesn't extend to sports or games, which take no article at all ('play tennis', 'play chess').",
        "note": "play the guitar · play the piano · play the violin"
      },
      {
        "head": "Meals — no article",
        "body": "The names of meals — breakfast, lunch, dinner — normally appear with no article at all when you're talking about the meal as a general routine event: 'have breakfast', 'have dinner'. Adding 'the' or 'a' would wrongly suggest one specific, previously mentioned meal rather than the everyday event, so 'have the dinner' sounds unnatural in English. An article only appears if the meal is described with an adjective, as in 'we had a lovely dinner'.",
        "note": "have breakfast/lunch/dinner (NOT: have the dinner ❌)"
      },
      {
        "head": "Media — fixed patterns",
        "body": "Expressions about media don't all follow the same pattern, so they're best learned as fixed phrases: 'on the radio' and 'on the phone' both take 'the', treating the radio or phone almost like a unique medium or device, similar to 'the internet'. 'On television' (or 'on TV'), however, usually drops the article, treating television as an activity or broadcast medium rather than a specific object. Since there's no single rule that predicts this, it's worth memorizing each expression individually.",
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
        "exp": "Use 'the' with musical instruments: 'play the guitar'."
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
        "exp": "'On the radio' (fixed expression with the)."
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
        "exp": "No article with meals in general: 'have dinner/lunch/breakfast'."
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
      { "w": "instrument", "ipa": "/ˈɪnstrəmənt/", "def": "instrumento (musical)", "ex": "The violin is a difficult instrument to learn." },
      { "w": "documentary", "ipa": "/ˌdɒkjuˈmentri/", "def": "documental", "ex": "We watched a documentary about the ocean." }
    ]
  },
  "77": {
    "title": "Names with/without The 1 (countries, continents)",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Most countries and continents — no article",
        "body": "Continents and the vast majority of country names — especially single-word ones like Japan, Brazil or Mexico — take no article at all, because they function as simple proper names, just like a person's name. This is the default pattern you should assume unless a country's official name clearly falls into one of the special categories described next. Getting this right matters because adding 'the' to an ordinary country name (e.g. 'the Japan') is a very noticeable mistake.",
        "note": "Africa · Japan · Brazil · Mexico"
      },
      {
        "head": "Countries with plural names or 'republic/kingdom' — THE",
        "body": "Countries take 'the' when their official name is grammatically plural (the Netherlands, the Philippines) or explicitly describes a union of parts, a republic, or a kingdom (the United States, the United Kingdom). The logic mirrors the geographical rule from Unit 74: a name describing something composed of multiple states, islands, or regions behaves like a plural or collective noun and needs 'the' to introduce it, unlike a simple, single-unit country name.",
        "note": "the Netherlands · the United States · the United Kingdom · the Philippines"
      },
      {
        "head": "Cities and streets — usually no article",
        "body": "Like most countries, the names of cities, streets, parks and squares are normally treated as proper names in their own right and don't take 'the' — London, Oxford Street, Central Park. The name itself is already specific enough to identify the place, so no article is needed to do that job. As with countries, there are a handful of well-known exceptions, but they're rare enough to be learned individually rather than as a rule.",
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
        "exp": "Countries normally have no article."
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
        "exp": "Plural/union country name → 'the'."
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
        "exp": "Cities take no article."
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
      { "w": "trip", "ipa": "/trɪp/", "def": "viaje (corto)", "ex": "We're planning a trip to Japan next year." },
      { "w": "overseas", "ipa": "/ˌoʊvərˈsiːz/", "def": "en el extranjero, allende los mares", "ex": "She has never lived overseas before." }
    ]
  },
  "78": {
    "title": "Names with/without The 2 (mountains, lakes, water)",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Single mountains and lakes — no article",
        "body": "A single, individual mountain or lake, referred to by its own name, takes no article — Everest, Kilimanjaro, Lake Superior — following the same 'proper name' logic as cities and single countries. Because each of these names already picks out one specific, unique place, adding 'the' would be redundant. This contrasts with ranges and groups of these same kinds of features, covered next, which do take 'the'.",
        "note": "Everest · Kilimanjaro · Lake Superior"
      },
      {
        "head": "Mountain ranges and island groups — THE",
        "body": "As soon as several mountains or islands are named together as a range or group, the name takes 'the' — the Alps, the Andes, the Canary Islands — because the name is really describing a collection of separate peaks or islands, which behaves grammatically like a plural. This is the same pattern seen with plural country names like 'the Netherlands': a name covering multiple parts needs 'the', while a name for one single item doesn't.",
        "note": "the Alps · the Andes · the Canary Islands"
      },
      {
        "head": "Oceans, seas, rivers, canals — always THE",
        "body": "Oceans, seas, rivers and canals always take 'the', regardless of whether the name is grammatically singular or plural — the Pacific, the Nile, the Suez Canal. Unlike mountains or lakes, these bodies of water are thought of as one continuous, connected system rather than a bounded, standalone place, and that category consistently takes the article in English. This is simply a fixed rule to memorize for this class of geographical name, since it doesn't follow the plural/singular logic used elsewhere in this unit.",
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
        "exp": "Single mountains: no article."
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
        "exp": "Mountain ranges take 'the'."
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
        "exp": "Oceans always take 'the'."
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
      { "w": "peak", "ipa": "/piːk/", "def": "cima, pico", "ex": "They reached the peak just before sunset." },
      { "w": "expedition", "ipa": "/ˌekspəˈdɪʃən/", "def": "expedición", "ex": "The expedition to Everest took two months." }
    ]
  },
  "79": {
    "title": "Singular and Plural",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Regular plurals — add -s or -es",
        "body": "Most English nouns simply add -s to form the plural (book → books). Nouns already ending in a sound that would be hard to pronounce with just -s — endings like -s, -sh, -ch, -x, or -o — add an extra syllable with -es instead (bus → buses, church → churches). And when a noun ends in a consonant followed by -y, the y changes to i before adding -es (baby → babies), since English spelling avoids that ending combination.",
        "note": "book→books · bus→buses · church→churches · baby→babies · photo→photos"
      },
      {
        "head": "Irregular plurals",
        "body": "A small set of very common nouns don't follow any of the regular -s/-es patterns at all and instead change form completely or internally: man→men, woman→women, child→children, foot→feet, tooth→teeth, mouse→mice, person→people. These come from older forms of English that survived into the modern language, so there's no shortcut except memorizing them — but because they're such frequent, everyday words, they're worth learning early and well.",
        "note": "man→men · woman→women · child→children · foot→feet · tooth→teeth · mouse→mice · person→people"
      },
      {
        "head": "Nouns with no plural (always singular)",
        "body": "Some nouns look plural because they end in -s, but they're grammatically always singular and take a singular verb — news, mathematics, physics, economics, measles. Historically many of these come from words for academic subjects or from collective/uncountable ideas, which is why English treats them as one single thing rather than as countable items. This is why 'The news is good' is correct even though 'news' ends in -s like a normal plural.",
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
        "exp": "Irregular plural: child → children."
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
        "exp": "'News' is singular despite the -s: 'The news is good.'"
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
      { "w": "toothbrush", "ipa": "/ˈtuːθbrʌʃ/", "def": "cepillo de dientes", "ex": "Don't forget your toothbrush before bed." },
      { "w": "barefoot", "ipa": "/ˈberfʊt/", "def": "descalzo", "ex": "The kids love running barefoot on the beach." }
    ]
  },
  "80": {
    "title": "Noun + Noun",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Compound nouns",
        "body": "English frequently combines two nouns into a compound, where the first noun functions like an adjective, describing or classifying the second noun rather than naming a separate thing itself. A 'bus stop' is a stop (the main thing) that is for buses (the first noun tells you what kind), and the same logic applies to 'car park', 'kitchen table' and 'phone call'. Recognizing which noun is the 'head' (the second one) helps you understand what the whole compound actually refers to.",
        "note": "bus stop · car park · kitchen table · football match · phone call"
      },
      {
        "head": "The first noun is always singular",
        "body": "Even when the meaning clearly involves more than one of something, the first noun in a compound stays in its singular form, because it's functioning as a describing word (like an adjective) rather than as a countable noun in its own right — 'a bookshop' is a shop for books (plural meaning), not 'a booksshop'. The same rule applies to compound adjectives built from numbers, like 'a five-minute walk' or 'a three-hour journey', where 'minute' and 'hour' never take an -s even though the walk lasts several minutes.",
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
        "exp": "Compound noun: 'post office' (first noun singular)."
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
        "exp": "Compound adjective: 'a five-minute walk' (hyphenated, no -s)."
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
      { "w": "car park", "ipa": "/kɑːr pɑːrk/", "def": "aparcamiento (BrE)", "ex": "I left my car in the car park near the station." },
      { "w": "sports centre", "ipa": "/spɔːrts ˈsentər/", "def": "polideportivo", "ex": "We play basketball at the sports centre every week." }
    ]
  },
  "81": {
    "title": "'s and of…",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Apostrophe 's — people and animals",
        "body": "The possessive 's is the natural way to show that something belongs to a person or animal — Tom's car, my sister's room, the cat's tail — because it treats the owner as an active, animate 'possessor' placed directly before the thing owned. This word order (owner + 's + thing) mirrors how possession is usually expressed for living beings in English, and it's generally preferred over 'of' whenever the possessor is a person or animal.",
        "note": "Tom's car · my sister's room · the cat's tail · the company's director"
      },
      {
        "head": "Of — things and ideas",
        "body": "When the 'owner' is a thing or an abstract idea rather than a living being, English normally expresses the relationship with 'of' instead of 's — 'the end of the film', 'the door of the car' — because inanimate objects don't 'possess' something the way a person does; it's more of a whole-and-part relationship. Using 's here ('the film's end') is possible in some contexts but sounds less natural than 'of' for most everyday things.",
        "note": "the end of the film · the door of the car · the price of the tickets"
      },
      {
        "head": "Double possessive — a friend of Tom's",
        "body": "The 'double possessive' pattern (a/this/that + noun + of + possessive) is used to single out one item from among several belonging to someone — 'a friend of Tom's' means one of Tom's (probably many) friends, not his only friend. It combines the 'of' structure with the 's ending on the same word, which is why it looks doubled, and it works the same way with possessive pronouns: 'a colleague of mine', 'a fan of hers'.",
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
        "exp": "Person's possession → apostrophe 's: 'Paul's wife'."
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
        "exp": "For things → 'of': 'the end of the film'."
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
      { "w": "owner", "ipa": "/ˈoʊnər/", "def": "dueño, propietario", "ex": "Who is the owner of this car?" },
      { "w": "colleague", "ipa": "/ˈkɒliːɡ/", "def": "colega, compañero de trabajo", "ex": "She's a colleague of mine from work." }
    ]
  }
};
