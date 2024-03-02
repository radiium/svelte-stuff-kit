import { Sizes1To3 } from '$lib/constants';
import type { SelectOption, SelectProps } from './Select.types';

export const defaultSelectProps: SelectProps = {
	elementRef: undefined,
	options: [] as SelectOption[],
	value: undefined,
	size: '2',
	fullWidth: false
};

export const docSelectProps = {
	options: {
		type: 'Array',
		default: defaultSelectProps.options
	},
	value: {
		type: 'string | number',
		default: defaultSelectProps.value
	},
	size: {
		type: 'enum',
		values: Sizes1To3,
		default: defaultSelectProps.size
	},
	fullWidth: {
		type: 'boolean',
		default: defaultSelectProps.fullWidth
	}
};
