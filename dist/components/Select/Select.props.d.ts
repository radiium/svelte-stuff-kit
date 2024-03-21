import type { SelectProps } from './Select.types.js';
export declare const defaultSelectProps: SelectProps;
export declare const docSelectPropsDefs: {
    title: string;
    props: ({
        name: string;
        type: string;
        default?: undefined;
        values?: undefined;
    } | {
        name: string;
        type: string;
        default: unknown;
        values?: undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["1", "2", "3"];
        default: "1" | "2" | "3" | undefined;
    })[];
    slots: never[];
    events: never[];
};
