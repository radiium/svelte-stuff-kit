import type { TextareaProps } from './Textarea.types';
export declare const defaultTextareaProps: TextareaProps;
export declare const docTextareaProps: {
    value: {
        type: string;
        default: string | undefined;
    };
    size: {
        type: string;
        values: readonly ["1", "2", "3"];
        default: "1" | "2" | "3" | undefined;
    };
    color: {
        type: string;
        values: readonly ["neutral", "primary", "blue", "green", "yellow", "orange", "red"];
        default: "neutral" | "primary" | "blue" | "green" | "yellow" | "orange" | "red";
    };
    error: {
        type: string;
        default: boolean | undefined;
    };
    fullWidth: {
        type: string;
        default: boolean | undefined;
    };
};
