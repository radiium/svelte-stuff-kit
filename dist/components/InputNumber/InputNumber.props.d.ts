import type { InputNumberProps } from './InputNumber.types';
export declare const defaultInputNumberProps: InputNumberProps;
export declare const docInputNumberPropsDefs: {
    props: ({
        name: string;
        type: string;
        default?: undefined;
        values?: undefined;
    } | {
        name: string;
        type: string;
        default: number | undefined;
        values?: undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["1", "2", "3"];
        default: "1" | "2" | "3" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["neutral", "primary", "blue", "green", "yellow", "orange", "red"];
        default: "neutral" | "primary" | "blue" | "green" | "yellow" | "orange" | "red" | undefined;
    } | {
        name: string;
        type: string;
        default: boolean | undefined;
        values?: undefined;
    })[];
    slots: never[];
    events: never[];
};
