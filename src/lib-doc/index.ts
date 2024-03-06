import { docPageAccordion} from './pages/Accordion/index';
import { docPageButton } from './pages/Button/index';
import { docCard } from './pages/Card/index';
import { docCheckbox } from './pages/Checkbox/index';
import { docFlexbox } from './pages/Flexbox/index';
import { docForm } from './pages/Form/index';
import { docInput } from './pages/Input/index';
import { docInputNumber } from './pages/InputNumber/index';
import { docInputRange } from './pages/InputRange/index';
import { docInstallation } from './pages/Installation/index';
import { docDialog } from './pages/Dialog/index';
import { docPopover } from './pages/Popover/index';
import { docRadioButton } from './pages/RadioButton/index';
import { docSelect } from './pages/Select/index';
import { docSwitch } from './pages/Switch/index';
import { docText } from './pages/Text/index';
import { docTextarea } from './pages/Textarea/index';
import { docTheme } from './pages/Theme/index';
import type { DocPage, DocNavSection } from './types';

export const allDocs: DocNavSection[] = [
	{
		id: 'overview',
		title: 'Overview',
		pages: [docInstallation, docTheme]
	},
	// {
	// 	id: 'elements',
	// 	title: 'Elements',
	// 	pages: [docList, docTable, docTypography]
	// },
	{
		id: 'components',
		title: 'Components',
		pages: [
			docPageAccordion,
			docPageButton,
			docCard,
			docCheckbox,
			docFlexbox,
			docInput,
			docInputNumber,
			docInputRange,
			docDialog,
			docPopover,
			docRadioButton,
			docSelect,
			docSwitch,
			docText,
			docTextarea
		]
	},
	{
		id: 'demo',
		title: 'Demo',
		pages: [docForm]
	}
];

export function getSectionById(id: string): DocNavSection | undefined {
	return allDocs.find((section: DocNavSection) => section.id === id);
}

export function getPageBySectionAndId(
	section: DocNavSection | undefined,
	id: string
): DocPage | undefined {
	return section?.pages.find((page: DocPage) => page.id === id);
}
