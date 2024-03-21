import { Sizes1To5 } from '../../constants.js';
export const defaultCardProps = {
    elementRef: undefined,
    size: '3',
    noPadding: false
};
export const docCardPropsDefs = {
    props: [
        {
            name: 'elementRef',
            type: 'HTMLDivElement'
        },
        {
            name: 'size',
            type: 'enum',
            values: Sizes1To5,
            default: defaultCardProps.size
        },
        {
            name: 'noPadding',
            type: 'boolean',
            default: defaultCardProps.noPadding
        }
    ],
    slots: [
        {
            default: true
        }
    ],
    events: []
};
