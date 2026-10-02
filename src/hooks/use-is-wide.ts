import { useWindowDimensions } from 'react-native';

import { WideBreakpoint } from '@/constants/theme';
import { useHorizontal } from '@/hooks/use-horizontal';

/** Un celular girado puede medir más de `WideBreakpoint` de ancho; por encima de esto ya es un tablet o un monitor. */
const ANCHO_MAXIMO_CELULAR_HORIZONTAL = 1100;

/**
 * true en pantallas anchas (web en escritorio, tablet horizontal): ahí se usan dos columnas con lista y detalle.
 * Un celular en horizontal no cuenta: aunque mida 900 px de ancho, el alto no alcanza para una lista al lado y
 * el detalle queda angosto, así que sigue como pantalla completa (con sus columnas propias).
 */
export function useIsWide(): boolean {
  const { width } = useWindowDimensions();
  const celularGirado = useHorizontal() && width < ANCHO_MAXIMO_CELULAR_HORIZONTAL;
  return width >= WideBreakpoint && !celularGirado;
}
