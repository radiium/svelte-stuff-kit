import type {
	AriaAttributes,
	HTMLAttributes,
	HTMLInputAttributes,
	SvelteHTMLElements
} from 'svelte/elements';
import type {
	PropTypeColor,
	PropTypeUse,
	PropTypeStyle,
	PropTypeClass,
	PropTypeBoolean,
	PropTypeNumber
} from '$lib/types';

export type PropsInputRange = {
	elementRef?: HTMLInputElement | undefined;
	value?: PropTypeNumber;
	size?: '1' | '2' | '3';
	color?: PropTypeColor;
	disabled?: PropTypeBoolean;
	required?: PropTypeBoolean;
	error?: PropTypeBoolean;
	fullWidth?: PropTypeBoolean;
	//
	// use?: PropTypeUse;
	// style?: PropTypeStyle;
	// class?: PropTypeClass;
} & Omit<HTMLInputAttributes, 'size'>;

export const defaultPropsInputRange: PropsInputRange = {
	elementRef: undefined,
	value: undefined,
	size: '2',
	color: 'neutral',
	disabled: false,
	required: false,
	error: false,
	fullWidth: false
};
