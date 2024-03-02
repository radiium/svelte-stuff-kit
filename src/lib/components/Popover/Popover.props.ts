import { Strategies, type PopoverProps, Placements } from './Popover.types';

export const defaultPopoverProps: PopoverProps = {
	isOpen: false,
	backdrop: false,
	arrow: true,
	flip: true,
	strategy: 'absolute',
	placement: 'top',
	offset: 0,
	transitionOpacity: 0,
	transitionY: 10,
	transitionDuration: 200
};

export const docPopoverProps = {
	isOpen: {
		type: 'boolean',
		default: defaultPopoverProps.isOpen
	},
	backdrop: {
		type: 'boolean',
		default: defaultPopoverProps.backdrop
	},
	arrow: {
		type: 'boolean',
		default: defaultPopoverProps.arrow
	},
	flip: {
		type: 'boolean',
		default: defaultPopoverProps.flip
	},
	strategy: {
		type: 'enum',
		values: Strategies,
		default: defaultPopoverProps.strategy
	},
	placement: {
		type: 'enum',
		values: Placements,
		default: defaultPopoverProps.placement
	},
	offset: {
		type: 'number',
		default: defaultPopoverProps.offset
	},
	transitionOpacity: {
		type: 'number',
		default: defaultPopoverProps.transitionOpacity
	},
	transitionY: {
		type: 'number',
		default: defaultPopoverProps.transitionY
	},
	transitionDuration: {
		type: 'number',
		default: defaultPopoverProps.transitionDuration
	}
};
