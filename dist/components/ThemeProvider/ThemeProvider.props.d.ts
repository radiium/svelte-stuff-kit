/// <reference types="svelte" />
import type { Readable } from 'svelte/store';
export declare enum ThemeStrategy {
    SYSTEM = "system",
    DARK = "dark",
    LIGHT = "light"
}
export declare enum ThemeScheme {
    DARK = "dark",
    LIGHT = "light"
}
export type ThemeStrategyType = `${ThemeStrategy}`;
export type ThemeSchemeType = `${ThemeScheme}`;
export interface ThemeContext {
    isRoot: boolean;
    strategy: Readable<ThemeStrategyType>;
    scheme: Readable<ThemeSchemeType>;
    updateStrategy: (strategy: ThemeStrategyType) => void;
}
export declare const THEME_CONTEXT_KEY: string;
export declare const THEME_STORAGE_KEY: string;
export declare const DEFAULT_STRATEGY: ThemeStrategy;
export interface PropsThemeProvider {
    strategy?: ThemeStrategyType;
}
export declare const defaultPropsThemeProvider: PropsThemeProvider;
export declare const docPropsThemeProvider: {
    strategy: {
        type: string;
        values: readonly [ThemeStrategy.DARK, ThemeStrategy.LIGHT, ThemeStrategy.SYSTEM];
        default: "light" | "system" | "dark" | undefined;
    };
};
