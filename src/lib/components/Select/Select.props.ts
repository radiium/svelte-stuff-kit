import { Sizes1To3 } from '$lib/types';
import type { HTMLSelectAttributes } from 'svelte/elements';

export type SelectOption = {
	label: string;
	value: string | number;
	disabled?: boolean | undefined;
};

export interface PropsSelect extends Omit<HTMLSelectAttributes, 'size'> {
	elementRef?: HTMLSelectElement;
	options: SelectOption[];
	value?: unknown | undefined;
	size?: (typeof Sizes1To3)[number];
	fullWidth?: boolean;
}

export const defaultPropsSelect: PropsSelect = {
	elementRef: undefined,
	options: [] as SelectOption[],
	value: undefined,
	size: '2',
	fullWidth: false
};

export const docPropsSelect = {
	options: {
		type: 'Array',
		default: defaultPropsSelect.options
	},
	value: {
		type: 'string | number',
		default: defaultPropsSelect.value
	},
	size: {
		type: 'enum',
		values: Sizes1To3,
		default: defaultPropsSelect.size
	},
	fullWidth: {
		type: 'boolean',
		default: defaultPropsSelect.fullWidth
	}
};
