import type { PropTypeUse, PropTypeStyle, PropTypeClass, PropTypeBoolean, PropTypeNumber } from '$lib/types';

export type PropsInputNumber = {
	elementRef?: HTMLInputElement | undefined;
	size?: '1' | '2' | '3';
	value?: PropTypeNumber;
	step?: PropTypeNumber;
	min?: PropTypeNumber;
	max?: PropTypeNumber;
	disabled?: PropTypeBoolean;
	required?: PropTypeBoolean;
	readonly?: PropTypeBoolean;
	//
	// use?: PropTypeUse;
	// style?: PropTypeStyle;
	// class?: PropTypeClass;
}; // & Omit<HTMLInputAttributes, 'size'>;

export const defaultPropsInputNumber: PropsInputNumber = {
	elementRef: undefined,
	size: '2',
	value: undefined,
	step: 1,
	min: undefined,
	max: undefined,
	disabled: false,
	required: false,
	readonly: false
};
