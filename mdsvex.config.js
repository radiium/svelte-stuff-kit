import { defineMDSveXConfig as defineConfig, code_highlighter } from 'mdsvex';
import examples from 'mdsvexamples'
import { visit } from 'unist-util-visit';

function escape(src) {
    const res = src.replace(/`/g, '\\`').replace(/\$\{/g, '\\$\\{')
    return res
}
const RE_PARSE_META = /(\w+=\d+|\w+="[^"]*"|\w+=\[[^\]]*\]|\w+)/g
function parseMeta(meta) {
    const result = {}
    if (!meta) {
        return result
    }
    const meta_parts = meta.match(RE_PARSE_META) ?? []
    for (let i = 0; i < meta_parts.length; i++) {
        const [key, value = 'true'] = meta_parts[i].split('=')

        try {
            result[key] = JSON.parse(value)
        } catch (/** @type {any} */e) {
            console.error(e)
            const error = new Error(`Unable to parse meta \`${key}=${value}\` - ${e.message}`)
            error.stack = e.stack
            throw error
        }
    }

    return result
}


const mdsvexExtensions = ['.svelte.md', '.md', '.svx'];
const config = defineConfig({
    extensions: mdsvexExtensions,
    layout: './src/lib-doc/md/Layout.svelte',
    highlight: {
        highlighter: (code, lang, meta) => {
            const highlighted = code_highlighter(code, lang, meta);
            const escapedCode = `String.raw\`${escape(code)}\``
            const escapedMeta = escape(JSON.stringify({ ...parseMeta(meta), lang }))
            return `<Components.pre 
                src={${escapedCode}} 
                meta={${escapedMeta}}>${highlighted}</Components.pre>`;
        }
    },
    remarkPlugins: [
        [
            examples,
            {
                defaults: {
                    Wrapper: '/src/lib-doc/md/CodeWrapper.svelte',
                    hideScript: true,
                    hideStyle: true
                }
            }
        ]
    ],
    rehypePlugins: []
});

export default config;
export { mdsvexExtensions }
