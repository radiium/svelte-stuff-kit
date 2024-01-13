import { Sizes1To5 } from '../../types';
export const defaultPropsCard = {
    elementRef: undefined,
    as: 'div',
    size: '3',
    noPadding: false
};
export const docPropsCard = {
    size: {
        type: 'enum',
        values: Sizes1To5,
        default: defaultPropsCard.size
    },
    as: {
        type: 'keyof SvelteHTMLElements',
        default: defaultPropsCard.as
    },
    noPadding: {
        type: 'boolean',
        default: defaultPropsCard.noPadding
    }
};
