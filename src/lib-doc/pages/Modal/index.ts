import type { DocPageData } from '../../types';
import ModalSample from './ModalSample.svelte';

export const docModal: DocPageData = {
	id: 'modal',
	title: 'Modal',
	demoTitle: 'Examples',
	demoComponent: ModalSample,
	props: [
		{
			name: 'isOpen',
			type: 'boolean',
			defaultValue: 'false'
		},
		{
			name: 'size',
			type: '"1" | "2" | "3" | "4"',
			defaultValue: '3'
		},
		{
			name: 'closeOnBackdropClick',
			type: 'boolean',
			defaultValue: 'true'
		},
		{
			name: 'closeOnEscape',
			type: 'boolean',
			defaultValue: 'true'
		},
		{
			name: 'showCloseButton',
			type: 'boolean',
			defaultValue: 'true'
		},
		{
			name: 'blockScroll',
			type: 'boolean',
			defaultValue: 'true'
		}
	],
	slots: [
		{
			name: 'header',
			default: false
		},
		{
			name: 'content',
			default: false
		},
		{
			name: 'footer',
			default: false
		}
	]
};
