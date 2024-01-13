import type { Readable } from 'svelte/store';

export enum ThemeStrategy {
	SYSTEM = 'system',
	DARK = 'dark',
	LIGHT = 'light'
}
export enum ThemeScheme {
	DARK = ThemeStrategy.DARK,
	LIGHT = ThemeStrategy.LIGHT
}

export type ThemeStrategyType = `${ThemeStrategy}`;
export type ThemeSchemeType = `${ThemeScheme}`;
export interface ThemeContext {
	isRoot: boolean;
	strategy: Readable<ThemeStrategyType>;
	scheme: Readable<ThemeSchemeType>;
	updateStrategy: (strategy: ThemeStrategyType) => void;
}

export const THEME_CONTEXT_KEY: string = 'THEME_CONTEXT';
export const THEME_STORAGE_KEY: string = 'THEME_STATE';
export const DEFAULT_STRATEGY: ThemeStrategy = ThemeStrategy.SYSTEM;

export interface PropsThemeProvider {
	strategy?: ThemeStrategyType;
}
export const defaultPropsThemeProvider: PropsThemeProvider = {
	strategy: undefined
};

export const docPropsThemeProvider = {
	strategy: {
		type: 'enum',
		values: [ThemeStrategy.DARK, ThemeStrategy.LIGHT, ThemeStrategy.SYSTEM] as const,
		default: defaultPropsThemeProvider.strategy
	}
};
