export type PopoverStore = {
    readonly isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const Strategies = ['absolute', 'fixed'] as const;
export const Placements = [
    'top',
    'right',
    'bottom',
    'left',
    'top-start',
    'top-end',
    'right-start',
    'right-end',
    'bottom-start',
    'bottom-end',
    'left-start',
    'left-end'
] as const;

export interface PopoverProps {
    isOpen?: boolean;
    backdrop?: boolean;
    arrow?: boolean;
    flip?: boolean;
    shift?: boolean;
    strategy?: (typeof Strategies)[number];
    placement?: (typeof Placements)[number];
    offset?: number;
    transitionOpacity?: number;
    transitionY?: number;
    transitionDuration?: number;
}
