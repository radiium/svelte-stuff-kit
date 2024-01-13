import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ThemeSelectProps = typeof __propDef.props;
export type ThemeSelectEvents = typeof __propDef.events;
export type ThemeSelectSlots = typeof __propDef.slots;
export default class ThemeSelect extends SvelteComponent<ThemeSelectProps, ThemeSelectEvents, ThemeSelectSlots> {
}
export {};
