<script lang="ts" context="module">
	import pre from './pre.svelte';
	export { pre };
</script>

<script lang="ts">
	import { Flexbox, Text } from '$lib';

	export let title;
	export let description;
</script>

<Flexbox direction="column" gap="9" class="p-9">
	<Flexbox as="header" direction="column">
		{#if title}
			<Text as="h1" size="8" weight="bold">{title}</Text>
		{/if}
		{#if description}
			<Text as="p" size="3">{description}</Text>
		{/if}
	</Flexbox>
	<slot />
</Flexbox>
