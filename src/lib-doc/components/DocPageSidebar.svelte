<script lang="ts">
	import { version } from '$app/environment';
	import Text from '$lib/components/Text/Text.svelte';
	import { page } from '$app/stores';
	import { allDocs } from '../index';
	import { closeMenu } from './DocLayout.svelte';

	$: pageId = $page.params.pageId;
</script>

<div class="container">
	<article class="p-4">
		{#each allDocs as section, i}
			<section class="no-p" class:mb-5={i < allDocs.length - 1}>
				<Text as="div" weight="bold" size="4" class="pb-2">{section.title}</Text>

				<ul class="no-m no-p">
					{#each section.pages as page}
						<li class="no-m no-p">
							<a
								class:active={page.id === pageId}
								href={`/${section.id}/${page.id}`}
								on:click={closeMenu}
								data-sveltekit-preload-data="tap"
								data-color="neutral"
							>
								{page.title}
								<!-- <Text color={page.id === pageId ? 'primary' : 'neutral'}></Text> -->
							</a>
						</li>
					{/each}
				</ul>
			</section>
		{/each}
	</article>

	<footer>
		<Text size="2" color="neutral">Version: {version}</Text>
	</footer>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
		article {
			flex: 1 1 auto;
			overflow: auto;
			min-height: 0;

			section {
				width: 100%;

				ul {
					width: 100%;
					list-style: none;

					li {
						width: 100%;
						margin: 4px 0;

						a {
							display: block;
							position: relative;
							cursor: default;
							padding: var(--space-2) var(--space-3);
							border-radius: var(--radius-3);
							font-size: var(--font-size-2);
							line-height: var(--line-height-2);
							letter-spacing: var(--letter-spacing-2);

							color: var(--slate-a12);

							&:hover,
							&.active {
								background-color: var(--slate-a3);
							}

							&.active {
								color: var(--teal-a11);
								background-color: var(--slate-a3);

								&::after {
									content: '➜';
									position: absolute;
									right: var(--space-3);
								}
							}
						}
					}
				}
			}
		}

		footer {
			min-height: 46px;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			border-style: solid;
			border-color: var(--border-color);
			border-width: 1px 0 0 0;
		}
	}
</style>
