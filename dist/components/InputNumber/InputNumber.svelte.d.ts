import { SvelteComponent } from "svelte";
import type { InputNumberProps } from './InputNumber.types.js';
declare const __propDef: {
    props: InputNumberProps;
    events: {
        input: Event;
        change: Event;
        focus: FocusEvent;
        blur: FocusEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
type InputNumberProps_ = typeof __propDef.props;
export { InputNumberProps_ as InputNumberProps };
export type InputNumberEvents = typeof __propDef.events;
export type InputNumberSlots = typeof __propDef.slots;
export default class InputNumber extends SvelteComponent<InputNumberProps_, InputNumberEvents, InputNumberSlots> {
}
