<script lang="ts">
	import { Text } from '$lib/index';
	// import { TextType, type DocSectionText } from '../types';
	import DocSectionLink from './DocSectionLink.svelte';

	// export let section: DocSectionText;
</script>

<!-- {#if section}
	{#if section.textType === TextType.h2}
		<DocSectionLink text={section.text} />
	{:else if section.textType === TextType.h3}
		<Text as="h3" size="5" weight="bold" class="mt-7 mb-2">
			{section.text}
		</Text>
	{:else if section.textType === TextType.p}
		<Text as="p" size="3">
			{section.text}
		</Text>
	{/if}
{/if} -->
