import { Sizes1To3, Colors } from '../../types';
export const defaultPropsRadioButton = {
    elementRef: undefined,
    group: undefined,
    size: '2',
    color: 'neutral',
    error: false
};
export const docPropsRadioButton = {
    size: {
        type: 'enum',
        values: Sizes1To3,
        default: defaultPropsRadioButton.size
    },
    color: {
        type: 'enum',
        values: Colors,
        default: defaultPropsRadioButton.color
    },
    error: {
        type: 'boolean',
        default: defaultPropsRadioButton.error
    }
};
