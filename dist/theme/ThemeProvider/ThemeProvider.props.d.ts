import { ThemeStrategy } from '../theme.types.js';
import type { ThemeProviderProps } from './ThemeProvider.types.js';
export declare const defaultThemeProviderProps: ThemeProviderProps;
export declare const docThemeProviderPropsDefs: {
    title: string;
    props: ({
        name: string;
        type: string;
        values: readonly [ThemeStrategy.DARK, ThemeStrategy.LIGHT, ThemeStrategy.SYSTEM];
        default: "light" | "system" | "dark" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["none", "small", "medium", "large", "full"];
        default: "medium" | "none" | "small" | "large" | "full" | undefined;
    })[];
    slots: {
        name: string;
    }[];
    events: never[];
};
