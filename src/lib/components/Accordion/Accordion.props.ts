import type { AccordionGroupProps, AccordionItemProps } from './Accordion.types.js';

export const contextKeyAccordionGroup = 'AccordionGroup';

/**
 * AccordionGroup
 */

export const defaultAccordionGroupProps: AccordionGroupProps = {
    multi: false
};

export const docAccordionGroupPropsDefs = {
    props: [
        {
            name: 'multi',
            type: 'boolean',
            default: defaultAccordionGroupProps.multi
        }
    ],
    slots: [],
    events: []
};

/**
 * PropsAccordionItem
 */

export const defaultAccordionItemProps: AccordionItemProps = {
    isOpen: false
};

export const docAccordionItemPropsDefs = {
    props: [
        {
            name: 'isOpen',
            type: 'boolean',
            default: defaultAccordionItemProps.isOpen
        }
    ],
    slots: [],
    events: []
};
