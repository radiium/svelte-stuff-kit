import { Sizes1To3, Colors } from '$lib/constants';
import type { InputNumberProps } from './InputNumber.types';

export const defaultInputNumberProps: InputNumberProps = {
	elementRef: undefined,
	value: undefined,
	step: 1,
	min: undefined,
	max: undefined,
	size: '2',
	color: 'neutral',
	disabled: false,
	required: false,
	readonly: false
};

export const docInputNumberProps = {
	value: {
		type: 'number',
		default: defaultInputNumberProps.value
	},
	step: {
		type: 'number',
		default: defaultInputNumberProps.step
	},
	min: {
		type: 'number',
		default: defaultInputNumberProps.min
	},
	max: {
		type: 'number',
		default: defaultInputNumberProps.max
	},
	size: {
		type: 'enum',
		values: Sizes1To3,
		default: defaultInputNumberProps.size
	},
	color: {
		type: 'enum',
		values: Colors,
		default: defaultInputNumberProps.color
	},
	disabled: {
		type: 'boolean',
		default: defaultInputNumberProps.disabled
	},
	required: {
		type: 'boolean',
		default: defaultInputNumberProps.required
	},
	readonly: {
		type: 'boolean',
		default: defaultInputNumberProps.readonly
	}
};
