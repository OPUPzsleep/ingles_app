import { Unit } from '@/types/grammar';

export const prepositionsUnits: Record<number, Unit> = {
  "121": {
    "title": "At / On / In (time)",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "AT — specific times and fixed expressions",
        "body": "For clock times and fixed expressions.",
        "note": "at 6 o'clock · at midnight · at noon · at the weekend · at Christmas · at night · at the moment"
      },
      {
        "head": "ON — days and dates",
        "body": "For specific days and dates.",
        "note": "on Monday · on 25th June · on my birthday · on Christmas Day · on weekdays"
      },
      {
        "head": "IN — months, years, seasons, longer periods",
        "body": "For months, years, seasons, and parts of the day.",
        "note": "in January · in 2024 · in summer · in the morning / afternoon / evening · in the 19th century"
      }
    ],
    "table": {
      "cols": [
        "AT",
        "ON",
        "IN"
      ],
      "rows": [
        [
          "at 7 o'clock",
          "on Monday",
          "in January"
        ],
        [
          "at midnight",
          "on 5th June",
          "in 2024"
        ],
        [
          "at the weekend",
          "on Christmas Day",
          "in summer"
        ],
        [
          "at night",
          "on my birthday",
          "in the morning"
        ]
      ]
    },
    "quiz": [
      {
        "q": "I'll see you ___ Monday.",
        "opts": [
          "at",
          "on",
          "in",
          "by"
        ],
        "ans": 1,
        "exp": "Day of the week → 'on': 'on Monday'."
      },
      {
        "q": "She was born ___ 1995.",
        "opts": [
          "at",
          "on",
          "in",
          "by"
        ],
        "ans": 2,
        "exp": "Year → 'in': 'in 1995'."
      },
      {
        "q": "The film starts ___ 8 o'clock.",
        "opts": [
          "at",
          "on",
          "in",
          "by"
        ],
        "ans": 0,
        "exp": "Clock time → 'at': 'at 8 o'clock'."
      },
      {
        "q": "I usually go for a walk ___ the evening.",
        "opts": [
          "at",
          "on",
          "in",
          "by"
        ],
        "ans": 2,
        "exp": "Part of the day → 'in': 'in the evening'."
      }
    ],
    "flashcards": [
      {
        "front": "AT / ON / IN for time",
        "back": "AT → clock times, fixed expressions:\nat 5pm · at midnight · at the weekend\n\nON → days and dates:\non Monday · on 3rd May · on my birthday\n\nIN → months, years, seasons, parts of day:\nin June · in 2020 · in summer · in the morning"
      }
    ]
  },
  "122": {
    "title": "On Time and In Time / At the End and In the End",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "On time — punctual (the planned time)",
        "body": "'On time' = at the scheduled/planned time (not late).",
        "note": "The train arrived on time. · Please be on time for the meeting."
      },
      {
        "head": "In time — early enough",
        "body": "'In time' = with enough time, not too late.",
        "note": "I arrived in time to get a seat. · Will we be in time for the film?"
      },
      {
        "head": "At the end — final point",
        "body": "'At the end' + of: the final part of something specific.",
        "note": "At the end of the film, everyone cried. · At the end of the month."
      },
      {
        "head": "In the end — finally / after a long time",
        "body": "'In the end' = eventually, after everything.",
        "note": "I thought she wouldn't come, but in the end she did. · In the end, we decided to stay."
      }
    ],
    "quiz": [
      {
        "q": "The bus arrived exactly ___ — not a minute late.",
        "opts": [
          "in time",
          "on time",
          "at the end",
          "in the end"
        ],
        "ans": 1,
        "exp": "Punctual, at scheduled time → 'on time'."
      },
      {
        "q": "I got there just ___ to catch the last train.",
        "opts": [
          "on time",
          "in time",
          "at time",
          "by time"
        ],
        "ans": 1,
        "exp": "Early enough (just barely) → 'in time': 'just in time to catch'."
      },
      {
        "q": "___, he admitted he was wrong. (after a long process)",
        "opts": [
          "At the end",
          "In the end",
          "On time",
          "In time"
        ],
        "ans": 1,
        "exp": "Eventually, after a long process → 'In the end'."
      }
    ],
    "flashcards": [
      {
        "front": "ON TIME vs IN TIME",
        "back": "ON TIME = punctual, at the scheduled time:\n'The train arrived ON TIME.' (exactly when planned)\n\nIN TIME = early enough (not too late):\n'I arrived IN TIME to get a seat.' (before it started)"
      }
    ]
  },
  "123": {
    "title": "In / At / On (position) 1",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "IN — enclosed space / country / city",
        "body": "Use 'in' for enclosed spaces, countries, cities, areas.",
        "note": "in a room · in a building · in London · in France · in the street · in a photo"
      },
      {
        "head": "AT — specific point / location",
        "body": "Use 'at' for a specific point or location.",
        "note": "at the door · at the top/bottom · at the station · at the airport · at school · at work"
      },
      {
        "head": "ON — surface / transport / floor",
        "body": "Use 'on' for surfaces, floors of buildings, certain transport.",
        "note": "on the table · on the wall · on the first floor · on the bus · on the left/right"
      }
    ],
    "quiz": [
      {
        "q": "She's ___ the garden.",
        "opts": [
          "at",
          "on",
          "in",
          "by"
        ],
        "ans": 2,
        "exp": "Enclosed area → 'in': 'She's in the garden.'"
      },
      {
        "q": "He's waiting ___ the bus stop.",
        "opts": [
          "in",
          "on",
          "at",
          "by"
        ],
        "ans": 2,
        "exp": "Specific point/location → 'at': 'He's waiting at the bus stop.'"
      },
      {
        "q": "There's a spider ___ the ceiling.",
        "opts": [
          "in",
          "on",
          "at",
          "by"
        ],
        "ans": 1,
        "exp": "Surface → 'on': 'There's a spider on the ceiling.'"
      }
    ],
    "flashcards": [
      {
        "front": "IN / AT / ON for position",
        "back": "IN = enclosed space/area:\nin a room · in a city · in the street\n\nAT = specific point/location:\nat the door · at the station · at school\n\nON = surface:\non the table · on the wall · on the bus"
      }
    ]
  },
  "124": {
    "title": "In / At / On (position) 2",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "At home / at school / at work / at university",
        "body": "Fixed expressions with 'at' for locations seen as activities/functions.",
        "note": "She's at work. · The children are at school. · He's at home. · She's at university."
      },
      {
        "head": "In hospital / in prison / in bed",
        "body": "Fixed expressions with 'in' for institutions.",
        "note": "He's in hospital. (he's a patient) · She's in bed. (she's sleeping/resting) · He's in prison."
      },
      {
        "head": "On the left/right · On the corner · On the top floor",
        "body": "Fixed expressions with 'on'.",
        "note": "Turn on the left. · The bank is on the corner. · I live on the top floor."
      }
    ],
    "quiz": [
      {
        "q": "She's been ___ hospital for two weeks.",
        "opts": [
          "at",
          "on",
          "in",
          "by"
        ],
        "ans": 2,
        "exp": "Institution where she's a patient → 'in hospital'."
      },
      {
        "q": "He's not here — he's ___ work.",
        "opts": [
          "in",
          "on",
          "at",
          "to"
        ],
        "ans": 2,
        "exp": "Function/activity location → 'at work'."
      }
    ],
    "flashcards": [
      {
        "front": "Fixed expressions: AT / IN for locations",
        "back": "AT HOME · AT SCHOOL · AT WORK · AT UNIVERSITY\n(= activities/functions)\n\nIN HOSPITAL · IN PRISON · IN BED\n(= inside the institution)\n\nIN THE CENTRE · ON THE LEFT · AT THE TOP"
      }
    ]
  },
  "125": {
    "title": "In / At / On (Position) 3",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "IN THE CORNER vs ON THE CORNER",
        "body": "'In the corner' = inside a room; 'on the corner' = outside, where two streets meet.",
        "note": "The lamp is in the corner of the room. · There is a shop on the corner of the street."
      },
      {
        "head": "IN THE FRONT/BACK vs AT THE FRONT/BACK",
        "body": "Use 'in' the front/back of a car (you are inside it); use 'at' the front/back of a building, group, or line.",
        "note": "She sat in the back of the taxi. · He stood at the back of the queue."
      },
      {
        "head": "IN a photograph, picture, book, newspaper",
        "body": "Use 'in' for things that appear within printed or framed media.",
        "note": "You look great in this photo. · I read about it in the newspaper."
      }
    ],
    "quiz": [
      {
        "q": "There's a bookshelf ___ of the room.",
        "opts": [
          "on the corner",
          "in the corner",
          "at the corner",
          "to the corner"
        ],
        "ans": 1,
        "exp": "Inside a room → 'in the corner'."
      },
      {
        "q": "He was sitting ___ of the car, not driving.",
        "opts": [
          "at the back",
          "in the back",
          "on the back",
          "to the back"
        ],
        "ans": 1,
        "exp": "Inside a vehicle → 'in the back'."
      },
      {
        "q": "I saw your photo ___ the newspaper.",
        "opts": [
          "on",
          "at",
          "in",
          "to"
        ],
        "ans": 2,
        "exp": "Printed media → 'in'."
      }
    ],
    "flashcards": [
      {
        "front": "Leftover position expressions",
        "back": "IN the corner (room) / ON the corner (street)\nIN the back/front (car) / AT the back/front (building, queue)\nIN a photo/newspaper/book"
      }
    ]
  },
  "126": {
    "title": "To, at, in and into",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "TO — movement toward a place",
        "body": "Use 'to' for movement in the direction of a destination.",
        "note": "I'm going to Paris. · She walked to the door. · Come to my house."
      },
      {
        "head": "INTO — movement to the inside",
        "body": "Use 'into' when someone or something moves from outside to inside an enclosed space.",
        "note": "She walked into the room. · He got into the car. · Water got into the engine."
      },
      {
        "head": "AT — arriving at a point",
        "body": "Use 'at' for arriving at a specific point, building, or event (not 'to').",
        "note": "We arrived at the airport. · They arrived at the party late. · NOT: arrived to the airport ❌"
      },
      {
        "head": "OUT OF — movement from the inside",
        "body": "The opposite of 'into': movement from inside to outside.",
        "note": "He walked out of the building. · She took the keys out of her bag."
      }
    ],
    "quiz": [
      {
        "q": "She walked ___ the room and sat down.",
        "opts": [
          "in",
          "into",
          "to",
          "at"
        ],
        "ans": 1,
        "exp": "Movement into enclosed space → 'into'."
      },
      {
        "q": "They arrived ___ the airport two hours early.",
        "opts": [
          "in",
          "into",
          "at",
          "on"
        ],
        "ans": 2,
        "exp": "Specific point → 'at': 'arrived at the airport'."
      }
    ],
    "flashcards": [
      {
        "front": "Movement prepositions: TO / INTO / OUT OF",
        "back": "TO = movement toward: 'I'm going TO Paris.'\nINTO = movement to inside: 'She walked INTO the room.'\nOUT OF = movement from inside: 'He walked OUT OF the building.'"
      }
    ]
  },
  "127": {
    "title": "In/on/at (other uses)",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "IN — parts of the day and enclosed situations",
        "body": "Use 'in' for parts of the day, and for being inside something (bed, hospital, prison, a car).",
        "note": "in the morning · in the afternoon · in bed · in hospital · in the car"
      },
      {
        "head": "AT — activities and specific points",
        "body": "Use 'at' for activities you do at a place (work, school, home) and specific points.",
        "note": "at work · at school · at home · at the bus stop"
      },
      {
        "head": "ON — surfaces and public transport",
        "body": "Use 'on' for surfaces, and for buses/trains/planes (but 'in' for cars/taxis).",
        "note": "on the bus · on the train · on the left · on the phone · on the radio"
      },
      {
        "head": "Truco: ¿tiene pasillo?",
        "body": "Para elegir entre IN y ON con vehículos, pregúntate si tiene pasillo por el que puedes caminar. C-ON pasillo (bus, tren, avión) → ON. S-IN pasillo (carro, taxi) → IN.",
        "note": "ON the bus · ON the train · ON the plane (con pasillo) · IN the car · IN the taxi (sin pasillo)"
      },
      {
        "head": "Fixed expressions to memorize",
        "body": "Many of these combinations are fixed and don't follow a strict logical rule — learn them as set phrases.",
        "note": "in bed (NOT on bed) · on the phone (NOT at the phone) · at night (NOT in night)"
      }
    ],
    "quiz": [
      {
        "q": "I'll see you ___ the morning.",
        "opts": [
          "at",
          "on",
          "in",
          "by"
        ],
        "ans": 2,
        "exp": "Part of day → 'in': 'in the morning'."
      },
      {
        "q": "She's ___ work right now.",
        "opts": [
          "in",
          "on",
          "at",
          "by"
        ],
        "ans": 2,
        "exp": "Activity/function location → 'at work'."
      }
    ],
    "flashcards": [
      {
        "front": "Fixed expressions: AT / IN / ON",
        "back": "AT HOME · AT SCHOOL · AT WORK (activities)\nIN BED · IN HOSPITAL · IN PRISON (inside)\nON THE LEFT · ON THE BUS · ON THE PHONE"
      }
    ]
  },
  "128": {
    "title": "By",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "BY — the agent in the passive voice",
        "body": "Use 'by' to say who or what performs the action in a passive sentence.",
        "note": "The painting was made by Picasso. · The window was broken by the storm."
      },
      {
        "head": "BY — method of transport",
        "body": "Use 'by' + transport (no article) to say how you travel.",
        "note": "by car · by bus · by train · by plane · NOT: by the car ❌ (but: in my car ✅)"
      },
      {
        "head": "BY — near/beside",
        "body": "'By' can also mean 'next to' or 'beside'.",
        "note": "She sat by the window. · There is a lamp by the bed."
      },
      {
        "head": "BY — deadline",
        "body": "'By' + time means 'not later than' that time.",
        "note": "Please finish this by Friday. · I'll be home by 6 o'clock."
      }
    ],
    "quiz": [
      {
        "q": "The painting was made ___ Picasso.",
        "opts": [
          "from",
          "with",
          "by",
          "of"
        ],
        "ans": 2,
        "exp": "Agent in passive → 'by'."
      },
      {
        "q": "She travels ___ train every day.",
        "opts": [
          "in",
          "on",
          "by",
          "at"
        ],
        "ans": 2,
        "exp": "Method of transport → 'by train'."
      }
    ],
    "flashcards": [
      {
        "front": "BY — main uses",
        "back": "TRANSPORT: by car, by bus, by train (no article)\nPASSIVE AGENT: 'written BY Shakespeare'\nPOSITION: 'She sat BY the window.'"
      }
    ]
  },
  "129": {
    "title": "Noun + preposition",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "Nouns followed by a fixed preposition",
        "body": "Many nouns are always followed by the same preposition — this combination has to be memorized, it isn't predictable from the noun's meaning alone.",
        "note": "the reason for · the cause of · a solution to · an increase in · damage to"
      },
      {
        "head": "Nouns related to feelings and attitudes",
        "body": "Nouns describing an attitude or reaction often use FOR, TOWARDS or WITH.",
        "note": "a need for help · an attitude towards work · a connection with the past"
      },
      {
        "head": "Noun + preposition vs. verb + preposition",
        "body": "Sometimes the preposition after a noun matches the related verb, but not always — check both separately.",
        "note": "to increase in size / an increase IN size (match) · to solve a problem / a solution TO a problem (different)"
      }
    ],
    "quiz": [
      {
        "q": "There has been an increase ___ the price of oil.",
        "opts": [
          "of",
          "in",
          "for",
          "about"
        ],
        "ans": 1,
        "exp": "'Increase IN' → fixed noun + preposition."
      },
      {
        "q": "We need a solution ___ this problem.",
        "opts": [
          "of",
          "for",
          "to",
          "about"
        ],
        "ans": 2,
        "exp": "'Solution TO' a problem."
      }
    ],
    "flashcards": [
      {
        "front": "Noun + Preposition",
        "back": "reason FOR · cause OF · solution TO\ndemand FOR · increase IN · damage TO\nneed FOR · attitude TOWARDS · connection WITH"
      }
    ]
  },
  "130": {
    "title": "Adjective + preposition 1",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "Adjective + OF",
        "body": "Many adjectives expressing feelings or judgments about something are followed by 'of'.",
        "note": "I'm proud of you. · She's afraid of spiders. · Are you aware of the problem?"
      },
      {
        "head": "Adjective + AT — ability",
        "body": "Use 'at' after adjectives describing how good or bad someone is at doing something.",
        "note": "She's good at cooking. · He's bad at maths. · I'm not very good at singing."
      },
      {
        "head": "Adjective + IN / ABOUT",
        "body": "'In' often goes with interest; 'about' often goes with worry or excitement.",
        "note": "interested in history · worried about the exam · excited about the trip"
      },
      {
        "head": "Adjective + FOR",
        "body": "Use 'for' after adjectives about responsibility or reputation.",
        "note": "She's responsible for the project. · Paris is famous for its museums."
      }
    ],
    "quiz": [
      {
        "q": "I'm very proud ___ what you've achieved.",
        "opts": [
          "of",
          "about",
          "for",
          "at"
        ],
        "ans": 0,
        "exp": "'Proud OF' → fixed adjective + preposition."
      },
      {
        "q": "She's not very good ___ cooking.",
        "opts": [
          "in",
          "at",
          "for",
          "of"
        ],
        "ans": 1,
        "exp": "'Good AT' → 'good at cooking'."
      }
    ],
    "flashcards": [
      {
        "front": "Adjective + Preposition (group 1)",
        "back": "afraid OF · proud OF · tired OF · aware OF\ninterested IN · good AT · bad AT\nworried ABOUT · excited ABOUT\nresponsible FOR · famous FOR"
      }
    ]
  },
  "131": {
    "title": "Adjective + preposition 2",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "Adjective + TO",
        "body": "Use 'to' after adjectives that compare or connect two things or people.",
        "note": "This is similar to my old phone. · He's married to a doctor. · Be kind to your sister."
      },
      {
        "head": "DIFFERENT FROM",
        "body": "'Different' is normally followed by 'from' in careful English. 'Used to' and 'accustomed to' both take 'to' + noun/-ing, not the base verb.",
        "note": "This is different from what I expected. · I'm used to the noise now. · She's accustomed to working late."
      },
      {
        "head": "Adjective + WITH / BY",
        "body": "Use 'with' for satisfaction and 'by' for the cause of a feeling.",
        "note": "I am satisfied with the results. · We were impressed by her presentation."
      }
    ],
    "quiz": [
      {
        "q": "He's married ___ a doctor.",
        "opts": [
          "with",
          "for",
          "to",
          "at"
        ],
        "ans": 2,
        "exp": "'Married TO' → fixed adjective + preposition."
      },
      {
        "q": "This is very different ___ what I expected.",
        "opts": [
          "to",
          "than",
          "from",
          "as"
        ],
        "ans": 2,
        "exp": "'Different FROM' (formal)."
      }
    ],
    "flashcards": [
      {
        "front": "Adjective + Preposition (group 2)",
        "back": "similar TO · opposite TO · married TO\nkind TO · used TO · accustomed TO\ndifferent FROM · satisfied WITH\nconnected TO/WITH · impressed BY"
      }
    ]
  },
  "132": {
    "title": "Verb + preposition 1",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "Verb + TO — communicating with someone",
        "body": "Verbs about speaking or directing something toward a person usually take 'to'.",
        "note": "I need to speak to the manager. · Listen to me! · She apologised to her friend."
      },
      {
        "head": "Verb + AT — directing attention or aggression",
        "body": "Verbs about looking or reacting toward something, often with a focused or negative sense, take 'at'.",
        "note": "Stop shouting at me! · Don't laugh at him. · She stared at the painting."
      },
      {
        "head": "THROW TO vs THROW AT",
        "body": "This pair shows the difference clearly: 'to' is neutral or helpful, 'at' is aggressive.",
        "note": "He threw the ball to me. (so I could catch it) · He threw a stone at the window. (to hit it)"
      }
    ],
    "quiz": [
      {
        "q": "Stop shouting ___ me!",
        "opts": [
          "to",
          "at",
          "for",
          "with"
        ],
        "ans": 1,
        "exp": "'Shout AT' (aggressive direction)."
      },
      {
        "q": "I need to speak ___ the manager.",
        "opts": [
          "at",
          "with",
          "to",
          "for"
        ],
        "ans": 2,
        "exp": "'Speak TO' someone."
      }
    ],
    "flashcards": [
      {
        "front": "Verb + TO and AT",
        "back": "VERB + TO: speak TO, listen TO, explain TO, apologise TO\nVERB + AT: look AT, stare AT, laugh AT, shout AT\n\nTHROW TO (for someone to catch) vs\nTHROW AT (aggressive direction)"
      }
    ]
  },
  "133": {
    "title": "Verb + preposition 2",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "Verb + ABOUT — talking or thinking about a topic",
        "body": "Use 'about' for verbs describing thinking, talking or feeling connected to a subject.",
        "note": "Stop complaining about the weather! · I often dream about flying. · We talked about the trip."
      },
      {
        "head": "Verb + OF — opinions and composition",
        "body": "Use 'of' when asking for or giving an opinion, or describing what something is made of.",
        "note": "What do you think of my haircut? · This dish consists of rice and vegetables."
      },
      {
        "head": "THINK OF vs THINK ABOUT",
        "body": "'Think of' usually asks for a quick opinion; 'think about' suggests considering something more carefully.",
        "note": "What do you think of the plan? (opinion) · I'm thinking about changing jobs. (considering)"
      }
    ],
    "quiz": [
      {
        "q": "She's always complaining ___ the weather.",
        "opts": [
          "of",
          "about",
          "for",
          "at"
        ],
        "ans": 1,
        "exp": "'Complain ABOUT' something."
      },
      {
        "q": "What do you think ___ my new haircut?",
        "opts": [
          "about",
          "of",
          "on",
          "for"
        ],
        "ans": 1,
        "exp": "'Think OF' = asking opinion."
      }
    ],
    "flashcards": [
      {
        "front": "Verb + ABOUT and OF",
        "back": "ABOUT: talk ABOUT, complain ABOUT, worry ABOUT, hear ABOUT, dream ABOUT\nOF: think OF (opinion), approve OF, consist OF, remind OF"
      }
    ]
  },
  "134": {
    "title": "Verb + preposition 3",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "Verb + FOR — purpose or reason",
        "body": "Use 'for' after verbs describing waiting, searching, asking, or paying.",
        "note": "I've been waiting for you for an hour! · Can you pay for the tickets?"
      },
      {
        "head": "Verb + FOR — cause (thank/blame/apologise)",
        "body": "'For' also introduces the reason someone is thanked, blamed, or apologised to.",
        "note": "He thanked me for helping him. · Don't blame me for this! · I apologised for being late."
      },
      {
        "head": "APPLY FOR / HOPE FOR",
        "body": "Use 'for' after these verbs to introduce what you want to get or achieve.",
        "note": "She applied for the job. · We are hoping for good weather."
      }
    ],
    "quiz": [
      {
        "q": "I've been waiting ___ you for an hour!",
        "opts": [
          "on",
          "for",
          "about",
          "at"
        ],
        "ans": 1,
        "exp": "'Wait FOR' someone."
      },
      {
        "q": "He thanked me ___ helping him.",
        "opts": [
          "about",
          "for",
          "of",
          "to"
        ],
        "ans": 1,
        "exp": "'Thank someone FOR' something."
      }
    ],
    "flashcards": [
      {
        "front": "Verb + FOR",
        "back": "wait FOR · search FOR · ask FOR · pay FOR\napply FOR · hope FOR · blame (sb) FOR\nthank (sb) FOR · apologise FOR"
      }
    ]
  },
  "135": {
    "title": "Verb + preposition 4",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "Verb + FROM — origin, illness, protection",
        "body": "Use 'from' after verbs about where something comes from, or being protected from or recovering from something negative.",
        "note": "She suffers from terrible headaches. · This cream protects your skin from the sun. · He is recovering from the flu."
      },
      {
        "head": "Verb + IN — belief, success, specialization",
        "body": "Use 'in' after verbs about believing, succeeding, or specializing in something.",
        "note": "I believe in second chances. · He specializes in tax law. · They invested in new technology."
      },
      {
        "head": "DEPEND ON (not depend of)",
        "body": "'Depend' takes 'on', not 'of' — a very common mistake for Spanish speakers, since 'depender de' translates literally to 'of'.",
        "note": "I depend on my parents for money. · It depends on the weather."
      }
    ],
    "quiz": [
      {
        "q": "She suffers ___ terrible headaches.",
        "opts": [
          "with",
          "about",
          "from",
          "of"
        ],
        "ans": 2,
        "exp": "'Suffer FROM' an illness."
      },
      {
        "q": "I depend ___ my parents for money.",
        "opts": [
          "of",
          "on",
          "for",
          "about"
        ],
        "ans": 1,
        "exp": "'Depend ON' someone."
      }
    ],
    "flashcards": [
      {
        "front": "Verb + FROM / IN",
        "back": "FROM: suffer FROM, recover FROM, protect FROM, prevent FROM\nIN: believe IN, succeed IN, specialize IN, invest IN"
      }
    ]
  },
  "136": {
    "title": "Verb + preposition 5",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "Verb + ON — reliance and focus",
        "body": "Use 'on' after verbs about depending, relying, or concentrating on something.",
        "note": "I rely on my sister for advice. · Try to concentrate on your work. · You can depend on me."
      },
      {
        "head": "Verb + ON — spending and commenting",
        "body": "'On' also introduces what money or time is spent on, or what a comment refers to.",
        "note": "She spent a lot of money on clothes. · He commented on my presentation."
      },
      {
        "head": "SUCCEED IN doing something",
        "body": "'Succeed' takes 'in' + -ing (or a noun), not 'at' or a plain infinitive.",
        "note": "He succeeded in passing the exam. · NOT: succeeded to pass ❌"
      },
      {
        "head": "CONGRATULATE somebody ON something",
        "body": "Use 'on' to say what you're congratulating someone for.",
        "note": "I congratulated her on her promotion."
      }
    ],
    "quiz": [
      {
        "q": "He succeeded ___ passing the exam.",
        "opts": [
          "at",
          "in",
          "on",
          "for"
        ],
        "ans": 1,
        "exp": "'Succeed IN' doing something."
      },
      {
        "q": "I believe ___ the importance of education.",
        "opts": [
          "at",
          "on",
          "in",
          "for"
        ],
        "ans": 2,
        "exp": "'Believe IN' something."
      }
    ],
    "flashcards": [
      {
        "front": "Verb + ON",
        "back": "depend ON · rely ON · concentrate ON\ninsist ON · comment ON · spend (money/time) ON\ncongratuate sb ON · base (sth) ON"
      }
    ]
  }
};
