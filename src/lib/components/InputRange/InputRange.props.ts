import { Colors, Sizes1To3 } from '$lib/types';
import type { HTMLInputAttributes } from 'svelte/elements';

export interface PropsInputRange extends Omit<HTMLInputAttributes, 'size'> {
	elementRef?: HTMLInputElement;
	size?: (typeof Sizes1To3)[number];
	color?: (typeof Colors)[number];
	error?: boolean;
	fullWidth?: boolean;
}

export const defaultPropsInputRange: PropsInputRange = {
	elementRef: undefined,
	size: '2',
	color: 'neutral',
	error: false,
	fullWidth: false
};

export const docPropsInputRange = {
	size: {
		type: 'enum',
		values: Sizes1To3,
		default: defaultPropsInputRange.size
	},
	color: {
		type: 'enum',
		values: Colors,
		default: defaultPropsInputRange.color
	},
	error: {
		type: 'boolean',
		default: defaultPropsInputRange.error
	},
	fullWidth: {
		type: 'boolean',
		default: defaultPropsInputRange.fullWidth
	}
};
