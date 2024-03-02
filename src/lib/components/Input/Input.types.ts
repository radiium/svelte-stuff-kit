import type { Aligns, InputTypes, Sizes1To3 } from '$lib/constants';
import type { HTMLInputAttributes } from 'svelte/elements';

export interface InputProps extends Omit<HTMLInputAttributes, 'size' | 'align'> {
	elementRef?: HTMLInputElement;
	value?: string;
	type?: (typeof InputTypes)[number];
	size?: (typeof Sizes1To3)[number];
	align?: (typeof Aligns)[number];
	error?: boolean;
	fullWidth?: boolean;
}
