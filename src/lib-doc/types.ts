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

export interface DocPageData {
	id: string;
	title: string;
	description?: string;
	props?: DocProps;
	slots?: DocSlots[];
	events?: DocEvents[];
	actions?: DocActions[];
	demoTitle?: string;
	demoComponent?: ComponentType;
}

export interface DocNavSection {
	id: string;
	title: string;
	pages: DocPageData[];
}
