import { SvelteComponent } from "svelte";
import '../../style.scss';
import { type ThemeProviderProps } from './ThemeProvider.types';
declare const __propDef: {
    props: ThemeProviderProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
type ThemeProviderProps_ = typeof __propDef.props;
export { ThemeProviderProps_ as ThemeProviderProps };
export type ThemeProviderEvents = typeof __propDef.events;
export type ThemeProviderSlots = typeof __propDef.slots;
export default class ThemeProvider extends SvelteComponent<ThemeProviderProps_, ThemeProviderEvents, ThemeProviderSlots> {
}
