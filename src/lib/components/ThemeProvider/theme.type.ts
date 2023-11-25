import type { Readable } from 'svelte/motion';

export enum ThemeStrategy {
	SYSTEM = 'system',
	DARK = 'dark',
	LIGHT = 'light'
}
export type ThemeStrategyType = `${ThemeStrategy}`;

export enum ThemeScheme {
	DARK = ThemeStrategy.DARK,
	LIGHT = ThemeStrategy.LIGHT
}
export type ThemeSchemeType = `${ThemeScheme}`;

export interface ThemeContext {
	isRoot: boolean;

	strategy: Readable<ThemeStrategyType>;
	scheme: Readable<ThemeSchemeType>;
	updateStrategy: (strategy: ThemeStrategyType) => void;
}

// export const themeSchemes = ['dark', 'light'] as const;
// export type ThemeScheme = (typeof themeSchemes)[number];

// export const themeStrategies = [...themeSchemes, 'system', 'inverted'] as const;
// export type ThemeStrategy = (typeof themeStrategies)[number];

// ------------------------------------------------------------------------------------------------
/*
const KEY = 'sthemer';
const noop = () => undefined;

// ------------------------------------------------------------------------------------------------

export const themeSchemes = ['dark', 'light'] as const;
export type ThemeScheme = (typeof themeSchemes)[number];

export const themeStrategies = [...themeSchemes, 'auto', 'inverted'] as const;
export type ThemeStrategy = (typeof themeStrategies)[number];

export type ThemeContext = {
	scheme: Readable<ThemeScheme>;
	strategy: Writable<ThemeStrategy>;
};

// ------------------------------------------------------------------------------------------------

let prefersDarkFallback = false;
const supportsMatchMedia = typeof window !== 'undefined' && window.matchMedia;
export const setFallbackScheme = (scheme: string | null) =>
	(prefersDarkFallback = scheme === 'dark');

// ------------------------------------------------------------------------------------------------

export const getInvertedScheme = (scheme: ThemeScheme): ThemeScheme =>
	scheme === 'dark' ? 'light' : 'dark';

export const getSthemerContext = () =>
	getContext<ThemeContext>(KEY) || { strategy: writable('auto'), scheme: readable('light') };

export const createThemeContext = (strategy: ThemeStrategy = 'auto') => {
	const mediaQueryPrefersDark = supportsMatchMedia
		? window.matchMedia('(prefers-color-scheme: dark)')
		: { matches: prefersDarkFallback, addEventListener: noop, removeEventListener: noop };

	const getSchemeFromStrategy = (strategy: ThemeStrategy): ThemeScheme => {
		if (themeSchemes.includes(strategy as ThemeScheme)) return strategy as ThemeScheme;

		const prefersDarkScheme = mediaQueryPrefersDark.matches;
		return prefersDarkScheme ? 'dark' : 'light';
	};

	const autoStore = writable<ThemeScheme>(mediaQueryPrefersDark.matches ? 'dark' : 'light');

	const strategyStore = writable<ThemeStrategy>(strategy);

	const parentContext = getContext<ThemeContext>(KEY);

	const parentScheme = parentContext
		? parentContext.scheme
		: readable<ThemeScheme>(getSchemeFromStrategy(strategy));

	const changeScheme = () => autoStore.set(mediaQueryPrefersDark.matches ? 'dark' : 'light');

	const schemeStore = derived<
		[Writable<ThemeStrategy>, Writable<ThemeScheme>, Readable<ThemeScheme>],
		ThemeScheme
	>([strategyStore, autoStore, parentScheme], ([strategy, autoValue, parentScheme]) => {
		if (strategy === 'inverted') {
			return getInvertedScheme(parentScheme || autoValue);
		}

		if (strategy === 'auto') {
			mediaQueryPrefersDark.addEventListener('change', changeScheme);
			return autoValue;
		} else {
			mediaQueryPrefersDark.removeEventListener('change', changeScheme);
		}

		return getSchemeFromStrategy(strategy);
	});

	const context = {
		strategy: strategyStore,
		scheme: schemeStore
	};

	setContext<ThemeContext>(KEY, context);

	return context;
};

export interface ThemeProps {
	isRoot: boolean;
	themes: string[];
	forcedTheme?: string | undefined;
	setTheme: (theme: string) => void;
	theme?: string | undefined;
	resolvedTheme?: string | undefined;
	systemTheme?: 'dark' | 'light' | undefined;
}
*/
