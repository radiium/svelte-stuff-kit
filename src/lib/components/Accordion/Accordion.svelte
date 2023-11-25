<script lang="ts">
	import { getContext } from 'svelte';
	import type { AccordionContext } from './types';

	export let isOpen = false;

	const close = () => (isOpen = false);
	const toggle = () => (isOpen = !isOpen);

	const context = getContext<AccordionContext | false>('Accordion');
	const setCurrent = context && context.setCurrent;

	$: isOpen && setCurrent && setCurrent(close);
</script>

<slot name="header" {toggle} {isOpen} />

{#if isOpen}
	<slot />
{/if}
