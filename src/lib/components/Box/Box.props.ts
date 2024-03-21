import { BlockDisplays } from '$lib/constants.js';
import type { BoxProps } from './Box.types.js';

export const defaultBoxProps: BoxProps = {
    elementRef: undefined,
    as: 'div',
    display: undefined
};

export const docBoxPropsDefs = {
    props: [
        {
            name: 'elementRef',
            type: 'HTMLElement'
        },
        {
            name: 'as',
            type: 'keyof SvelteHTMLElements',
            default: defaultBoxProps.as
        },
        {
            name: 'display',
            type: 'enum',
            values: BlockDisplays,
            default: defaultBoxProps.display
        }
    ],
    slots: [],
    events: []
};
