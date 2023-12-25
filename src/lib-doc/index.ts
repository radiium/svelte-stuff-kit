import { docAccordion } from './pages/Accordion/index';
import { docButton } from './pages/Button/index';
import { docCard } from './pages/Card/index';
import { docCheckbox } from './pages/Checkbox/index';
import { docFlexbox } from './pages/Flexbox/index';
import { docForm } from './pages/Form/index';
import { docInput } from './pages/Input/index';
import { docInputNumber } from './pages/InputNumber/index';
import { docInputRange } from './pages/InputRange/index';
import { docInstallation } from './pages/Installation/index';
import { docList } from './pages/List/index';
import { docModal } from './pages/Modal/index';
import { docPopover } from './pages/Popover/index';
import { docRadioButton } from './pages/RadioButton/index';
import { docSelect } from './pages/Select/index';
import { docSwitch } from './pages/Switch/index';
import { docTable } from './pages/Table/index';
import { docText } from './pages/Text/index';
import { docTextarea } from './pages/Textarea/index';
import { docTheme } from './pages/Theme/index';
import { docTypography } from './pages/Typography/index';
import type { DocPageData, DocSection } from './types';

export const allDocs: DocSection[] = [
	{
		id: 'overview',
		title: 'Overview',
		pages: [docInstallation, docTheme]
	},
	{
		id: 'elements',
		title: 'Elements',
		pages: [docList, docTable, docTypography, docText]
	},
	{
		id: 'layout',
		title: 'Layout',
		pages: [docFlexbox]
	},
	{
		id: 'form-components',
		title: 'Form components',
		pages: [
			docButton,
			docInput,
			docInputNumber,
			docInputRange,
			docTextarea,
			docSelect,
			docRadioButton,
			docCheckbox,
			docSwitch
		]
	},
	{
		id: 'components',
		title: 'Components',
		pages: [docPopover, docModal, docCard, docAccordion]
	},
	{
		id: 'demo',
		title: 'Demo',
		pages: [docForm]
	}
];

export function getSectionById(id: string): DocSection | undefined {
	return allDocs.find((section: DocSection) => section.id === id);
}

export function getPageBySectionAndId(section: DocSection | undefined, id: string): DocPageData | undefined {
	return section?.pages.find((page: DocPageData) => page.id === id);
}
