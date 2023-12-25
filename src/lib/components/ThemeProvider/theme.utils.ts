import { getContext } from 'svelte';
import { isBrowser } from '$lib/utils/is-browser';
import {
	ThemeScheme,
	ThemeStrategy,
	type ThemeSchemeType,
	type ThemeStrategyType,
	type ThemeContext
} from './ThemeProvider.props';

export const THEME_CONTEXT_KEY: string = 'THEME_CONTEXT';
export const THEME_STORAGE_KEY: string = 'THEME_STATE';
export const DEFAULT_STRATEGY: ThemeStrategy = ThemeStrategy.SYSTEM;

const prefersDarkFallback = false;
const noop = (_) => undefined;
const isServer = typeof window === 'undefined';
export const prefersColorSchemeDark = isBrowser()
	? window.matchMedia('(prefers-color-scheme: dark)')
	: { matches: prefersDarkFallback, addEventListener: noop, removeEventListener: noop };

/**
 * Get system theme from media querie prefers-color-scheme
 *
 * @returns system theme
 */
export const resolveSchemeSystem = (): ThemeSchemeType => {
	let isDark = false;
	if (isBrowser()) {
		isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	}
	return isDark ? ThemeScheme.DARK : ThemeScheme.LIGHT;
};

/**
 * Resolve theme from provider params
 *
 * @param strategy
 * @returns resolved theme
 */
export const resolveScheme = (strategy: ThemeStrategyType | undefined): ThemeSchemeType => {
	if (!strategy) {
		strategy = DEFAULT_STRATEGY;
	}
	switch (strategy) {
		case ThemeStrategy.SYSTEM:
			return resolveSchemeSystem();
		case ThemeStrategy.DARK:
			return ThemeScheme.DARK;
		case ThemeStrategy.LIGHT:
		default:
			return ThemeScheme.LIGHT;
	}
};

export const resolveStrategy = (strategy: ThemeStrategyType | undefined): ThemeStrategyType => {
	if (!strategy) {
		strategy = getThemeStorage(THEME_STORAGE_KEY);
	}
	if (!strategy) {
		strategy = DEFAULT_STRATEGY;
		setThemeStorage(THEME_STORAGE_KEY, strategy);
	}

	return strategy;
};

/**
 * Get theme from localstorage
 *
 * @param key
 * @param fallback
 * @returns
 */
export const getThemeStorage = (key: string, fallback?: string): ThemeStrategyType | undefined => {
	if (!isBrowser()) {
		return undefined;
	}
	let theme;
	try {
		theme = localStorage.getItem(key) || undefined;
	} catch (e) {
		// Unsupported
	}
	return theme || fallback;
};

/**
 * Set theme to store and localstorage
 *
 * @param theme
 * @param storageKey
 */
export const setThemeStorage = (key: string, strategy: ThemeStrategyType) => {
	// themeState.set(newTheme);

	// Save to storage
	try {
		localStorage.setItem(key, strategy);
	} catch (e) {
		// Unsupported
	}
};

/**
 * Disable animation
 *
 * @returns calback for enable animation
 */
export const disableAnimation = () => {
	const css = document.createElement('style');
	css.appendChild(
		document.createTextNode(
			`*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
		)
	);
	document.head.appendChild(css);

	return () => {
		// Force restyle
		(() => window.getComputedStyle(document.body))();

		// Wait for next tick before removing
		setTimeout(() => {
			document.head.removeChild(css);
		}, 1);
	};
};

/**
 * Use theme context utils
 *
 * @returns current theme context or throw an error
 */
export function useThemeContext(): ThemeContext {
	const themeContext = getContext<ThemeContext | undefined>(THEME_CONTEXT_KEY);
	if (!themeContext) {
		throw new Error('`useThemeContext` must be used within a `<ThemeProvider`');
	}
	return themeContext;
}
