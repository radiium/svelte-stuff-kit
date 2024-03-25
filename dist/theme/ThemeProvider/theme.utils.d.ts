import { type ThemeSchemeType, type ThemeStrategyType } from '../theme.types.js';
export declare const prefersColorSchemeDark: MediaQueryList | {
    matches: boolean;
    addEventListener: (_: any) => undefined;
    removeEventListener: (_: any) => undefined;
};
/**
 * Get system theme from media querie prefers-color-scheme
 *
 * @returns system theme
 */
export declare const resolveSchemeSystem: () => ThemeSchemeType;
/**
 * Resolve theme from provider params
 *
 * @param strategy
 * @returns resolved theme
 */
export declare const resolveScheme: (strategy: ThemeStrategyType | undefined) => ThemeSchemeType;
export declare const resolveStrategy: (strategy: ThemeStrategyType | undefined) => ThemeStrategyType;
/**
 * Get theme from localstorage
 *
 * @param key
 * @param fallback
 * @returns
 */
export declare const getThemeStorage: (key: string, fallback?: string) => ThemeStrategyType | undefined;
/**
 * Set theme to store and localstorage
 *
 * @param theme
 * @param storageKey
 */
export declare const setThemeStorage: (key: string, strategy: ThemeStrategyType) => void;
/**
 * Disable animation
 *
 * @returns calback for enable animation
 */
export declare const disableAnimation: () => () => void;
