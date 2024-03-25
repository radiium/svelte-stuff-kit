import type { Radius, ThemeStrategyType } from '../theme.types.js';
export interface ThemeProviderProps {
    strategy?: ThemeStrategyType;
    radius?: (typeof Radius)[number];
}
