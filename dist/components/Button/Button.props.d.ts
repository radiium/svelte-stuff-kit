import type { ButtonProps } from './Button.types';
export declare const ButtonGroupContextKey = "ButtonGroupContextKey";
export declare const defaultButtonProps: ButtonProps;
export declare const docButtonProps: {
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
        values: readonly ["neutral", "primary", "blue", "green", "yellow", "orange", "red"];
        default: "neutral" | "primary" | "blue" | "green" | "yellow" | "orange" | "red" | undefined;
    };
    align: {
        type: string;
        values: readonly ["start", "center", "end"];
        default: "start" | "center" | "end" | undefined;
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
