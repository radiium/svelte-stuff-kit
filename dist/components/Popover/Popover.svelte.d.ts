import { SvelteComponent } from "svelte";
import type { PopoverProps } from './Popover.types.js';
declare const __propDef: {
    props: PopoverProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        trigger: {
            isOpen: boolean | undefined;
            open: () => void;
            close: () => void;
        };
        content: {
            isOpen: boolean | undefined;
            open: () => void;
            close: () => void;
        };
    };
};
type PopoverProps_ = typeof __propDef.props;
export { PopoverProps_ as PopoverProps };
export type PopoverEvents = typeof __propDef.events;
export type PopoverSlots = typeof __propDef.slots;
export default class Popover extends SvelteComponent<PopoverProps_, PopoverEvents, PopoverSlots> {
}
