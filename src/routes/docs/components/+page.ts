import type { PageData } from './$types';
import { error, redirect } from '@sveltejs/kit';

export const load: PageData = async ({ params, parent }) => {
    const { slug } = params;
    const { nav } = await parent();

    const page = nav?.[1]?.pages?.[0];
    if (!page) {
        error(404, '/docs/components/' + slug + ' not fount');
    }
    redirect(303, page.href);
};
