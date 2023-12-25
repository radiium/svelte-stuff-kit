import type { HTMLAttributes } from 'svelte/elements';

export type PropsAccordionGroup = {
	multi?: boolean | undefined;
} & HTMLAttributes<any>;

export const defaultPropsAccordionGroup: PropsAccordionGroup = {
	multi: false
};

export type PropsAccordionItem = {
	isOpen?: boolean | undefined;
};

export const defaultPropsAccordionItem: PropsAccordionItem = {
	isOpen: false
};

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
