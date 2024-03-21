import { SvelteComponent } from "svelte";
import type { InputRangeProps } from './InputRange.types.js';
declare const __propDef: {
    props: InputRangeProps;
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
type InputRangeProps_ = typeof __propDef.props;
export { InputRangeProps_ as InputRangeProps };
export type InputRangeEvents = typeof __propDef.events;
export type InputRangeSlots = typeof __propDef.slots;
export default class InputRange extends SvelteComponent<InputRangeProps_, InputRangeEvents, InputRangeSlots> {
}
