import { SvelteComponent } from "svelte";
import type { ButtonProps } from './Button.types.js';
declare const __propDef: {
    props: ButtonProps;
    events: {
        click: MouseEvent;
        submit: SubmitEvent;
        focus: FocusEvent;
        blur: FocusEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
type ButtonProps_ = typeof __propDef.props;
export { ButtonProps_ as ButtonProps };
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponent<ButtonProps_, ButtonEvents, ButtonSlots> {
}
