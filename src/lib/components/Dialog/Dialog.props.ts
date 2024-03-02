import { Sizes1To4 } from '$lib/constants';
import type { DialogProps } from './Dialog.types';

export const defaultDialogProps: DialogProps = {
	isOpen: false,
	size: '3',
	closeOnBackdropClick: true,
	closeOnEscape: true,
	showCloseButton: true,
	blockScroll: true
};

export const docDialogProps = {
	isOpen: {
		type: 'boolean',
		default: defaultDialogProps.isOpen
	},
	size: {
		type: 'enum',
		values: Sizes1To4,
		default: defaultDialogProps.size
	},
	closeOnBackdropClick: {
		type: 'boolean',
		default: defaultDialogProps.closeOnBackdropClick
	},
	closeOnEscape: {
		type: 'boolean',
		default: defaultDialogProps.closeOnEscape
	},
	showCloseButton: {
		type: 'boolean',
		default: defaultDialogProps.showCloseButton
	},
	blockScroll: {
		type: 'boolean',
		default: defaultDialogProps.blockScroll
	}
};
