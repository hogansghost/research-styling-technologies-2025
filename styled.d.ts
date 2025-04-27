import 'styled-components';
import { scTheme } from 'themes/sc.theme';

type Theme = typeof scTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
