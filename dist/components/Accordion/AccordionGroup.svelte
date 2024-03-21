<script>import { setContext } from 'svelte';
import { writable } from 'svelte/store';
import { defaultAccordionGroupProps, contextKeyAccordionGroup } from './Accordion.props.js';
export let multi = defaultAccordionGroupProps.multi;
const current = writable();
setContext(contextKeyAccordionGroup, {
    setCurrent: (value) => {
        if (!!$current && $current?.key !== value.key && !multi) {
            $current.close();
        }
        current.set(value);
    }
});
</script>

<slot />
