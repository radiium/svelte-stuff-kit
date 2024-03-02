import { type PopoverProps } from './Popover.types';
export declare const defaultPopoverProps: PopoverProps;
export declare const docPopoverProps: {
    isOpen: {
        type: string;
        default: boolean | undefined;
    };
    backdrop: {
        type: string;
        default: boolean | undefined;
    };
    arrow: {
        type: string;
        default: boolean | undefined;
    };
    flip: {
        type: string;
        default: boolean | undefined;
    };
    strategy: {
        type: string;
        values: readonly ["absolute", "fixed"];
        default: import("@floating-ui/utils").Strategy | undefined;
    };
    placement: {
        type: string;
        values: readonly ["top", "right", "bottom", "left", "top-start", "top-end", "right-start", "right-end", "bottom-start", "bottom-end", "left-start", "left-end"];
        default: import("@floating-ui/utils").Placement | undefined;
    };
    offset: {
        type: string;
        default: number | undefined;
    };
    transitionOpacity: {
        type: string;
        default: number | undefined;
    };
    transitionY: {
        type: string;
        default: number | undefined;
    };
    transitionDuration: {
        type: string;
        default: number | undefined;
    };
};
