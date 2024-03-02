import type { Sizes1To3, Colors } from '$lib/constants';
import type { HTMLTextareaAttributes } from 'svelte/elements';

export interface TextareaProps extends Omit<HTMLTextareaAttributes, 'size'> {
	elementRef?: HTMLTextAreaElement;
	value?: string;
	size?: (typeof Sizes1To3)[number];
	color: (typeof Colors)[number];
	error?: boolean;
	fullWidth?: boolean;
}
