import { Sizes1To3, Colors } from '../../constants';
export const defaultSwitchProps = {
    elementRef: undefined,
    size: '2',
    color: 'neutral',
    error: false
};
export const docSwitchProps = {
    size: {
        type: 'enum',
        values: Sizes1To3,
        default: defaultSwitchProps.size
    },
    color: {
        type: 'enum',
        values: Colors,
        default: defaultSwitchProps.color
    },
    error: {
        type: 'boolean',
        default: defaultSwitchProps.error
    }
};
