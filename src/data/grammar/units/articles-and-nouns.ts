import { Unit } from '@/types/grammar';

export const articlesAndNounsUnits: Record<number, Unit> = {
  "69": {
    "title": "Countable and Uncountable Nouns 1",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Countable nouns (can count)",
        "body": "Have singular and plural forms. Can use a/an and numbers.",
        "note": "a dog / two dogs · a chair / three chairs · a book / many books"
      },
      {
        "head": "Uncountable nouns (cannot count)",
        "body": "No plural form. No 'a/an'. Verb is singular.",
        "note": "water · music · information · advice · furniture · luggage · knowledge · money · news"
      },
      {
        "head": "Common mistakes",
        "body": "Many nouns that are countable in Spanish are uncountable in English.",
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
    ]
  },
  "70": {
    "title": "Countable and Uncountable Nouns 2",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Some nouns can be countable or uncountable",
        "body": "Some nouns change meaning depending on use.",
        "note": "coffee (uncountable: I like coffee) vs 'two coffees' (two cups). Hair (general) vs 'a hair' (one strand)."
      },
      {
        "head": "Quantifiers with countable and uncountable",
        "body": "Some quantifiers work with both, some only with countable or uncountable.",
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
    ]
  },
  "71": {
    "title": "Countable Nouns with A/An and Some",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "A/An — singular countable",
        "body": "Use a/an with singular countable nouns for something not specific.",
        "note": "I need a pen. · She bought an apple. · There's a dog in the garden."
      },
      {
        "head": "Some — plural countable (positive)",
        "body": "Use 'some' with plural countable nouns in positive sentences.",
        "note": "I need some pens. · She bought some apples. · I have some friends coming."
      },
      {
        "head": "Any — plural countable (negative/questions)",
        "body": "Use 'any' with plural countable nouns in negative sentences and most questions.",
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
    ]
  },
  "72": {
    "title": "A/An and The",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "A/AN — indefinite (first mention / not specific)",
        "body": "Use a/an when introducing something for the first time, or when it's not specific.",
        "note": "I saw a dog. · She's an engineer. · I need a pen."
      },
      {
        "head": "THE — definite (known / specific)",
        "body": "Use the when both speaker and listener know WHICH one.",
        "note": "I saw a dog. The dog was barking. · Can you close the window? (the specific one in this room)"
      },
      {
        "head": "THE — unique things",
        "body": "Use the for things there's only one of.",
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
    ]
  },
  "73": {
    "title": "The 1 (the giraffe / the telephone)",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "The with species/inventions",
        "body": "Use 'the' to refer to a species in general or a type of thing (invention, instrument).",
        "note": "The whale is the largest mammal. · The telephone was invented by Bell."
      },
      {
        "head": "The with adjectives as nouns",
        "body": "Use 'the + adjective' to refer to a group of people.",
        "note": "the rich, the poor, the elderly, the sick, the unemployed, the homeless"
      },
      {
        "head": "The with nationality words",
        "body": "Use 'the' with some nationality adjectives to mean the whole nation.",
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
    ]
  },
  "74": {
    "title": "The 2 (names with/without the)",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Geographical names — THE",
        "body": "Use 'the' with: rivers, oceans/seas, mountain ranges, deserts, groups of islands, countries with plural/republic in name.",
        "note": "the Thames · the Pacific · the Alps · the Sahara · the Philippines · the United States"
      },
      {
        "head": "Geographical names — NO article",
        "body": "No article with: continents, most countries, lakes, single mountains, cities.",
        "note": "Europe, Brazil, Lake Victoria, Mount Everest, Paris (no 'the')"
      },
      {
        "head": "Streets, places",
        "body": "No article with most streets, parks, stations, airports (by name).",
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
    ]
  },
  "75": {
    "title": "The 3 (school / the school)",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "General activity — no THE",
        "body": "School, university, prison, church and bed have no article when used for their normal purpose.",
        "note": "go to school (study) · go to prison (be punished) · go to bed (sleep)"
      },
      {
        "head": "The specific building — WITH THE",
        "body": "Add 'the' when you mean the actual building, for a different reason than its normal purpose.",
        "note": "go to the school (visit, e.g. to talk to a teacher) · go to the prison (deliver something)"
      },
      {
        "head": "IN HOSPITAL (British English)",
        "body": "In British English, 'in hospital' (as a patient) has no article, unlike American English which normally says 'in the hospital'.",
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
    ]
  },
  "76": {
    "title": "The 4 (instruments, media, meals)",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Musical instruments — WITH THE",
        "body": "Use 'the' when talking about playing a musical instrument.",
        "note": "play the guitar · play the piano · play the violin"
      },
      {
        "head": "Meals — no article",
        "body": "Meal names have no article when talking about meals in general.",
        "note": "have breakfast/lunch/dinner (NOT: have the dinner ❌)"
      },
      {
        "head": "Media — fixed patterns",
        "body": "'On the radio/phone' takes 'the', but 'on television' usually doesn't.",
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
    ]
  },
  "77": {
    "title": "Names with/without The 1 (countries, continents)",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Most countries and continents — no article",
        "body": "Continents, and most single-word countries, take no article.",
        "note": "Africa · Japan · Brazil · Mexico"
      },
      {
        "head": "Countries with plural names or 'republic/kingdom' — THE",
        "body": "Countries that are plural, or officially a union, republic or kingdom, take 'the'.",
        "note": "the Netherlands · the United States · the United Kingdom · the Philippines"
      },
      {
        "head": "Cities and streets — usually no article",
        "body": "Names of cities, streets, parks and squares don't normally take 'the'.",
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
    ]
  },
  "78": {
    "title": "Names with/without The 2 (mountains, lakes, water)",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Single mountains and lakes — no article",
        "body": "One single mountain or lake, named alone, takes no article.",
        "note": "Everest · Kilimanjaro · Lake Superior"
      },
      {
        "head": "Mountain ranges and island groups — THE",
        "body": "A range or group (plural in nature) takes 'the'.",
        "note": "the Alps · the Andes · the Canary Islands"
      },
      {
        "head": "Oceans, seas, rivers, canals — always THE",
        "body": "Bodies of flowing or connected water always take 'the'.",
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
    ]
  },
  "79": {
    "title": "Singular and Plural",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Regular plurals — add -s or -es",
        "body": "Most nouns: add -s. Nouns ending in -s/-sh/-ch/-x/-o: add -es. Nouns in consonant + y: -ies.",
        "note": "book→books · bus→buses · church→churches · baby→babies · photo→photos"
      },
      {
        "head": "Irregular plurals",
        "body": "Some nouns have completely irregular plural forms.",
        "note": "man→men · woman→women · child→children · foot→feet · tooth→teeth · mouse→mice · person→people"
      },
      {
        "head": "Nouns with no plural (always singular)",
        "body": "Uncountable nouns and some specific nouns.",
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
    ]
  },
  "80": {
    "title": "Noun + Noun",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Compound nouns",
        "body": "In English, two nouns can combine. The first noun acts as an adjective and modifies the second.",
        "note": "bus stop · car park · kitchen table · football match · phone call"
      },
      {
        "head": "The first noun is always singular",
        "body": "Even when the meaning is plural, the first noun stays singular.",
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
    ]
  },
  "81": {
    "title": "'s and of…",
    "topic": "Articles & Nouns",
    "explain": [
      {
        "head": "Apostrophe 's — people and animals",
        "body": "Use 's for people and animals (possessive).",
        "note": "Tom's car · my sister's room · the cat's tail · the company's director"
      },
      {
        "head": "Of — things and ideas",
        "body": "Use 'of' for things and ideas (not usually apostrophe 's).",
        "note": "the end of the film · the door of the car · the price of the tickets"
      },
      {
        "head": "Double possessive — a friend of Tom's",
        "body": "Use 'a friend of + possessive' for one of several.",
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
    ]
  }
};
