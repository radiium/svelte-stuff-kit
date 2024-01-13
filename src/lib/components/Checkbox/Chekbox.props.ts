import { Sizes1To3, Colors } from '$lib/types';
import type { HTMLInputAttributes } from 'svelte/elements';

export interface PropsCheckbox extends Omit<HTMLInputAttributes, 'size'> {
	elementRef?: HTMLInputElement;
	size?: (typeof Sizes1To3)[number];
	color?: (typeof Colors)[number];
	error?: boolean;
}

export const defaultPropsCheckbox: PropsCheckbox = {
	elementRef: undefined,
	size: '2',
	color: 'neutral',
	error: false
};

export const docPropsCheckbox = {
	size: {
		type: 'enum',
		values: Sizes1To3,
		default: defaultPropsCheckbox.size
	},
	color: {
		type: 'enum',
		values: Colors,
		default: defaultPropsCheckbox.color
	},
	error: {
		type: 'boolean',
		default: defaultPropsCheckbox.error
	}
};
