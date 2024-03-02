import type { Sizes1To4, Aligns, Colors, Variants } from '../../constants';
import type { HTMLButtonAttributes } from 'svelte/elements';
export interface ButtonProps extends Omit<HTMLButtonAttributes, 'size' | 'align'> {
    elementRef?: HTMLButtonElement;
    size?: (typeof Sizes1To4)[number];
    variant?: (typeof Variants)[number];
    color?: (typeof Colors)[number];
    align?: (typeof Aligns)[number];
    active?: boolean;
    iconOnly?: boolean;
    circle?: boolean;
    fullWidth?: boolean;
}
export type ButtonIconProps = Omit<ButtonProps, 'iconOnly'>;
