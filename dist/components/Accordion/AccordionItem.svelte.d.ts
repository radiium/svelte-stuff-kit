import { SvelteComponent } from "svelte";
import { type PropsAccordionItem } from './Accordion.props';
declare const __propDef: {
    props: PropsAccordionItem;
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
export type AccordionItemProps = typeof __propDef.props;
export type AccordionItemEvents = typeof __propDef.events;
export type AccordionItemSlots = typeof __propDef.slots;
export default class AccordionItem extends SvelteComponent<AccordionItemProps, AccordionItemEvents, AccordionItemSlots> {
}
export {};
