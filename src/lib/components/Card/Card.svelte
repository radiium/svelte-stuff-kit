<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import { defaultPropsCard, type PropsCard } from './Card.props';

	type $$Props = PropsCard;
	export let elementRef: $$Props['elementRef'] = defaultPropsCard.elementRef;
	export let as: $$Props['as'] = defaultPropsCard.as;
	export let size: $$Props['size'] = defaultPropsCard.size;
	export let noPadding: $$Props['noPadding'] = defaultPropsCard.noPadding;
	let { class: _class, style, ...restProps } = $$restProps;

	$: cssClass = clsx(_class, 'Card', {
		[`Card-size-${size}`]: size,
		'Card-no-padding': noPadding,
		'Card-as-button': as === 'button',
		'Card-as-label': as === 'label'
	});

	$: attributesButton =
		as === 'button'
			? {
					role: 'button',
					tabindex: 0
				}
			: {};

	$: attributes = {
		class: cssClass,
		style,
		...attributesButton,
		...restProps
	};
</script>

<svelte:element this={as} bind:this={elementRef} {...attributes}>
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
	<div class="Card-highlight" />
</svelte:element>

<style lang="scss" global>
	.Card {
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
			flex: 1 1 auto;
		}

		footer {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: var(--space-3);
		}

		.Card-highlight {
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
		&.Card-size-1 {
			--card-padding: var(--space-3);
			--card-border-radius: var(--radius-4);
		}
		&.Card-size-2 {
			--card-padding: var(--space-4);
			--card-border-radius: var(--radius-4);
		}
		&.Card-size-3 {
			--card-padding: var(--space-5);
			--card-border-radius: var(--radius-5);
		}
		&.Card-size-4 {
			--card-padding: var(--space-6);
			--card-border-radius: var(--radius-5);
		}
		&.Card-size-5 {
			--card-padding: var(--space-8);
			--card-border-radius: var(--radius-6);
		}

		&.Card-no-padding {
			--card-padding: 0;
		}

		&.Card-as-label,
		&.Card-as-button {
			&:focus-within {
				.Card-highlight {
					@include input-box-shadow-focus;
				}
				/* input[type='checkbox'],
				input[type='radio'] {
					&:focus-visible ~ .Checkbox-indicator {
						border: 5px solid green;
						@include input-box-shadow;
					}
				} */
			}

			&:active {
				.Card-highlight {
					@include input-box-shadow-focus;
				}
				/* input[type='checkbox'],
				input[type='radio'] {
					&:focus-visible ~ .Checkbox-indicator {
						@include input-box-shadow;
					}
				} */
			}
		}
	}
</style>
