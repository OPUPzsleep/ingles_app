import { useWindowDimensions, type ViewStyle } from 'react-native';

import { Spacing } from '@/constants/theme';

/** Una pantalla más baja que esto, y más ancha que alta, es un celular girado (en un tablet o monitor no pasa). */
const ALTO_MAXIMO_HORIZONTAL = 520;

/**
 * true en un celular en horizontal: hay ancho de sobra pero muy poco alto, así que se ahorra lo vertical
 * (barras y márgenes más bajos) y se reparte el contenido en columnas desde un ancho menor.
 */
export function useHorizontal(): boolean {
  const { width, height } = useWindowDimensions();
  return width > height && height < ALTO_MAXIMO_HORIZONTAL;
}

/**
 * Estilo del contenido de una pantalla en horizontal: más ancho que en vertical (hay lugar a los lados) y con menos
 * margen arriba y abajo. En vertical no cambia nada (undefined).
 */
export function useEstiloHorizontal(anchoMaximo = 1000): ViewStyle | undefined {
  const horizontal = useHorizontal();
  return horizontal ? { maxWidth: anchoMaximo, paddingVertical: Spacing.two } : undefined;
}
