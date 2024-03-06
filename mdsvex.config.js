import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import examples from 'mdsvexamples'

const mdsvexExtensions = ['.svelte.md', '.md', '.svx'];
const config = defineConfig({
    extensions: mdsvexExtensions,
    layout: './src/lib-doc/md/Layout.svelte',
    remarkPlugins: [
        [
            examples,
            {
                defaults: {
                    Wrapper: '/src/lib-doc/md/CodeWrapper.svelte',
                }
            }
        ]
    ],
    rehypePlugins: []
});

export default config;
export { mdsvexExtensions }
