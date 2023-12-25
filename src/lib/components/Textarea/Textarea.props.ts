import type { HTMLTextareaAttributes } from 'svelte/elements';
import type { PropTypeUse, PropTypeStyle, PropTypeClass, PropTypeBoolean, PropTypeString } from '$lib/types';

export type PropsTextarea = {
	elementRef?: HTMLTextAreaElement | undefined;
	value?: PropTypeString;
	size?: '1' | '2' | '3';
	disabled?: PropTypeBoolean;
	required?: PropTypeBoolean;
	readonly?: PropTypeBoolean;
	error?: PropTypeBoolean;
	fullWidth?: PropTypeBoolean;
	//
	// use?: PropTypeUse;
	// style?: PropTypeStyle;
	// class?: PropTypeClass;
} & HTMLTextareaAttributes;

export const defaultPropsTextarea: PropsTextarea = {
	elementRef: undefined,
	value: '',
	size: '2',
	disabled: false,
	required: false,
	readonly: false,
	error: false,
	fullWidth: false
};
