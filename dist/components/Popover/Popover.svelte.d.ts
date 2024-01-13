import { SvelteComponent } from "svelte";
import { type PropsPopover } from './Popover.props';
declare const __propDef: {
    props: {
        isOpen?: PropsPopover['isOpen'];
        backdrop?: PropsPopover['backdrop'];
        arrow?: PropsPopover['arrow'];
        strategy?: PropsPopover['strategy'];
        placement?: PropsPopover['placement'];
        offset?: PropsPopover['offset'];
        flip?: PropsPopover['flip'];
        transitionOpacity?: PropsPopover['transitionOpacity'];
        transitionY?: PropsPopover['transitionY'];
        transitionDuration?: PropsPopover['transitionDuration'];
    };
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
export type PopoverProps = typeof __propDef.props;
export type PopoverEvents = typeof __propDef.events;
export type PopoverSlots = typeof __propDef.slots;
export default class Popover extends SvelteComponent<PopoverProps, PopoverEvents, PopoverSlots> {
}
export {};
