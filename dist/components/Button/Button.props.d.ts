import type { ButtonProps } from './Button.types';
export declare const ButtonGroupContextKey = "ButtonGroupContextKey";
export declare const defaultButtonProps: ButtonProps;
export declare const docButtonPropsDefs: {
    props: ({
        name: string;
        type: string;
        values?: undefined;
        default?: undefined;
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
        values: readonly ["neutral", "primary", "blue", "green", "yellow", "orange", "red"];
        default: "neutral" | "primary" | "blue" | "green" | "yellow" | "orange" | "red" | undefined;
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
    slots: {
        default: boolean;
    }[];
    events: never[];
};
