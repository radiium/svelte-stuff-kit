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
export interface AccordionGroupProps {
	multi?: boolean;
}

/**
 * PropsAccordionItem
 */
export interface AccordionItemProps {
	isOpen?: boolean;
}
