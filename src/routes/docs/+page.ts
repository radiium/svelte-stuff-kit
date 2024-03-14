import type { PageData } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageData = async ({ params }) => {
    if (params.slug === "components") {
		redirect(303, "/docs/components/accordion");
	}

    redirect(303, '/docs/installation');
};
