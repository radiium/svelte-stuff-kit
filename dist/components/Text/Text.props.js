import { Sizes1To9, Colors, Weights, Aligns, TextTags } from '../../types';
export const defaultPropsText = {
    elementRef: undefined,
    as: 'span',
    color: undefined,
    size: '3',
    weight: 'regular',
    align: 'start',
    disabled: false
};
export const docPropsText = {
    as: {
        type: 'keyof SvelteHTMLElements',
        default: defaultPropsText.as
    },
    color: {
        type: 'enum',
        values: Colors,
        default: defaultPropsText.color
    },
    size: {
        type: 'enum',
        values: Sizes1To9,
        default: defaultPropsText.size
    },
    weight: {
        type: 'enum',
        values: Weights,
        default: defaultPropsText.weight
    },
    align: {
        type: 'enum',
        values: Aligns,
        default: defaultPropsText.align
    }
};
