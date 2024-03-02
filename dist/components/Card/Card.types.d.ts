import type { Sizes1To5 } from '../../constants';
import type { HTMLAttributes } from 'svelte/elements';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    elementRef?: HTMLElement;
    size?: (typeof Sizes1To5)[number];
    noPadding?: boolean;
}
