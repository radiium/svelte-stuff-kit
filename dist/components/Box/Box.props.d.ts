import type { BoxProps } from './Box.types.js';
export declare const defaultBoxProps: BoxProps;
export declare const docBoxPropsDefs: {
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
        values: readonly ["none", "inline", "inline-block", "block"];
        default: "none" | "inline" | "inline-block" | "block" | undefined;
    })[];
    slots: {
        name: string;
    }[];
    events: never[];
};
