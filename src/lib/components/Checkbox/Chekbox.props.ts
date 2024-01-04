import { Sizes1To3, Colors } from '$lib/types';

export type PropsCheckbox = {
	elementRef?: HTMLInputElement | undefined;
	value?: string;
	checked?: boolean;
	indeterminate?: boolean;
	size?: (typeof Sizes1To3)[number];
	color?: (typeof Colors)[number];
	disabled?: boolean;
	required?: boolean;
	error?: boolean;
};

export const defaultPropsCheckbox: PropsCheckbox = {
	elementRef: undefined,
	value: undefined,
	checked: false,
	indeterminate: false,
	size: '2',
	color: 'neutral',
	disabled: false,
	required: false,
	error: false
};

export const docPropsCheckbox = {
	value: {
		type: 'string',
		default: defaultPropsCheckbox.value
	},
	checked: {
		type: 'boolean',
		default: defaultPropsCheckbox.checked
	},
	indeterminate: {
		type: 'boolean',
		default: defaultPropsCheckbox.indeterminate
	},
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
	disabled: {
		type: 'boolean',
		default: defaultPropsCheckbox.disabled
	},
	required: {
		type: 'boolean',
		default: defaultPropsCheckbox.required
	},
	error: {
		type: 'boolean',
		default: defaultPropsCheckbox.error
	}
};
