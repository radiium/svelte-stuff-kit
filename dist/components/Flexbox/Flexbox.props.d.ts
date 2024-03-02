import type { FlexboxProps } from './Flexbox.types';
export declare const defaultFlexboxProps: FlexboxProps;
export declare const docFlexboxProps: {
    as: {
        type: string;
        default: keyof import("svelte/elements").SvelteHTMLElements | undefined;
    };
    display: {
        type: string;
        values: readonly ["none", "inline-flex", "flex"];
        default: "none" | "inline-flex" | "flex" | undefined;
    };
    justify: {
        type: string;
        values: readonly ["start", "center", "end", "around", "between", "evenly", "normal"];
        default: "start" | "center" | "end" | "around" | "between" | "evenly" | "normal" | undefined;
    };
    direction: {
        type: string;
        values: readonly ["row", "column", "row-reverse", "column-reverse"];
        default: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
    };
    alignItems: {
        type: string;
        values: readonly ["start", "center", "end", "baseline", "stretch", "normal"];
        default: "start" | "center" | "end" | "normal" | "baseline" | "stretch" | undefined;
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
