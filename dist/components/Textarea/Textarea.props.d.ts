import { Sizes1To3, Colors } from '../../types';
import type { HTMLTextareaAttributes } from 'svelte/elements';
export interface PropsTextarea extends Omit<HTMLTextareaAttributes, 'size'> {
    elementRef?: HTMLTextAreaElement;
    value?: string;
    size?: (typeof Sizes1To3)[number];
    color: (typeof Colors)[number];
    error?: boolean;
    fullWidth?: boolean;
}
export declare const defaultPropsTextarea: PropsTextarea;
export declare const docPropsTextarea: {
    value: {
        type: string;
        default: string | undefined;
    };
    size: {
        type: string;
        values: readonly ["1", "2", "3"];
        default: "1" | "2" | "3" | undefined;
    };
    color: {
        type: string;
        values: readonly ["neutral", "primary", "info", "success", "warning", "danger"];
        default: "neutral" | "primary" | "info" | "success" | "warning" | "danger";
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
