import { SvelteComponent } from "svelte";
import type { FlexboxProps } from './Flexbox.types.js';
declare const __propDef: {
    props: FlexboxProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
type FlexboxProps_ = typeof __propDef.props;
export { FlexboxProps_ as FlexboxProps };
export type FlexboxEvents = typeof __propDef.events;
export type FlexboxSlots = typeof __propDef.slots;
export default class Flexbox extends SvelteComponent<FlexboxProps_, FlexboxEvents, FlexboxSlots> {
}
