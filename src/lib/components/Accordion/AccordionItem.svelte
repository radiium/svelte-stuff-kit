<script lang="ts" context="module">
    let id = 0;
</script>

<script lang="ts">
    import { getContext } from 'svelte';
    import { defaultAccordionItemProps, contextKeyAccordionGroup } from './Accordion.props';
    import type { AccordionGroupContext, AccordionItemProps } from './Accordion.types';

    type $$Props = AccordionItemProps;
    export let isOpen: $$Props['isOpen'] = defaultAccordionItemProps.isOpen;

    const accordionStore = {
        key: Symbol('accordion-' + id++),
        get isOpen() {
            return isOpen;
        },
        open: () => (isOpen = true),
        close: () => (isOpen = false),
        toggle: () => (isOpen = !isOpen)
    };

    const contextGroup = getContext<AccordionGroupContext>(contextKeyAccordionGroup);
    $: {
        if (isOpen) {
            contextGroup?.setCurrent(accordionStore);
        }
    }
</script>

<slot name="header" {...accordionStore} />

{#if isOpen}
    <slot {...accordionStore} />
{/if}
