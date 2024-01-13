import { Sizes1To3, Colors } from '../../types';
export const defaultPropsTextarea = {
    elementRef: undefined,
    value: undefined,
    size: '2',
    color: 'neutral',
    error: false,
    fullWidth: false
};
export const docPropsTextarea = {
    value: {
        type: 'string',
        default: defaultPropsTextarea.value
    },
    size: {
        type: 'enum',
        values: Sizes1To3,
        default: defaultPropsTextarea.size
    },
    color: {
        type: 'enum',
        values: Colors,
        default: defaultPropsTextarea.color
    },
    error: {
        type: 'boolean',
        default: defaultPropsTextarea.error
    },
    fullWidth: {
        type: 'boolean',
        default: defaultPropsTextarea.fullWidth
    }
};
