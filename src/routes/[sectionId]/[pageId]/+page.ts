import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getPageBySectionAndId, getSectionById } from '../../../lib-doc/index';
import type { DocPageData, DocNavSection } from '../../../lib-doc/types';

export const load: PageLoad = ({ params }) => {
	const section = getSectionById(params.sectionId);
	const page = getPageBySectionAndId(section, params.pageId);
	if (section && page) {
		return {
			section,
			page
		} as {
			section: DocNavSection;
			page: DocPageData;
		};
	}

	error(404, 'Introuvable');
};
