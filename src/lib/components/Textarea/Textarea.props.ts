import { Sizes1To3, Colors } from '$lib/types';
import type { HTMLTextareaAttributes } from 'svelte/elements';

export interface PropsTextarea extends Omit<HTMLTextareaAttributes, 'size'> {
	elementRef?: HTMLTextAreaElement;
	value?: string;
	size?: (typeof Sizes1To3)[number];
	color: (typeof Colors)[number];
	error?: boolean;
	fullWidth?: boolean;
}

export const defaultPropsTextarea: PropsTextarea = {
	elementRef: undefined,
	value: undefined,
	size: '2',
	color: 'neutral',
	error: false,
	fullWidth: false
};

export const docPropsTextarea = {
	value: {
		type: 'string',
		default: defaultPropsTextarea.value
	},
	size: {
		type: 'enum',
		values: Sizes1To3,
		default: defaultPropsTextarea.size
	},
	color: {
		type: 'enum',
		values: Colors,
		default: defaultPropsTextarea.color
	},
	error: {
		type: 'boolean',
		default: defaultPropsTextarea.error
	},
	fullWidth: {
		type: 'boolean',
		default: defaultPropsTextarea.fullWidth
	}
};
