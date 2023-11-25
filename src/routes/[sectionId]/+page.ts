import type { PageLoad } from './$types';
import { getSectionById } from '../../lib-doc';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const section = getSectionById(params.sectionId);
	if (section) {
		throw redirect(302, ['/', section.id, '/', section.pages[0].id].join(''));
	}
};
