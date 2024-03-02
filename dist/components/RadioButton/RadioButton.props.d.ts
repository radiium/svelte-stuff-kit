import type { RadioButtonProps } from './RadioButton.types';
export declare const defaultRadioButtonProps: RadioButtonProps;
export declare const docRadioButtonProps: {
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
