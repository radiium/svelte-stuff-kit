import { Sizes1To4, Colors, Aligns, Variants } from '../../constants';
export const defaultLinkProps = {
    href: '',
    target: '_blank',
    rel: undefined,
    size: '2',
    variant: 'solid',
    color: 'neutral',
    align: 'center',
    active: false,
    iconOnly: false,
    circle: false,
    fullWidth: false
};
export const docLinkProps = {
    href: {
        type: 'string',
        default: defaultLinkProps.href
    },
    target: {
        type: 'string',
        default: defaultLinkProps.target
    },
    rel: {
        type: 'string',
        default: defaultLinkProps.rel
    },
    size: {
        type: 'enum',
        values: Sizes1To4,
        default: defaultLinkProps.size
    },
    variant: {
        type: 'enum',
        values: Variants,
        default: defaultLinkProps.variant
    },
    color: {
        type: 'enum',
        values: Colors,
        default: defaultLinkProps.color
    },
    align: {
        type: 'enum',
        values: Aligns,
        default: defaultLinkProps.align
    },
    active: {
        type: 'boolean',
        default: defaultLinkProps.active
    },
    iconOnly: {
        type: 'boolean',
        default: defaultLinkProps.iconOnly
    },
    circle: {
        type: 'boolean',
        default: defaultLinkProps.circle
    },
    fullWidth: {
        type: 'boolean',
        default: defaultLinkProps.fullWidth
    }
};
