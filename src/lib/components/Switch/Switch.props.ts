import { Sizes1To3, Colors } from '$lib/types';

export interface PropsSwitch {
	elementRef?: HTMLInputElement;
	value?: string;
	checked?: boolean;
	size?: (typeof Sizes1To3)[number];
	color?: (typeof Colors)[number];
	disabled?: boolean;
	required?: boolean;
	error?: boolean;
}

export const defaultPropsSwitch: PropsSwitch = {
	elementRef: undefined,
	value: undefined,
	checked: false,
	size: '2',
	color: 'neutral',
	disabled: false,
	required: false,
	error: false
};

export const docPropsSwitch = {
	value: {
		type: 'string',
		default: defaultPropsSwitch.value
	},
	checked: {
		type: 'boolean',
		default: defaultPropsSwitch.checked
	},
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
	disabled: {
		type: 'boolean',
		default: defaultPropsSwitch.disabled
	},
	required: {
		type: 'boolean',
		default: defaultPropsSwitch.required
	},
	error: {
		type: 'boolean',
		default: defaultPropsSwitch.error
	}
};
