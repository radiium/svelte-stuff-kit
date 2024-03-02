import type { InputNumberProps } from './InputNumber.types';
export declare const defaultInputNumberProps: InputNumberProps;
export declare const docInputNumberProps: {
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
        values: readonly ["neutral", "primary", "blue", "green", "yellow", "orange", "red"];
        default: "neutral" | "primary" | "blue" | "green" | "yellow" | "orange" | "red" | undefined;
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
