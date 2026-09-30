import { useWindowDimensions } from 'react-native';

import { WideBreakpoint } from '@/constants/theme';

/** true en pantallas anchas (web en escritorio, tablet horizontal): ahí se usan dos columnas. */
export function useIsWide(): boolean {
  return useWindowDimensions().width >= WideBreakpoint;
}
