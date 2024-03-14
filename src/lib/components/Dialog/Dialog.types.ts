import type { Sizes1To4 } from '$lib/constants';
import type { HTMLAttributes } from 'svelte/elements';

export interface DialogProps extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
    isOpen?: boolean;
    size?: (typeof Sizes1To4)[number];
    closeOnBackdropClick?: boolean;
    closeOnEscape?: boolean;
    showCloseButton?: boolean;
    blockScroll?: boolean;
}
