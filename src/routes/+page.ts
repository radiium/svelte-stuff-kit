import { redirect } from '@sveltejs/kit';
import type { PageData } from './$types.js';

export const prerender = false;
export const ssr = false;

export const load: PageData = async ({ params }) => {
    redirect(303, '/docs');
};
