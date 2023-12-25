import type { PropTypeBoolean, PropTypeNumber } from '$lib';
import type { Placement, Strategy } from '@floating-ui/dom';
import type { FlyParams } from 'svelte/transition';

export type PopoverStore = {
	readonly isOpen: PropTypeBoolean;
	open: () => void;
	close: () => void;
};

export type PropsPopover = {
	isOpen?: PropTypeBoolean;
	backdrop?: PropTypeBoolean;
	arrow?: PropTypeBoolean;
	strategy?: Strategy;
	placement?: Placement;
	offset?: PropTypeNumber;
	flip?: PropTypeBoolean;
	transition?: FlyParams;
};

export const defaultPropsPopover: PropsPopover = {
	isOpen: false,
	backdrop: false,
	arrow: true,
	strategy: 'absolute',
	placement: 'top',
	offset: 0,
	flip: true,
	transition: {
		opacity: 0,
		y: 10,
		duration: 200
	}
};
