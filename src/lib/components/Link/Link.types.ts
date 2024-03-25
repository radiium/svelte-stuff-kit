import type { HTMLAnchorAttributes } from 'svelte/elements';
import type {
    Sizes1To9,
    Colors,
    Weights,
    Aligns,
    Transforms,
    TextUnderlines,
    TextWraps
} from '$lib/constants.js';

export interface LinkProps extends Omit<HTMLAnchorAttributes, 'size' | 'align'> {
    elementRef?: HTMLAnchorElement;
    color?: (typeof Colors)[number];
    size?: (typeof Sizes1To9)[number];
    weight?: (typeof Weights)[number];
    align?: (typeof Aligns)[number];
    transform?: (typeof Transforms)[number];
    wrap?: (typeof TextWraps)[number];
    underline?: (typeof TextUnderlines)[number];
    truncate?: boolean;
    disabled?: boolean;
}
