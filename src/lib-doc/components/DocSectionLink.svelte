<script lang="ts">
	import { Text } from '$lib/components';
	import LinkSimple from 'phosphor-svelte/lib/LinkSimple';

	export let text: string;

	$: id = text.replaceAll(' ', '-').toLowerCase();
	$: href = `#${id}`;
</script>

<Text as="h2" size="7" weight="bold">
	<a {id} {href}>
		{text}
		<LinkSimple size="16" />
	</a>
</Text>

<style lang="scss">
	a {
		color: var(--color);

		&:visited {
			color: var(--color);
			opacity: 1;
		}

		:global(svg) {
			opacity: 0;
		}

		&:hover {
			:global(svg) {
				opacity: 1;
			}
		}
	}
</style>
