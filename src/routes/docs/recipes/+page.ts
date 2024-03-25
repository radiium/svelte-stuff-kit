import type { PageData } from './$types.js';
import { error, redirect } from '@sveltejs/kit';

export const load: PageData = async ({ params, parent }) => {
    const { slug } = params;
    const { nav } = await parent();

    const page = nav?.[3]?.pages?.[0];
    if (!page) {
        error(404, '"/docs/recipes/' + slug + '" not fount');
    }
    redirect(303, page.href);
};
