import type { AccordionGroupProps, AccordionItemProps } from './Accordion.types.js';
export declare const contextKeyAccordionGroup = "AccordionGroup";
/**
 * AccordionGroup
 */
export declare const defaultAccordionGroupProps: AccordionGroupProps;
export declare const docAccordionGroupPropsDefs: {
    props: {
        name: string;
        type: string;
        default: boolean | undefined;
    }[];
    slots: {
        name: string;
    }[];
    events: never[];
};
/**
 * PropsAccordionItem
 */
export declare const defaultAccordionItemProps: AccordionItemProps;
export declare const docAccordionItemPropsDefs: {
    props: {
        name: string;
        type: string;
        default: boolean | undefined;
    }[];
    slots: ({
        name: string;
        description?: undefined;
        props?: undefined;
    } | {
        name: string;
        description: string;
        props: ({
            name: string;
            type: string;
            default?: undefined;
        } | {
            name: string;
            type: string;
            default: boolean;
        })[];
    })[];
    events: never[];
};
