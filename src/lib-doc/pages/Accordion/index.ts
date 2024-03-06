import {
	docAccordionGroupPropsDefs,
	docAccordionItemPropsDefs
} from '$lib/components/Accordion/Accordion.props';
import { type DocPage } from '../../types';
import { SectionBuilder, PageBuilder } from '../../utils/builder';
import AccordionSample from './AccordionSample.svelte';

const sectionApi = SectionBuilder.create('Api reference') //
	.addH3('AccordionGroup')
	.addApi(docAccordionGroupPropsDefs)
	.addH3('AccordionItem')
	.addApi(docAccordionItemPropsDefs)
	.get();

const sectionDemo = SectionBuilder.create('Examples') //
	.addDemo(AccordionSample)
	.get();

export const docPageAccordion: DocPage = PageBuilder.create('Accordion') //
	.addSection(sectionApi)
	.addSection(sectionDemo)
	.get();
