import type { AriaAttributes, HTMLAttributes } from 'svelte/elements';
import type {
	PropTypeColor,
	PropTypeUse,
	PropTypeStyle,
	PropTypeClass,
	PropTypeBoolean,
	PropTypeString
} from '$lib/types';

export type PropsSwitch = {
	elementRef?: HTMLInputElement | undefined;
	value?: PropTypeString;
	checked?: PropTypeBoolean;
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
