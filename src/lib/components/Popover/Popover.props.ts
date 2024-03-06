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

export const docPopoverPropsDefs = {
	props: [
		{
			name: 'isOpen',
			type: 'boolean',
			default: defaultPopoverProps.isOpen
		},
		{
			name: 'backdrop',
			type: 'boolean',
			default: defaultPopoverProps.backdrop
		},
		{
			name: 'arrow',
			type: 'boolean',
			default: defaultPopoverProps.arrow
		},
		{
			name: 'flip',
			type: 'boolean',
			default: defaultPopoverProps.flip
		},
		{
			name: 'strategy',
			type: 'enum',
			values: Strategies,
			default: defaultPopoverProps.strategy
		},
		{
			name: 'placement',
			type: 'enum',
			values: Placements,
			default: defaultPopoverProps.placement
		},
		{
			name: 'offset',
			type: 'number',
			default: defaultPopoverProps.offset
		},
		{
			name: 'transitionOpacity',
			type: 'number',
			default: defaultPopoverProps.transitionOpacity
		},
		{
			name: 'transitionY',
			type: 'number',
			default: defaultPopoverProps.transitionY
		},
		{
			name: 'transitionDuration',
			type: 'number',
			default: defaultPopoverProps.transitionDuration
		}
	],
	slots: [],
	events: []
};
