import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: string | undefined;
        color?: string | undefined;
        mirrored?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type XProps = typeof __propDef.props;
export type XEvents = typeof __propDef.events;
export type XSlots = typeof __propDef.slots;
export default class X extends SvelteComponent<XProps, XEvents, XSlots> {
}
export {};
