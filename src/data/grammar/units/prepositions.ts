import { Unit } from '@/types/grammar';

export const prepositionsUnits: Record<number, Unit> = {
  "121": {
    "title": "At / On / In (time)",
    "topic": "Prepositions",
    "explain": [
      {
        "head": "AT — specific times and fixed expressions",
        "body": "We use 'AT' for a precise point in time rather than a stretch of time — an exact clock time, or a handful of fixed expressions that name one specific moment instead of a day, date, or longer period. Because these expressions don't fit neatly into 'a day' (which takes ON) or 'a longer period' (which takes IN), English just treats them as points and pairs them with AT — learn them as a short list alongside the exact clock times.",
        "note": "at 6 o'clock · at midnight · at noon · at the weekend · at Christmas · at night · at the moment"
      },
      {
        "head": "ON — days and dates",
        "body": "We use 'ON' whenever we're talking about one single day or a specific date — think of marking it on a calendar. This covers named days of the week, exact dates, and days defined by an occasion, like 'my birthday' or 'Christmas Day'. It sits between AT (a precise moment inside a day) and IN (a longer stretch that contains many days).",
        "note": "on Monday · on 25th June · on my birthday · on Christmas Day · on weekdays"
      },
      {
        "head": "IN — months, years, seasons, longer periods",
        "body": "We use 'IN' for longer periods that contain many days — months, years, seasons, centuries — and also for the general parts of the day (morning, afternoon, evening), which are treated as broad stretches rather than one exact moment. As a rough guide, the bigger and less exact the time period, the more likely it is to take 'IN'.",
        "note": "in January · in 2024 · in summer · in the morning / afternoon / evening · in the 19th century"
      },
      {
        "head": "Truco: AT exacTo, ON calendario, IN INmenso",
        "body": "This is a memory trick built around Spanish hint words that share letters with the English preposition. AT matches 'Ahora exactamenTe' (right now, exactly) for precise moments; ON matches days you 'pONes' (put) on a calendar; IN matches 'INmenso' (immense) for big stretches like months and years. Spotting the capital letters hiding inside each Spanish word is a quick way to recall which preposition fits which kind of time expression.",
        "note": "AT 3:00pm · ON Monday · IN 2024"
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
        "body": "'On time' describes something happening exactly when it was scheduled or planned — neither early nor late, hitting the planned moment precisely. It's the phrase to reach for whenever punctuality itself is the point, such as trains, meetings, or flights keeping to their timetable. Contrast this with 'in time' below, which is about having enough time to make something, not about hitting an exact schedule.",
        "note": "The train arrived on time. · Please be on time for the meeting."
      },
      {
        "head": "In time — early enough",
        "body": "'In time' means arriving or finishing with enough time to spare before some event or deadline — the emphasis is on not being too late, rather than on matching an exact planned moment. You can be 'in time' a little early or right at the last possible second, as long as you make it before the cut-off. This is the key difference from 'on time', which is strictly about punctuality to a schedule, not about beating a deadline.",
        "note": "I arrived in time to get a seat. · Will we be in time for the film?"
      },
      {
        "head": "At the end — final point",
        "body": "'At the end (of something)' points to the literal final part or moment of a specific thing you can name — a film, a book, a month, a road — much like 'at' marks a precise point elsewhere in English. It's a spatial or temporal marker: it tells you WHERE within that specific thing you are, right at its conclusion. This is different from 'in the end' below, which isn't about a literal position at all but about how a process turned out.",
        "note": "At the end of the film, everyone cried. · At the end of the month."
      },
      {
        "head": "In the end — finally / after a long time",
        "body": "'In the end' means 'eventually' or 'after all the events, discussion, or waiting' — it describes how a situation was finally resolved, not a literal position within something. It often carries a sense that there were doubts, delays, or a process along the way before reaching that final outcome. Unlike 'at the end (of X)', which needs a specific thing to attach to, 'in the end' stands alone as a comment on how things eventually turned out.",
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
        "body": "'In' is used for locations that surround or contain something, treating the space as a three-dimensional area you are inside of — a room, a building, a city, a country, or even a photo. The common thread is enclosure: whatever you're describing is inside the boundaries of that space, however large or small. This differs from 'at', which treats a location as a single point rather than an enclosing area (see below).",
        "note": "in a room · in a building · in London · in France · in the street · in a photo"
      },
      {
        "head": "AT — specific point / location",
        "body": "'At' treats a place as a single point rather than a space you're inside of — useful for locations defined by their function or exact position, like a door, a station, or a specific address, rather than by their physical size. The focus is on WHERE something is located, not on what surrounds it. This contrasts with 'in', which emphasizes being enclosed within an area, and with 'on', which emphasizes contact with a surface.",
        "note": "at the door · at the top/bottom · at the station · at the airport · at school · at work"
      },
      {
        "head": "ON — surface / transport / floor",
        "body": "'On' describes contact with a surface — something resting on top of or attached to it, such as a table, a wall, or a floor of a building — rather than being enclosed within a space or located at a single point. It also extends to certain forms of transport (bus, train, plane), where passengers are thought of as being on board a larger vehicle they can move around in. Together, IN (enclosed space), AT (a point), and ON (a surface) cover most everyday position expressions in English.",
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
        "body": "These fixed expressions use 'at' not because the place is a single tiny point, but because English treats them as naming an ACTIVITY or FUNCTION — studying, working — rather than a physical building. Saying 'at school' focuses on the fact that someone is there to study, not on the size or shape of the building itself. Because they're fixed phrases, they're best learned as set expressions rather than derived from a general rule.",
        "note": "She's at work. · The children are at school. · He's at home. · She's at university."
      },
      {
        "head": "In hospital / in prison / in bed",
        "body": "These expressions use 'in' because they emphasize being inside the institution as a participant in what it's for — a patient in a hospital, an inmate in a prison, a sleeper in bed — rather than just visiting the building. Notice that British English typically drops the article ('in hospital', not 'in the hospital') in these fixed phrases, which differs from what the general 'enclosed space' rule for 'in' might lead you to expect. Like the 'at' expressions above, these are best memorized as set phrases.",
        "note": "He's in hospital. (he's a patient) · She's in bed. (she's sleeping/resting) · He's in prison."
      },
      {
        "head": "On the left/right · On the corner · On the top floor",
        "body": "These expressions use 'on' because they describe a position along a line or edge (left/right, a corner where two streets meet) or a specific level within a building (a floor), continuing the 'surface or level' idea behind 'on' from the previous unit. They don't fit neatly into 'in' (enclosed space) or 'at' (a single point), since they describe relative position or level instead. As with the other groups here, treat them as fixed expressions to memorize rather than reasoning them out each time.",
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
        "body": "These two phrases look almost identical but describe completely different kinds of corners: 'in the corner' refers to an internal angle inside an enclosed space, like where two walls of a room meet — hence 'in', matching the enclosed-space rule. 'On the corner', by contrast, refers to an external corner outside, where two streets intersect — a point along a surface (the street), hence 'on'. The preposition changes because the type of space being described changes, even though the English word 'corner' stays the same.",
        "note": "The lamp is in the corner of the room. · There is a shop on the corner of the street."
      },
      {
        "head": "IN THE FRONT/BACK vs AT THE FRONT/BACK",
        "body": "The choice between 'in' and 'at' here depends on whether you're inside an enclosed space or positioned at a point relative to something larger. Cars, and other small vehicles, are treated as enclosed spaces you sit inside, so 'in the front/back of the car' follows the same logic as 'in a room'. Buildings, queues, and groups of people, however, are treated as things you're positioned at a point of — 'at the front/back' — because you're not literally inside them the way you are inside a car.",
        "note": "She sat in the back of the taxi. · He stood at the back of the queue."
      },
      {
        "head": "IN a photograph, picture, book, newspaper",
        "body": "'In' is used for anything that appears within the contents of printed or framed media — a photo, a picture, a newspaper, a book — because the image or text is treated as an enclosed space containing information, just like a room contains people. You appear 'in' a photo the same way you'd be 'in' a room: contained within its boundaries. This extends the enclosed-space logic of 'in' beyond physical locations to visual and printed content.",
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
        "body": "'To' marks the destination of a movement verb — it tells you where someone or something is heading, without saying anything about whether they arrive or go inside. It works with a wide range of movement verbs (go, walk, come, travel) and simply expresses direction toward a place. This is different from 'into', which adds the idea of actually entering an enclosed space, not just heading toward it.",
        "note": "I'm going to Paris. · She walked to the door. · Come to my house."
      },
      {
        "head": "INTO — movement to the inside",
        "body": "'Into' combines the idea of movement with the idea of entering an enclosed space — it's used specifically when someone or something crosses from outside to inside, like walking into a room or getting into a car. This makes it more specific than 'to', which shows only general direction without implying entry. If there's no sense of crossing a boundary into an enclosed space, plain 'to' is usually enough.",
        "note": "She walked into the room. · He got into the car. · Water got into the engine."
      },
      {
        "head": "AT — arriving at a point",
        "body": "When a movement verb like 'arrive' is followed by a specific point, building, or event, English uses 'at' rather than 'to' — 'arrived at the airport', not 'arrived to the airport'. This might seem to contradict the 'to = movement toward a destination' rule, but 'arrive' is treated as already completing the movement and landing at that point, following the same logic as 'at' marking a precise position rather than 'to' marking direction. This exception is worth memorizing, since it trips up many learners.",
        "note": "We arrived at the airport. · They arrived at the party late. · NOT: arrived to the airport ❌"
      },
      {
        "head": "OUT OF — movement from the inside",
        "body": "'Out of' is the direct opposite of 'into': it describes movement that starts inside an enclosed space and ends outside it, such as walking out of a building or taking something out of a bag. Just as 'into' emphasizes crossing a boundary to get in, 'out of' emphasizes crossing that same boundary to get out. Together, into/out of form a clear pair for describing entry and exit.",
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
        "body": "'In' extends beyond physical spaces to cover general parts of the day (morning, afternoon, evening), which are treated as broad time periods you're 'inside' of rather than exact points. It also continues its enclosed-space logic for things you're physically inside, like a bed, a car, a hospital, or a prison. Both uses rely on the same underlying idea: 'in' marks something as contained within a broader space or period.",
        "note": "in the morning · in the afternoon · in bed · in hospital · in the car"
      },
      {
        "head": "AT — activities and specific points",
        "body": "'At' groups together two related ideas seen elsewhere in this unit: locations defined by the activity that happens there (work, school, home) and locations treated as a single precise point (a bus stop, a door). In both cases, the size or interior of the place isn't the focus — what matters is either the function of the place or its position as a point. This is why 'at' contrasts with 'in', which always emphasizes being enclosed within a space.",
        "note": "at work · at school · at home · at the bus stop"
      },
      {
        "head": "ON — surfaces and public transport",
        "body": "'On' keeps its core meaning of contact with a surface, but also extends to larger public transport — buses, trains, and planes — where passengers are imagined as being on board a vehicle they can walk around inside. Smaller, more enclosed vehicles like cars and taxis switch to 'in' instead, because they feel like a contained box rather than a vehicle you move around within. This size-based distinction — ON for a big vehicle with an aisle, IN for a small enclosed one — is one of the more memorable exceptions in this area of grammar.",
        "note": "on the bus · on the train · on the left · on the phone · on the radio"
      },
      {
        "head": "Truco: ¿tiene pasillo?",
        "body": "This is a memory trick built around a Spanish word game: ask yourself whether the vehicle has an aisle you can walk down. The Spanish word for 'with' is 'con', which hides the letters 'ON' inside it — for vehicles WITH an aisle (bus, train, plane), use 'ON'. The Spanish word for 'without' is 'sin', which hides 'IN' inside it — for vehicles WITHOUT an aisle (car, taxi), use 'IN'. Spotting these hidden English prepositions inside their Spanish opposites makes the rule easy to recall.",
        "note": "ON the bus · ON the train · ON the plane (con pasillo) · IN the car · IN the taxi (sin pasillo)"
      },
      {
        "head": "Fixed expressions to memorize",
        "body": "Not every preposition combination in English follows a clean logical pattern — some are simply fixed by convention and have to be learned as set phrases rather than derived from a rule. 'In bed', 'on the phone', and 'at night' are classic examples: each uses a different preposition for a similarly 'small, specific' situation, with no consistent underlying logic linking them. When you hit one of these fixed expressions, the most efficient approach is simply to memorize the whole phrase as a single unit.",
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
        "body": "In a passive sentence, the person or thing that actually performs the action is called the agent, and English introduces it with 'by' whenever it's worth mentioning. This mirrors the normal subject of an active sentence ('Picasso painted the picture') being pushed to the end of the passive version ('The picture was painted by Picasso'). As with the passive generally, the 'by' phrase is only included when the doer is genuinely important information, not simply because a passive sentence technically allows it.",
        "note": "The painting was made by Picasso. · The window was broken by the storm."
      },
      {
        "head": "BY — method of transport",
        "body": "'By' combines with a mode of transport, used without an article, to describe how you travel from one place to another — by car, by bus, by train. This is a fixed pattern: adding 'the' or 'a' changes the meaning entirely, since 'in my car' or 'in the car' describes being physically inside a specific vehicle rather than naming the general method of travel. Keep 'by + transport' as a set phrase distinct from prepositions of position like 'in' or 'on'.",
        "note": "by car · by bus · by train · by plane · NOT: by the car ❌ (but: in my car ✅)"
      },
      {
        "head": "BY — near/beside",
        "body": "Beyond marking an agent or a method of transport, 'by' also has a simple positional meaning close to 'next to' or 'beside' — describing something located immediately alongside another thing, like a window or a bed. This is a more literal, spatial use of the word, unrelated to the passive-voice or transport senses above. Context usually makes it obvious which of the three meanings of 'by' is intended.",
        "note": "She sat by the window. · There is a lamp by the bed."
      },
      {
        "head": "BY — deadline",
        "body": "'By' + a time expression sets a deadline — it means the action must happen at that time or earlier, but never later. This is subtly different from 'at', which points to one exact moment, and from 'until', which describes something continuing up to a point and then stopping; 'by' is specifically about a limit that shouldn't be crossed. It's the natural choice whenever you're talking about a due date or a latest acceptable time.",
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
        "body": "A large number of English nouns are conventionally paired with one specific preposition whenever they introduce what they relate to, and there's no reliable rule for predicting which preposition a given noun takes just from its meaning. This means these noun-preposition pairs have to be learned and memorized individually, the same way you'd learn any other piece of vocabulary. Because Spanish often pairs the equivalent noun with a different preposition, direct translation is an unreliable guide here.",
        "note": "the reason for · the cause of · a solution to · an increase in · damage to"
      },
      {
        "head": "Nouns related to feelings and attitudes",
        "body": "Nouns that describe a feeling, need, or attitude toward something tend to cluster around a small set of prepositions — FOR (a need for something), TOWARDS (an attitude towards something), or WITH (a connection with something) — depending on the specific noun. While there's a loose pattern here, the exact preposition still has to be learned noun by noun, since these three options aren't fully interchangeable. Grouping them this way at least narrows down the likely candidates when you're unsure.",
        "note": "a need for help · an attitude towards work · a connection with the past"
      },
      {
        "head": "Noun + preposition vs. verb + preposition",
        "body": "Because many nouns are formed from a related verb (increase/to increase, solution/to solve), you might expect the same preposition to carry over from the verb to the noun form, and sometimes it does — 'increase in' matches 'increase in size'. Other times, though, the noun takes a completely different preposition from its related verb, as with 'solve a problem' but 'a solution TO a problem'. Because the pattern isn't reliable, it's safest to check and learn the noun's preposition separately rather than assuming it matches the verb.",
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
        "body": "A group of adjectives describing feelings, judgments, or awareness about something — proud, afraid, aware, tired, and similar words — are conventionally followed by 'of' when introducing what causes that feeling. As with noun-preposition pairs, there's no deep logical reason 'of' is chosen for this particular group; it's simply the fixed pattern these adjectives follow, and needs to be learned alongside the adjective itself. Substituting a different preposition here would sound clearly wrong to a native speaker.",
        "note": "I'm proud of you. · She's afraid of spiders. · Are you aware of the problem?"
      },
      {
        "head": "Adjective + AT — ability",
        "body": "'At' follows adjectives that judge someone's skill or competence at doing something — good, bad, great, terrible — describing the specific activity or area where that skill applies. This use of 'at' echoes its role elsewhere as marking a specific point or area, here applied to a skill or subject rather than a physical location. It's one of the more predictable adjective + preposition patterns, since 'at' consistently shows up whenever ability is being judged.",
        "note": "She's good at cooking. · He's bad at maths. · I'm not very good at singing."
      },
      {
        "head": "Adjective + IN / ABOUT",
        "body": "'In' typically follows adjectives about mental engagement with a topic, like being interested in something, while 'about' typically follows adjectives describing an emotional reaction connected to a topic, like being worried or excited about something. The distinction is subtle — both describe a connection to a subject — but the emotional-reaction adjectives lean toward 'about' and the engagement/interest ones lean toward 'in'. As always with these pairs, it's worth learning each adjective with its typical preposition rather than guessing from the pattern alone.",
        "note": "interested in history · worried about the exam · excited about the trip"
      },
      {
        "head": "Adjective + FOR",
        "body": "'For' follows adjectives that describe responsibility for something (responsible for the project) or reputation for something (famous for its museums) — in both cases introducing what the responsibility or reputation is actually about. This is a distinct use from the 'of' and 'at' patterns above, since it's specifically tied to the ideas of accountability and being known for something. Learning these as fixed pairs — 'responsible for', 'famous for' — is more reliable than trying to derive the preposition from first principles.",
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
        "body": "'To' follows adjectives that express a relationship, comparison, or connection between two things or people — similar to, married to, kind to — linking the adjective to whatever it's being related or compared against. The common thread across these adjectives is a link or comparison pointing from one thing toward another, which matches 'to' being used elsewhere in English for direction and connection. As with the previous unit, memorizing each adjective-preposition pair is more reliable than guessing.",
        "note": "This is similar to my old phone. · He's married to a doctor. · Be kind to your sister."
      },
      {
        "head": "DIFFERENT FROM",
        "body": "In careful, standard English, 'different' is normally followed by 'from' rather than 'to' or 'than' (though those alternatives do appear informally), so 'from' is the safest choice in writing. 'Used to' and 'accustomed to', despite looking similar to the infinitive 'to' used with base verbs, are actually followed by a noun or an -ing form here, not a base verb — 'used to the noise', 'accustomed to working late', never 'used to work' with this meaning. This is a common trap, since 'used to' also exists as a completely different structure describing past habits ('I used to work there'), which does take a base verb.",
        "note": "This is different from what I expected. · I'm used to the noise now. · She's accustomed to working late."
      },
      {
        "head": "Adjective + WITH / BY",
        "body": "'With' typically follows adjectives describing satisfaction or contentment (satisfied with the results), while 'by' typically follows adjectives describing the cause of a reaction, especially when it echoes the passive voice's use of 'by' for an agent (impressed by her presentation — she caused the impression). The distinction mirrors the passive: 'by' introduces what caused the feeling, much like it introduces who performed an action. Both are worth learning as fixed pairs alongside their adjectives.",
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
        "body": "Verbs that describe communication directed at a specific person — speak, listen, apologise, explain — typically take 'to', since the preposition marks the person as the destination or target of the communication, similar to how 'to' marks a destination of physical movement. The person being spoken to, listened to, or apologised to is grammatically parallel to a place you're heading toward. This groups naturally with the 'at' verbs below, which express a similar direction but with a more negative or focused undertone.",
        "note": "I need to speak to the manager. · Listen to me! · She apologised to her friend."
      },
      {
        "head": "Verb + AT — directing attention or aggression",
        "body": "Verbs describing looking, reacting, or directing attention toward something — stare, shout, laugh — often take 'at', especially when there's a focused, sudden, or negative quality to the action, distinguishing them from the more neutral communication verbs that take 'to'. The 'at' here marks a target being aimed at, similar to how 'at' marks a precise point elsewhere with this preposition. Recognizing this negative or intense undertone helps you predict when 'at' rather than 'to' is the right choice.",
        "note": "Stop shouting at me! · Don't laugh at him. · She stared at the painting."
      },
      {
        "head": "THROW TO vs THROW AT",
        "body": "This single verb, 'throw', makes the TO-versus-AT distinction especially clear because both prepositions are grammatically possible but produce very different meanings. 'Throw the ball TO someone' is a cooperative, neutral action meant to help them catch it, while 'throw a stone AT something' is aggressive, meant to hit or damage the target. Comparing the two side by side is a useful way to internalize the general pattern: 'to' for neutral or helpful direction, 'at' for aggressive or forceful direction.",
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
        "body": "'About' follows verbs that describe thinking, talking, dreaming, or feeling something in connection with a general subject or topic — complain about, dream about, talk about — introducing the topic the mental or verbal activity concerns. Unlike the more targeted 'to' or 'at' verbs from the previous unit, these verbs aren't aimed at a person but connected to a broader subject matter. This makes 'about' the natural default preposition whenever a verb concerns a topic rather than a target.",
        "note": "Stop complaining about the weather! · I often dream about flying. · We talked about the trip."
      },
      {
        "head": "Verb + OF — opinions and composition",
        "body": "'Of' follows verbs in two related situations: asking for or giving a quick opinion (What do you think OF this?) and describing what something is composed or made of (This dish consists OF rice and vegetables). Both uses connect the verb to something that defines or characterizes the subject — an opinion characterizes your view of it, and ingredients characterize what it's built from. Learning 'think of' and 'consist of' as fixed pairs avoids confusing 'of' with the more general 'about'.",
        "note": "What do you think of my haircut? · This dish consists of rice and vegetables."
      },
      {
        "head": "THINK OF vs THINK ABOUT",
        "body": "Although both use the same verb, 'think of' and 'think about' carry noticeably different meanings: 'think of' usually asks for or gives an immediate, surface-level opinion or reaction, while 'think about' suggests a more sustained, careful process of consideration or reflection. 'What do you think of the plan?' wants a quick judgment; 'I'm thinking about changing jobs' describes an ongoing deliberation. This pair is a good example of how the same verb can shift meaning noticeably depending on which preposition follows it.",
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
        "body": "'For' follows verbs describing an action aimed at obtaining or achieving something — waiting for, searching for, asking for, paying for — introducing the goal or purpose behind the action. In each case, the thing after 'for' is what the subject wants, needs, or is working toward, which is the common thread linking these otherwise different verbs. This use of 'for' marking purpose is distinct from the 'for' used to explain a cause, covered in the next block.",
        "note": "I've been waiting for you for an hour! · Can you pay for the tickets?"
      },
      {
        "head": "Verb + FOR — cause (thank/blame/apologise)",
        "body": "'For' also introduces the REASON behind an emotional or social response — what someone is thanked for, blamed for, or apologised for — rather than a goal being pursued, as in the previous block. Here, 'for' functions more like 'because of', explaining why the thanking, blaming, or apologising is happening. Even though it's the same preposition as the purpose use above, the underlying logic — reason versus goal — is different enough that it helps to think of these as two related but separate patterns.",
        "note": "He thanked me for helping him. · Don't blame me for this! · I apologised for being late."
      },
      {
        "head": "APPLY FOR / HOPE FOR",
        "body": "'Apply for' and 'hope for' both use 'for' to introduce the specific thing being sought or wished for — a job you're applying for, good weather you're hoping for — continuing the purpose sense of 'for' from earlier in this unit. In both cases, the outcome hasn't happened yet; the verb expresses working toward or wishing for something still uncertain. Grouping them with 'wait for' and 'search for' reinforces that 'for' consistently marks a desired goal across many different verbs.",
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
        "body": "'From' follows verbs describing separation, origin, or distance from something — suffering from an illness, protecting against harm, recovering from a setback — all sharing the underlying idea of moving away from, or being kept apart from, something negative. This matches 'from' being used elsewhere in English to mark a starting point or source, here applied to illnesses and dangers rather than places. Recognizing this shared 'moving away from something bad' theme makes it easier to remember which verbs pair with 'from'.",
        "note": "She suffers from terrible headaches. · This cream protects your skin from the sun. · He is recovering from the flu."
      },
      {
        "head": "Verb + IN — belief, success, specialization",
        "body": "'In' follows verbs about deep involvement in or commitment to something — believing in an idea, succeeding in a task, specializing in a field, investing in something — treating that idea or field as a space the subject is deeply engaged within, echoing 'in' marking an enclosed area elsewhere in English. This differs from the more surface-level 'of' used for opinions, since these verbs describe a stronger, more committed relationship to the topic. Learning this group together helps distinguish it from the more purpose-driven 'for' verbs.",
        "note": "I believe in second chances. · He specializes in tax law. · They invested in new technology."
      },
      {
        "head": "DEPEND ON (not depend of)",
        "body": "'Depend' is always followed by 'on', never 'of' — a detail that trips up Spanish speakers especially, since the Spanish equivalent 'depender de' translates literally as 'depend OF', creating a natural but incorrect assumption. In English, 'on' here expresses the idea of relying on or being supported by something, similar to how 'on' is used for support or reliance elsewhere in the language. Because the direct translation misleads rather than helps, this is one of the noun/verb-preposition pairs most worth memorizing deliberately.",
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
        "body": "'On' follows verbs describing reliance or focused attention — depending on, relying on, concentrating on — continuing the same 'support or reliance' sense of 'on' introduced with 'depend on' in the previous unit. In each case, the subject is leaning on, or directing focus toward, whatever follows 'on', much like physically resting something on a surface. Grouping these verbs together makes the underlying 'on = support/focus' pattern easier to recognize and remember.",
        "note": "I rely on my sister for advice. · Try to concentrate on your work. · You can depend on me."
      },
      {
        "head": "Verb + ON — spending and commenting",
        "body": "'On' also introduces what money or time gets spent on, or what a comment is directed toward — spend money ON clothes, comment ON a presentation — extending its role from marking reliance to marking the target or object of an action. In the spending sense, 'on' answers 'what was the money used for'; in the commenting sense, it answers 'what is being talked about'. Both uses still fit the general theme of 'on' marking something an action is directed toward or focused on.",
        "note": "She spent a lot of money on clothes. · He commented on my presentation."
      },
      {
        "head": "SUCCEED IN doing something",
        "body": "'Succeed' is specifically followed by 'in' plus an -ing form or a noun, describing the area or activity within which the success happens — succeeded IN passing the exam — echoing the 'in' pattern from the previous unit for belief, success, and specialization. Learners sometimes wrongly use 'at' (confusing it with 'good at') or a plain infinitive ('succeeded to pass'), but neither is correct in standard English. Keeping this fixed pattern in mind avoids one of the more common preposition mistakes with this verb.",
        "note": "He succeeded in passing the exam. · NOT: succeeded to pass ❌"
      },
      {
        "head": "CONGRATULATE somebody ON something",
        "body": "'Congratulate' takes 'on' to introduce the specific achievement or event being celebrated — congratulated her ON her promotion — treating that achievement as the focus the congratulations are directed at, similar to the other 'on' verbs in this unit. This is a common point of confusion for Spanish speakers, since 'felicitar por' would suggest 'for' rather than 'on'. Learning 'congratulate... on...' as a fixed combination avoids that direct-translation trap.",
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
