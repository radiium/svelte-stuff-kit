<script>import { clsx } from '../../utils/clsx.js';
import { defaultLinkProps } from './Link.props.js';
export let elementRef = defaultLinkProps.elementRef;
export let href = defaultLinkProps.href;
export let target = defaultLinkProps.target;
export let rel = defaultLinkProps.rel;
export let color = defaultLinkProps.color;
export let size = defaultLinkProps.size;
export let weight = defaultLinkProps.weight;
export let transform = defaultLinkProps.transform;
export let align = defaultLinkProps.align;
export let underline = defaultLinkProps.underline;
export let wrap = defaultLinkProps.wrap;
export let truncate = defaultLinkProps.truncate;
export let disabled = defaultLinkProps.disabled;
$: cssClass = clsx($$restProps.class, 'Link', {
    [`Link-size-${size}`]: size,
    [`Link-color-${color}`]: color,
    [`Link-weight-${weight}`]: weight,
    [`Link-align-${align}`]: align,
    [`Link-transform-${transform}`]: transform,
    [`Link-underline-${underline}`]: underline,
    [`Link-wrap-${wrap}`]: wrap,
    'Link-truncate': truncate,
    'Link-disabled': disabled
});
</script>

<a
    {...$$restProps}
    {href}
    {target}
    {rel}
    data-color={color}
    data-size={size}
    class={cssClass}
    style={$$restProps.style}
    bind:this={elementRef}
>
    <slot />
</a>

<style>.Link {
  color: var(--accent-a11, var(--color));
  text-decoration-line: none;
  text-decoration-thickness: min(2px, max(1px, 0.05em));
  text-underline-offset: calc(0.025em + 2px);
  text-decoration-color: var(--accent-a6);
}
.Link.Link-size-1 {
  font-size: var(--font-size-1);
  line-height: var(--line-height-1);
  letter-spacing: var(--letter-spacing-1);
}
.Link.Link-size-2 {
  font-size: var(--font-size-2);
  line-height: var(--line-height-2);
  letter-spacing: var(--letter-spacing-2);
}
.Link.Link-size-3 {
  font-size: var(--font-size-3);
  line-height: var(--line-height-3);
  letter-spacing: var(--letter-spacing-3);
}
.Link.Link-size-4 {
  font-size: var(--font-size-4);
  line-height: var(--line-height-4);
  letter-spacing: var(--letter-spacing-4);
}
.Link.Link-size-5 {
  font-size: var(--font-size-5);
  line-height: var(--line-height-5);
  letter-spacing: var(--letter-spacing-5);
}
.Link.Link-size-6 {
  font-size: var(--font-size-6);
  line-height: var(--line-height-6);
  letter-spacing: var(--letter-spacing-6);
}
.Link.Link-size-7 {
  font-size: var(--font-size-7);
  line-height: var(--line-height-7);
  letter-spacing: var(--letter-spacing-7);
}
.Link.Link-size-8 {
  font-size: var(--font-size-8);
  line-height: var(--line-height-8);
  letter-spacing: var(--letter-spacing-8);
}
.Link.Link-size-9 {
  font-size: var(--font-size-9);
  line-height: var(--line-height-9);
  letter-spacing: var(--letter-spacing-9);
}
.Link.Link-weight-light {
  font-weight: var(--font-weight-light);
}
.Link.Link-weight-regular {
  font-weight: var(--font-weight-regular);
}
.Link.Link-weight-medium {
  font-weight: var(--font-weight-medium);
}
.Link.Link-weight-bold {
  font-weight: var(--font-weight-bold);
}
.Link.Link-transform-lowercase {
  text-transform: lowercase;
}
.Link.Link-transform-uppercase {
  text-transform: uppercase;
}
.Link.Link-transform-capitalize {
  text-transform: capitalize;
}
.Link.Link-align-start {
  text-align: start;
}
.Link.Link-align-center {
  text-align: center;
}
.Link.Link-align-end {
  text-align: end;
}
.Link.Link-underline-auto:hover, .Link.Link-underline-hover:hover, .Link.Link-underline-always {
  text-decoration-line: underline;
}
.Link.Link-wrap-wrap {
  white-space: normal;
}
.Link.Link-wrap-nowrap {
  white-space: nowrap;
}
.Link.Link-wrap-pretty {
  white-space: normal;
  text-wrap: pretty;
}
.Link.Link-wrap-balance {
  white-space: normal;
  text-wrap: balance;
}
.Link.Link-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.Link.Link-disabled {
  opacity: 0.5 !important;
}</style>
