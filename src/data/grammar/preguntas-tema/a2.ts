import type { QuizQuestion } from '@/types/grammar';

import { p } from './ayuda';

// Preguntas extra por tema para el nivel A2 (se suman a las de las unidades del tema, hasta llegar a 12 o más).
export const PREGUNTAS_TEMA_A2: Record<string, QuizQuestion[]> = {
  Future: [
    p('Look out! That glass ___ fall off the table.', 'is going to', ['goes to', 'will to', 'is going'], "Predicción con evidencia presente → 'is going to'."),
    p("I can't come tomorrow. I ___ my grandparents. (It's arranged.)", 'am visiting', ['visit', 'will visit', 'visited'], "Plan ya organizado → presente continuo: 'I'm visiting'."),
    p("'The phone's ringing.' '___ it.'", "I'll get", ["I'm getting", 'I get', 'I got'], "Decisión en el momento → 'will': 'I'll get it'."),
  ],
  'Past Perfect': [
    p('We ___ live in a small village when I was a child.', 'used to', ['use to', 'were used to', 'are used to'], "Hábito pasado → 'used to + verbo'."),
    p("I didn't ___ like coffee, but now I love it.", 'use to', ['used to', 'using to', 'used'], "Con 'didn't' la -d desaparece: 'didn't use to'."),
    p("She ___ be very shy, but now she's confident.", 'used to', ['is used to', 'uses to', 'use to'], "Estado que antes era cierto → 'used to be'."),
    p('Did you ___ play the piano when you were a kid?', 'use to', ['used to', 'using to', 'uses to'], "Pregunta con 'did' → 'use to'."),
    p('There ___ be a cinema here, but it closed last year.', 'used to', ['use to', 'is used to', 'was used to'], "'There used to be' = antes había."),
    p('I ___ a bike when I was ten, but I sold it.', 'used to have', ['use to have', 'was used to have', 'used have'], "'used to + verbo': algo que tenías antes."),
    p('I used to ___ a lot of sweets as a child.', 'eat', ['eating', 'ate', 'eaten'], "Después de 'used to' va el verbo en forma base."),
    p('He ___ go to school by bus. He always walked.', "didn't use to", ["didn't used to", 'not used to', "wasn't used to"], "Negativa en pasado: 'didn't use to' (sin -d)."),
    p('My grandfather ___ tell us stories every night.', 'used to', ['is used to', 'use to', 'uses to'], "Costumbre pasada → 'used to'."),
  ],
  Questions: [
    p('___ is your birthday? — In May.', 'When', ['Where', 'Who', 'Why'], "Pregunta por el tiempo → 'When'."),
    p('___ do you live? — In Lima.', 'Where', ['When', 'Who', 'What'], "Pregunta por el lugar → 'Where'."),
    p("___ is that man? — He's my uncle.", 'Who', ['What', 'Where', 'Which'], "Pregunta por una persona → 'Who'."),
    p('___ did you go to bed so late? — Because I was watching a film.', 'Why', ['How', 'When', 'Where'], "Pregunta por la razón → 'Why'."),
    p("How ___ is this bag? — It's twenty dollars.", 'much', ['many', 'long', 'old'], "Precio → 'How much'."),
    p('___ you like pizza?', 'Do', ['Does', 'Are', 'Is'], "Presente simple con you → 'Do you…?'."),
    p('Where ___ they from?', 'are', ['do', 'does', 'have'], "Con el verbo be no se usa do: 'Where are they from?'."),
    p('How many brothers ___ you have?', 'do', ['are', 'does', 'has'], "'How many + sustantivo + do you have?'."),
    p('___ she play tennis on Saturdays?', 'Does', ['Do', 'Is', 'Has'], "Presente simple con she → 'Does she…?'."),
  ],
  '-ing and to…': [
    p('She avoids ___ fast food.', 'eating', ['to eat', 'eat', 'ate'], "'avoid' + -ing."),
    p('We hope ___ Spain next summer.', 'to visit', ['visiting', 'visit', 'visited'], "'hope' + to + verbo."),
    p('They finished ___ the kitchen at noon.', 'cleaning', ['to clean', 'clean', 'cleaned'], "'finish' + -ing."),
    p("I'd like ___ a coffee, please.", 'to have', ['having', 'have', 'had'], "'would like' + to + verbo."),
    p('Do you mind ___ the window?', 'closing', ['to close', 'close', 'closed'], "'mind' + -ing."),
    p('She promised ___ me tomorrow.', 'to call', ['calling', 'call', 'called'], "'promise' + to + verbo."),
  ],
  'Articles & Nouns': [
    p("This is my ___ house. (He's my brother.)", "brother's", ['brothers', "brothers'", 'of brother'], "Posesión con una persona → 's: 'my brother's house'."),
    p('I work in a ___. I sell sandals and boots.', 'shoe shop', ['shoes shop', 'shop shoe', 'shop of shoes'], "Noun + noun: el primer sustantivo va en singular → 'shoe shop'."),
  ],
  Pronouns: [
    p("There is ___ in the box. It's empty.", 'nothing', ['anything', 'something', 'none'], "Caja vacía → 'nothing': 'There is nothing in the box'."),
  ],
  'Adjectives & Adverbs': [
    p("This soup is ___ hot. I can't eat it.", 'too', ['enough', 'very much', 'much'], "'too' = demasiado (y eso es un problema)."),
  ],
  Conjunctions: [
    p("I've lived here ___ five years.", 'for', ['during', 'while', 'since'], "'For' + duración: 'for five years'."),
    p('She was reading ___ I was cooking.', 'while', ['during', 'for', 'since'], "'While' + sujeto + verbo."),
    p("Don't talk ___ the lesson.", 'during', ['while', 'for', 'since'], "'During' + sustantivo (la lección)."),
    p('We stayed in Rome ___ a week.', 'for', ['during', 'while', 'at'], "'For' + cuánto tiempo: 'for a week'."),
    p('He fell asleep ___ he was watching TV.', 'while', ['during', 'for', 'at'], "'While' + sujeto + verbo."),
    p('There was a big storm ___ the night.', 'during', ['while', 'for', 'at'], "'During' + sustantivo: 'during the night'."),
    p('I waited ___ two hours for the bus.', 'for', ['during', 'while', 'at'], "'For' + duración: 'for two hours'."),
    p('Somebody called me ___ I was in the shower.', 'while', ['during', 'for', 'at'], "'While' + sujeto + verbo."),
    p('Many people visit the museum ___ the summer.', 'during', ['while', 'for', 'since'], "'During' + sustantivo: 'during the summer'."),
  ],
  Prepositions: [
    p('She lives ___ a small flat in London.', 'in', ['on', 'at', 'to'], "Dentro de un lugar → 'in'."),
    p('Wait for me ___ the bus stop.', 'at', ['in', 'on', 'to'], "Un punto concreto del camino (la parada) → 'at'."),
    p('Are you going ___ the party tonight?', 'to', ['at', 'in', 'into'], "Con 'go' + lugar o evento → 'to'."),
    p("I'll meet you ___ the station at six.", 'at', ['in', 'on', 'to'], "Punto de encuentro → 'at'."),
    p("There's a beautiful picture ___ the wall.", 'on', ['in', 'at', 'to'], "Sobre una pared → 'on'."),
    p('My parents are ___ home. Call them.', 'at', ['in', 'on', 'to'], "'At home' = en casa."),
    p('She arrived ___ London on Friday.', 'in', ['at', 'to', 'into'], "Con ciudades → 'arrive in'."),
    p('They got ___ the bus outside the hotel.', 'on', ['in', 'into', 'at'], "Con bus, tren o avión se dice 'get on'; con taxi o auto, 'get in / into'."),
  ],
  'Phrasal Verbs': [
    p('Please ___ your shoes before you come in.', 'take off', ['take away', 'take up', 'take in'], "'take off' = quitarse (ropa, zapatos)."),
    p('I ___ at 7 every morning.', 'get up', ['get on', 'get in', 'get over'], "'get up' = levantarse."),
    p('Can you ___ the lights? It is too dark.', 'turn on', ['turn off', 'turn down', 'turn over'], "'turn on' = encender."),
    p('The bus is coming. ___!', 'Hurry up', ['Hurry on', 'Hurry off', 'Hurry in'], "'hurry up' = apúrate."),
    p("I'm ___ my keys. Have you seen them?", 'looking for', ['looking at', 'looking up', 'looking after'], "'look for' = buscar."),
    p('Please ___ the form and sign it.', 'fill in', ['fill on', 'fill at', 'fill to'], "'fill in' = llenar (un formulario)."),
    p('Sit ___, please. The doctor will see you soon.', 'down', ['up', 'off', 'away'], "'sit down' = sentarse."),
    p('She picked ___ the phone and called him.', 'up', ['on', 'at', 'out'], "'pick up' = levantar, recoger."),
    p('The plane ___ at 10:30 and arrived at noon.', 'took off', ['took out', 'took on', 'took up'], "'take off' (un avión) = despegar."),
    p("Could you ___ the music? I can't hear you.", 'turn down', ['turn up', 'turn on', 'turn over'], "'turn down' = bajar el volumen."),
  ],
};
