<script lang="ts">
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import { defaultAccordionGroupProps, contextKeyAccordionGroup } from './Accordion.props';
    import type { AccordionGroupContext, AccordionGroupProps, AccordionStore } from './Accordion.types';

    type $$Props = AccordionGroupProps;
    export let multi: $$Props['multi'] = defaultAccordionGroupProps.multi;

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
