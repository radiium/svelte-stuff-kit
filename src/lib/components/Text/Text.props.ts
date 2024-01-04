import type { SvelteHTMLElements } from 'svelte/elements';
import { Sizes1To9, Colors, Weights, Aligns } from '$lib/types';

export type PropsText = {
	elementRef?: SvelteHTMLElements | undefined;
	as?: keyof SvelteHTMLElements;
	color?: (typeof Colors)[number];
	size?: (typeof Sizes1To9)[number];
	weight?: (typeof Weights)[number];
	align?: (typeof Aligns)[number];
	disabled?: boolean;
	required?: boolean;
};

export const defaultPropsText: PropsText = {
	elementRef: undefined,
	as: 'span',
	color: undefined,
	size: '3',
	weight: 'regular',
	align: 'start',
	disabled: false,
	required: false
};

export const docPropsText = {
	as: {
		type: 'keyof SvelteHTMLElements',
		default: defaultPropsText.as
	},
	color: {
		type: 'enum',
		values: Colors,
		default: defaultPropsText.color
	},
	size: {
		type: 'enum',
		values: Sizes1To9,
		default: defaultPropsText.size
	},
	weight: {
		type: 'enum',
		values: Weights,
		default: defaultPropsText.weight
	},
	align: {
		type: 'enum',
		values: Aligns,
		default: defaultPropsText.align
	},
	disabled: {
		type: 'boolean',
		default: defaultPropsText.disabled
	},
	required: {
		type: 'boolean',
		default: defaultPropsText.required
	}
};
