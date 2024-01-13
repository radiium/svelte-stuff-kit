import { Sizes1To5 } from '$lib/types';
import type { HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';

export interface PropsCard extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
	elementRef?: HTMLElement;
	as?: keyof SvelteHTMLElements;
	size?: (typeof Sizes1To5)[number];
	noPadding?: boolean;
}

export const defaultPropsCard: PropsCard = {
	elementRef: undefined,
	as: 'div',
	size: '3',
	noPadding: false
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
	}
};
