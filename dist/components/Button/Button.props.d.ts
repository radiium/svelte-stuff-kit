import { Sizes1To4, Variants, Colors, Aligns } from '../../types';
import type { HTMLButtonAttributes } from 'svelte/elements';
export declare const ButtonGroupContextKey = "ButtonGroupContextKey";
export interface PropsButton extends Omit<HTMLButtonAttributes, 'size'> {
    elementRef?: HTMLButtonElement;
    size?: (typeof Sizes1To4)[number];
    variant?: (typeof Variants)[number];
    color?: (typeof Colors)[number];
    align?: (typeof Aligns)[number];
    active?: boolean;
    iconOnly?: boolean;
    circle?: boolean;
    fullWidth?: boolean;
}
export type PropsButtonIcon = Omit<PropsButton, 'iconOnly'>;
export declare const defaultPropsButton: PropsButton;
export declare const docPropsButton: {
    size: {
        type: string;
        values: readonly ["1", "2", "3", "4"];
        default: "1" | "2" | "3" | "4" | undefined;
    };
    variant: {
        type: string;
        values: readonly ["solid", "soft", "outline", "clear"];
        default: "solid" | "soft" | "outline" | "clear" | undefined;
    };
    color: {
        type: string;
        values: readonly ["neutral", "primary", "info", "success", "warning", "danger"];
        default: "neutral" | "primary" | "info" | "success" | "warning" | "danger" | undefined;
    };
    align: {
        type: string;
        values: readonly ["start", "center", "end"];
        default: "center" | "start" | "end" | undefined;
    };
    active: {
        type: string;
        default: boolean | undefined;
    };
    iconOnly: {
        type: string;
        default: boolean | undefined;
    };
    circle: {
        type: string;
        default: boolean | undefined;
    };
    fullWidth: {
        type: string;
        default: boolean | undefined;
    };
};
