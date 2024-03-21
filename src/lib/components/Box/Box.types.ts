import type { BlockDisplays } from '$lib';
import type { HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';

export interface BoxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
    elementRef?: HTMLElement;
    as?: keyof SvelteHTMLElements;
    display?: (typeof BlockDisplays)[number];
}
