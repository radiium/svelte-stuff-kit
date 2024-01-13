<script>import { clsx } from '../../utils/clsx';
import { defaultPropsText } from './Text.props';
export let elementRef = defaultPropsText.elementRef;
export let as = defaultPropsText.as;
export let color = defaultPropsText.color;
export let size = defaultPropsText.size;
export let weight = defaultPropsText.weight;
export let align = defaultPropsText.align;
export let disabled = defaultPropsText.disabled;
let { class: _class, style, ...restProps } = $$restProps;
$: cssClass = clsx(_class, 'Text', {
    [`Text-size-${size}`]: size,
    [`Text-weight-${weight}`]: weight,
    [`Text-align-${align}`]: align,
    [`Text-color-${color}`]: color,
    'Text-disabled': disabled
});
$: attributes = {
    'data-color': color,
    class: cssClass,
    style,
    ...restProps
};
</script>

<svelte:element this={as} bind:this={elementRef} {...attributes}>
	<slot />
</svelte:element>

<style>.Text {
  color: var(--accent-a11, var(--color));
}
.Text.Text-size-1 {
  font-size: var(--font-size-1);
  line-height: var(--line-height-1);
  letter-spacing: var(--letter-spacing-1);
}
.Text.Text-size-2 {
  font-size: var(--font-size-2);
  line-height: var(--line-height-2);
  letter-spacing: var(--letter-spacing-2);
}
.Text.Text-size-3 {
  font-size: var(--font-size-3);
  line-height: var(--line-height-3);
  letter-spacing: var(--letter-spacing-3);
}
.Text.Text-size-4 {
  font-size: var(--font-size-4);
  line-height: var(--line-height-4);
  letter-spacing: var(--letter-spacing-4);
}
.Text.Text-size-5 {
  font-size: var(--font-size-5);
  line-height: var(--line-height-5);
  letter-spacing: var(--letter-spacing-5);
}
.Text.Text-size-6 {
  font-size: var(--font-size-6);
  line-height: var(--line-height-6);
  letter-spacing: var(--letter-spacing-6);
}
.Text.Text-size-7 {
  font-size: var(--font-size-7);
  line-height: var(--line-height-7);
  letter-spacing: var(--letter-spacing-7);
}
.Text.Text-size-8 {
  font-size: var(--font-size-8);
  line-height: var(--line-height-8);
  letter-spacing: var(--letter-spacing-8);
}
.Text.Text-size-9 {
  font-size: var(--font-size-9);
  line-height: var(--line-height-9);
  letter-spacing: var(--letter-spacing-9);
}
.Text.Text-weight-light {
  font-weight: var(--font-weight-light);
}
.Text.Text-weight-regular {
  font-weight: var(--font-weight-regular);
}
.Text.Text-weight-medium {
  font-weight: var(--font-weight-medium);
}
.Text.Text-weight-bold {
  font-weight: var(--font-weight-bold);
}
.Text.Text-align-start {
  text-align: start;
}
.Text.Text-align-center {
  text-align: center;
}
.Text.Text-align-end {
  text-align: end;
}
.Text.Text-disabled {
  opacity: 0.5 !important;
}</style>
