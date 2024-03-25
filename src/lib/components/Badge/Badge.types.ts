import type { Colors, Sizes1To2, Sizes1To3, VariantsBadge } from '$lib/constants.js';
import type { HTMLAttributes } from 'svelte/elements';

export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'size' | 'align'> {
    elementRef?: HTMLSpanElement;
    color?: (typeof Colors)[number];
    size?: (typeof Sizes1To3)[number];
    variant?: (typeof VariantsBadge)[number];
    disabled?: boolean;
}
