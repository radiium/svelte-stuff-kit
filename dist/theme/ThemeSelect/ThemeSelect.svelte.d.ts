import { SvelteComponent } from "svelte";
import type { ThemeSelectProps } from './ThemeSelect.types.js';
declare const __propDef: {
    props: ThemeSelectProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
type ThemeSelectProps_ = typeof __propDef.props;
export { ThemeSelectProps_ as ThemeSelectProps };
export type ThemeSelectEvents = typeof __propDef.events;
export type ThemeSelectSlots = typeof __propDef.slots;
export default class ThemeSelect extends SvelteComponent<ThemeSelectProps_, ThemeSelectEvents, ThemeSelectSlots> {
}
