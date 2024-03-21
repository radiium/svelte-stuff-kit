<script>import { clsx } from '../../utils/clsx.js';
import { defaultCardProps } from './Card.props.js';
export let elementRef = defaultCardProps.elementRef;
export let size = defaultCardProps.size;
export let noPadding = defaultCardProps.noPadding;
$: cssClass = clsx($$restProps.class, 'Card', {
    [`Card-size-${size}`]: size,
    'Card-no-padding': noPadding
});
</script>

<div {...$$restProps} class={cssClass} style={$$restProps.style} bind:this={elementRef}>
    <slot />
</div>

<style>.Card {
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  background-color: var(--background-level-2);
  border: 1px solid var(--gray-5);
  position: relative;
  overflow: hidden;
}
.Card.Card-size-1 {
  --card-padding: var(--space-3);
  --card-border-radius: var(--radius-4);
}
.Card.Card-size-2 {
  --card-padding: var(--space-4);
  --card-border-radius: var(--radius-4);
}
.Card.Card-size-3 {
  --card-padding: var(--space-5);
  --card-border-radius: var(--radius-5);
}
.Card.Card-size-4 {
  --card-padding: var(--space-6);
  --card-border-radius: var(--radius-5);
}
.Card.Card-size-5 {
  --card-padding: var(--space-8);
  --card-border-radius: var(--radius-6);
}
.Card.Card-no-padding {
  --card-padding: 0;
}</style>
