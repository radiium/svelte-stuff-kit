<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import { defaultPropsCard, type PropsCard } from './Card.props';

	export let elementRef: PropsCard['elementRef'] = defaultPropsCard.elementRef;
	export let as: PropsCard['as'] = defaultPropsCard.as;
	export let size: PropsCard['size'] = defaultPropsCard.size;
	export let noPadding: PropsCard['noPadding'] = defaultPropsCard.noPadding;
	export let asButton: PropsCard['asButton'] = defaultPropsCard.asButton;
	let { class: _class, style, ...restProps } = $$restProps;

	$: isButton = asButton || as === 'button';

	$: cssClass = clsx(_class, 'card-wrapper', `card-size-${size}`, {
		'card-no-padding': noPadding,
		'card-as-button': isButton
	});
	$: attributes = {
		style,
		role: isButton ? 'button' : undefined,
		tabindex: isButton ? 0 : undefined,
		...restProps
	};
</script>

<div role="button"></div>

<svelte:element this={as} {...attributes} class={cssClass} bind:this={elementRef} data-card>
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

		&.card-as-button {
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
	}
</style>
