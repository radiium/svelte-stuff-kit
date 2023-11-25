import type { DocPageData } from '../../types';
import AccordionSample from './AccordionSample.svelte';

export const docAccordion: DocPageData = {
	id: 'accordion',
	title: 'Accordion',
	demoTitle: 'Examples',
	demoComponent: AccordionSample,
	props: [
		{
			name: 'isOpen',
			type: 'boolean',
			defaultValue: 'false'
		}
	]
};
