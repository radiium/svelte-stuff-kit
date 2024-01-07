export const contextKeyAccordionGroup = 'AccordionGroup';

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
export const defaultPropsAccordionGroup: PropsAccordionGroup = {
	multi: false
};
export const docPropsAccordionGroup = {
	multi: {
		type: 'boolean',
		default: defaultPropsAccordionGroup.multi
	}
};

/**
 * PropsAccordionItem
 */
export interface PropsAccordionItem {
	isOpen?: boolean;
}
export const defaultPropsAccordionItem: PropsAccordionItem = {
	isOpen: false
};
export const docPropsAccordionItem = {
	isOpen: {
		type: 'boolean',
		default: defaultPropsAccordionItem.isOpen
	}
};
