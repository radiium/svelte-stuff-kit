import { AlignItems, Directions, Displays, Gaps, Grows, Justifys, Shrinks, Wraps } from '../../constants';
export const defaultFlexboxProps = {
    elementRef: undefined,
    as: 'div',
    display: 'flex',
    justify: 'start',
    direction: undefined,
    alignItems: undefined,
    wrap: undefined,
    gap: undefined,
    grow: undefined,
    shrink: undefined
};
export const docFlexboxProps = {
    as: {
        type: 'keyof SvelteHTMLElements',
        default: defaultFlexboxProps.as
    },
    display: {
        type: 'enum',
        values: Displays,
        default: defaultFlexboxProps.display
    },
    justify: {
        type: 'enum',
        values: Justifys,
        default: defaultFlexboxProps.justify
    },
    direction: {
        type: 'enum',
        values: Directions,
        default: defaultFlexboxProps.direction
    },
    alignItems: {
        type: 'enum',
        values: AlignItems,
        default: defaultFlexboxProps.alignItems
    },
    wrap: {
        type: 'enum',
        values: Wraps,
        default: defaultFlexboxProps.wrap
    },
    gap: {
        type: 'enum',
        values: Gaps,
        default: defaultFlexboxProps.gap
    },
    grow: {
        type: 'enum',
        values: Grows,
        default: defaultFlexboxProps.grow
    },
    shrink: {
        type: 'enum',
        values: Shrinks,
        default: defaultFlexboxProps.shrink
    }
};
