import type { HTMLInputAttributes } from 'svelte/elements';
import type {
	PropTypeColor,
	PropTypeUse,
	PropTypeStyle,
	PropTypeClass,
	PropTypeBoolean,
	PropTypeString
} from '$lib/types';

export type PropsCheckbox = {
	elementRef?: HTMLInputElement | undefined;
	value?: PropTypeString;
	checked?: PropTypeBoolean;
	indeterminate?: PropTypeBoolean;
	size?: '1' | '2' | '3' | undefined;
	color?: PropTypeColor;
	disabled?: PropTypeBoolean;
	required?: PropTypeBoolean;
	error?: PropTypeBoolean;
	//
	use?: PropTypeUse;
	style?: PropTypeStyle;
	class?: PropTypeClass;
} & Omit<HTMLInputAttributes, 'size'>;

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
