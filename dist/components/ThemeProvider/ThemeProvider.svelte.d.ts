import { SvelteComponent } from "svelte";
import '../../style.scss';
import { type PropsThemeProvider } from './ThemeProvider.props';
declare const __propDef: {
    props: {
        strategy?: PropsThemeProvider['strategy'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ThemeProviderProps = typeof __propDef.props;
export type ThemeProviderEvents = typeof __propDef.events;
export type ThemeProviderSlots = typeof __propDef.slots;
export default class ThemeProvider extends SvelteComponent<ThemeProviderProps, ThemeProviderEvents, ThemeProviderSlots> {
}
export {};
