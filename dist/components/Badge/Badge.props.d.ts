import type { BadgeProps } from './Badge.types';
export declare const defaultBadgeProps: BadgeProps;
export declare const docBadgePropsDefs: {
    props: ({
        name: string;
        type: string;
        values?: undefined;
        default?: undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["1", "2"];
        default: "1" | "2" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["solid", "soft", "outline"];
        default: "solid" | "soft" | "outline" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["neutral", "primary", "blue", "green", "yellow", "orange", "red"];
        default: "neutral" | "primary" | "blue" | "green" | "yellow" | "orange" | "red" | undefined;
    } | {
        name: string;
        type: string;
        default: boolean | undefined;
        values?: undefined;
    })[];
    slots: {
        default: boolean;
    }[];
    events: never[];
};
