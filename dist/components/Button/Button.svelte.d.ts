import { SvelteComponent } from "svelte";
import { type PropsButton } from './Button.props';
declare const __propDef: {
    props: PropsButton;
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
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponent<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
