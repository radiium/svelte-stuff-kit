<script>import { clsx } from '../../utils/clsx.js';
import { defaultTextProps } from './Text.props.js';
export let elementRef = defaultTextProps.elementRef;
export let as = defaultTextProps.as;
export let color = defaultTextProps.color;
export let size = defaultTextProps.size;
export let weight = defaultTextProps.weight;
export let transform = defaultTextProps.transform;
export let align = defaultTextProps.align;
export let wrap = defaultTextProps.wrap;
export let truncate = defaultTextProps.truncate;
export let disabled = defaultTextProps.disabled;
$: cssClass = clsx($$restProps.class, 'Text', {
    [`Text-size-${size}`]: size,
    [`Text-color-${color}`]: color,
    [`Text-weight-${weight}`]: weight,
    [`Text-align-${align}`]: align,
    [`Text-transform-${transform}`]: transform,
    [`Text-wrap-${wrap}`]: wrap,
    'Text-truncate': truncate,
    'Text-disabled': disabled
});
</script>

<svelte:element
    this={as}
    {...$$restProps}
    data-color={color}
    data-size={size}
    class={cssClass}
    style={$$restProps.style}
    bind:this={elementRef}
>
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
.Text.Text-transform-lowercase {
  text-transform: lowercase;
}
.Text.Text-transform-uppercase {
  text-transform: uppercase;
}
.Text.Text-transform-capitalize {
  text-transform: capitalize;
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
.Text.Text-wrap-wrap {
  white-space: normal;
}
.Text.Text-wrap-nowrap {
  white-space: nowrap;
}
.Text.Text-wrap-pretty {
  white-space: normal;
  text-wrap: pretty;
}
.Text.Text-wrap-balance {
  white-space: normal;
  text-wrap: balance;
}
.Text.Text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.Text.Text-disabled {
  opacity: 0.5 !important;
}</style>
