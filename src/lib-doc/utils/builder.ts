import type { ComponentType } from 'svelte';
import { slugify } from './slugify';
import { DocBlocType } from '../types';
import type { DocPage, DocBloc, DocBlocApi } from '../types';

export class SectionBuilder {
	private section: DocBloc[] = [];

	private constructor(text: string) {
		this.addH2(text, true);
	}

	static create(text: string): SectionBuilder {
		return new SectionBuilder(text);
	}

	addH2(text: string, isLink: boolean = false): this {
		this.section.push({
			type: DocBlocType.h2,
			text,
			isLink
		});
		return this;
	}
	addH3(text: string, isLink: boolean = false): this {
		this.section.push({
			type: DocBlocType.h3,
			text,
			isLink
		});
		return this;
	}
	addH4(text: string, isLink: boolean = false): this {
		this.section.push({
			type: DocBlocType.h4,
			text,
			isLink
		});
		return this;
	}
	addP(text: string): this {
		this.section.push({
			type: DocBlocType.p,
			text
		});
		return this;
	}
	addHr(): this {
		this.section.push({
			type: DocBlocType.hr
		});
		return this;
	}

	addApi(propsDefs: Omit<DocBlocApi, 'type'>): this {
		this.section.push({
			type: DocBlocType.api,
			...propsDefs
		});
		return this;
	}

	addDemo(component: ComponentType): this {
		this.section.push({
			type: DocBlocType.demo,
			component
		});
		return this;
	}

	get(): DocBloc[] {
		return this.section;
	}
}

export class PageBuilder {
	private page: DocPage;

	private constructor(title: string) {
		this.page = {
			id: slugify(title),
			title,
			sections: []
		};
	}

	static create(title: string): PageBuilder {
		return new PageBuilder(title);
	}

	addSection(blocs: DocBloc[]): this {
		this.page.sections.push(blocs);
		return this;
	}

	get(): DocPage {
		return this.page;
	}
}
