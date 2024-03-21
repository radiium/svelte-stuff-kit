import { SvelteComponent } from "svelte";
import type { BoxProps } from './Box.types.js';
declare const __propDef: {
    props: BoxProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
type BoxProps_ = typeof __propDef.props;
export { BoxProps_ as BoxProps };
export type BoxEvents = typeof __propDef.events;
export type BoxSlots = typeof __propDef.slots;
export default class Box extends SvelteComponent<BoxProps_, BoxEvents, BoxSlots> {
}
