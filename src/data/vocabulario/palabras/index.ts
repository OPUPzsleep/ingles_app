import type { VocabTopic } from '@/types/grammar';

import { GRUPO_EXPRESIONES, PALABRAS_AGREGADAS } from './agregadas';
import { GRUPOS_CIUDAD_VIAJES_TRABAJO } from './ciudad-viajes-trabajo';
import { GRUPOS_CUERPO_ROPA_CASA } from './cuerpo-ropa-casa';
import { GRUPOS_DEL_LIBRO } from './del-libro';
import { GRUPOS_NATURALEZA_SALUD_TECNOLOGIA } from './naturaleza-salud-tecnologia';
import { GRUPOS_OCIO_COMIDA_TIEMPO } from './ocio-comida-tiempo';
import { GRUPOS_PALABRAS_DE_USO_COMUN } from './palabras-de-uso-comun';

/** Los grupos de vocabulario que se suman a los primeros de tematico.ts, en el orden en que se muestran. */
export const PALABRAS_NUEVAS: VocabTopic[] = [
  ...GRUPOS_CUERPO_ROPA_CASA,
  ...GRUPOS_CIUDAD_VIAJES_TRABAJO,
  ...GRUPOS_NATURALEZA_SALUD_TECNOLOGIA,
  ...GRUPOS_OCIO_COMIDA_TIEMPO,
  ...GRUPOS_PALABRAS_DE_USO_COMUN,
  GRUPO_EXPRESIONES,
  ...GRUPOS_DEL_LIBRO,
];

export { PALABRAS_AGREGADAS };
