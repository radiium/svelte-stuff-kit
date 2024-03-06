<script lang="ts">
	import { Flexbox, Text } from '$lib/index';
	import { type DocPage, type DocNavSection, DocBlocType } from '../types';
	import DocSectionLink from './DocSectionLink.svelte';
	import DocSectionPropsDefs from './DocSectionPropsDefs.svelte';
	import DocSectionText from './DocSectionText.svelte';

	export let section: DocNavSection;
	export let page: DocPage;
</script>

<Flexbox direction="column" gap="9" class="p-9">
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

	<!-- Sections -->
	{#each page.sections as section}
		{#if section.length > 0}
			<Flexbox as="section" direction="column" gap="5">
				{#each section as block}
					{#if block.type === DocBlocType.h1}
						<Text as="h1" size="6" weight="bold">
							{block.text}
						</Text>
					{:else if block.type === DocBlocType.h2}
						<DocSectionLink text={block.text} />
					{:else if block.type === DocBlocType.h3}
						<Text as="h3" size="5" weight="bold">
							{block.text}
						</Text>
					{:else if block.type === DocBlocType.h4}
						<Text as="h4" size="4" weight="bold">
							{block.text}
						</Text>
					{:else if block.type === DocBlocType.p}
						<Text as="p" size="3">
							{block.text}
						</Text>
					{:else if block.type === DocBlocType.hr}
						<hr />
					{:else if block.type === DocBlocType.api}
						<DocSectionPropsDefs data={block} />
					{:else if block.type === DocBlocType.demo}
						{block.component}
						<svelte:component this={block.component} />
					{/if}
				{/each}
			</Flexbox>
		{/if}
	{/each}

	<!-- Section Examples -->
	{#if page.demoComponent}
		<hr />
		<Flexbox as="section" direction="column" gap="5">
			{#if page.demoTitle}
				<DocSectionLink text={page.demoTitle}></DocSectionLink>
			{/if}
			<svelte:component this={page.demoComponent} />
		</Flexbox>
	{/if}
</Flexbox>
