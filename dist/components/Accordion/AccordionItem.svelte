<script context="module">"use strict";
let id = 0;
</script>

<script>import { getContext, afterUpdate } from 'svelte';
import { defaultAccordionItemProps, contextKeyAccordionGroup } from './Accordion.props.js';
export let isOpen = defaultAccordionItemProps.isOpen;
afterUpdate(() => {
    accordionStore.isOpen = isOpen;
});
const accordionStore = {
    key: Symbol('accordion-' + id++),
    isOpen,
    open: () => (isOpen = true),
    close: () => (isOpen = false),
    toggle: () => (isOpen = !isOpen)
};
const contextGroup = getContext(contextKeyAccordionGroup);
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
