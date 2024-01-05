// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { phosphorSvelteOptimize } from "phosphor-svelte/preprocessor"

const path = fileURLToPath(new URL('package.json', import.meta.url));
const pkg = JSON.parse(readFileSync(path, 'utf8'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: [phosphorSvelteOptimize(), sveltePreprocess({
        scss: {
            prependData: "@use './src/lib/scss/mixins.scss' as *;"
        },
    })],
    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter(),
        version: {
            name: pkg.version
        },
    },
    vitePlugin: {
        inspector: {
            toggleKeyCombo: 'meta-shift',
            showToggleButton: 'always',
            toggleButtonPos: 'bottom-right'
        }
    }
};

export default config;
