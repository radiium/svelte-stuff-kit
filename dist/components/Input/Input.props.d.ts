import type { InputProps } from './Input.types';
export declare const defaultInputProps: InputProps;
export declare const docInputProps: {
    value: {
        type: string;
        default: string | undefined;
    };
    type: {
        type: string;
        values: readonly ["number", "time", "text", "search", "password", "email", "tel", "url", "date", "datetime-local", "month", "week"];
        default: "number" | "time" | "text" | "search" | "password" | "email" | "tel" | "url" | "date" | "datetime-local" | "month" | "week" | undefined;
    };
    size: {
        type: string;
        values: readonly ["1", "2", "3"];
        default: "1" | "2" | "3" | undefined;
    };
    align: {
        type: string;
        values: readonly ["start", "center", "end"];
        default: "start" | "center" | "end" | undefined;
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
