import { Sizes1To3 } from '../../types';
export const defaultPropsSelect = {
    elementRef: undefined,
    options: [],
    value: undefined,
    size: '2',
    fullWidth: false
};
export const docPropsSelect = {
    options: {
        type: 'Array',
        default: defaultPropsSelect.options
    },
    value: {
        type: 'string | number',
        default: defaultPropsSelect.value
    },
    size: {
        type: 'enum',
        values: Sizes1To3,
        default: defaultPropsSelect.size
    },
    fullWidth: {
        type: 'boolean',
        default: defaultPropsSelect.fullWidth
    }
};
