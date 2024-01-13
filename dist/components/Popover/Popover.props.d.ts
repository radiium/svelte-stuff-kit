import type { Placement, Strategy } from '@floating-ui/dom';
export type PopoverStore = {
    readonly isOpen: boolean;
    open: () => void;
    close: () => void;
};
export declare const Strategies: readonly ["absolute", "fixed"];
export declare const Placements: readonly ["top", "right", "bottom", "left", "top-start", "top-end", "right-start", "right-end", "bottom-start", "bottom-end", "left-start", "left-end"];
export interface PropsPopover {
    isOpen?: boolean;
    backdrop?: boolean;
    arrow?: boolean;
    flip?: boolean;
    strategy?: Strategy;
    placement?: Placement;
    offset?: number;
    transitionOpacity?: number;
    transitionY?: number;
    transitionDuration?: number;
}
export declare const defaultPropsPopover: PropsPopover;
export declare const docPropsPopover: {
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
        default: Strategy | undefined;
    };
    placement: {
        type: string;
        values: readonly ["top", "right", "bottom", "left", "top-start", "top-end", "right-start", "right-end", "bottom-start", "bottom-end", "left-start", "left-end"];
        default: Placement | undefined;
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
