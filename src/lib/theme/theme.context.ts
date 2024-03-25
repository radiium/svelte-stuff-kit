import { getContext } from 'svelte';
import type { ThemeContext } from './theme.types.js';
import { THEME_CONTEXT_KEY } from './theme.constant.js';

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
