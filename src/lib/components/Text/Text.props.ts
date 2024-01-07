import type { HTMLAttributes, HTMLLabelAttributes } from 'svelte/elements';
import { Sizes1To9, Colors, Weights, Aligns, TextTags } from '$lib/types';

export type PropsText = (
	| HTMLAttributes<HTMLSpanElement>
	| HTMLAttributes<HTMLDivElement>
	| HTMLAttributes<HTMLParagraphElement>
	| HTMLLabelAttributes
) & {
	elementRef?: HTMLSpanElement | HTMLDivElement | HTMLParagraphElement | HTMLLabelElement;
	as?: (typeof TextTags)[number];
	color?: (typeof Colors)[number];
	size?: (typeof Sizes1To9)[number];
	weight?: (typeof Weights)[number];
	align?: (typeof Aligns)[number];
	disabled?: boolean;
};

export const defaultPropsText: PropsText = {
	elementRef: undefined,
	as: 'span',
	color: undefined,
	size: '3',
	weight: 'regular',
	align: 'start',
	disabled: false
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
	}
};
