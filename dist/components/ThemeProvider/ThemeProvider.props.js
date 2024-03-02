import { ThemeStrategy } from './ThemeProvider.types';
export const defaultThemeProviderProps = {
    strategy: undefined
};
export const docThemeProviderProps = {
    strategy: {
        type: 'enum',
        values: [ThemeStrategy.DARK, ThemeStrategy.LIGHT, ThemeStrategy.SYSTEM],
        default: defaultThemeProviderProps.strategy
    }
};
