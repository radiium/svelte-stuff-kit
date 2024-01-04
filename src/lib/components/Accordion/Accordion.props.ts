import type { HTMLAttributes } from 'svelte/elements';

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

export type PropsAccordionGroup = {
	multi?: boolean | undefined;
} & HTMLAttributes<any>;
export const defaultPropsAccordionGroup: PropsAccordionGroup = {
	multi: false
};
export const docPropsAccordionGroup = {
	multi: {
		type: 'boolean',
		default: defaultPropsAccordionGroup.multi
	}
};

export type PropsAccordionItem = {
	isOpen?: boolean | undefined;
};
export const defaultPropsAccordionItem: PropsAccordionItem = {
	isOpen: false
};

export const docPropsAccordionItem = {
	isOpen: {
		type: 'boolean',
		default: defaultPropsAccordionItem.isOpen
	}
};
