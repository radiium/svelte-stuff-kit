import { SvelteComponent } from "svelte";
import type { ButtonIconProps } from './Button.types';
declare const __propDef: {
    props: ButtonIconProps;
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
type ButtonIconProps_ = typeof __propDef.props;
export { ButtonIconProps_ as ButtonIconProps };
export type ButtonIconEvents = typeof __propDef.events;
export type ButtonIconSlots = typeof __propDef.slots;
export default class ButtonIcon extends SvelteComponent<ButtonIconProps_, ButtonIconEvents, ButtonIconSlots> {
}
