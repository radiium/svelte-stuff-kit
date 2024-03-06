import { docDialogPropsDefs } from '$lib/components/Dialog/Dialog.props';
import type { DocPage } from '../../types';
import DialogSample from './DialogSample.svelte';

export const docDialog: DocPage = {
	id: 'dialog',
	title: 'Dialog',
	demoTitle: 'Examples',
	demoComponent: DialogSample,
	sections: [docDialogPropsDefs]
};
