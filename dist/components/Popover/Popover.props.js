export const Strategies = ['absolute', 'fixed'];
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
];
export const defaultPropsPopover = {
    isOpen: false,
    backdrop: false,
    arrow: true,
    flip: true,
    strategy: 'absolute',
    placement: 'top',
    offset: 0,
    transitionOpacity: 0,
    transitionY: 10,
    transitionDuration: 200
};
export const docPropsPopover = {
    isOpen: {
        type: 'boolean',
        default: defaultPropsPopover.isOpen
    },
    backdrop: {
        type: 'boolean',
        default: defaultPropsPopover.backdrop
    },
    arrow: {
        type: 'boolean',
        default: defaultPropsPopover.arrow
    },
    flip: {
        type: 'boolean',
        default: defaultPropsPopover.flip
    },
    strategy: {
        type: 'enum',
        values: Strategies,
        default: defaultPropsPopover.strategy
    },
    placement: {
        type: 'enum',
        values: Placements,
        default: defaultPropsPopover.placement
    },
    offset: {
        type: 'number',
        default: defaultPropsPopover.offset
    },
    transitionOpacity: {
        type: 'number',
        default: defaultPropsPopover.transitionOpacity
    },
    transitionY: {
        type: 'number',
        default: defaultPropsPopover.transitionY
    },
    transitionDuration: {
        type: 'number',
        default: defaultPropsPopover.transitionDuration
    }
};
