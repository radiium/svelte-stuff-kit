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
export type CarretDownProps = typeof __propDef.props;
export type CarretDownEvents = typeof __propDef.events;
export type CarretDownSlots = typeof __propDef.slots;
export default class CarretDown extends SvelteComponent<CarretDownProps, CarretDownEvents, CarretDownSlots> {
}
export {};
