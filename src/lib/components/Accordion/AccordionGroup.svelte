<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import {
		defaultPropsAccordionGroup,
		contextKeyAccordionGroup,
		type AccordionStore,
		type PropsAccordionGroup,
		type AccordionGroupContext
	} from './Accordion.props';

	export let multi: PropsAccordionGroup['multi'] = defaultPropsAccordionGroup.multi;

	const current = writable<AccordionStore | undefined>();

	setContext<AccordionGroupContext>(contextKeyAccordionGroup, {
		setCurrent: (value: AccordionStore) => {
			if (!!$current && $current?.key !== value.key && !multi) {
				$current.close();
			}
			current.set(value);
		}
	});
</script>

<slot />
