import { InputTypes, Sizes1To3, Aligns } from '$lib/types';

export type PropsInput = {
	elementRef?: HTMLInputElement | undefined;
	value?: string;
	placeholder?: string;
	type?: (typeof InputTypes)[number];
	size?: (typeof Sizes1To3)[number];
	align?: (typeof Aligns)[number];
	disabled?: boolean;
	required?: boolean;
	readonly?: boolean;
	error?: boolean;
	fullWidth?: boolean;
};

export const defaultPropsInput: PropsInput = {
	elementRef: undefined,
	value: '',
	placeholder: undefined,
	type: 'text',
	size: '2',
	align: 'start',
	disabled: false,
	required: false,
	readonly: false,
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
	disabled: {
		type: 'boolean',
		default: defaultPropsInput.disabled
	},
	required: {
		type: 'boolean',
		default: defaultPropsInput.required
	},
	readonly: {
		type: 'boolean',
		default: defaultPropsInput.readonly
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
