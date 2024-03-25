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
export type AppWindowProps = typeof __propDef.props;
export type AppWindowEvents = typeof __propDef.events;
export type AppWindowSlots = typeof __propDef.slots;
export default class AppWindow extends SvelteComponent<AppWindowProps, AppWindowEvents, AppWindowSlots> {
}
export {};
