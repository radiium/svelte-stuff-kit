import { Sizes1To3, Colors } from '$lib/types';
import type { HTMLInputAttributes } from 'svelte/elements';

export interface PropsSwitch extends Omit<HTMLInputAttributes, 'size'> {
	elementRef?: HTMLInputElement;
	size?: (typeof Sizes1To3)[number];
	color?: (typeof Colors)[number];
	error?: boolean;
}

export const defaultPropsSwitch: PropsSwitch = {
	elementRef: undefined,
	size: '2',
	color: 'neutral',
	error: false
};

export const docPropsSwitch = {
	size: {
		type: 'enum',
		values: Sizes1To3,
		default: defaultPropsSwitch.size
	},
	color: {
		type: 'enum',
		values: Colors,
		default: defaultPropsSwitch.color
	},
	error: {
		type: 'boolean',
		default: defaultPropsSwitch.error
	}
};
