import { SvelteComponent } from "svelte";
/**
 * Usage: <div use:portal={'css selector'}> or <div use:portal={document.body}>
 */
export declare function portal(el: HTMLElement, target?: HTMLElement | string): {
    update: (newTarget: any) => Promise<void>;
    destroy: () => void;
};
declare const __propDef: {
    props: {
        target?: string | HTMLElement | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type PortalProps = typeof __propDef.props;
export type PortalEvents = typeof __propDef.events;
export type PortalSlots = typeof __propDef.slots;
export default class Portal extends SvelteComponent<PortalProps, PortalEvents, PortalSlots> {
}
export {};
