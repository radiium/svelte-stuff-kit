<script>import { setContext } from 'svelte';
import { writable } from 'svelte/store';
import { defaultPropsAccordionGroup, contextKeyAccordionGroup } from './Accordion.props';
export let multi = defaultPropsAccordionGroup.multi;
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
