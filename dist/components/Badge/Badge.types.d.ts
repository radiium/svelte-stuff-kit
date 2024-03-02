import type { Colors, Sizes1To2, VariantsBadge } from '../../constants';
import type { HTMLAttributes } from 'svelte/elements';
export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'size' | 'align'> {
    elementRef?: HTMLSpanElement;
    color?: (typeof Colors)[number];
    size?: (typeof Sizes1To2)[number];
    variant?: (typeof VariantsBadge)[number];
    disabled?: boolean;
}
