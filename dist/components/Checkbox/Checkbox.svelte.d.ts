import { SvelteComponent } from "svelte";
import { type PropsCheckbox } from './Chekbox.props';
declare const __propDef: {
    props: {
        [x: string]: any;
        elementRef?: PropsCheckbox['elementRef'];
        size?: PropsCheckbox['size'];
        color?: PropsCheckbox['color'];
        error?: PropsCheckbox['error'];
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
export type CheckboxProps = typeof __propDef.props;
export type CheckboxEvents = typeof __propDef.events;
export type CheckboxSlots = typeof __propDef.slots;
export default class Checkbox extends SvelteComponent<CheckboxProps, CheckboxEvents, CheckboxSlots> {
}
export {};
