import type { HTMLInputAttributes } from 'svelte/elements';
import type {
	PropTypeUse,
	PropTypeStyle,
	PropTypeClass,
	PropTypeBoolean,
	PropTypeString,
	PropTypeAlign,
	PropTypeInputType
} from '$lib/types';

export type PropsInput = {
	elementRef?: HTMLInputElement | undefined;
	value?: PropTypeString;
	type?: PropTypeInputType;
	size?: '1' | '2' | '3';
	align?: PropTypeAlign;
	disabled?: PropTypeBoolean;
	required?: PropTypeBoolean;
	readonly?: PropTypeBoolean;
	error?: PropTypeBoolean;
	fullWidth?: PropTypeBoolean;
	//
	// use?: PropTypeUse;
	// style?: PropTypeStyle;
	// class?: PropTypeClass;
} & Omit<HTMLInputAttributes, 'size'>;

export const defaultPropsInput: PropsInput = {
	elementRef: undefined,
	value: '',
	type: 'text',
	size: '2',
	align: 'start',
	disabled: false,
	required: false,
	readonly: false,
	error: false,
	fullWidth: false
};
