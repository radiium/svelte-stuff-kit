import { SvelteComponent } from "svelte";
import { type PropsRadioButton } from './RadioButton.props';
declare const __propDef: {
    props: {
        [x: string]: any;
        elementRef?: PropsRadioButton['elementRef'];
        group?: PropsRadioButton['group'];
        size?: PropsRadioButton['size'];
        color?: PropsRadioButton['color'];
        error?: PropsRadioButton['error'];
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
export type RadioButtonProps = typeof __propDef.props;
export type RadioButtonEvents = typeof __propDef.events;
export type RadioButtonSlots = typeof __propDef.slots;
export default class RadioButton extends SvelteComponent<RadioButtonProps, RadioButtonEvents, RadioButtonSlots> {
}
export {};
