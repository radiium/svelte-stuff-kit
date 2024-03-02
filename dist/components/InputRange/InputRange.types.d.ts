import type { Colors, Sizes1To3 } from '../../constants';
import type { HTMLInputAttributes } from 'svelte/elements';
export interface InputRangeProps extends Omit<HTMLInputAttributes, 'size'> {
    elementRef?: HTMLInputElement;
    size?: (typeof Sizes1To3)[number];
    color?: (typeof Colors)[number];
    error?: boolean;
    fullWidth?: boolean;
}
