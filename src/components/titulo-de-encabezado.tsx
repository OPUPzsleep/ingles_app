import { Text, useWindowDimensions } from 'react-native';

import { useTheme } from '@/hooks/use-theme';

/** Lo que ocupan a los lados del título: la flecha de atrás a la izquierda y los botones de la derecha (inicio y letra). */
const ESPACIO_LATERAL = 215;

/**
 * El título del encabezado de una pantalla con botones a la derecha: se recorta con «…» en vez de quedar debajo de ellos
 * (el encabezado de la web calcula mal el ancho cuando hay varios botones). Tiene el mismo estilo que el título normal.
 */
export function TituloDeEncabezado({ children }: { children: string }) {
  const theme = useTheme();
  const { width } = useWindowDimensions();

  return (
    <Text
      numberOfLines={1}
      ellipsizeMode="tail"
      accessibilityRole="header"
      style={{ color: theme.text, fontSize: 17, fontWeight: '600', maxWidth: Math.max(120, width - ESPACIO_LATERAL) }}>
      {children}
    </Text>
  );
}
