import { docPropsAccordionGroup, docPropsAccordionItem } from '$lib/components/Accordion/Accordion.props';
import type { DocPageData } from '../../types';
import AccordionSample from './AccordionSample.svelte';

export const docAccordionGroup: DocPageData = {
	id: 'accordion-group',
	title: 'AccordionGroup',
	demoTitle: 'Examples',
	demoComponent: AccordionSample,
	props: docPropsAccordionGroup
};

export const docAccordionItem: DocPageData = {
	id: 'accordion-item',
	title: 'AccordionItem',
	demoTitle: 'Examples',
	demoComponent: AccordionSample,
	props: docPropsAccordionItem
};
