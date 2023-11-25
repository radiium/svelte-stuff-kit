import type { DocPageData } from '../../types';
import CardSample from './CardSample.svelte';

export const docCard: DocPageData = {
	id: 'card',
	title: 'Card',
	description: '',
	demoTitle: 'Examples',
	demoComponent: CardSample,
	props: [
		{
			name: 'elementRef',
			type: 'SvelteHTMLElements | undefined'
		},
		{
			name: 'as',
			type: 'SvelteHTMLElements',
			defaultValue: 'article'
		},
		{
			name: 'size',
			type: '"1" | "2" | "3" | "4" | "5"',
			defaultValue: '3'
		},
		{
			name: 'noPadding',
			type: 'boolean',
			defaultValue: 'false'
		}
	],
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
