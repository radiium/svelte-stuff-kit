import type { SwitchProps } from './Switch.types';
export declare const defaultSwitchProps: SwitchProps;
export declare const docSwitchPropsDefs: {
    title: string;
    props: ({
        name: string;
        type: string;
        values?: undefined;
        default?: undefined;
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
