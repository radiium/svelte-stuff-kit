import type { FlexboxProps } from './Flexbox.types.js';
export declare const defaultFlexboxProps: FlexboxProps;
export declare const docFlexboxPropsDefs: {
    props: ({
        name: string;
        type: string;
        default?: undefined;
        values?: undefined;
    } | {
        name: string;
        type: string;
        default: keyof import("svelte/elements.js").SvelteHTMLElements | undefined;
        values?: undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["none", "inline-flex", "flex"];
        default: "none" | "inline-flex" | "flex" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["start", "center", "end", "around", "between", "evenly", "normal"];
        default: "start" | "center" | "end" | "around" | "between" | "evenly" | "normal" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["row", "column", "row-reverse", "column-reverse"];
        default: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["start", "center", "end", "baseline", "stretch", "normal"];
        default: "start" | "center" | "end" | "normal" | "baseline" | "stretch" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["nowrap", "wrap", "wrap-reverse"];
        default: "nowrap" | "wrap" | "wrap-reverse" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        default: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["0", "1"];
        default: "0" | "1" | undefined;
    })[];
    slots: {
        name: string;
    }[];
    events: never[];
};
