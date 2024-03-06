import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: ['phosphor-svelte']
	},
	build: {
		chunkSizeWarningLimit: 1300
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			'$lib-doc': path.resolve('./src/lib-doc'),
			'svelte-basic': path.resolve('./src/lib')
		}
	}
});
