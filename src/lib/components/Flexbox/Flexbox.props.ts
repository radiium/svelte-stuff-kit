import {
    AlignItems,
    Directions,
    FlexDisplays,
    Gaps,
    Grows,
    Justifys,
    Shrinks,
    Wraps
} from '$lib/constants.js';
import type { FlexboxProps } from './Flexbox.types.js';

export const defaultFlexboxProps: FlexboxProps = {
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

export const docFlexboxPropsDefs = {
    props: [
        {
            name: 'elementRef',
            type: 'HTMLElement'
        },
        {
            name: 'as',
            type: 'keyof SvelteHTMLElements',
            default: defaultFlexboxProps.as
        },
        {
            name: 'display',
            type: 'enum',
            values: FlexDisplays,
            default: defaultFlexboxProps.display
        },
        {
            name: 'justify',
            type: 'enum',
            values: Justifys,
            default: defaultFlexboxProps.justify
        },
        {
            name: 'direction',
            type: 'enum',
            values: Directions,
            default: defaultFlexboxProps.direction
        },
        {
            name: 'alignItems',
            type: 'enum',
            values: AlignItems,
            default: defaultFlexboxProps.alignItems
        },
        {
            name: 'wrap',
            type: 'enum',
            values: Wraps,
            default: defaultFlexboxProps.wrap
        },
        {
            name: 'gap',
            type: 'enum',
            values: Gaps,
            default: defaultFlexboxProps.gap
        },
        {
            name: 'grow',
            type: 'enum',
            values: Grows,
            default: defaultFlexboxProps.grow
        },
        {
            name: 'shrink',
            type: 'enum',
            values: Shrinks,
            default: defaultFlexboxProps.shrink
        }
    ],
    slots: [
        {
            name: 'default'
        }
    ],
    events: []
};
