import { SvelteComponent } from "svelte";
import type { DialogProps } from './Dialog.types';
declare const __propDef: {
    props: DialogProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        content: {};
        footer: {};
    };
};
type DialogProps_ = typeof __propDef.props;
export { DialogProps_ as DialogProps };
export type DialogEvents = typeof __propDef.events;
export type DialogSlots = typeof __propDef.slots;
export default class Dialog extends SvelteComponent<DialogProps_, DialogEvents, DialogSlots> {
}
