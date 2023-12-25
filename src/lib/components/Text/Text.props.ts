import type { AriaAttributes, HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';
import type {
	PropTypeUse,
	PropTypeStyle,
	PropTypeClass,
	PropTypeAs,
	PropTypeBoolean,
	PropTypeString,
	PropTypeColor,
	PropTypeAlign
} from '$lib/types';

export type PropsText = {
	elementRef?: SvelteHTMLElements | undefined;
	as?: PropTypeAs;
	color?: PropTypeColor;
	size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
	weight?: 'light' | 'regular' | 'medium' | 'bold';
	align?: PropTypeAlign;
	disabled?: PropTypeBoolean;
	required?: PropTypeBoolean;
	for?: PropTypeString;
	//
	// use?: PropTypeUse;
	// style?: PropTypeStyle;
	// class?: PropTypeClass;
} & HTMLAttributes<HTMLElement> &
	AriaAttributes;

export const defaultPropsText: PropsText = {
	elementRef: undefined,
	as: 'span',
	color: undefined,
	size: '3',
	weight: 'regular',
	align: 'start',
	disabled: false,
	required: false
};
