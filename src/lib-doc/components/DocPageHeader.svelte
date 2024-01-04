<script lang="ts">
	import { ThemeSelect } from '$lib/index';
	import GithubLink from './GithubLink.svelte';
	import { packageName } from '../../constants';
</script>

<div class="container pl-3 pr-3">
	<div class="side start"></div>
	<div class="title">{packageName}</div>
	<div class="side end">
		<ThemeSelect />
		<GithubLink />
	</div>
</div>

<style lang="scss">
	.container {
		height: 100%;
		width: 100%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-3);

		.title {
			flex: 1 1 auto;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: var(--space-3);
		}

		.side {
			position: relative;
			display: flex;
			align-items: center;
			gap: var(--space-3);

			&.start {
				justify-content: flex-start;
			}

			&.end {
				justify-content: flex-end;
			}
		}
	}

	:global(.doc-header-wrapper .title) {
		flex: 1 1 auto;
	}

	:global(.doc-header-wrapper .side) {
		position: relative;
	}
</style>
