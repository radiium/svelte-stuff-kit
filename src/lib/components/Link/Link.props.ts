import { Sizes1To4, Colors, Aligns, Variants } from '$lib/types';

export type PropsLink = {
	elementRef?: HTMLAnchorElement | undefined;
	href: HTMLAnchorElement['href'] | null | undefined;
	target: HTMLAnchorElement['target'] | null | undefined;
	rel: HTMLAnchorElement['rel'] | null | undefined;
	size: (typeof Sizes1To4)[number];
	variant: (typeof Variants)[number];
	color: (typeof Colors)[number];
	align: (typeof Aligns)[number];
	active: boolean;
	disabled: boolean;
	iconOnly: boolean;
	circle: boolean;
	fullWidth: boolean;
};

export const defaultPropsLink: PropsLink = {
	href: '',
	target: '_blank',
	rel: undefined,
	size: '2',
	variant: 'solid',
	color: 'neutral',
	align: 'center',
	active: false,
	disabled: false,
	iconOnly: false,
	circle: false,
	fullWidth: false
};

export const docPropsLink = {
	href: {
		type: 'string',
		default: defaultPropsLink.href
	},
	target: {
		type: 'string',
		default: defaultPropsLink.target
	},
	rel: {
		type: 'string',
		default: defaultPropsLink.rel
	},
	size: {
		type: 'enum',
		values: Sizes1To4,
		default: defaultPropsLink.size
	},
	variant: {
		type: 'enum',
		values: Variants,
		default: defaultPropsLink.variant
	},
	color: {
		type: 'enum',
		values: Colors,
		default: defaultPropsLink.color
	},
	align: {
		type: 'enum',
		values: Aligns,
		default: defaultPropsLink.align
	},
	active: {
		type: 'boolean',
		default: defaultPropsLink.active
	},
	disabled: {
		type: 'boolean',
		default: defaultPropsLink.disabled
	},
	iconOnly: {
		type: 'boolean',
		default: defaultPropsLink.iconOnly
	},
	circle: {
		type: 'boolean',
		default: defaultPropsLink.circle
	},
	fullWidth: {
		type: 'boolean',
		default: defaultPropsLink.fullWidth
	}
};
