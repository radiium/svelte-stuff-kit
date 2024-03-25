import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';

export const load: PageLoad = async ({ params, parent }) => {
    const { slug } = params;
    const { nav } = await parent();

    const page = nav?.[1].pages.find((page) => page.slug === slug);
    if (!page) {
        error(404, '"/docs/theme/' + slug + '" not fount');
    }
    return page;
};
