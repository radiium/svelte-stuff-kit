import type { HTMLAttributes, HTMLLabelAttributes } from 'svelte/elements';
import { Sizes1To9, Colors, Weights, Aligns, TextTags } from '../../types';
export type PropsText = (HTMLAttributes<HTMLSpanElement> | HTMLAttributes<HTMLDivElement> | HTMLAttributes<HTMLParagraphElement> | HTMLLabelAttributes) & {
    elementRef?: HTMLSpanElement | HTMLDivElement | HTMLParagraphElement | HTMLLabelElement;
    as?: (typeof TextTags)[number];
    color?: (typeof Colors)[number];
    size?: (typeof Sizes1To9)[number];
    weight?: (typeof Weights)[number];
    align?: (typeof Aligns)[number];
    disabled?: boolean;
};
export declare const defaultPropsText: PropsText;
export declare const docPropsText: {
    as: {
        type: string;
        default: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p" | "span" | undefined;
    };
    color: {
        type: string;
        values: readonly ["neutral", "primary", "info", "success", "warning", "danger"];
        default: "neutral" | "primary" | "info" | "success" | "warning" | "danger" | undefined;
    };
    size: {
        type: string;
        values: readonly ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        default: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | undefined;
    };
    weight: {
        type: string;
        values: readonly ["light", "regular", "medium", "bold"];
        default: "light" | "regular" | "medium" | "bold" | undefined;
    };
    align: {
        type: string;
        values: readonly ["start", "center", "end"];
        default: "center" | "start" | "end" | undefined;
    };
};
