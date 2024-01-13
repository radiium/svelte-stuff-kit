import { Sizes1To3 } from '../../types';
import type { HTMLSelectAttributes } from 'svelte/elements';
export type SelectOption = {
    label: string;
    value: string | number;
    disabled?: boolean | undefined;
};
export interface PropsSelect extends Omit<HTMLSelectAttributes, 'size'> {
    elementRef?: HTMLSelectElement;
    options: SelectOption[];
    value?: unknown | undefined;
    size?: (typeof Sizes1To3)[number];
    fullWidth?: boolean;
}
export declare const defaultPropsSelect: PropsSelect;
export declare const docPropsSelect: {
    options: {
        type: string;
        default: SelectOption[];
    };
    value: {
        type: string;
        default: unknown;
    };
    size: {
        type: string;
        values: readonly ["1", "2", "3"];
        default: "1" | "2" | "3" | undefined;
    };
    fullWidth: {
        type: string;
        default: boolean | undefined;
    };
};
