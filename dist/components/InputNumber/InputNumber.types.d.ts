import type { Sizes1To3, Colors } from '../../constants';
export interface InputNumberProps {
    elementRef?: HTMLInputElement;
    value?: number;
    step?: number;
    min?: number;
    max?: number;
    size?: (typeof Sizes1To3)[number];
    color?: (typeof Colors)[number];
    disabled?: boolean;
    required?: boolean;
    readonly?: boolean;
}
