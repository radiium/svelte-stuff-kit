import { Sizes1To3, Colors } from '$lib/constants';
import type { InputNumberProps } from './InputNumber.types';

export const defaultInputNumberProps: InputNumberProps = {
    elementRef: undefined,
    value: undefined,
    step: 1,
    min: undefined,
    max: undefined,
    size: '2',
    color: 'gray',
    disabled: false,
    required: false,
    readonly: false
};

export const docInputNumberPropsDefs = {
    props: [
        {
            name: 'elementRef',
            type: 'HTMLInputElement'
        },
        {
            name: 'value',
            type: 'number',
            default: defaultInputNumberProps.value
        },
        {
            name: 'step',
            type: 'number',
            default: defaultInputNumberProps.step
        },
        {
            name: 'min',
            type: 'number',
            default: defaultInputNumberProps.min
        },
        {
            name: 'max',
            type: 'number',
            default: defaultInputNumberProps.max
        },
        {
            name: 'size',
            type: 'enum',
            values: Sizes1To3,
            default: defaultInputNumberProps.size
        },
        {
            name: 'color',
            type: 'enum',
            values: Colors,
            default: defaultInputNumberProps.color
        },
        {
            name: 'disabled',
            type: 'boolean',
            default: defaultInputNumberProps.disabled
        },
        {
            name: 'required',
            type: 'boolean',
            default: defaultInputNumberProps.required
        },
        {
            name: 'readonly',
            type: 'boolean',
            default: defaultInputNumberProps.readonly
        }
    ],
    slots: [],
    events: []
};
