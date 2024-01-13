import { SvelteComponent } from "svelte";
import { type PropsFlexbox } from './Flexbox.props';
declare const __propDef: {
    props: PropsFlexbox;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FlexboxProps = typeof __propDef.props;
export type FlexboxEvents = typeof __propDef.events;
export type FlexboxSlots = typeof __propDef.slots;
export default class Flexbox extends SvelteComponent<FlexboxProps, FlexboxEvents, FlexboxSlots> {
}
export {};
