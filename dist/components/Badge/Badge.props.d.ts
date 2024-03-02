import type { BadgeProps } from './Badge.types';
export declare const defaultBadgeProps: BadgeProps;
export declare const docBadgeProps: {
    color: {
        type: string;
        values: readonly ["neutral", "primary", "blue", "green", "yellow", "orange", "red"];
        default: "neutral" | "primary" | "blue" | "green" | "yellow" | "orange" | "red" | undefined;
    };
    size: {
        type: string;
        values: readonly ["1", "2"];
        default: "1" | "2" | undefined;
    };
    variant: {
        type: string;
        values: readonly ["solid", "soft", "outline"];
        default: "solid" | "soft" | "outline" | undefined;
    };
};
