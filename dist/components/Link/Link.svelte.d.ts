import { SvelteComponent } from "svelte";
import type { LinkProps } from './Link.types.js';
declare const __propDef: {
    props: LinkProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
type LinkProps_ = typeof __propDef.props;
export { LinkProps_ as LinkProps };
export type LinkEvents = typeof __propDef.events;
export type LinkSlots = typeof __propDef.slots;
export default class Link extends SvelteComponent<LinkProps_, LinkEvents, LinkSlots> {
}
