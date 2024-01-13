import { SvelteComponent } from "svelte";
import { type PropsLink } from './Link.props';
declare const __propDef: {
    props: PropsLink;
    events: {
        click: MouseEvent;
        focus: FocusEvent;
        blur: FocusEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type LinkProps = typeof __propDef.props;
export type LinkEvents = typeof __propDef.events;
export type LinkSlots = typeof __propDef.slots;
export default class Link extends SvelteComponent<LinkProps, LinkEvents, LinkSlots> {
}
export {};
