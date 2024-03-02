import { docDialogProps } from '$lib/components/Dialog/Dialog.props';
import type { DocPageData } from '../../types';
import DialogSample from './DialogSample.svelte';

export const docDialog: DocPageData = {
	id: 'dialog',
	title: 'Dialog',
	demoTitle: 'Examples',
	demoComponent: DialogSample,
	props: docDialogProps,
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
