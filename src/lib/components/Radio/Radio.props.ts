import { Sizes1To3, Colors } from '$lib/constants.js';
import type { RadioProps } from './Radio.types.js';

export const defaultRadioProps: RadioProps = {
    elementRef: undefined,
    group: undefined,
    value: undefined,
    size: '2',
    color: 'gray',
    error: false
};

export const docRadioPropsDefs = {
    title: 'Radio',
    props: [
        {
            name: 'elementRef',
            type: 'HTMLInputElement'
        },
        {
            name: 'group',
            type: 'any',
            default: defaultRadioProps.group
        },
        {
            name: 'value',
            type: 'any',
            default: defaultRadioProps.value
        },
        {
            name: 'size',
            type: 'enum',
            values: Sizes1To3,
            default: defaultRadioProps.size
        },
        {
            name: 'color',
            type: 'enum',
            values: Colors,
            default: defaultRadioProps.color
        },
        {
            name: 'error',
            type: 'boolean',
            default: defaultRadioProps.error
        }
    ],
    slots: [],
    events: []
};
