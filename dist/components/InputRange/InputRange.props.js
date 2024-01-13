import { Colors, Sizes1To3 } from '../../types';
export const defaultPropsInputRange = {
    elementRef: undefined,
    size: '2',
    color: 'neutral',
    error: false,
    fullWidth: false
};
export const docPropsInputRange = {
    size: {
        type: 'enum',
        values: Sizes1To3,
        default: defaultPropsInputRange.size
    },
    color: {
        type: 'enum',
        values: Colors,
        default: defaultPropsInputRange.color
    },
    error: {
        type: 'boolean',
        default: defaultPropsInputRange.error
    },
    fullWidth: {
        type: 'boolean',
        default: defaultPropsInputRange.fullWidth
    }
};
