<script>
    import { page } from '$app/stores';
    import Flexbox from '$lib/components/Flexbox/Flexbox.svelte';
    import H1 from '../lib-doc/components/h1.svelte';
    import P from '../lib-doc/components/p.svelte';
</script>

<Flexbox direction="column" gap="3" class="p-9">
    <H1>{$page.status}</H1>
    <P>
        <code>
            {$page.error?.message}
        </code>
    </P>
</Flexbox>
