<script lang="ts">
    import type { DocBlocApi } from '../types';
    import TableProps from './TableProps.svelte';
    import TableSlots from './TableSlots.svelte';
    import H4 from './h4.svelte';

    export let data: DocBlocApi;

    $: hasPropsBloc = data.props && data.props.length > 0;
    $: hasSlotsBloc = data.slots && data.slots.length > 0;
    $: hasEventsBloc = data.events && data.events.length > 0;
</script>

{#if data}
    <!-- Props -->
    {#if hasPropsBloc}
        <svelte:component this={H4}>Props</svelte:component>
        <TableProps props={data.props} />
    {/if}

    <!-- Slots -->
    {#if hasSlotsBloc}
        <svelte:component this={H4}>Slots</svelte:component>
        <TableSlots slots={data.slots} />
    {/if}

    <!-- Events -->
    {#if hasEventsBloc}
        <svelte:component this={H4}>Events</svelte:component>
        // TODO
    {/if}
{/if}
