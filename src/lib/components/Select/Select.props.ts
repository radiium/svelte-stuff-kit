import { Sizes1To3 } from '$lib/types';

export type SelectOption = {
	label: string;
	value: string | number;
	disabled?: boolean | undefined;
};

export type PropsSelect = {
	elementRef?: HTMLSelectElement | undefined;
	value?: unknown | undefined;
	multiple?: boolean;
	options: SelectOption[];
	size?: (typeof Sizes1To3)[number];
	disabled?: boolean;
	required?: boolean;
	fullWidth?: boolean;
};

export const defaultPropsSelect: PropsSelect = {
	elementRef: undefined,
	value: undefined,
	multiple: false,
	options: [] as SelectOption[],
	size: '2',
	disabled: false,
	required: false,
	fullWidth: false
};

export const docPropsSelect = {
	value: {
		type: 'string | number',
		default: defaultPropsSelect.value
	},
	size: {
		type: 'enum',
		values: Sizes1To3,
		default: defaultPropsSelect.size
	},
	multiple: {
		type: 'boolean',
		default: defaultPropsSelect.multiple
	},
	disabled: {
		type: 'boolean',
		default: defaultPropsSelect.disabled
	},
	required: {
		type: 'boolean',
		default: defaultPropsSelect.required
	},
	fullWidth: {
		type: 'boolean',
		default: defaultPropsSelect.fullWidth
	}
};
