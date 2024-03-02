import { Aligns, InputTypes, Sizes1To3 } from '$lib/constants';
import type { InputProps } from './Input.types';

export const defaultInputProps: InputProps = {
	elementRef: undefined,
	value: '',
	type: 'text',
	size: '2',
	align: 'start',
	error: false,
	fullWidth: false
};

export const docInputProps = {
	value: {
		type: 'string',
		default: defaultInputProps.value
	},
	type: {
		type: 'enum',
		values: InputTypes,
		default: defaultInputProps.type
	},
	size: {
		type: 'enum',
		values: Sizes1To3,
		default: defaultInputProps.size
	},
	align: {
		type: 'enum',
		values: Aligns,
		default: defaultInputProps.align
	},
	error: {
		type: 'boolean',
		default: defaultInputProps.error
	},
	fullWidth: {
		type: 'boolean',
		default: defaultInputProps.fullWidth
	}
};
