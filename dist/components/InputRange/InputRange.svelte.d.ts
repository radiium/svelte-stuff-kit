import { SvelteComponent } from "svelte";
import { type PropsInputRange } from './InputRange.props';
declare const __propDef: {
    props: {
        [x: string]: any;
        elementRef?: PropsInputRange['elementRef'];
        size?: PropsInputRange['size'];
        color?: PropsInputRange['color'];
        error?: PropsInputRange['error'];
        fullWidth?: PropsInputRange['fullWidth'];
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
export type InputRangeProps = typeof __propDef.props;
export type InputRangeEvents = typeof __propDef.events;
export type InputRangeSlots = typeof __propDef.slots;
export default class InputRange extends SvelteComponent<InputRangeProps, InputRangeEvents, InputRangeSlots> {
}
export {};
