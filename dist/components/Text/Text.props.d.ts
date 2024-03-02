import type { TextProps } from './Text.types';
export declare const defaultTextProps: TextProps;
export declare const docTextProps: {
    as: {
        type: string;
        default: "p" | "div" | "span" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
    };
    color: {
        type: string;
        values: readonly ["neutral", "primary", "blue", "green", "yellow", "orange", "red"];
        default: "neutral" | "primary" | "blue" | "green" | "yellow" | "orange" | "red" | undefined;
    };
    size: {
        type: string;
        values: readonly ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        default: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | undefined;
    };
    weight: {
        type: string;
        values: readonly ["light", "regular", "medium", "bold"];
        default: "light" | "regular" | "medium" | "bold" | undefined;
    };
    align: {
        type: string;
        values: readonly ["start", "center", "end"];
        default: "start" | "center" | "end" | undefined;
    };
};
