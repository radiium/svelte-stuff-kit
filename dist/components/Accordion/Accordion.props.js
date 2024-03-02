export const contextKeyAccordionGroup = 'AccordionGroup';
export const defaultAccordionGroupProps = {
    multi: false
};
export const docAccordionGroupProps = {
    multi: {
        type: 'boolean',
        default: defaultAccordionGroupProps.multi
    }
};
/**
 * PropsAccordionItem
 */
export const defaultAccordionItemProps = {
    isOpen: false
};
export const docAccordionItemProps = {
    isOpen: {
        type: 'boolean',
        default: defaultAccordionItemProps.isOpen
    }
};
