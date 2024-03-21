import { Colors, Sizes1To3 } from '../../constants.js';
export const defaultInputRangeProps = {
    elementRef: undefined,
    value: undefined,
    size: '2',
    color: 'gray',
    error: false,
    fullWidth: false
};
export const docInputRangePropsDefs = {
    props: [
        {
            name: 'elementRef',
            type: 'HTMLInputElement'
        },
        {
            name: 'value',
            type: 'any',
            default: defaultInputRangeProps.value
        },
        {
            name: 'size',
            type: 'enum',
            values: Sizes1To3,
            default: defaultInputRangeProps.size
        },
        {
            name: 'color',
            type: 'enum',
            values: Colors,
            default: defaultInputRangeProps.color
        },
        {
            name: 'error',
            type: 'boolean',
            default: defaultInputRangeProps.error
        },
        {
            name: 'fullWidth',
            type: 'boolean',
            default: defaultInputRangeProps.fullWidth
        }
    ],
    slots: [],
    events: []
};
