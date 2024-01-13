import { Sizes1To3, Colors } from '../../types';
export interface PropsInputNumber {
    elementRef?: HTMLInputElement;
    value?: number;
    step?: number;
    min?: number;
    max?: number;
    size?: (typeof Sizes1To3)[number];
    color?: (typeof Colors)[number];
    disabled?: boolean;
    required?: boolean;
    readonly?: boolean;
}
export declare const defaultPropsInputNumber: PropsInputNumber;
export declare const docPropsInputNumber: {
    value: {
        type: string;
        default: number | undefined;
    };
    step: {
        type: string;
        default: number | undefined;
    };
    min: {
        type: string;
        default: number | undefined;
    };
    max: {
        type: string;
        default: number | undefined;
    };
    size: {
        type: string;
        values: readonly ["1", "2", "3"];
        default: "1" | "2" | "3" | undefined;
    };
    color: {
        type: string;
        values: readonly ["neutral", "primary", "info", "success", "warning", "danger"];
        default: "neutral" | "primary" | "info" | "success" | "warning" | "danger" | undefined;
    };
    disabled: {
        type: string;
        default: boolean | undefined;
    };
    required: {
        type: string;
        default: boolean | undefined;
    };
    readonly: {
        type: string;
        default: boolean | undefined;
    };
};
