import type { AriaAttributes, HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';
import type { PropTypeAs, PropTypeBoolean, PropTypeClass, PropTypeStyle, PropTypeUse } from '$lib/types';

export type PropsCard = {
	elementRef?: SvelteHTMLElements | undefined | undefined;
	as?: PropTypeAs;
	size?: '1' | '2' | '3' | '4' | '5';
	noPadding?: PropTypeBoolean;
	asButton?: PropTypeBoolean;
	//
	// use?: PropTypeUse;
	// style?: PropTypeStyle;
	// class?: PropTypeClass;
} & HTMLAttributes<HTMLElement> &
	AriaAttributes;

export const defaultPropsCard: PropsCard = {
	elementRef: undefined,
	as: 'article',
	size: '3',
	noPadding: false,
	asButton: false
};
