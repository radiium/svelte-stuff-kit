export const contextKeyAccordionGroup = 'AccordionGroup';

/**
 * AccordionGroup
 */

import type { AccordionGroupProps, AccordionItemProps } from './Accordion.types';

export const defaultAccordionGroupProps: AccordionGroupProps = {
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

export const defaultAccordionItemProps: AccordionItemProps = {
	isOpen: false
};
export const docAccordionItemProps = {
	isOpen: {
		type: 'boolean',
		default: defaultAccordionItemProps.isOpen
	}
};
