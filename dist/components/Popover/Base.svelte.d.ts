import { SvelteComponent } from "svelte";
import { type FlyParams } from 'svelte/transition';
import type { Placement } from '@floating-ui/dom';
declare const __propDef: {
    props: {
        defaultOpen?: boolean | undefined;
        backdrop?: boolean | undefined;
        arrow?: boolean | undefined;
        placement?: Placement | undefined;
        offset?: number | undefined;
        transition?: FlyParams | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        trigger: {
            isOpen: boolean;
            open: () => void;
            close: () => void;
        };
        content: {};
    };
};
export type BaseProps = typeof __propDef.props;
export type BaseEvents = typeof __propDef.events;
export type BaseSlots = typeof __propDef.slots;
export default class Base extends SvelteComponent<BaseProps, BaseEvents, BaseSlots> {
}
export {};
