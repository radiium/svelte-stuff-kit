import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { PropTypeColor, PropTypeAlign, PropTypeStyle, PropTypeClass, PropTypeBoolean } from '$lib/types';

export type PropsButton = {
	elementRef?: HTMLButtonElement | HTMLAnchorElement | undefined;
	size?: '1' | '2' | '3' | '4' | undefined;
	mode?: 'solid' | 'soft' | 'outline' | 'clear' | undefined;
	active?: PropTypeBoolean;
	disabled?: PropTypeBoolean;
	iconOnly?: PropTypeBoolean;
	circle?: PropTypeBoolean;
	fullWidth?: PropTypeBoolean;
	color?: PropTypeColor;
	align?: PropTypeAlign;
	//
	// style?: PropTypeStyle;
	// class?: PropTypeClass;
} & (HTMLButtonAttributes & HTMLAnchorAttributes);

export const defaultPropsButton: PropsButton = {
	elementRef: undefined,
	href: undefined,
	target: '_blank',
	type: 'button',
	size: '2',
	mode: 'solid',
	color: 'neutral',
	align: 'center',
	active: false,
	disabled: false,
	iconOnly: false,
	circle: false,
	fullWidth: false
};
