import { Sizes1To3, Colors } from '../../types';
export const defaultPropsCheckbox = {
    elementRef: undefined,
    size: '2',
    color: 'neutral',
    error: false
};
export const docPropsCheckbox = {
    size: {
        type: 'enum',
        values: Sizes1To3,
        default: defaultPropsCheckbox.size
    },
    color: {
        type: 'enum',
        values: Colors,
        default: defaultPropsCheckbox.color
    },
    error: {
        type: 'boolean',
        default: defaultPropsCheckbox.error
    }
};
