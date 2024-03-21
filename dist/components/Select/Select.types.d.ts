import type { Sizes1To3 } from '../../constants.js';
import type { HTMLSelectAttributes } from 'svelte/elements';
export type SelectOption = {
    label: string;
    value: string | number;
    disabled?: boolean | undefined;
};
export interface SelectProps extends Omit<HTMLSelectAttributes, 'size'> {
    elementRef?: HTMLSelectElement;
    options: SelectOption[];
    value?: unknown | undefined;
    size?: (typeof Sizes1To3)[number];
    fullWidth?: boolean;
}
