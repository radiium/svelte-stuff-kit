export declare const contextKeyAccordionGroup = "AccordionGroup";
export type AccordionStore = {
    key: symbol;
    readonly isOpen: boolean | undefined;
    open: () => void;
    close: () => void;
    toggle: () => void;
};
export type AccordionGroupContext = {
    setCurrent: (value: AccordionStore) => void;
};
/**
 * AccordionGroup
 */
export interface PropsAccordionGroup {
    multi?: boolean;
}
export declare const defaultPropsAccordionGroup: PropsAccordionGroup;
export declare const docPropsAccordionGroup: {
    multi: {
        type: string;
        default: boolean | undefined;
    };
};
/**
 * PropsAccordionItem
 */
export interface PropsAccordionItem {
    isOpen?: boolean;
}
export declare const defaultPropsAccordionItem: PropsAccordionItem;
export declare const docPropsAccordionItem: {
    isOpen: {
        type: string;
        default: boolean | undefined;
    };
};
