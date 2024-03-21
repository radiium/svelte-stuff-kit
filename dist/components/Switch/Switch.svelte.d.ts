import { SvelteComponent } from "svelte";
import type { SwitchProps } from './Switch.types.js';
declare const __propDef: {
    props: SwitchProps;
    events: {
        input: Event;
        change: Event;
        focus: FocusEvent;
        blur: FocusEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        keyup: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
type SwitchProps_ = typeof __propDef.props;
export { SwitchProps_ as SwitchProps };
export type SwitchEvents = typeof __propDef.events;
export type SwitchSlots = typeof __propDef.slots;
export default class Switch extends SvelteComponent<SwitchProps_, SwitchEvents, SwitchSlots> {
}
