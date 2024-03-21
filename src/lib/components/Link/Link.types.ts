import type { Sizes1To4, Colors, Aligns, Variants } from '$lib/constants.js';
import type { HTMLAnchorAttributes } from 'svelte/elements';

export interface LinkProps extends HTMLAnchorAttributes {
    elementRef?: HTMLAnchorElement;
    size?: (typeof Sizes1To4)[number];
    variant?: (typeof Variants)[number];
    color?: (typeof Colors)[number];
    align?: (typeof Aligns)[number];
    active?: boolean;
    iconOnly?: boolean;
    circle?: boolean;
    fullWidth?: boolean;
}
