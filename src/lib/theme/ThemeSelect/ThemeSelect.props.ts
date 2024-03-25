import { Placements } from '$lib/components/Popover/Popover.types.js';
import type { ThemeSelectProps } from './ThemeSelect.types.js';

export const defaultThemeSelectProps: ThemeSelectProps = {
    placement: 'bottom'
};
export const docThemeSelectPropsDefs = {
    title: 'ThemeSelect',
    props: [
        {
            name: 'placement',
            type: 'enum',
            values: Placements,
            default: defaultThemeSelectProps.placement
        }
    ],
    slots: [],
    events: []
};
