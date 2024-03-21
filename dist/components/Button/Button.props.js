import { Sizes1To4, Aligns, Colors, Variants } from '../../constants.js';
export const ButtonGroupContextKey = 'ButtonGroupContextKey';
export const defaultButtonProps = {
    size: '2',
    variant: 'solid',
    color: 'gray',
    align: 'center',
    active: false,
    iconOnly: false,
    circle: false,
    fullWidth: false
};
export const docButtonPropsDefs = {
    props: [
        {
            name: 'elementRef',
            type: 'HTMLButtonElement'
        },
        {
            name: 'variant',
            type: 'enum',
            values: Variants,
            default: defaultButtonProps.variant
        },
        {
            name: 'size',
            type: 'enum',
            values: Sizes1To4,
            default: defaultButtonProps.size
        },
        {
            name: 'color',
            type: 'enum',
            values: Colors,
            default: defaultButtonProps.color
        },
        {
            name: 'align',
            type: 'enum',
            values: Aligns,
            default: defaultButtonProps.align
        },
        {
            name: 'active',
            type: 'boolean',
            default: defaultButtonProps.active
        },
        {
            name: 'iconOnly',
            type: 'boolean',
            default: defaultButtonProps.iconOnly
        },
        {
            name: 'circle',
            type: 'boolean',
            default: defaultButtonProps.circle
        },
        {
            name: 'fullWidth',
            type: 'boolean',
            default: defaultButtonProps.fullWidth
        }
    ],
    slots: [
        {
            default: true
        }
    ],
    events: []
};
