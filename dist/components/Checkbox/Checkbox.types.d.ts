import { Colors, Sizes1To3 } from '../../constants';
import type { HTMLInputAttributes } from 'svelte/elements';
export interface CheckboxProps extends Omit<HTMLInputAttributes, 'size' | 'checked' | 'indeterminate'> {
    elementRef?: HTMLInputElement;
    checked?: boolean;
    indeterminate?: boolean;
    size?: (typeof Sizes1To3)[number];
    color?: (typeof Colors)[number];
    error?: boolean;
}