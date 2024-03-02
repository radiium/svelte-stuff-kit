import type { Placement, Strategy } from '@floating-ui/dom';
export type PopoverStore = {
    readonly isOpen: boolean;
    open: () => void;
    close: () => void;
};
export declare const Strategies: readonly ["absolute", "fixed"];
export declare const Placements: readonly ["top", "right", "bottom", "left", "top-start", "top-end", "right-start", "right-end", "bottom-start", "bottom-end", "left-start", "left-end"];
export interface PopoverProps {
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
