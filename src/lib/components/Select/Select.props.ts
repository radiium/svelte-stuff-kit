import type { AriaAttributes, HTMLAttributes } from 'svelte/elements';
import type { PropTypeUse, PropTypeStyle, PropTypeClass, PropTypeBoolean } from '$lib/types';

export type SelectOption = {
	label: string;
	value: string | number;
	disabled?: boolean | undefined;
};

export type PropsSelect = {
	elementRef?: HTMLSelectElement | undefined;
	value?: unknown | undefined;
	multiple?: PropTypeBoolean;
	options: SelectOption[];
	size?: '1' | '2' | '3';
	disabled?: PropTypeBoolean;
	required?: PropTypeBoolean;
	fullWidth?: PropTypeBoolean;
	//
	// use?: PropTypeUse;
	// style?: PropTypeStyle;
	// class?: PropTypeClass;
} & HTMLAttributes<HTMLElement> &
	AriaAttributes;

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
