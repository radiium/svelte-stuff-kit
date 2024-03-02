import { ThemeStrategy, type ThemeProviderProps } from './ThemeProvider.types';
export declare const defaultThemeProviderProps: ThemeProviderProps;
export declare const docThemeProviderProps: {
    strategy: {
        type: string;
        values: readonly [ThemeStrategy.DARK, ThemeStrategy.LIGHT, ThemeStrategy.SYSTEM];
        default: "light" | "system" | "dark" | undefined;
    };
};
