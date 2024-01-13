import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLAttributes<HTMLDivElement>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ButtonGroupProps = typeof __propDef.props;
export type ButtonGroupEvents = typeof __propDef.events;
export type ButtonGroupSlots = typeof __propDef.slots;
export default class ButtonGroup extends SvelteComponent<ButtonGroupProps, ButtonGroupEvents, ButtonGroupSlots> {
}
export {};
