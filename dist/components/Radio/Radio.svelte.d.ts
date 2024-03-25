import { SvelteComponent } from "svelte";
import type { RadioProps } from './Radio.types.js';
declare const __propDef: {
    props: RadioProps;
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
type RadioProps_ = typeof __propDef.props;
export { RadioProps_ as RadioProps };
export type RadioEvents = typeof __propDef.events;
export type RadioSlots = typeof __propDef.slots;
export default class Radio extends SvelteComponent<RadioProps_, RadioEvents, RadioSlots> {
}
