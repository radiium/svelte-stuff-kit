import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import mdsvexamples from 'mdsvexamples/vite';
import path from 'node:path';

export default defineConfig({
    plugins: [sveltekit(), mdsvexamples],
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
            svxui: path.resolve('./src/lib')
        }
    }
});
