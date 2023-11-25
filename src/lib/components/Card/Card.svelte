<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import type { PropSizeCard } from '../types';

	export let elementRef: SvelteHTMLElements | undefined = undefined;
	export let as: keyof SvelteHTMLElements = 'article';
	export let size: PropSizeCard = '3';
	export let noPadding: boolean = false;

	$: cssClass = clsx($$restProps.class, 'card-wrapper', `card-size-${size}`, {
		'card-no-padding': noPadding
	});
	$: attributes = { ...$$restProps };
</script>

<svelte:element this={as} {...attributes} class={cssClass} bind:this={elementRef}>
	{#if $$slots.header}
		<header>
			<slot name="header" />
		</header>
	{/if}

	{#if $$slots.default}
		<div class="content">
			<slot />
		</div>
	{/if}

	{#if $$slots.footer}
		<footer>
			<slot name="footer" />
		</footer>
	{/if}
	<div class="card-highlight" />
</svelte:element>

<style lang="scss">
	.card-wrapper {
		padding: var(--card-padding);
		border-radius: var(--card-border-radius);
		background-color: var(--background-level-1);
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		position: relative;
		overflow: visible;

		&[role='button'] {
			cursor: pointer;

			&:focus-within {
				.card-highlight {
					@include input-box-shadow-focus;
				}
			}

			&:active {
				.card-highlight {
					@include input-box-shadow-focus;
				}
			}
		}

		header {
			width: 100%;
		}

		.content {
			height: auto;
		}

		footer {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: var(--space-3);
		}

		.card-highlight {
			z-index: 0;
			position: absolute;
			inset: 0 0 0 0;
			height: 100%;
			width: 100%;
			z-index: 0;
			border-radius: var(--card-border-radius);
			box-shadow: inset 0 0 0 1px var(--gray-8);
			pointer-events: none;
		}

		// Sizes
		&.card-size-1 {
			--card-padding: var(--space-3);
			--card-border-radius: var(--radius-4);
		}
		&.card-size-2 {
			--card-padding: var(--space-4);
			--card-border-radius: var(--radius-4);
		}
		&.card-size-3 {
			--card-padding: var(--space-5);
			--card-border-radius: var(--radius-5);
		}
		&.card-size-4 {
			--card-padding: var(--space-6);
			--card-border-radius: var(--radius-5);
		}
		&.card-size-5 {
			--card-padding: var(--space-8);
			--card-border-radius: var(--radius-6);
		}

		&.card-no-padding {
			--card-padding: 0;
		}
	}
</style>
