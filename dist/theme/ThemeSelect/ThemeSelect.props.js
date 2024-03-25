import { Placements } from '../../components/Popover/Popover.types.js';
export const defaultThemeSelectProps = {
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
