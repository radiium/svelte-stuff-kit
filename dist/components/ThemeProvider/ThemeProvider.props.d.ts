import { ThemeStrategy, type ThemeProviderProps } from './ThemeProvider.types.js';
export declare const defaultThemeProviderProps: ThemeProviderProps;
export declare const docThemeProviderPropsDefs: {
    title: string;
    props: {
        name: string;
        type: string;
        values: readonly [ThemeStrategy.DARK, ThemeStrategy.LIGHT, ThemeStrategy.SYSTEM];
        default: "light" | "system" | "dark" | undefined;
    }[];
    slots: never[];
    events: never[];
};
