import { Sizes1To3, Colors } from '$lib/constants';
import type { SwitchProps } from './Switch.types';

export const defaultSwitchProps: SwitchProps = {
	elementRef: undefined,
	size: '2',
	color: 'neutral',
	error: false
};

export const docSwitchPropsDefs = {
	title: 'Switch',
	props: [
		{
			name: 'elementRef',
			type: 'HTMLInputElement'
		},
		{
			name: 'size',
			type: 'enum',
			values: Sizes1To3,
			default: defaultSwitchProps.size
		},
		{
			name: 'color',
			type: 'enum',
			values: Colors,
			default: defaultSwitchProps.color
		},
		{
			name: 'error',
			type: 'boolean',
			default: defaultSwitchProps.error
		}
	],
	slots: [],
	events: []
};
