import { docAccordion } from './pages/Accordion';
import { docButton } from './pages/Button';
import { docCard } from './pages/Card';
import { docCheckbox } from './pages/Checkbox';
import { docFlexbox } from './pages/Flexbox';
import { docForm } from './pages/Form';
import { docInput } from './pages/Input';
import { docInputNumber } from './pages/InputNumber';
import { docInputRange } from './pages/InputRange';
import { docInstallation } from './pages/Installation';
import { docList } from './pages/List';
import { docModal } from './pages/Modal';
import { docPopover } from './pages/Popover';
import { docRadioButton } from './pages/RadioButton';
import { docSelect } from './pages/Select';
import { docSwitch } from './pages/Switch';
import { docTable } from './pages/Table';
import { docText } from './pages/Text';
import { docTextarea } from './pages/Textarea';
import { docTheme } from './pages/Theme';
import { docTypography } from './pages/Typography';
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
