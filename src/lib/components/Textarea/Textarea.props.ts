import { Sizes1To3, Colors } from '$lib/types';

export type PropsTextarea = {
	elementRef?: HTMLTextAreaElement | undefined;
	value?: string;
	size?: (typeof Sizes1To3)[number];
	color: (typeof Colors)[number];
	disabled?: boolean;
	required?: boolean;
	readonly?: boolean;
	error?: boolean;
	fullWidth?: boolean;
};

export const defaultPropsTextarea: PropsTextarea = {
	elementRef: undefined,
	value: '',
	size: '2',
	color: 'neutral',
	disabled: false,
	required: false,
	readonly: false,
	error: false,
	fullWidth: false
};

export const docPropsTextarea = {
	value: {
		type: 'string',
		default: defaultPropsTextarea.value
	},
	size: {
		type: 'enum',
		values: Sizes1To3,
		default: defaultPropsTextarea.size
	},
	color: {
		type: 'enum',
		values: Colors,
		default: defaultPropsTextarea.color
	},
	disabled: {
		type: 'boolean',
		default: defaultPropsTextarea.disabled
	},
	required: {
		type: 'boolean',
		default: defaultPropsTextarea.required
	},
	readonly: {
		type: 'boolean',
		default: defaultPropsTextarea.readonly
	},
	error: {
		type: 'boolean',
		default: defaultPropsTextarea.error
	},
	fullWidth: {
		type: 'boolean',
		default: defaultPropsTextarea.fullWidth
	}
};
