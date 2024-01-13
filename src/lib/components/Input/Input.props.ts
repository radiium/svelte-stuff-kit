import { InputTypes, Sizes1To3, Aligns } from '$lib/types';
import type { HTMLInputAttributes } from 'svelte/elements';

export interface PropsInput extends Omit<HTMLInputAttributes, 'size' | 'align'> {
	elementRef?: HTMLInputElement;
	value?: string;
	type?: (typeof InputTypes)[number];
	size?: (typeof Sizes1To3)[number];
	align?: (typeof Aligns)[number];
	error?: boolean;
	fullWidth?: boolean;
}

export const defaultPropsInput: PropsInput = {
	elementRef: undefined,
	value: '',
	type: 'text',
	size: '2',
	align: 'start',
	error: false,
	fullWidth: false
};

export const docPropsInput = {
	value: {
		type: 'string',
		default: defaultPropsInput.value
	},
	type: {
		type: 'enum',
		values: InputTypes,
		default: defaultPropsInput.type
	},
	size: {
		type: 'enum',
		values: Sizes1To3,
		default: defaultPropsInput.size
	},
	align: {
		type: 'enum',
		values: Aligns,
		default: defaultPropsInput.align
	},
	error: {
		type: 'boolean',
		default: defaultPropsInput.error
	},
	fullWidth: {
		type: 'boolean',
		default: defaultPropsInput.fullWidth
	}
};
