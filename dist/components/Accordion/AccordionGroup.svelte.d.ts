import { SvelteComponent } from "svelte";
import { type PropsAccordionGroup } from './Accordion.props';
declare const __propDef: {
    props: PropsAccordionGroup;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type AccordionGroupProps = typeof __propDef.props;
export type AccordionGroupEvents = typeof __propDef.events;
export type AccordionGroupSlots = typeof __propDef.slots;
export default class AccordionGroup extends SvelteComponent<AccordionGroupProps, AccordionGroupEvents, AccordionGroupSlots> {
}
export {};
