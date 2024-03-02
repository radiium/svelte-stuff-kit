import { SvelteComponent } from "svelte";
import type { AccordionItemProps } from './Accordion.types';
declare const __propDef: {
    props: AccordionItemProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {
            key: symbol;
            isOpen: boolean | undefined;
            open: () => boolean;
            close: () => boolean;
            toggle: () => boolean;
        };
        default: {
            key: symbol;
            isOpen: boolean | undefined;
            open: () => boolean;
            close: () => boolean;
            toggle: () => boolean;
        };
    };
};
type AccordionItemProps_ = typeof __propDef.props;
export { AccordionItemProps_ as AccordionItemProps };
export type AccordionItemEvents = typeof __propDef.events;
export type AccordionItemSlots = typeof __propDef.slots;
export default class AccordionItem extends SvelteComponent<AccordionItemProps_, AccordionItemEvents, AccordionItemSlots> {
}
