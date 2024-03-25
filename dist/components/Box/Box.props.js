import { BlockDisplays } from '../../constants.js';
export const defaultBoxProps = {
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
    slots: [
        {
            name: 'default'
        }
    ],
    events: []
};
