import { Sizes1To5 } from '$lib/types';
import type { SvelteHTMLElements } from 'svelte/elements';

export type PropsCard = {
	elementRef?: SvelteHTMLElements | undefined | undefined;
	as?: keyof SvelteHTMLElements;
	size?: (typeof Sizes1To5)[number];
	noPadding?: boolean;
	asButton?: boolean;
};

export const defaultPropsCard: PropsCard = {
	elementRef: undefined,
	as: 'div',
	size: '3',
	noPadding: false,
	asButton: false
};

export const docPropsCard = {
	size: {
		type: 'enum',
		values: Sizes1To5,
		default: defaultPropsCard.size
	},
	as: {
		type: 'keyof SvelteHTMLElements',
		default: defaultPropsCard.as
	},
	noPadding: {
		type: 'boolean',
		default: defaultPropsCard.noPadding
	},
	asButton: {
		type: 'boolean',
		default: defaultPropsCard.asButton
	}
};
