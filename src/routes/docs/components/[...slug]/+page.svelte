<script lang="ts">
    import type { PageData } from './$types.js';

    export let data: PageData;
</script>

<svelte:component this={data.page} />
