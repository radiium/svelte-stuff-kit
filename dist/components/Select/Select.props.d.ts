import type { SelectOption, SelectProps } from './Select.types';
export declare const defaultSelectProps: SelectProps;
export declare const docSelectProps: {
    options: {
        type: string;
        default: SelectOption[];
    };
    value: {
        type: string;
        default: unknown;
    };
    size: {
        type: string;
        values: readonly ["1", "2", "3"];
        default: "1" | "2" | "3" | undefined;
    };
    fullWidth: {
        type: string;
        default: boolean | undefined;
    };
};
