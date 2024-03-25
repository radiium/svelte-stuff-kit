import type { HTMLAttributes } from 'svelte/elements';
import type { Sizes1To9, Colors, Weights, Aligns, Transforms, TextTags, TextWraps } from '../../constants.js';
export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'size' | 'align'> {
    elementRef?: HTMLElement;
    as?: (typeof TextTags)[number];
    color?: (typeof Colors)[number];
    size?: (typeof Sizes1To9)[number];
    weight?: (typeof Weights)[number];
    align?: (typeof Aligns)[number];
    transform?: (typeof Transforms)[number];
    wrap?: (typeof TextWraps)[number];
    truncate?: boolean;
    disabled?: boolean;
}
