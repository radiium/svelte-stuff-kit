import { docCardPropsDefs } from '$lib/components/Card/Card.props';
import type { DocPage } from '../../types';
import CardSample from './CardSample.svelte';

export const docCard: DocPage = {
	id: 'card',
	title: 'Card',
	description: '',
	demoTitle: 'Examples',
	demoComponent: CardSample,
	sections: [docCardPropsDefs]
};
