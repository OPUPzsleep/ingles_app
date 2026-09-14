import { Unit } from '@/types/grammar';

export const pastPerfectUnits: Record<number, Unit> = {
  "15": {
    "title": "Past Perfect (I had done)",
    "topic": "Past Perfect",
    "explain": [
      {
        "head": "Form",
        "body": "The past perfect is formed with 'had' followed by the past participle of the main verb, and unlike the present perfect, this form never changes with the subject — it's always 'had', whether the subject is I, she, or they. This simplicity makes it one of the easier tenses to form once you already know your past participles from the present perfect. Negatives and questions follow the same pattern as other 'have' tenses: 'hadn't' for negatives, and 'had' moved before the subject for questions.",
        "note": "I had finished · She had gone · They had eaten · We hadn't started · Had you met?"
      },
      {
        "head": "The earlier of two past actions",
        "body": "The past perfect's main job is to show that one past action happened before another past action — it marks whichever event came first in a sequence of two. In 'when I arrived at the party, Tom had already gone home', the leaving happened first (past perfect) and the arriving happened second (past simple), even though both events are described in the same sentence. Without the past perfect, it would be ambiguous which event came first; with it, the order is crystal clear.",
        "note": "When I arrived at the party, Tom had already gone home. (1st: Tom left. 2nd: I arrived.)"
      },
      {
        "head": "With: because / after / by the time / before",
        "body": "The past perfect frequently appears alongside conjunctions like 'because', 'after', 'by the time', and 'before', which naturally set up a sequence between two past events. These words already hint at an order of events, and the past perfect confirms which one happened earlier by marking it explicitly. 'She was tired because she hadn't slept well' and 'by the time I got there, the film had started' both use this pattern to make the earlier event unmistakable.",
        "note": "She was tired because she hadn't slept well. · By the time I got there, the film had started."
      }
    ],
    "table": {
      "cols": [
        "Earlier action (Past Perfect)",
        "Later action (Past Simple)"
      ],
      "rows": [
        [
          "Tom HAD GONE home",
          "when I ARRIVED."
        ],
        [
          "By the time we GOT there",
          "the film HAD STARTED."
        ],
        [
          "She WAS tired",
          "because she HADN'T SLEPT."
        ]
      ]
    },
    "quiz": [
      {
        "q": "When I arrived, Tom ___ already ___.",
        "opts": [
          "has/left",
          "had/left",
          "did/leave",
          "was/leaving"
        ],
        "ans": 1,
        "exp": "Action before another past action → past perfect: 'had already left'."
      },
      {
        "q": "She was tired because she ___ well the night before.",
        "opts": [
          "didn't sleep",
          "hadn't slept",
          "hasn't slept",
          "wasn't sleeping"
        ],
        "ans": 1,
        "exp": "Reason for past situation → past perfect: 'hadn't slept'."
      },
      {
        "q": "By the time we got to the cinema, the film ___.",
        "opts": [
          "already started",
          "had already started",
          "has already started",
          "was already starting"
        ],
        "ans": 1,
        "exp": "'By the time' + past → past perfect: 'had already started'."
      }
    ],
    "flashcards": [
      {
        "front": "When do you use the past perfect?",
        "back": "For the EARLIER of two past actions:\nWhen she arrived, we had already eaten.\n(1st: we ate → past perfect)\n(2nd: she arrived → past simple)"
      },
      {
        "front": "Complete: 'By the time I got to the station, the train ___.'",
        "back": "By the time I got to the station, the train HAD ALREADY LEFT.\n(past perfect = the earlier action)"
      }
    ]
  },
  "16": {
    "title": "Past Perfect Continuous (I had been doing)",
    "topic": "Past Perfect",
    "explain": [
      {
        "head": "Form",
        "body": "The past perfect continuous is formed with 'had been' plus the main verb in its -ing form, combining the past perfect's sense of 'before another past moment' with the continuous's sense of an ongoing activity. Like the simple past perfect, 'had' never changes regardless of the subject, so the whole structure stays identical for I, we, she, or they. This form lets you describe not just that something happened earlier, but that it was actively in progress for some time before that other past moment.",
        "note": "I had been waiting · She had been working · They had been studying"
      },
      {
        "head": "Activity before a past moment",
        "body": "We use the past perfect continuous for an activity that was in progress for some time before a specific past moment, often to explain why someone was in a certain state at that point. 'I was tired because I had been working all day' uses the ongoing activity (working) to explain a past feeling (tiredness), and 'when he arrived, we had been waiting for two hours' emphasizes the duration of the waiting up until his arrival. The focus is on the activity and how long it lasted, much like the present perfect continuous does for now, but shifted one step further into the past.",
        "note": "I was tired because I had been working all day. · When he arrived, we had been waiting for two hours."
      }
    ],
    "quiz": [
      {
        "q": "I was exhausted because I ___ for 12 hours.",
        "opts": [
          "worked",
          "had worked",
          "had been working",
          "was working"
        ],
        "ans": 2,
        "exp": "Activity explaining past state → 'had been working'."
      },
      {
        "q": "She ___ for ten minutes when the bus finally arrived.",
        "opts": [
          "waited",
          "had waited",
          "had been waiting",
          "was waiting"
        ],
        "ans": 2,
        "exp": "Activity in progress before a past moment → 'had been waiting'."
      }
    ],
    "flashcards": [
      {
        "front": "Past Perfect vs Past Perfect Continuous",
        "back": "SIMPLE: She had written 3 emails. (completed, result)\nCONTINUOUS: She had been writing emails. (activity, duration)\n\nBoth: activity/state before another past moment"
      }
    ]
  },
  "17": {
    "title": "Have and Have Got",
    "topic": "Past Perfect",
    "explain": [
      {
        "head": "Have and have got — same meaning",
        "body": "'Have' and 'have got' express exactly the same meaning when talking about possession, relationships, or characteristics — there's no difference in meaning between 'I have a car' and 'I've got a car'. The only real difference is style: 'have got' is more common in informal, spoken British English, while plain 'have' works everywhere and is more typical in American English and in writing. Both are completely correct, so the choice mostly comes down to register and habit rather than grammar rules.",
        "note": "I have a car. = I've got a car. · Do you have any brothers? = Have you got any brothers?"
      },
      {
        "head": "Questions and negatives",
        "body": "Because 'have' and 'have got' work differently, they form questions and negatives in different ways. Plain 'have' behaves like an ordinary verb and needs 'do/does' as an auxiliary — 'do you have a pen?', 'I don't have one'. 'Have got' instead treats 'have' as an auxiliary itself, so no 'do' is needed — 'have you got a pen?', 'I haven't got one'. Both versions are equally correct; just don't mix the two patterns together in the same sentence.",
        "note": "Do you have a pen? / Have you got a pen? (both correct)"
      },
      {
        "head": "Past tense — only 'had'",
        "body": "In the past tense, the 'have got' pattern disappears, and standard English uses only 'had' for possession, with no 'got' attached. So 'I had a dog when I was young' is correct, while 'I had got a dog' is not standard, even though 'have got' was fine in the present. This is a common trap for learners who assume the present-tense pattern simply carries over into the past.",
        "note": "I had a dog when I was young. (NOT: I had got a dog)"
      }
    ],
    "quiz": [
      {
        "q": "___ you got the time?",
        "opts": [
          "Do",
          "Have",
          "Did",
          "Are"
        ],
        "ans": 1,
        "exp": "'Have you got…?' = informal British English for possession."
      },
      {
        "q": "I ___ a headache yesterday, so I went to bed early.",
        "opts": [
          "have",
          "have got",
          "had",
          "had got"
        ],
        "ans": 2,
        "exp": "Past tense possession → 'had'. ('Had got' not standard in past)"
      },
      {
        "q": "She ___ three brothers and two sisters.",
        "opts": [
          "is having",
          "have",
          "has got",
          "is got"
        ],
        "ans": 2,
        "exp": "Possession → 'has got' = 'She has got three brothers'. (Or: She has three brothers.)"
      }
    ],
    "flashcards": [
      {
        "front": "Have vs Have Got",
        "back": "SAME MEANING (possession):\nI have a car. = I've got a car.\n\nPast: only HAVE (had):\nI had a car when I was young. ✅\nI had got a car when I was young. ❌"
      }
    ]
  },
  "18": {
    "title": "Used to (do)",
    "topic": "Past Perfect",
    "explain": [
      {
        "head": "Used to — past habit or state",
        "body": "'Used to' plus the base form of a verb describes a habit or state that was regularly true in the past but has since stopped being true — the key idea is a clear contrast between 'then' and 'now'. 'I used to play tennis a lot, but I don't play now' explicitly makes that contrast, and even without saying it outright, 'used to' always implies the situation is no longer the case. It works both for repeated actions (playing tennis) and for lasting past states (used to live in London).",
        "note": "I used to play tennis a lot, but I don't play now. · She used to live in London."
      },
      {
        "head": "Question and negative",
        "body": "In questions and negatives, 'used to' loses its -d and becomes simply 'use to', appearing after the auxiliary 'did' or 'didn't' — 'did you use to smoke?' and 'I didn't use to like vegetables'. This happens because 'did' already carries the past tense marking, so 'used' doesn't need its own -ed ending anymore, exactly like any other verb after 'did'. Writing 'did you used to' is a very common mistake, since it feels natural to keep the -d, but standard English drops it.",
        "note": "Did you use to smoke? · I didn't use to like vegetables, but I do now."
      },
      {
        "head": "Used to vs Past Simple",
        "body": "'Used to' specifically emphasizes that something was a repeated habit or a state that lasted over time in the past, highlighting the contrast with the present. The ordinary past simple can express the same habitual meaning too, just with less emphasis on that habit-versus-now contrast — 'I used to walk to school' and 'I walked to school every day' can both describe the same repeated past routine. The difference is mostly one of emphasis: 'used to' foregrounds the idea that things are different now, while the past simple just states what happened.",
        "note": "I used to walk to school. = I walked to school every day. (both correct for habits)"
      }
    ],
    "quiz": [
      {
        "q": "I ___ smoke but I gave it up two years ago.",
        "opts": [
          "use to",
          "used to",
          "was used to",
          "am used to"
        ],
        "ans": 1,
        "exp": "Past habit no longer happening → 'used to smoke'."
      },
      {
        "q": "___ you use to play football when you were young?",
        "opts": [
          "Were",
          "Did",
          "Have",
          "Do"
        ],
        "ans": 1,
        "exp": "'Did you use to…?' (no -d in 'use' in questions)"
      },
      {
        "q": "She ___ have long hair but she cut it short.",
        "opts": [
          "used to",
          "use to",
          "is used to",
          "was used to"
        ],
        "ans": 0,
        "exp": "Past state that changed → 'used to have'."
      }
    ],
    "flashcards": [
      {
        "front": "USED TO do vs AM/GET USED TO doing",
        "back": "USED TO + infinitive = past habit (no longer):\n'I used to smoke.' (I don't smoke now)\n\nAM USED TO + -ing = am accustomed to:\n'I'm used to getting up early.' (it feels normal to me)"
      }
    ]
  }
};
