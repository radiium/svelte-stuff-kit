import type { LinkProps } from './Link.types.js';
export declare const defaultLinkProps: LinkProps;
export declare const docLinkPropsDefs: {
    title: string;
    props: ({
        name: string;
        type: string;
        values?: undefined;
        default?: undefined;
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
    } | {
        name: string;
        type: string;
        values: readonly ["auto", "always", "hover", "none"];
        default: "none" | "auto" | "always" | "hover" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["wrap", "nowrap", "pretty", "balance"];
        default: "nowrap" | "wrap" | "pretty" | "balance" | undefined;
    } | {
        name: string;
        type: string;
        default: boolean | undefined;
        values?: undefined;
    })[];
    slots: {
        name: string;
    }[];
    events: never[];
};
