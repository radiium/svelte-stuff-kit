import { Sizes1To3, Colors } from '$lib/constants';
import type { TextareaProps } from './Textarea.types';

export const defaultTextareaProps: TextareaProps = {
    elementRef: undefined,
    value: undefined,
    size: '2',
    color: 'neutral',
    error: false,
    fullWidth: false
};

export const docTextareaPropsDefs = {
    title: 'Textarea',
    props: [
        {
            name: 'elementRef',
            type: 'HTMLTextAreaElement'
        },
        {
            name: 'value',
            type: 'string',
            default: defaultTextareaProps.value
        },
        {
            name: 'size',
            type: 'enum',
            values: Sizes1To3,
            default: defaultTextareaProps.size
        },
        {
            name: 'color',
            type: 'enum',
            values: Colors,
            default: defaultTextareaProps.color
        },
        {
            name: 'error',
            type: 'boolean',
            default: defaultTextareaProps.error
        },
        {
            name: 'fullWidth',
            type: 'boolean',
            default: defaultTextareaProps.fullWidth
        }
    ],
    slots: [],
    events: []
};
