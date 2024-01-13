import { SvelteComponent } from "svelte";
import type { PropsButtonIcon } from './Button.props';
import type { HTMLButtonAttributes } from 'svelte/elements';
declare const __propDef: {
    props: PropsButtonIcon & HTMLButtonAttributes;
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
export type ButtonIconProps = typeof __propDef.props;
export type ButtonIconEvents = typeof __propDef.events;
export type ButtonIconSlots = typeof __propDef.slots;
export default class ButtonIcon extends SvelteComponent<ButtonIconProps, ButtonIconEvents, ButtonIconSlots> {
}
export {};
