import { Colors, Sizes1To3 } from '../../constants';
export const defaultCheckboxProps = {
    elementRef: undefined,
    checked: false,
    indeterminate: false,
    size: '2',
    color: 'neutral',
    error: false
};
export const docCheckboxPropsDefs = {
    props: [
        {
            name: 'elementRef',
            type: 'HTMLInputElement'
        },
        {
            name: 'checked',
            type: 'boolean',
            default: defaultCheckboxProps.checked
        },
        {
            name: 'indeterminate',
            type: 'boolean',
            default: defaultCheckboxProps.indeterminate
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
            name: 'error',
            type: 'boolean',
            default: defaultCheckboxProps.error
        }
    ],
    slots: [],
    events: []
};
