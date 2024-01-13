import type { HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';
import { Displays, Justifys, Directions, AlignItems, Wraps, Gaps, Grows, Shrinks } from '../../types';
export interface PropsFlexbox extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
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
export declare const defaultPropsFlexbox: PropsFlexbox;
export declare const docPropsFlexbox: {
    as: {
        type: string;
        default: keyof SvelteHTMLElements | undefined;
    };
    display: {
        type: string;
        values: readonly ["none", "inline-flex", "flex"];
        default: "none" | "inline-flex" | "flex" | undefined;
    };
    justify: {
        type: string;
        values: readonly ["start", "center", "end", "around", "between", "evenly", "normal"];
        default: "center" | "start" | "end" | "around" | "between" | "evenly" | "normal" | undefined;
    };
    direction: {
        type: string;
        values: readonly ["row", "column", "row-reverse", "column-reverse"];
        default: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
    };
    alignItems: {
        type: string;
        values: readonly ["start", "center", "end", "baseline", "stretch", "normal"];
        default: "center" | "start" | "end" | "normal" | "baseline" | "stretch" | undefined;
    };
    wrap: {
        type: string;
        values: readonly ["nowrap", "wrap", "wrap-reverse"];
        default: "nowrap" | "wrap" | "wrap-reverse" | undefined;
    };
    gap: {
        type: string;
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        default: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | undefined;
    };
    grow: {
        type: string;
        values: readonly ["0", "1"];
        default: "0" | "1" | undefined;
    };
    shrink: {
        type: string;
        values: readonly ["0", "1"];
        default: "0" | "1" | undefined;
    };
};
