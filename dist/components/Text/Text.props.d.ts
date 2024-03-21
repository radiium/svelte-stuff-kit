import type { TextProps } from './Text.types.js';
export declare const defaultTextProps: TextProps;
export declare const docTextPropsDefs: {
    title: string;
    props: ({
        name: string;
        type: string;
        default?: undefined;
        values?: undefined;
    } | {
        name: string;
        type: string;
        default: "div" | "span" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | undefined;
        values?: undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["primary", "gray", "blue", "green", "yellow", "orange", "red"];
        default: "primary" | "gray" | "blue" | "green" | "yellow" | "orange" | "red" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        default: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["light", "regular", "medium", "bold"];
        default: "light" | "regular" | "medium" | "bold" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["lowercase", "uppercase", "capitalize"];
        default: "lowercase" | "uppercase" | "capitalize" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["start", "center", "end"];
        default: "start" | "center" | "end" | undefined;
    })[];
    slots: never[];
    events: never[];
};
