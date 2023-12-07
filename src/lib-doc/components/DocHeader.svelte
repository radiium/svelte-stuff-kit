<script lang="ts">
	import {Flexbox, ThemeSelect} from '$lib';
	import GithubLink from './GithubLink.svelte';
	import { page } from '$app/stores';
	import { packageName } from '../../constants';

	$: pageId = $page.params.pageId;
</script>

<Flexbox class="doc-header-wrapper px-5" alignItems="center" justify="between" gap="3">
	<Flexbox class="side">Menu</Flexbox>
	<Flexbox class="title" alignItems="center" justify="center">{packageName}</Flexbox>
	<Flexbox class="side" alignItems="center" justify="end" gap="3">
		<ThemeSelect />
		<GithubLink />
	</Flexbox>
</Flexbox>

<style lang="scss">
	:global(.doc-header-wrapper) {
		height: 100%;
		width: 100%;
		position: relative;

		:global(.title) {
			flex: 1 1 auto;
		}

		:global(.side) {
			min-width: 250px;
			position: relative;
		}
	}
</style>
