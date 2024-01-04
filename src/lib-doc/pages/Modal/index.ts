import { docPropsModal } from '$lib/components/Modal/Modal.props';
import type { DocPageData } from '../../types';
import ModalSample from './ModalSample.svelte';

export const docModal: DocPageData = {
	id: 'modal',
	title: 'Modal',
	demoTitle: 'Examples',
	demoComponent: ModalSample,
	props: docPropsModal,
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
