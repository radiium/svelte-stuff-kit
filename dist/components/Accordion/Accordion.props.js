export const contextKeyAccordionGroup = 'AccordionGroup';
export const defaultAccordionGroupProps = {
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
export const defaultAccordionItemProps = {
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
