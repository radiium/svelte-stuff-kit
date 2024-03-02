import { Colors, Sizes1To3 } from '../../constants';
export const defaultInputRangeProps = {
    elementRef: undefined,
    size: '2',
    color: 'neutral',
    error: false,
    fullWidth: false
};
export const docInputRangeProps = {
    size: {
        type: 'enum',
        values: Sizes1To3,
        default: defaultInputRangeProps.size
    },
    color: {
        type: 'enum',
        values: Colors,
        default: defaultInputRangeProps.color
    },
    error: {
        type: 'boolean',
        default: defaultInputRangeProps.error
    },
    fullWidth: {
        type: 'boolean',
        default: defaultInputRangeProps.fullWidth
    }
};
