import { SvelteComponent } from "svelte";
import type { RadioButtonProps } from './RadioButton.types';
declare const __propDef: {
    props: RadioButtonProps;
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
type RadioButtonProps_ = typeof __propDef.props;
export { RadioButtonProps_ as RadioButtonProps };
export type RadioButtonEvents = typeof __propDef.events;
export type RadioButtonSlots = typeof __propDef.slots;
export default class RadioButton extends SvelteComponent<RadioButtonProps_, RadioButtonEvents, RadioButtonSlots> {
}
