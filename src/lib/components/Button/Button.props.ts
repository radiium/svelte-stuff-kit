import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { PropTypeColor, PropTypeAlign, PropTypeBoolean, PropTypeVariant } from '$lib/types';

export type PropsButton = {
	elementRef?: HTMLButtonElement | HTMLAnchorElement | undefined;
	size?: '1' | '2' | '3' | '4' | undefined;
	variant?: PropTypeVariant;
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
	size: '2',
	variant: 'solid',
	color: 'neutral',
	align: 'center',
	active: false,
	disabled: false,
	iconOnly: false,
	circle: false,
	fullWidth: false,
	// From HTMLAnchorAttributes
	href: undefined,
	target: '_blank',
	// From HTMLButtonAttributes
	type: 'button'
};
