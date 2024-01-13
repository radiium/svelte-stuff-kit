import { Sizes1To3, Colors } from '$lib/types';
import type { HTMLInputAttributes } from 'svelte/elements';

export interface PropsRadioButton extends Omit<HTMLInputAttributes, 'size'> {
	elementRef?: HTMLInputElement;
	group?: any;
	size?: (typeof Sizes1To3)[number];
	color?: (typeof Colors)[number];
	error?: boolean;
}

export const defaultPropsRadioButton: PropsRadioButton = {
	elementRef: undefined,
	group: undefined,
	size: '2',
	color: 'neutral',
	error: false
};

export const docPropsRadioButton = {
	size: {
		type: 'enum',
		values: Sizes1To3,
		default: defaultPropsRadioButton.size
	},
	color: {
		type: 'enum',
		values: Colors,
		default: defaultPropsRadioButton.color
	},
	error: {
		type: 'boolean',
		default: defaultPropsRadioButton.error
	}
};
