import type { Sizes1To3, Colors } from '$lib/constants';
import type { HTMLInputAttributes } from 'svelte/elements';

export interface RadioButtonProps extends Omit<HTMLInputAttributes, 'size'> {
    elementRef?: HTMLInputElement;
    group?: any;
    size?: (typeof Sizes1To3)[number];
    color?: (typeof Colors)[number];
    error?: boolean;
}
