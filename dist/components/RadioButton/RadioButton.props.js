import { Sizes1To3, Colors } from '../../constants';
export const defaultRadioButtonProps = {
    elementRef: undefined,
    group: undefined,
    size: '2',
    color: 'neutral',
    error: false
};
export const docRadioButtonProps = {
    size: {
        type: 'enum',
        values: Sizes1To3,
        default: defaultRadioButtonProps.size
    },
    color: {
        type: 'enum',
        values: Colors,
        default: defaultRadioButtonProps.color
    },
    error: {
        type: 'boolean',
        default: defaultRadioButtonProps.error
    }
};
