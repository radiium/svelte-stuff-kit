import type { HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';
import { Displays, Justifys, Directions, AlignItems, Wraps, Gaps, Grows, Shrinks } from '$lib/types';

export interface PropsFlexbox extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
	elementRef?: HTMLElement;
	as?: keyof SvelteHTMLElements;
	display?: (typeof Displays)[number];
	justify?: (typeof Justifys)[number];
	direction?: (typeof Directions)[number];
	alignItems?: (typeof AlignItems)[number];
	wrap?: (typeof Wraps)[number];
	gap?: (typeof Gaps)[number];
	grow?: (typeof Grows)[number];
	shrink?: (typeof Shrinks)[number];
}

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

export const docPropsFlexbox = {
	as: {
		type: 'keyof SvelteHTMLElements',
		default: defaultPropsFlexbox.as
	},
	display: {
		type: 'enum',
		values: Displays,
		default: defaultPropsFlexbox.display
	},
	justify: {
		type: 'enum',
		values: Justifys,
		default: defaultPropsFlexbox.justify
	},
	direction: {
		type: 'enum',
		values: Directions,
		default: defaultPropsFlexbox.direction
	},
	alignItems: {
		type: 'enum',
		values: AlignItems,
		default: defaultPropsFlexbox.alignItems
	},
	wrap: {
		type: 'enum',
		values: Wraps,
		default: defaultPropsFlexbox.wrap
	},
	gap: {
		type: 'enum',
		values: Gaps,
		default: defaultPropsFlexbox.gap
	},
	grow: {
		type: 'enum',
		values: Grows,
		default: defaultPropsFlexbox.grow
	},
	shrink: {
		type: 'enum',
		values: Shrinks,
		default: defaultPropsFlexbox.shrink
	}
};
