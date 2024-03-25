import type { Placements } from '$lib/components/Popover/Popover.types.js';

export interface ThemeSelectProps {
    placement?: (typeof Placements)[number];
}
