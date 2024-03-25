import { Colors, Sizes1To3 } from '../../constants.js';
export const defaultCheckboxProps = {
    elementRef: undefined,
    group: undefined,
    value: undefined,
    checked: false,
    indeterminate: false,
    size: '2',
    color: 'gray',
    error: false
};
export const docCheckboxPropsDefs = {
    props: [
        {
            name: 'elementRef',
            type: 'HTMLInputElement'
        },
        {
            name: 'group',
            type: 'any',
            default: defaultCheckboxProps.group
        },
        {
            name: 'value',
            type: 'any',
            default: defaultCheckboxProps.value
        },
        {
            name: 'checked',
            type: 'boolean',
            default: defaultCheckboxProps.checked
        },
        {
            name: 'size',
            type: 'enum',
            values: Sizes1To3,
            default: defaultCheckboxProps.size
        },
        {
            name: 'color',
            type: 'enum',
            values: Colors,
            default: defaultCheckboxProps.color
        },
        {
            name: 'indeterminate',
            type: 'boolean',
            default: defaultCheckboxProps.indeterminate
        },
        {
            name: 'error',
            type: 'boolean',
            default: defaultCheckboxProps.error
        }
    ],
    slots: [],
    events: []
};
