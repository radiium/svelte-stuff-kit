import { Sizes1To3, Colors } from '../../types';
export const defaultPropsInputNumber = {
    elementRef: undefined,
    value: undefined,
    step: 1,
    min: undefined,
    max: undefined,
    size: '2',
    color: 'neutral',
    disabled: false,
    required: false,
    readonly: false
};
export const docPropsInputNumber = {
    value: {
        type: 'number',
        default: defaultPropsInputNumber.value
    },
    step: {
        type: 'number',
        default: defaultPropsInputNumber.step
    },
    min: {
        type: 'number',
        default: defaultPropsInputNumber.min
    },
    max: {
        type: 'number',
        default: defaultPropsInputNumber.max
    },
    size: {
        type: 'enum',
        values: Sizes1To3,
        default: defaultPropsInputNumber.size
    },
    color: {
        type: 'enum',
        values: Colors,
        default: defaultPropsInputNumber.color
    },
    disabled: {
        type: 'boolean',
        default: defaultPropsInputNumber.disabled
    },
    required: {
        type: 'boolean',
        default: defaultPropsInputNumber.required
    },
    readonly: {
        type: 'boolean',
        default: defaultPropsInputNumber.readonly
    }
};
