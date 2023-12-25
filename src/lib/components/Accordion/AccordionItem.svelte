<script lang="ts" context="module">
	let id = 0;
</script>

<script lang="ts">
	import { getContext } from 'svelte';
	import {
		type PropsAccordionItem,
		defaultPropsAccordionItem,
		type AccordionGroupContext,
		contextKeyAccordionGroup
	} from './Accordion.props';

	type $$Props = PropsAccordionItem;
	export let isOpen: PropsAccordionItem['isOpen'] = defaultPropsAccordionItem.isOpen;

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
