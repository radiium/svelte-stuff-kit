<script>import { clsx } from '../../utils/clsx';
import { defaultPropsLink } from './Link.props';
export let elementRef = defaultPropsLink.elementRef;
export let href = defaultPropsLink.href;
export let target = defaultPropsLink.target;
export let rel = defaultPropsLink.rel;
export let size = defaultPropsLink.size;
export let variant = defaultPropsLink.variant;
export let color = defaultPropsLink.color;
export let align = defaultPropsLink.align;
export let active = defaultPropsLink.active;
export let iconOnly = defaultPropsLink.iconOnly;
export let circle = defaultPropsLink.fullWidth;
export let fullWidth = defaultPropsLink.fullWidth;
let { class: _class, style, ...restProps } = $$restProps;
$: cssClass = clsx(_class, 'Link', {
    [`Link-${variant}`]: variant,
    [`Link-size-${size}`]: size,
    [`Link-${color}`]: color,
    [`Link-align-${align}`]: align,
    'Link-full-width': fullWidth,
    'Link-active': active,
    'Link-icon-only': iconOnly,
    'Link-circle': circle
});
$: attributes = {
    'data-color': color,
    'data-size': size,
    tabindex: 0,
    class: cssClass,
    style,
    ...restProps
};
</script>

<a bind:this={elementRef} {...attributes} {href} {target} {rel} on:click on:focus on:blur>
	<slot />
</a>

<style>a.Link {
  --button-min-width: calc(var(--space-5) * 2);
  --button-width: unset;
  --button-height: var(--space-5);
  --button-padding: 0 var(--space-2);
  --button-border: none;
  --button-border-radius: var(--radius-3);
  --button-background: transparent;
  --button-background-hover: var(--accent-a6);
  --button-background-active: var(--accent-a7);
  --button-color: var(--accent-a12);
  --button-font-size: var(--font-size-1);
  --button-line-height: var(--line-height-1);
  --button-letter-spacing: var(--letter-spacing-1);
  --button-gap: var(--space-1);
  min-width: var(--button-min-width);
  width: var(--button-width);
  height: var(--button-height);
  padding: var(--button-padding);
  border: var(--button-border);
  border-radius: var(--button-border-radius);
  background-color: var(--button-background);
  color: var(--button-color);
  font-size: var(--button-font-size);
  line-height: var(--button-line-height);
  letter-spacing: var(--button-letter-spacing);
  gap: var(--button-gap);
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  font-weight: bold;
  transition: background-color linear 80ms;
}
a.Link :global(svg) {
  height: 60%;
  width: auto;
  fill: var(--button-color);
}
a.Link.Link-is-in-group {
  border-radius: 0;
}
a.Link.Link-is-in-group:first-child {
  border-top-left-radius: var(--button-border-radius);
  border-bottom-left-radius: var(--button-border-radius);
}
a.Link.Link-is-in-group:last-child {
  border-top-right-radius: var(--button-border-radius);
  border-bottom-right-radius: var(--button-border-radius);
}
a.Link.Link-size-1 {
  --button-height: var(--space-5);
  --button-min-width: calc(var(--space-5) * 2);
  --button-padding: 0 var(--space-2);
  --button-border-radius: var(--radius-3);
  --button-gap: var(--space-1);
  --button-font-size: var(--font-size-1);
  --button-line-height: var(--line-height-1);
  --button-letter-spacing: var(--letter-spacing-1);
}
a.Link.Link-size-1.Link-icon-only {
  --button-min-width: var(--space-5);
  --button-width: var(--space-5);
  --button-padding: var(--space-0);
}
a.Link.Link-size-2 {
  --button-height: var(--space-6);
  --button-min-width: calc(var(--space-6) * 2);
  --button-padding: 0 var(--space-2);
  --button-border-radius: var(--radius-3);
  --button-gap: var(--space-1);
  --button-font-size: var(--font-size-2);
  --button-line-height: var(--line-height-2);
  --button-letter-spacing: var(--letter-spacing-2);
}
a.Link.Link-size-2.Link-icon-only {
  --button-min-width: var(--space-6);
  --button-width: var(--space-6);
  --button-padding: var(--space-0);
}
a.Link.Link-size-3 {
  --button-height: var(--space-7);
  --button-min-width: calc(var(--space-7) * 2);
  --button-padding: 0 var(--space-3);
  --button-border-radius: var(--radius-3);
  --button-gap: var(--space-3);
  --button-font-size: var(--font-size-3);
  --button-line-height: var(--line-height-3);
  --button-letter-spacing: var(--letter-spacing-3);
}
a.Link.Link-size-3.Link-icon-only {
  --button-min-width: var(--space-7);
  --button-width: var(--space-7);
  --button-padding: var(--space-1);
}
a.Link.Link-size-4 {
  --button-height: var(--space-8);
  --button-min-width: calc(var(--space-8) * 2);
  --button-padding: 0 var(--space-4);
  --button-border-radius: var(--radius-3);
  --button-gap: var(--space-3);
  --button-font-size: var(--font-size-4);
  --button-line-height: var(--line-height-4);
  --button-letter-spacing: var(--letter-spacing-4);
}
a.Link.Link-size-4.Link-icon-only {
  --button-min-width: var(--space-8);
  --button-width: var(--space-8);
  --button-padding: var(--space-1);
}
a.Link.Link-clear {
  --button-border: none;
  --button-color: var(--accent-a12);
  --button-background: transparent;
  --button-background-hover: var(--accent-a6);
  --button-background-active: var(--accent-a7);
}
a.Link.Link-outline {
  --button-border: 1px solid var(--accent-9);
  --button-color: var(--accent-a12);
  --button-background: transparent;
  --button-background-hover: var(--accent-a6);
  --button-background-active: var(--accent-a7);
}
a.Link.Link-soft {
  --button-border: none;
  --button-color: var(--accent-a12);
  --button-background: var(--accent-a6);
  --button-background-hover: var(--accent-a7);
  --button-background-active: var(--accent-a8);
}
a.Link.Link-solid {
  --button-border: none;
  --button-color: var(--contrast);
  --button-background: var(--accent-9);
  --button-background-hover: var(--accent-10);
  --button-background-active: var(--accent-11);
}
a.Link.Link-icon-only.Link-circle {
  --button-border-radius: var(--radius-full);
}
a.Link.Link-icon-only.Link-circle :global(svg) {
  height: 65%;
}
a.Link.Link-align-start {
  justify-content: flex-start;
  text-align: start;
}
a.Link.Link-align-center {
  justify-content: center;
  text-align: center;
}
a.Link.Link-align-end {
  justify-content: flex-end;
  text-align: end;
}
a.Link.Link-full-width {
  width: 100%;
}
a.Link:hover {
  background: var(--button-background-hover);
}
a.Link:hover.Link-link {
  text-decoration: underline;
}
a.Link:active, a.Link.Link-active {
  background: var(--button-background-active);
}
a.Link:disabled {
  cursor: default !important;
  opacity: 0.5 !important;
  outline: none !important;
  pointer-events: none;
}
a.Link:disabled:focus, a.Link:disabled:focus-within, a.Link:disabled:focus-visible {
  box-shadow: none !important;
  outline: none !important;
}
a.Link:focus-visible {
  box-shadow: var(--border-color-focus) 0px 0px 0px 1px;
  outline: none;
}
a.Link:visited {
  color: var(--button-color);
}
a.Link:visited :global(svg) {
  fill: var(--button-color);
}</style>
