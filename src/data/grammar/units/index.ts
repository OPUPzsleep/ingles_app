import { ESCONDIDAS, UNIDADES_CURSO } from '@/data/grammar/curso';
import { Unit } from '@/types/grammar';

import { presentAndPastUnits } from './present-and-past';
import { presentPerfectUnits } from './present-perfect';
import { futureUnits } from './future';
import { pastPerfectUnits } from './past-perfect';
import { modalVerbsUnits } from './modal-verbs';
import { conditionalsUnits } from './conditionals';
import { passiveVoiceUnits } from './passive-voice';
import { reportedSpeechUnits } from './reported-speech';
import { questionsUnits } from './questions';
import { ingAndToUnits } from './ing-and-to';
import { articlesAndNounsUnits } from './articles-and-nouns';
import { pronounsUnits } from './pronouns';
import { relativeClausesUnits } from './relative-clauses';
import { adjectivesAndAdverbsUnits } from './adjectives-and-adverbs';
import { conjunctionsUnits } from './conjunctions';
import { prepositionsUnits } from './prepositions';
import { phrasalVerbsUnits } from './phrasal-verbs';

/** Las unidades del libro (A2 a B2: ids 13–145; las de A2 de la 25 en adelante se esconden), tal como vienen de los archivos de este directorio. */
const UNIDADES_DEL_LIBRO: Record<number, Unit> = {
  ...presentAndPastUnits,
  ...presentPerfectUnits,
  ...futureUnits,
  ...pastPerfectUnits,
  ...modalVerbsUnits,
  ...conditionalsUnits,
  ...passiveVoiceUnits,
  ...reportedSpeechUnits,
  ...questionsUnits,
  ...ingAndToUnits,
  ...articlesAndNounsUnits,
  ...pronounsUnits,
  ...relativeClausesUnits,
  ...adjectivesAndAdverbsUnits,
  ...conjunctionsUnits,
  ...prepositionsUnits,
  ...phrasalVerbsUnits,
};

/**
 * Todas las unidades visibles por id interno: las de los cursos (A1 = 1–12, A2 = 13–24 cuando estén) tapan a las del
 * libro con el mismo id, y las de `ESCONDIDAS` no se incluyen (siguen en sus archivos).
 */
export const UNITS: Record<number, Unit> = Object.fromEntries(
  Object.entries({ ...UNIDADES_DEL_LIBRO, ...UNIDADES_CURSO }).filter(([id]) => !(Number(id) in ESCONDIDAS))
);
