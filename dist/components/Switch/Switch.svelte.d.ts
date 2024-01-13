import { SvelteComponent } from "svelte";
import { type PropsSwitch } from './Switch.props';
declare const __propDef: {
    props: {
        [x: string]: any;
        elementRef?: PropsSwitch['elementRef'];
        size?: PropsSwitch['size'];
        color?: PropsSwitch['color'];
        error?: PropsSwitch['error'];
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
export type SwitchProps = typeof __propDef.props;
export type SwitchEvents = typeof __propDef.events;
export type SwitchSlots = typeof __propDef.slots;
export default class Switch extends SvelteComponent<SwitchProps, SwitchEvents, SwitchSlots> {
}
export {};
