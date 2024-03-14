<script lang="ts" context="module">
    export { default as pre } from './pre.svelte';
</script>

<script>
    import { Flexbox, Text } from '$lib';
    /** @type {string} */
    export let title;
    /** @type {string} */
    export let description;
</script>

<Flexbox direction="column" class="content-wrapper">
    <Flexbox as="header" direction="column" class="pb-9">
        {#if title}
            <Text as="h1" size="8" weight="bold">{title}</Text>
        {/if}
        {#if description}
            <Text as="p" size="3">{description}</Text>
        {/if}
    </Flexbox>
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
