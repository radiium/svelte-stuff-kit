<script lang="ts">
	import { Flexbox, Text } from '$lib/index';
	import type { DocBlocApi } from '../types';
	import TableProps from './TableProps.svelte';
	import TableSlots from './TableSlots.svelte';

	export let data: DocBlocApi;

	$: hasPropsBloc = data.props;
	$: hasSlotsBloc = data.slots && data.slots.length > 0;
	$: hasEventsBloc = data.events && data.events.length > 0;
</script>

{#if data}
	<Flexbox as="section" direction="column" gap="5">
		{#if data.title}
			<Text as="h3" size="6" weight="bold">
				{data.title}
			</Text>
		{/if}

		<!-- Props -->
		{#if hasPropsBloc}
			<Flexbox direction="column" gap="4">
				<Text as="h4" size="5" weight="bold">Props</Text>
				<TableProps props={data.props} />
			</Flexbox>
		{/if}

		<!-- Slots -->
		{#if hasSlotsBloc}
			<Flexbox direction="column" gap="4">
				<Text as="h4" size="5" weight="bold">Slots</Text>
				<TableSlots slots={data.slots} />
			</Flexbox>
		{/if}

		<!-- Events -->
		{#if hasEventsBloc}
			<Flexbox direction="column" gap="3">
				<Text as="h4" size="6" weight="bold">Events</Text>
				// TODO
			</Flexbox>
		{/if}
	</Flexbox>
{/if}
