<script lang="ts">
	import { Flexbox, Text } from '$lib/index';
	import DocBlocPropsTable from './DocBlocPropsTable.svelte';
	import DocBlocSlotsTable from './DocBlocSlotsTable.svelte';
	import type { DocPageData, DocNavSection } from '../types';
	import DocSectionLink from './DocSectionLink.svelte';

	export let section: DocNavSection;
	export let page: DocPageData;

	$: hasPropsBloc = page.props;
	$: hasSlotsBloc = page.slots && page.slots.length > 0;
	$: hasEventsBloc = page.events && page.events.length > 0;
	$: hasApiSection = hasPropsBloc || hasSlotsBloc || hasEventsBloc;
</script>

<Flexbox direction="column" gap="7" class="p-9 page-content">
	<!-- Section Heading -->
	<Flexbox as="section" direction="column">
		{#if section.title}
			<Text size="2" weight="bold" color="neutral">{section.title}</Text>
		{/if}
		{#if page.title}
			<Text as="h1" size="8" weight="bold">{page.title}</Text>
		{/if}
		{#if page.description}
			<Text as="p" size="5" class="mt-6">
				<em>{page.description}</em>
			</Text>
		{/if}
	</Flexbox>

	<!-- Section API reference -->
	{#if hasApiSection}
		<hr />
		<Flexbox as="section" direction="column" gap="5">
			<DocSectionLink text="API Reference"></DocSectionLink>

			{#if hasPropsBloc}
				<Flexbox direction="column" gap="4" id="#props">
					<Text as="h4" size="6" weight="bold">Props</Text>
					<DocBlocPropsTable props={page.props} />
				</Flexbox>
			{/if}

			{#if hasSlotsBloc}
				<Flexbox direction="column" gap="3">
					<Text as="h4" size="6" weight="bold">Slots</Text>
					<DocBlocSlotsTable slots={page.slots} />
				</Flexbox>
			{/if}

			{#if hasEventsBloc}
				<Flexbox direction="column" gap="3">
					<Text as="h4" size="6" weight="bold">Events</Text>
				</Flexbox>
			{/if}
		</Flexbox>
	{/if}

	<!-- Section Examples -->
	{#if page.demoComponent}
		<hr />
		<Flexbox as="section" direction="column" gap="5">
			<Flexbox direction="column" gap="3">
				{#if page.demoTitle}
					<DocSectionLink text={page.demoTitle}></DocSectionLink>
				{/if}
				<svelte:component this={page.demoComponent} />
			</Flexbox>
		</Flexbox>
	{/if}
</Flexbox>

<style lang="scss">
	:global(.page-content) {
		max-width: 900px;
		margin: 0 auto;
	}
</style>
