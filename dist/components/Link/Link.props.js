import { Sizes1To9, Colors, Weights, Aligns, TextTags, Transforms, TextUnderlines, TextWraps } from '../../constants.js';
export const defaultLinkProps = {
    elementRef: undefined,
    href: '',
    target: '_blank',
    rel: undefined,
    color: undefined,
    size: '3',
    weight: 'regular',
    transform: undefined,
    align: 'start',
    underline: 'auto',
    wrap: undefined,
    truncate: false,
    disabled: false
};
export const docLinkPropsDefs = {
    title: 'Link',
    props: [
        {
            name: 'elementRef',
            type: 'HTMLElement'
        },
        {
            name: 'color',
            type: 'enum',
            values: Colors,
            default: defaultLinkProps.color
        },
        {
            name: 'size',
            type: 'enum',
            values: Sizes1To9,
            default: defaultLinkProps.size
        },
        {
            name: 'weight',
            type: 'enum',
            values: Weights,
            default: defaultLinkProps.weight
        },
        {
            name: 'transform',
            type: 'enum',
            values: Transforms,
            default: defaultLinkProps.transform
        },
        {
            name: 'align',
            type: 'enum',
            values: Aligns,
            default: defaultLinkProps.align
        },
        {
            name: 'underline',
            type: 'enum',
            values: TextUnderlines,
            default: defaultLinkProps.underline
        },
        {
            name: 'wrap',
            type: 'enum',
            values: TextWraps,
            default: defaultLinkProps.wrap
        },
        {
            name: 'truncate',
            type: 'boolean',
            default: defaultLinkProps.truncate
        }
    ],
    slots: [
        {
            name: 'default'
        }
    ],
    events: []
};
