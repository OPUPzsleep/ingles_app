import type { QuizQuestion } from '@/types/grammar';

import { p } from './ayuda';

// Preguntas extra por tema para el nivel B1 (se suman a las de las unidades del tema, hasta llegar a 12 o más).
export const PREGUNTAS_TEMA_B1: Record<string, QuizQuestion[]> = {
  Future: [
    p('I think it ___ be a nice day tomorrow.', 'will', ['is going', 'shall to', 'goes to'], "Opinión o predicción con 'I think' → 'will'."),
    p("I've already decided: I ___ study medicine next year.", 'am going to', ['will', 'shall', 'go to'], "Decisión tomada antes de hablar → 'be going to'."),
    p("'Oh no, I forgot to buy milk!' 'Don't worry. I ___ some on my way home.'", 'will get', ['get', 'getting', 'got'], "Decisión en el momento de hablar → 'will'."),
    p('Shall I ___ you with your bags?', 'help', ['to help', 'helping', 'helped'], "Después de 'shall' va el verbo base: 'Shall I help you?'"),
    p("'Are you busy tonight?' 'Yes, I ___ my parents. We arranged it last week.'", 'am seeing', ['will see', 'shall see', 'see'], "Plan ya organizado → presente continuo."),
    p('She ___ have a baby. She told us yesterday.', 'is going to', ['will', 'shall', 'is'], "Plan o hecho ya conocido → 'be going to'."),
    p('What ___ we do tonight? Any ideas?', 'shall', ['will to', 'are', 'does'], "'Shall we…?' sirve para hacer sugerencias."),
  ],
  'Past Perfect': [
    p('When we arrived, the film ___ started.', 'had already', ['has already', 'was already', 'already had'], "Acción anterior a otra en pasado → 'had already started'."),
    p('She ___ to Paris before, so she knew the city well.', 'had been', ['has been', 'was being', 'is being'], "Experiencia anterior a un momento del pasado → 'had been'."),
    p("I didn't recognise him because he ___ a lot.", 'had changed', ['has changed', 'was changed', 'is changing'], "Causa anterior → past perfect: 'had changed'."),
    p("Tom wasn't at home. He ___ out.", 'had gone', ['has gone', 'was going', 'goes'], 'Explica por qué no estaba: algo que ocurrió antes → past perfect.'),
    p('After he ___ his work, he went home.', 'had finished', ['has finished', 'was finishing', 'finishes'], "'After' + past perfect para la acción anterior."),
    p("I wasn't hungry because I ___ a big lunch.", 'had eaten', ['have eaten', 'was eating', 'eat'], "La causa ocurrió antes → past perfect."),
    p("By 8 o'clock, I ___ all my emails.", 'had answered', ['have answered', 'was answered', 'answer'], "'By 8 o'clock' (momento pasado) + acción terminada antes → past perfect."),
    p("We couldn't get in because we ___ our tickets at home.", 'had left', ['have left', 'were leaving', 'leave'], "Lo anterior al problema → past perfect."),
    p('Sam ___ never ___ sushi before last night.', 'had/eaten', ['has/eaten', 'had/ate', 'was/eaten'], "'had never eaten' = nunca había comido."),
  ],
  Conditionals: [
    p("If you ___ hard, you'll pass the exam.", 'study', ['will study', 'studied', 'would study'], 'Primer condicional: if + presente, will + verbo.'),
    p('If I ___ more money, I would buy a bigger house.', 'had', ['have', 'will have', 'would have'], 'Segundo condicional: if + pasado, would + verbo.'),
    p('What would you do if you ___ a ghost?', 'saw', ['see', 'will see', 'would see'], 'Segundo condicional: if + pasado simple.'),
    p("I'll call you if I ___ any news.", 'hear', ['will hear', 'heard', 'would hear'], 'Primer condicional: tras if se usa presente, no will.'),
    p("I wish I ___ a car. I'm tired of walking.", 'had', ['have', 'would have', 'will have'], "'wish' + pasado simple para deseos sobre el presente."),
    p('If she ___ here, she would help us.', 'were', ['is', 'will be', 'would be'], "Segundo condicional: 'if she were' (o 'was')."),
  ],
  'Passive Voice': [
    p('English ___ in many countries.', 'is spoken', ['speaks', 'is speaking', 'spoke'], 'Pasiva en presente: is/are + participio.'),
    p('The letters ___ yesterday.', 'were sent', ['are sent', 'sent', 'were sending'], 'Pasiva en pasado: was/were + participio.'),
    p('This bridge ___ in 1950.', 'was built', ['is built', 'built', 'was build'], 'Pasiva en pasado: was + participio (built).'),
    p('The room ___ at the moment. Please wait.', 'is being cleaned', ['is cleaned', 'cleans', 'was cleaning'], 'Acción en curso en pasiva: is being + participio.'),
    p('The new school has ___ opened by the mayor.', 'been', ['be', 'being', 'was'], 'Presente perfecto pasivo: has/have + been + participio.'),
    p('This medicine must ___ in a cool place.', 'be kept', ['keep', 'be keeping', 'been kept'], "Modal + be + participio: 'must be kept'."),
    p('The thief ___ by the police last night.', 'was caught', ['is caught', 'caught', 'was catching'], 'Pasiva en pasado: was + participio (caught).'),
  ],
  'Reported Speech': [
    p("'I live in Madrid,' he said. → He said he ___ in Madrid.", 'lived', ['has lived', 'is living', 'would live'], 'Estilo indirecto: el presente pasa a pasado simple.'),
    p("'We are working,' they said. → They said they ___ working.", 'were', ['have been', 'will be', 'would be'], "Presente continuo → pasado continuo: 'were working'."),
    p("'I can swim,' she said. → She said she ___ swim.", 'could', ['would', 'should', 'might'], "can → could en estilo indirecto."),
    p("'I must go,' he said. → He said he ___ go.", 'had to', ['has to', 'have to', 'is to'], "must → had to en estilo indirecto."),
    p("'I went to Rome,' she said. → She said she ___ to Rome.", 'had gone', ['has gone', 'goes', 'is going'], 'Pasado simple → past perfect en estilo indirecto.'),
    p('He told ___ that he was tired.', 'me', ['to me', 'that me', 'for me'], "'tell' lleva a la persona directamente: 'told me' (con 'say' sería 'said to me')."),
    p('She ___ that she was busy.', 'said', ['told', 'asked', 'spoke'], "'said' no lleva persona; 'told' sí ('told me')."),
    p("'Don't be late,' she said to us. → She told us ___ late.", 'not to be', ["don't be", 'not be', 'to not being'], "Órdenes negativas reportadas → 'told us not to + verbo'."),
    p("'I'm waiting for Tom,' she said. → She said she ___ for Tom.", 'was waiting', ['has waited', 'waits', 'will wait'], "Presente continuo → pasado continuo."),
  ],
  Questions: [
    p("You're a student, ___?", "aren't you", ['are you', "don't you", "isn't you"], "Afirmativa → tag negativo con el mismo verbo: 'aren't you?'."),
    p('They live here, ___?', "don't they", ["aren't they", 'do they', "haven't they"], "Presente simple afirmativo → tag 'don't they?'."),
    p('Who ___ you talking to?', 'were', ['did', 'do', 'was'], "Pregunta en pasado continuo: 'Who were you talking to?'."),
    p('Which ___ do you prefer: tea or coffee?', 'one', ['what', 'who', 'that'], "'Which one…?' para elegir entre opciones."),
    p("'I love pizza.' '___ do I.'", 'So', ['Neither', 'Too', 'Also'], "Acuerdo afirmativo: 'So do I'."),
  ],
  'Articles & Nouns': [
    p('He is in ___ prison for robbery.', '—', ['the', 'a', 'an'], "'In prison' (como preso) va sin artículo."),
    p('She plays ___ violin in an orchestra.', 'the', ['a', '—', 'an'], "Instrumentos → 'the': 'play the violin'."),
    p('___ Netherlands is a flat country.', 'The', ['—', 'A', 'An'], "'The Netherlands' lleva 'the' (es plural)."),
  ],
  Pronouns: [
    p('Both answers are wrong. ___ of them is correct.', 'Neither', ['Both', 'All', 'Every'], "'Neither of' = ninguno de los dos."),
    p('The test was easy, so ___ of the students passed it.', 'all', ['every', 'whole', 'other'], "'All of the…' = todos los…; 'every' no se usa con 'of'."),
  ],
  'Relative Clauses': [
    p('The man ___ stole my bag ran away.', 'who', ['which', 'whose', 'whom'], "Persona que hace la acción → 'who' (o 'that')."),
    p('This is the car ___ I bought last week.', 'that', ['who', 'whose', 'what'], "Cosa → 'that' (o 'which')."),
    p('The people ___ live upstairs are very noisy.', 'who', ['which', 'whom', 'whose'], "Personas como sujeto → 'who'."),
    p('A dentist is a person ___ looks after your teeth.', 'who', ['which', 'what', 'where'], "Persona → 'who'."),
    p('The cake ___ she made was delicious.', '—', ['who', 'what', 'whose'], "Cuando la palabra relativa es objeto, puede omitirse: 'The cake she made'."),
    p('The phone ___ is on the table is mine.', 'that', ['who', 'what', 'whose'], "Cosa como sujeto → 'that' (o 'which')."),
    p('Everything ___ he said was true.', 'that', ['what', 'who', 'whose'], "Después de 'everything' se usa 'that'."),
    p('The students ___ passed the test were happy.', 'who', ['which', 'what', 'whom'], "Personas como sujeto → 'who'."),
  ],
  Conjunctions: [
    p('We played football ___ the rain.', 'in spite of', ['although', 'even though', 'however'], "'In spite of' + sustantivo."),
    p("You can't enter ___ you have a ticket.", 'unless', ['in case', 'although', 'until'], "'Unless' = a menos que / si no."),
    p('Wait here ___ I come back.', 'until', ['by', 'because', 'although'], "'Until' = hasta que."),
  ],
};
