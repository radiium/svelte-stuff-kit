import { Sizes1To3, Colors } from '../../types';
export const defaultPropsSwitch = {
    elementRef: undefined,
    size: '2',
    color: 'neutral',
    error: false
};
export const docPropsSwitch = {
    size: {
        type: 'enum',
        values: Sizes1To3,
        default: defaultPropsSwitch.size
    },
    color: {
        type: 'enum',
        values: Colors,
        default: defaultPropsSwitch.color
    },
    error: {
        type: 'boolean',
        default: defaultPropsSwitch.error
    }
};
