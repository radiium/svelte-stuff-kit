<script context="module">"use strict";
let id = 0;
</script>

<script>import { getContext } from 'svelte';
import { defaultAccordionItemProps, contextKeyAccordionGroup } from './Accordion.props';
export let isOpen = defaultAccordionItemProps.isOpen;
const accordionStore = {
    key: Symbol('accordion-' + id++),
    get isOpen() {
        return isOpen;
    },
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
