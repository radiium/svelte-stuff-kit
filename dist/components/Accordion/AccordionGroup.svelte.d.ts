import { SvelteComponent } from "svelte";
import type { AccordionGroupProps } from './Accordion.types';
declare const __propDef: {
    props: AccordionGroupProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
type AccordionGroupProps_ = typeof __propDef.props;
export { AccordionGroupProps_ as AccordionGroupProps };
export type AccordionGroupEvents = typeof __propDef.events;
export type AccordionGroupSlots = typeof __propDef.slots;
export default class AccordionGroup extends SvelteComponent<AccordionGroupProps_, AccordionGroupEvents, AccordionGroupSlots> {
}
