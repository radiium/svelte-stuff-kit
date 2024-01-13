import { SvelteComponent } from "svelte";
import { type PropsInputNumber } from './InputNumber.props';
declare const __propDef: {
    props: {
        [x: string]: any;
        elementRef?: PropsInputNumber['elementRef'];
        value?: PropsInputNumber['value'];
        step?: PropsInputNumber['step'];
        min?: PropsInputNumber['min'];
        max?: PropsInputNumber['max'];
        size?: PropsInputNumber['size'];
        color?: PropsInputNumber['color'];
        disabled?: PropsInputNumber['disabled'];
        required?: PropsInputNumber['required'];
        readonly?: PropsInputNumber['readonly'];
    };
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
export type InputNumberProps = typeof __propDef.props;
export type InputNumberEvents = typeof __propDef.events;
export type InputNumberSlots = typeof __propDef.slots;
export default class InputNumber extends SvelteComponent<InputNumberProps, InputNumberEvents, InputNumberSlots> {
}
export {};
