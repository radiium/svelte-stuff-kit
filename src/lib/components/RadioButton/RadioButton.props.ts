import { Sizes1To3, Colors } from '$lib/types';

export type PropsRadioButton = {
	elementRef?: HTMLInputElement | undefined;
	value?: string;
	checked?: boolean;
	group?: string;
	size?: (typeof Sizes1To3)[number];
	color?: (typeof Colors)[number];
	disabled?: boolean;
	required?: boolean;
	error?: boolean;
};

export const defaultPropsRadioButton: PropsRadioButton = {
	elementRef: undefined,
	value: undefined,
	checked: false,
	group: undefined,
	size: '2',
	color: 'neutral',
	disabled: false,
	required: false,
	error: false
};

export const docPropsRadioButton = {
	value: {
		type: 'string',
		default: defaultPropsRadioButton.value
	},
	checked: {
		type: 'boolean',
		default: defaultPropsRadioButton.checked
	},
	group: {
		type: 'string',
		default: defaultPropsRadioButton.group
	},
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
	disabled: {
		type: 'boolean',
		default: defaultPropsRadioButton.disabled
	},
	required: {
		type: 'boolean',
		default: defaultPropsRadioButton.required
	},
	error: {
		type: 'boolean',
		default: defaultPropsRadioButton.error
	}
};
