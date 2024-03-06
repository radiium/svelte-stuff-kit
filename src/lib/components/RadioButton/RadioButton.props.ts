import { Sizes1To3, Colors } from '$lib/constants';
import type { RadioButtonProps } from './RadioButton.types';

export const defaultRadioButtonProps: RadioButtonProps = {
	elementRef: undefined,
	group: undefined,
	size: '2',
	color: 'neutral',
	error: false
};

export const docRadioButtonPropsDefs = {
	title: 'RadioButton',
	props: [
		{
			name: 'elementRef',
			type: 'HTMLInputElement'
		},
		{
			name: 'group',
			type: 'any',
			default: defaultRadioButtonProps.group
		},
		{
			name: 'size',
			type: 'enum',
			values: Sizes1To3,
			default: defaultRadioButtonProps.size
		},
		{
			name: 'color',
			type: 'enum',
			values: Colors,
			default: defaultRadioButtonProps.color
		},
		{
			name: 'error',
			type: 'boolean',
			default: defaultRadioButtonProps.error
		}
	],
	slots: [],
	events: []
};
