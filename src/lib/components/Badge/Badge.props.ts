import { Colors, Sizes1To2, VariantsBadge } from '$lib/constants';
import type { BadgeProps } from './Badge.types';

export const defaultBadgeProps: BadgeProps = {
    color: 'neutral',
    size: '1',
    variant: 'soft',
    disabled: false
};

export const docBadgePropsDefs = {
    props: [
        {
            name: 'elementRef',
            type: 'HTMLSpanElement'
        },
        {
            name: 'size',
            type: 'enum',
            values: Sizes1To2,
            default: defaultBadgeProps.size
        },
        {
            name: 'variant',
            type: 'enum',
            values: VariantsBadge,
            default: defaultBadgeProps.variant
        },
        {
            name: 'color',
            type: 'enum',
            values: Colors,
            default: defaultBadgeProps.color
        },
        {
            name: 'disabled',
            type: 'boolean',
            default: defaultBadgeProps.disabled
        }
    ],
    slots: [
        {
            default: true
        }
    ],
    events: []
};
