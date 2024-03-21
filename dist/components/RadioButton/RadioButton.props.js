import { Sizes1To3, Colors } from '../../constants.js';
export const defaultRadioButtonProps = {
    elementRef: undefined,
    group: undefined,
    value: undefined,
    size: '2',
    color: 'gray',
    error: false
};
export const docRadioButtonPropsDefs = {
    title: 'RadioButton',
    props: [
        {
            name: 'elementRef',
            type: 'HTMLInputElement'
        },
        {
            name: 'group',
            type: 'any',
            default: defaultRadioButtonProps.group
        },
        {
            name: 'value',
            type: 'any',
            default: defaultRadioButtonProps.value
        },
        {
            name: 'size',
            type: 'enum',
            values: Sizes1To3,
            default: defaultRadioButtonProps.size
        },
        {
            name: 'color',
            type: 'enum',
            values: Colors,
            default: defaultRadioButtonProps.color
        },
        {
            name: 'error',
            type: 'boolean',
            default: defaultRadioButtonProps.error
        }
    ],
    slots: [],
    events: []
};
