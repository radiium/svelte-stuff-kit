<script lang="ts">
    import Card from '$lib/components/Card/Card.svelte';
    import Flexbox from '$lib/components/Flexbox/Flexbox.svelte';

</script>

<Card size="0" class="mt-3 mb-5 playground">
    <Flexbox alignItems="stretch" class="playground-content">
        <Flexbox as="section" class="p-9" alignItems="center" justify="center" grow="1">
            <slot name="component" />
        </Flexbox>
        <div class="separator"></div>
        <Flexbox direction="column" as="section" alignItems="start" gap="3" class="playground-form p-3">
            <slot name="form" />
        </Flexbox>
    </Flexbox>
</Card>

<style lang="scss">
    :global(.playground) {
        min-height: 260px;
        min-width: 350px;
    }
    :global(.playground-content) {
        min-height: 260px;
        min-width: 350px;
    }

    :global(.playground-form) {
        overflow-x: auto;
        min-width: 40%;
    }

    .separator {
        width: 1px;
        min-height: 100%;
        background-color: var(--gray-5);
        flex-shrink: 0;
    }
</style>
