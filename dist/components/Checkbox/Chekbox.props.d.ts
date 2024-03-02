import type { CheckboxProps } from './Chekbox.types';
export declare const defaultCheckboxProps: CheckboxProps;
export declare const docCheckboxProps: {
    checked: {
        type: string;
        default: boolean | undefined;
    };
    indeterminate: {
        type: string;
        default: boolean | undefined;
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
    error: {
        type: string;
        default: boolean | undefined;
    };
};
