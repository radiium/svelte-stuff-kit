<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import { defaultCardProps } from './Card.props';
	import type { CardProps } from './Card.types';

	type $$Props = CardProps;
	export let elementRef: $$Props['elementRef'] = defaultCardProps.elementRef;
	export let size: $$Props['size'] = defaultCardProps.size;
	export let noPadding: $$Props['noPadding'] = defaultCardProps.noPadding;

	$: cssClass = clsx($$restProps.class, 'Card', {
		[`Card-size-${size}`]: size,
		'Card-no-padding': noPadding
	});
</script>

<div {...$$restProps} class={cssClass} style={$$restProps.style} bind:this={elementRef}>
	<slot />
</div>

<style lang="scss">
	.Card {
		padding: var(--card-padding);
		border-radius: var(--card-border-radius);
		background-color: var(--background-level-2);
		border: 1px solid var(--gray-5);
		// display: flex;
		// flex-direction: column;
		// gap: var(--space-4);
		position: relative;
		overflow: visible;

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
	}
</style>
