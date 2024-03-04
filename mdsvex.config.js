/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import highlighter from './mdsvex.highlighter.mjs';


const config = defineConfig({
    extensions: ['.svelte.md', '.md', '.svx'],
    highlight: {
        highlighter
    }
});

export default config;
