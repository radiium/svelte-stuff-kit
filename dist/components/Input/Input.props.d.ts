import type { InputProps } from './Input.types.js';
export declare const defaultInputProps: InputProps;
export declare const docInputPropsDefs: {
    props: ({
        name: string;
        type: string;
        default?: undefined;
        values?: undefined;
    } | {
        name: string;
        type: string;
        default: string | undefined;
        values?: undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["number", "time", "text", "search", "password", "email", "tel", "url", "date", "datetime-local", "month", "week"];
        default: "number" | "time" | "text" | "search" | "password" | "email" | "tel" | "url" | "date" | "datetime-local" | "month" | "week" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["1", "2", "3"];
        default: "1" | "2" | "3" | undefined;
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
    slots: never[];
    events: never[];
};
