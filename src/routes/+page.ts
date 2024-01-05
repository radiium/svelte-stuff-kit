import type { PageLoad } from './$types';
import { allDocs } from '../lib-doc/index';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const section = allDocs[0];
	redirect(302, ['/', section.id, '/', section.pages[0].id].join(''));
};
