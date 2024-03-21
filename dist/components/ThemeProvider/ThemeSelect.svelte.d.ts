import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        placement?: "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | undefined;
    };
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
