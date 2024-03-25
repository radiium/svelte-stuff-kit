export const contextKeyAccordionGroup = 'AccordionGroup';
/**
 * AccordionGroup
 */
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
    slots: [
        {
            name: 'default'
        }
    ],
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
    slots: [
        {
            name: 'default'
        },
        {
            name: 'header',
            description: 'Header of accordion',
            props: [
                {
                    name: 'key',
                    type: 'symbol'
                },
                {
                    name: 'isOpen',
                    type: 'readonly (boolean | undefined)',
                    default: false
                },
                {
                    name: 'open',
                    type: 'function'
                },
                {
                    name: 'close',
                    type: 'function'
                },
                {
                    name: 'toggle',
                    type: 'function'
                }
            ]
        }
    ],
    events: []
};
