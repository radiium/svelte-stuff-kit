import type { AriaAttributes, HTMLAttributes } from 'svelte/elements';
import type { PropTypeUse, PropTypeStyle, PropTypeClass, PropTypeBoolean } from '$lib/types';

export type PropsModal = {
	size?: '1' | '2' | '3' | '4';
	isOpen?: PropTypeBoolean;
	closeOnBackdropClick?: PropTypeBoolean;
	closeOnEscape?: PropTypeBoolean;
	showCloseButton?: PropTypeBoolean;
	blockScroll?: PropTypeBoolean;
	//
	// use?: PropTypeUse;
	// style?: PropTypeStyle;
	// class?: PropTypeClass;
} & HTMLAttributes<HTMLElement> &
	AriaAttributes;

export const defaultPropsModal: PropsModal = {
	size: '3',
	isOpen: false,
	closeOnBackdropClick: true,
	closeOnEscape: true,
	showCloseButton: true,
	blockScroll: true
};
