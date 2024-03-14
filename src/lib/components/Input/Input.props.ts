import { Aligns, InputTypes, Sizes1To3 } from '$lib/constants';
import type { InputProps } from './Input.types';

export const defaultInputProps: InputProps = {
    elementRef: undefined,
    value: '',
    type: 'text',
    size: '2',
    align: 'start',
    error: false,
    fullWidth: false
};

export const docInputPropsDefs = {
    props: [
        {
            name: 'elementRef',
            type: 'HTMLInputElement'
        },
        {
            name: 'value',
            type: 'string',
            default: defaultInputProps.value
        },
        {
            name: 'type',
            type: 'enum',
            values: InputTypes,
            default: defaultInputProps.type
        },
        {
            name: 'size',
            type: 'enum',
            values: Sizes1To3,
            default: defaultInputProps.size
        },
        {
            name: 'align',
            type: 'enum',
            values: Aligns,
            default: defaultInputProps.align
        },
        {
            name: 'error',
            type: 'boolean',
            default: defaultInputProps.error
        },
        {
            name: 'fullWidth',
            type: 'boolean',
            default: defaultInputProps.fullWidth
        }
    ],
    slots: [],
    events: []
};
