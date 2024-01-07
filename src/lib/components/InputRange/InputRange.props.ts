import { Colors, Sizes1To3 } from '$lib/types';

export interface PropsInputRange {
	elementRef?: HTMLInputElement;
	value?: number;
	size?: (typeof Sizes1To3)[number];
	color?: (typeof Colors)[number];
	step?: number;
	min?: number;
	max?: number;
	disabled?: boolean;
	required?: boolean;
	error?: boolean;
	fullWidth?: boolean;
}

export const defaultPropsInputRange: PropsInputRange = {
	elementRef: undefined,
	value: undefined,
	step: 1,
	min: undefined,
	max: undefined,
	size: '2',
	color: 'neutral',
	disabled: false,
	required: false,
	error: false,
	fullWidth: false
};

export const docPropsInputRange = {
	value: {
		type: 'number',
		default: defaultPropsInputRange.value
	},
	step: {
		type: 'number',
		default: defaultPropsInputRange.step
	},
	min: {
		type: 'number',
		default: defaultPropsInputRange.min
	},
	max: {
		type: 'number',
		default: defaultPropsInputRange.max
	},
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
	disabled: {
		type: 'boolean',
		default: defaultPropsInputRange.disabled
	},
	required: {
		type: 'boolean',
		default: defaultPropsInputRange.required
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
