import { Sizes1To4, Variants, Colors, Aligns } from '$lib/types';

export type PropsButton = {
	elementRef?: HTMLButtonElement;
	size?: (typeof Sizes1To4)[number];
	variant?: (typeof Variants)[number];
	color?: (typeof Colors)[number];
	align?: (typeof Aligns)[number];
	active?: boolean;
	disabled?: boolean;
	iconOnly?: boolean;
	circle?: boolean;
	fullWidth?: boolean;
};

export type PropsButtonIcon = Omit<PropsButton, 'iconOnly'>;

export const defaultPropsButton: PropsButton = {
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

export const docPropsButton = {
	size: {
		type: 'enum',
		values: Sizes1To4,
		default: defaultPropsButton.size
	},
	variant: {
		type: 'enum',
		values: Variants,
		default: defaultPropsButton.variant
	},
	color: {
		type: 'enum',
		values: Colors,
		default: defaultPropsButton.color
	},
	align: {
		type: 'enum',
		values: Aligns,
		default: defaultPropsButton.align
	},
	active: {
		type: 'boolean',
		default: defaultPropsButton.active
	},
	disabled: {
		type: 'boolean',
		default: defaultPropsButton.disabled
	},
	iconOnly: {
		type: 'boolean',
		default: defaultPropsButton.iconOnly
	},
	circle: {
		type: 'boolean',
		default: defaultPropsButton.circle
	},
	fullWidth: {
		type: 'boolean',
		default: defaultPropsButton.fullWidth
	}
};
