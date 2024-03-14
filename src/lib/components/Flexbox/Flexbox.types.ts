import type {
    AlignItems,
    Directions,
    Displays,
    Gaps,
    Grows,
    Justifys,
    Shrinks,
    Wraps,
    PaddingProps,
    MarginProps,
    LayoutProps
} from '$lib/constants';
import type { HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';

export interface FlexboxProps
    extends LayoutProps,
        MarginProps,
        PaddingProps,
        Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
    elementRef?: HTMLElement;
    as?: keyof SvelteHTMLElements;
    display?: (typeof Displays)[number];
    justify?: (typeof Justifys)[number];
    direction?: (typeof Directions)[number];
    alignItems?: (typeof AlignItems)[number];
    wrap?: (typeof Wraps)[number];
    gap?: (typeof Gaps)[number];
    grow?: (typeof Grows)[number];
    shrink?: (typeof Shrinks)[number];
}
