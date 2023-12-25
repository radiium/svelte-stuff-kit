import type { AriaAttributes, HTMLAttributes } from 'svelte/elements';
import type {
	PropTypeUse,
	PropTypeStyle,
	PropTypeClass,
	PropTypeColor,
	PropTypeString,
	PropTypeBoolean
} from '$lib/types';

export type PropsRadioButton = {
	elementRef?: HTMLInputElement | undefined;
	value?: PropTypeString;
	checked?: PropTypeBoolean;
	group?: PropTypeString;
	size?: '1' | '2' | '3';
	color?: PropTypeColor;
	disabled?: PropTypeBoolean;
	required?: PropTypeBoolean;
	error?: PropTypeBoolean;
	//
	// use?: PropTypeUse;
	// style?: PropTypeStyle;
	// class?: PropTypeClass;
} & HTMLAttributes<HTMLElement> &
	AriaAttributes;

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
