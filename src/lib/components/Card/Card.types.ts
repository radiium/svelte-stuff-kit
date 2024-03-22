import type { Sizes0To5 } from '$lib/constants.js';
import type { HTMLAttributes } from 'svelte/elements';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    elementRef?: HTMLDivElement;
    size?: (typeof Sizes0To5)[number];
}
