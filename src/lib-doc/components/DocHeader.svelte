<script lang="ts">
	import { Flexbox, ThemeSelect } from '$lib';
	import GithubLink from './GithubLink.svelte';
	import { packageName } from '../../constants';
</script>

<Flexbox class="doc-header-wrapper pl-3 pr-3" alignItems="center" justify="between" gap="3">
	<Flexbox class="side">
		<!-- <Button id="menu-btn" mode="clear" iconOnly>
            <List/>
        </Button> -->
	</Flexbox>
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
	}

	:global(.doc-header-wrapper .title) {
		flex: 1 1 auto;
	}

	:global(.doc-header-wrapper .side) {
		position: relative;
	}
</style>
