import { Sizes1To4, Colors, Aligns, Variants } from '../../constants.js';
export const defaultLinkProps = {
    href: '',
    target: '_blank',
    rel: undefined,
    size: '2',
    variant: 'solid',
    color: 'gray',
    align: 'center',
    active: false,
    iconOnly: false,
    circle: false,
    fullWidth: false
};
export const docLinkPropsDefs = {
    props: [
        {
            name: 'elementRef',
            type: 'HTMLAnchorElement'
        },
        {
            name: 'href',
            type: 'string',
            default: defaultLinkProps.href
        },
        {
            name: 'target',
            type: 'string',
            default: defaultLinkProps.target
        },
        {
            name: 'rel',
            type: 'string',
            default: defaultLinkProps.rel
        },
        {
            name: 'size',
            type: 'enum',
            values: Sizes1To4,
            default: defaultLinkProps.size
        },
        {
            name: 'variant',
            type: 'enum',
            values: Variants,
            default: defaultLinkProps.variant
        },
        {
            name: 'color',
            type: 'enum',
            values: Colors,
            default: defaultLinkProps.color
        },
        {
            name: 'align',
            type: 'enum',
            values: Aligns,
            default: defaultLinkProps.align
        },
        {
            name: 'active',
            type: 'boolean',
            default: defaultLinkProps.active
        },
        {
            name: 'iconOnly',
            type: 'boolean',
            default: defaultLinkProps.iconOnly
        },
        {
            name: 'circle',
            type: 'boolean',
            default: defaultLinkProps.circle
        },
        {
            name: 'fullWidth',
            type: 'boolean',
            default: defaultLinkProps.fullWidth
        }
    ],
    slots: [],
    events: []
};
