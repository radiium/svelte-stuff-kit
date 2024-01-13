import { Sizes1To3, Colors } from '../../types';
import type { HTMLInputAttributes } from 'svelte/elements';
export interface PropsSwitch extends Omit<HTMLInputAttributes, 'size'> {
    elementRef?: HTMLInputElement;
    size?: (typeof Sizes1To3)[number];
    color?: (typeof Colors)[number];
    error?: boolean;
}
export declare const defaultPropsSwitch: PropsSwitch;
export declare const docPropsSwitch: {
    size: {
        type: string;
        values: readonly ["1", "2", "3"];
        default: "1" | "2" | "3" | undefined;
    };
    color: {
        type: string;
        values: readonly ["neutral", "primary", "info", "success", "warning", "danger"];
        default: "neutral" | "primary" | "info" | "success" | "warning" | "danger" | undefined;
    };
    error: {
        type: string;
        default: boolean | undefined;
    };
};
