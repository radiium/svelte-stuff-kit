import { InputTypes, Sizes1To3, Aligns } from '../../types';
export const defaultPropsInput = {
    elementRef: undefined,
    value: '',
    type: 'text',
    size: '2',
    align: 'start',
    error: false,
    fullWidth: false
};
export const docPropsInput = {
    value: {
        type: 'string',
        default: defaultPropsInput.value
    },
    type: {
        type: 'enum',
        values: InputTypes,
        default: defaultPropsInput.type
    },
    size: {
        type: 'enum',
        values: Sizes1To3,
        default: defaultPropsInput.size
    },
    align: {
        type: 'enum',
        values: Aligns,
        default: defaultPropsInput.align
    },
    error: {
        type: 'boolean',
        default: defaultPropsInput.error
    },
    fullWidth: {
        type: 'boolean',
        default: defaultPropsInput.fullWidth
    }
};
