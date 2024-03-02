import { SvelteComponent } from "svelte";
import type { InputProps } from './Input.types';
declare const __propDef: {
    props: InputProps;
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
type InputProps_ = typeof __propDef.props;
export { InputProps_ as InputProps };
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponent<InputProps_, InputEvents, InputSlots> {
}
