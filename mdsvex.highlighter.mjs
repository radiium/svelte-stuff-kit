/* eslint-disable no-useless-escape */
import hljs from 'highlight.js';

hljs.registerLanguage('svelte', (hljs) => {
    return {
        subLanguage: 'xml',
        contains: [
            hljs.COMMENT('<!--', '-->', {
                relevance: 10
            }),
            {
                begin: /^(\s*)(<script(\s*context="module")?>)/gm,
                end: /^(\s*)(<\/script>)/gm,
                subLanguage: 'javascript',
                excludeBegin: true,
                excludeEnd: true,
                contains: [
                    {
                        begin: /^(\s*)(\$:)/gm,
                        end: /(\s*)/gm,
                        className: 'keyword'
                    }
                ]
            },
            {
                begin: /^(\s*)(<style.*>)/gm,
                end: /^(\s*)(<\/style>)/gm,
                subLanguage: 'css',
                excludeBegin: true,
                excludeEnd: true
            },
            {
                begin: /\{/gm,
                end: /\}/gm,
                subLanguage: 'javascript',
                contains: [
                    {
                        begin: /[\{]/,
                        end: /[\}]/,
                        skip: true
                    },
                    {
                        begin: /([#:\/@])(if|else|each|await|then|catch|debug|html)/gm,
                        className: 'keyword',
                        relevance: 10
                    }
                ]
            }
        ]
    };
});

/**
 * @param code {string} - code to highlight
 * @param lang {string} - code language
 * @param meta {string} - code meta
 * @returns {string} - highlighted html
 */
function highlighter(code, lang, meta) {
    const html = hljs.highlight(code, { language: lang }).value
    return `<pre><code>{@html \`${html}\` }</code></pre>`
}


export default highlighter;


