import type { ComponentType } from 'svelte';

export interface DocProps {
	[key: string]: {
		type: string;
		values?: readonly any[];
		default?: any;
	};
}
export interface DocSlots {
	name?: string;
	default: boolean;
}
export interface DocEvents {
	name: string;
	type: string;
}
export interface DocActions {
	name: string;
}

export interface SectionApi {
	title: string;
	props: DocProps;
	slots: DocSlots[];
	events: DocEvents[];
}
export interface SectionDemo {
	title: string;
	demos?: ComponentType[];
}

export interface DocPageData {
	id: string;
	title: string;
	description?: string;




	// sections: DocSection[]

	props?: DocProps;
	slots?: DocSlots[];
	events?: DocEvents[];
	actions?: DocActions[];

	demos?: ComponentType[];
	demoTitle?: string;
	demoComponent?: ComponentType;
}

export interface DocNavSection {
	id: string;
	title: string;
	pages: DocPageData[];
}

///
///
///
///
///

// export interface DocPageSection {
// 	title: string;
// 	description?: string;
// 	props: DocSlots[];
// 	events: DocEvents[];
// 	actions: DocActions[];
// 	demos: [];
// }

// export interface BlockTitle {
// 	type: 'title';
// 	data: string;
// }
// export interface BlockDescription {
// 	type: 'description';
// 	data: string;
// }

// export interface BlockProps {
// 	type: 'description';
// 	data: string;
// }

// export type PageSection = BlockTitle | BlockDescription;

// export interface DocPage {
// 	id: string;
// 	title: string;
// 	description?: string;
// 	sections: PageSection[];
// }

// const data: DocPage = {
// 	id: 'button',
// 	title: 'Button',
// 	description: 'button component',
// 	sections: []
// };
