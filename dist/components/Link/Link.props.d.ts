import { Sizes1To4, Colors, Aligns, Variants } from '../../types';
import type { HTMLAnchorAttributes } from 'svelte/elements';
export interface PropsLink extends HTMLAnchorAttributes {
    elementRef?: HTMLAnchorElement;
    size: (typeof Sizes1To4)[number];
    variant: (typeof Variants)[number];
    color: (typeof Colors)[number];
    align: (typeof Aligns)[number];
    active: boolean;
    iconOnly: boolean;
    circle: boolean;
    fullWidth: boolean;
}
export declare const defaultPropsLink: PropsLink;
export declare const docPropsLink: {
    href: {
        type: string;
        default: string | null | undefined;
    };
    target: {
        type: string;
        default: import("svelte/elements").HTMLAttributeAnchorTarget | null | undefined;
    };
    rel: {
        type: string;
        default: string | null | undefined;
    };
    size: {
        type: string;
        values: readonly ["1", "2", "3", "4"];
        default: "1" | "2" | "3" | "4";
    };
    variant: {
        type: string;
        values: readonly ["solid", "soft", "outline", "clear"];
        default: "solid" | "soft" | "outline" | "clear";
    };
    color: {
        type: string;
        values: readonly ["neutral", "primary", "info", "success", "warning", "danger"];
        default: "neutral" | "primary" | "info" | "success" | "warning" | "danger";
    };
    align: {
        type: string;
        values: readonly ["start", "center", "end"];
        default: "center" | "start" | "end";
    };
    active: {
        type: string;
        default: boolean;
    };
    iconOnly: {
        type: string;
        default: boolean;
    };
    circle: {
        type: string;
        default: boolean;
    };
    fullWidth: {
        type: string;
        default: boolean;
    };
};
