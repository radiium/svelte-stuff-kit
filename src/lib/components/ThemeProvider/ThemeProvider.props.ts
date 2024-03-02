import { ThemeStrategy, type ThemeProviderProps } from './ThemeProvider.types';

export const defaultThemeProviderProps: ThemeProviderProps = {
	strategy: undefined
};

export const docThemeProviderProps = {
	strategy: {
		type: 'enum',
		values: [ThemeStrategy.DARK, ThemeStrategy.LIGHT, ThemeStrategy.SYSTEM] as const,
		default: defaultThemeProviderProps.strategy
	}
};
