import { docCardProps } from '$lib/components/Card/Card.props';
import type { DocPageData } from '../../types';
import CardSample from './CardSample.svelte';

export const docCard: DocPageData = {
	id: 'card',
	title: 'Card',
	description: '',
	demoTitle: 'Examples',
	demoComponent: CardSample,
	props: docCardProps,
	slots: [
		{
			default: true
		},
		{
			name: 'header',
			default: false
		},
		{
			name: 'footer',
			default: false
		}
	]
};
