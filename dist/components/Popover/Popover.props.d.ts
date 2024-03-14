import { type PopoverProps } from './Popover.types';
export declare const defaultPopoverProps: PopoverProps;
export declare const docPopoverPropsDefs: {
    props: ({
        name: string;
        type: string;
        default: boolean | undefined;
        values?: undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["absolute", "fixed"];
        default: "absolute" | "fixed" | undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["top", "right", "bottom", "left", "top-start", "top-end", "right-start", "right-end", "bottom-start", "bottom-end", "left-start", "left-end"];
        default: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end" | undefined;
    } | {
        name: string;
        type: string;
        default: number | undefined;
        values?: undefined;
    })[];
    slots: never[];
    events: never[];
};
