import { MaxContentWidth } from '@/constants/theme';

/** Cuántas columnas de tarjetas caben según el ancho de la ventana (1 en celular). */
export function columnasPara(ancho: number) {
  if (ancho >= 1500) return 3;
  if (ancho >= 1000) return 2;
  return 1;
}

/** Ancho máximo del contenido de las listas de Vocabulario según sus columnas. */
export function anchoMaximo(columnas: number) {
  return columnas === 3 ? 1440 : columnas === 2 ? 1080 : MaxContentWidth;
}

/** Cómo leer la pronunciación aproximada que aparece junto a cada palabra o verbo. */
export const NOTA_PRONUNCIACION =
  'Pronunciación: j = h suave · th = lengua entre los dientes · u = w · y = j inglesa · la tilde marca la sílaba fuerte.';
