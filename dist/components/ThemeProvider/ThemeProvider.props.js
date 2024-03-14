import { ThemeStrategy } from './ThemeProvider.types';
export const defaultThemeProviderProps = {
    strategy: undefined
};
export const docThemeProviderPropsDefs = {
    title: 'ThemeProviders',
    props: [
        {
            name: 'strategy',
            type: 'enum',
            values: [ThemeStrategy.DARK, ThemeStrategy.LIGHT, ThemeStrategy.SYSTEM],
            default: defaultThemeProviderProps.strategy
        }
    ],
    slots: [],
    events: []
};
