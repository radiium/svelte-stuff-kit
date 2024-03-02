import type { HTMLAttributes, HTMLLabelAttributes } from 'svelte/elements';
import type { Sizes1To9, Colors, Weights, Aligns, TextTags } from '$lib/constants';

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'size' | 'align'> {
	elementRef?: HTMLElement;
	as?: (typeof TextTags)[number];
	color?: (typeof Colors)[number];
	size?: (typeof Sizes1To9)[number];
	weight?: (typeof Weights)[number];
	align?: (typeof Aligns)[number];
	disabled?: boolean;
}
