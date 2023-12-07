<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { AccordionContext, AccordionStore } from './types';

	const current = writable<AccordionStore>(false);

	setContext<AccordionContext>('Accordion', {
		setCurrent: (fn: () => void) => {
			$current && $current !== fn && $current();
			current.set(fn);
		}
	});
</script>

<slot />
