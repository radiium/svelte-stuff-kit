import { Sizes1To9, Colors, Weights, Aligns, TextTags, Transforms } from '$lib/constants.js';
import type { TextProps } from './Text.types.js';

export const defaultTextProps: TextProps = {
    elementRef: undefined,
    as: 'span',
    color: undefined,
    size: '3',
    weight: 'regular',
    transform: undefined,
    align: 'start',
    disabled: false
};

export const docTextPropsDefs = {
    title: 'Text',
    props: [
        {
            name: 'elementRef',
            type: 'HTMLElement'
        },
        {
            name: 'as',
            type: 'keyof SvelteHTMLElements',
            default: defaultTextProps.as
        },
        {
            name: 'color',
            type: 'enum',
            values: Colors,
            default: defaultTextProps.color
        },
        {
            name: 'size',
            type: 'enum',
            values: Sizes1To9,
            default: defaultTextProps.size
        },
        {
            name: 'weight',
            type: 'enum',
            values: Weights,
            default: defaultTextProps.weight
        },
        {
            name: 'transform',
            type: 'enum',
            values: Transforms,
            default: defaultTextProps.transform
        },
        {
            name: 'align',
            type: 'enum',
            values: Aligns,
            default: defaultTextProps.align
        }
    ],
    slots: [],
    events: []
};
