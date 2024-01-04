import { Sizes1To4 } from '$lib/types';

export type PropsModal = {
	isOpen?: boolean;
	size?: (typeof Sizes1To4)[number];
	closeOnBackdropClick?: boolean;
	closeOnEscape?: boolean;
	showCloseButton?: boolean;
	blockScroll?: boolean;
};

export const defaultPropsModal: PropsModal = {
	isOpen: false,
	size: '3',
	closeOnBackdropClick: true,
	closeOnEscape: true,
	showCloseButton: true,
	blockScroll: true
};

export const docPropsModal = {
	isOpen: {
		type: 'boolean',
		default: defaultPropsModal.isOpen
	},
	size: {
		type: 'enum',
		values: Sizes1To4,
		default: defaultPropsModal.size
	},
	closeOnBackdropClick: {
		type: 'boolean',
		default: defaultPropsModal.closeOnBackdropClick
	},
	closeOnEscape: {
		type: 'boolean',
		default: defaultPropsModal.closeOnEscape
	},
	showCloseButton: {
		type: 'boolean',
		default: defaultPropsModal.showCloseButton
	},
	blockScroll: {
		type: 'boolean',
		default: defaultPropsModal.blockScroll
	}
};
