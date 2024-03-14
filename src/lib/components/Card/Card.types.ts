import type { Sizes1To5 } from '$lib/constants';
import type { HTMLAttributes } from 'svelte/elements';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    elementRef?: HTMLDivElement;
    size?: (typeof Sizes1To5)[number];
    noPadding?: boolean;
}
