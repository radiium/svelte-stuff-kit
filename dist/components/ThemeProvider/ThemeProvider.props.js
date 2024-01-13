export var ThemeStrategy;
(function (ThemeStrategy) {
    ThemeStrategy["SYSTEM"] = "system";
    ThemeStrategy["DARK"] = "dark";
    ThemeStrategy["LIGHT"] = "light";
})(ThemeStrategy || (ThemeStrategy = {}));
export var ThemeScheme;
(function (ThemeScheme) {
    ThemeScheme["DARK"] = "dark";
    ThemeScheme["LIGHT"] = "light";
})(ThemeScheme || (ThemeScheme = {}));
export const THEME_CONTEXT_KEY = 'THEME_CONTEXT';
export const THEME_STORAGE_KEY = 'THEME_STATE';
export const DEFAULT_STRATEGY = ThemeStrategy.SYSTEM;
export const defaultPropsThemeProvider = {
    strategy: undefined
};
export const docPropsThemeProvider = {
    strategy: {
        type: 'enum',
        values: [ThemeStrategy.DARK, ThemeStrategy.LIGHT, ThemeStrategy.SYSTEM],
        default: defaultPropsThemeProvider.strategy
    }
};
