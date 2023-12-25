import type { AriaAttributes, HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';
import type {
	PropTypeUse,
	PropTypeStyle,
	PropTypeClass,
	PropTypeDisplay,
	PropTypeJustify,
	PropTypeDirection,
	PropTypeAlignItems,
	PropTypeWrap,
	PropTypeGap,
	PropTypeGrow,
	PropTypeShrink,
	PropTypeAs
} from '$lib/types';

export type PropsFlexbox = {
	elementRef?: SvelteHTMLElements | null | undefined;
	as?: PropTypeAs;
	display?: PropTypeDisplay;
	justify?: PropTypeJustify;
	direction?: PropTypeDirection;
	alignItems?: PropTypeAlignItems;
	wrap?: PropTypeWrap;
	gap?: PropTypeGap;
	grow?: PropTypeGrow;
	shrink?: PropTypeShrink;
	//
	// use?: PropTypeUse;
	// style?: PropTypeStyle;
	// class?: PropTypeClass;
} & HTMLAttributes<HTMLElement> &
	AriaAttributes;

export const defaultPropsFlexbox: PropsFlexbox = {
	elementRef: undefined,
	as: 'div',
	display: 'flex',
	justify: 'start',
	direction: undefined,
	alignItems: undefined,
	wrap: undefined,
	gap: undefined,
	grow: undefined,
	shrink: undefined
};
