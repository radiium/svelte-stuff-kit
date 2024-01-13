import { InputTypes, Sizes1To3, Aligns } from '../../types';
import type { HTMLInputAttributes } from 'svelte/elements';
export interface PropsInput extends Omit<HTMLInputAttributes, 'size' | 'align'> {
    elementRef?: HTMLInputElement;
    value?: string;
    type?: (typeof InputTypes)[number];
    size?: (typeof Sizes1To3)[number];
    align?: (typeof Aligns)[number];
    error?: boolean;
    fullWidth?: boolean;
}
export declare const defaultPropsInput: PropsInput;
export declare const docPropsInput: {
    value: {
        type: string;
        default: string | undefined;
    };
    type: {
        type: string;
        values: readonly ["number", "time", "text", "search", "password", "email", "tel", "url", "date", "datetime-local", "month", "week"];
        default: "number" | "search" | "time" | "text" | "password" | "email" | "tel" | "url" | "date" | "datetime-local" | "month" | "week" | undefined;
    };
    size: {
        type: string;
        values: readonly ["1", "2", "3"];
        default: "1" | "2" | "3" | undefined;
    };
    align: {
        type: string;
        values: readonly ["start", "center", "end"];
        default: "center" | "start" | "end" | undefined;
    };
    error: {
        type: string;
        default: boolean | undefined;
    };
    fullWidth: {
        type: string;
        default: boolean | undefined;
    };
};
