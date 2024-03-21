<script lang="ts" context="module">
    import pre from './pre.svelte';
    import h1 from './h1.svelte';
    import h2 from './h2.svelte';
    import h3 from './h3.svelte';
    import h4 from './h4.svelte';
    import p from './p.svelte';

    export { pre, h1, h2, h3, h4, p };
</script>

<script>
    import { Flexbox } from '$lib/index.js';
    /** @type {string} */
    export let title;
    /** @type {string} */
    export let description;
</script>

<Flexbox direction="column" class="content-wrapper">
    <!-- Headers -->
    <Flexbox as="header" direction="column">
        {#if title}
            <svelte:component this={h1}>{title}</svelte:component>
        {/if}
        {#if description}
            <svelte:component this={p}>{description}</svelte:component>
        {/if}
    </Flexbox>

    <!-- Content Markdown -->
    <slot />
</Flexbox>

<style lang="scss">
    :global(.content-wrapper) {
        padding: var(--space-9);
    }

    @media (max-width: 825px) {
        :global(.content-wrapper) {
            padding: var(--space-5);
        }
    }
</style>
