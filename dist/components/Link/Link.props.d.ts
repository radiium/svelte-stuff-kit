import type { LinkProps } from './Link.types.js';
export declare const defaultLinkProps: LinkProps;
export declare const docLinkPropsDefs: {
    props: ({
        name: string;
        type: string;
        default?: undefined;
        values?: undefined;
    } | {
        name: string;
        type: string;
        default: string | null | undefined;
        values?: undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["1", "2", "3", "4"];
        default: "1" | "2" | "3" | "4" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["solid", "soft", "outline", "clear"];
        default: "solid" | "soft" | "outline" | "clear" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["primary", "gray", "blue", "green", "yellow", "orange", "red"];
        default: "primary" | "gray" | "blue" | "green" | "yellow" | "orange" | "red" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["start", "center", "end"];
        default: "start" | "center" | "end" | undefined;
    } | {
        name: string;
        type: string;
        default: boolean | undefined;
        values?: undefined;
    })[];
    slots: never[];
    events: never[];
};
