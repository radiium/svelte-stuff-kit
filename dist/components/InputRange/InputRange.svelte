<script>import { clsx } from '../../utils/clsx.js';
import { defaultInputRangeProps } from './InputRange.props.js';
export let elementRef = defaultInputRangeProps.elementRef;
export let value = defaultInputRangeProps.value;
export let size = defaultInputRangeProps.size;
export let color = defaultInputRangeProps.color;
export let error = defaultInputRangeProps.error;
export let fullWidth = defaultInputRangeProps.fullWidth;
$: cssClass = clsx($$restProps.class, 'InputRange', {
    [`InputRange-size-${size}`]: size,
    [`InputRange-color-${color}`]: color,
    'InputRange-error': error,
    'InputRange-full-width': fullWidth
});
</script>

<input
    {...$$restProps}
    type="range"
    data-color={color}
    data-size={size}
    class={cssClass}
    style={$$restProps.style}
    bind:this={elementRef}
    bind:value
    on:input
    on:change
    on:focus
    on:blur
    on:keydown
    on:keypress
    on:keyup
/>

<style>.InputRange {
  flex-shrink: 0;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  min-width: calc(var(--input-size-m) * 2);
  gap: var(--space-2);
  height: var(--input-size-m);
  min-width: calc(var(--input-size-m) * 3);
  margin: 0;
  padding: 0 var(--space-2);
  color: var(--input-color);
  appearance: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  border-width: 0;
  outline: none;
  font-family: inherit;
  text-overflow: ellipsis;
  cursor: pointer;
  border-radius: var(--radius-3);
  background: var(--input-background);
  height: var(--input-height);
  box-shadow: var(--border-color) 0px 0px 0px 1px;
  outline: none;
  --thumb-radius: var(--radius-2);
  --thumb-background: var(--accent-12);
  --track-radius: var(--radius-2);
  --track-background: var(--accent-9);
}
.InputRange.InputRange-full-width {
  width: 100%;
}
.InputRange.InputRange-size-1 {
  --input-height: var(--space-5);
  --thumb-width: var(--space-2);
  --thumb-height: calc(var(--space-5) - var(--space-2));
  --thumb-margin-top: calc(-1 * ((var(--thumb-height) - var(--space-2)) / 2));
  --track-height: var(--space-2);
}
.InputRange.InputRange-size-2 {
  --input-height: var(--space-6);
  --thumb-width: var(--space-3);
  --thumb-height: calc(var(--space-6) - var(--space-2));
  --thumb-margin-top: calc(-1 * ((var(--thumb-height) - var(--space-3)) / 2));
  --track-height: var(--space-3);
}
.InputRange.InputRange-size-3 {
  --input-height: var(--space-7);
  --thumb-width: var(--space-4);
  --thumb-height: calc(var(--space-7) - var(--space-2));
  --thumb-margin-top: calc(-1 * ((var(--thumb-height) - var(--space-3)) / 2));
  --track-height: var(--space-3);
}
.InputRange:hover {
  box-shadow: var(--border-color-hover) 0px 0px 0px 1px;
  outline: none;
}
.InputRange[disabled] {
  cursor: default !important;
  opacity: 0.5 !important;
  outline: none !important;
  pointer-events: none;
}
.InputRange[disabled]:focus, .InputRange[disabled]:focus-within, .InputRange[disabled]:focus-visible {
  box-shadow: none !important;
  outline: none !important;
}
.InputRange:active, .InputRange:focus, .InputRange:focus-visible {
  box-shadow: var(--border-color-focus) 0px 0px 0px 1px;
  outline: none;
}
.InputRange:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}
.InputRange::-ms-track {
  width: 100%;
  cursor: pointer;
  /* Hides the slider so custom styles can be added */
  background: transparent;
  border-color: transparent;
  color: transparent;
}
.InputRange::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: var(--thumb-height);
  width: var(--thumb-width);
  background: var(--thumb-background);
  border-radius: var(--thumb-radius);
  margin-top: var(--thumb-margin-top);
  cursor: pointer;
}
.InputRange::-moz-range-thumb {
  height: var(--thumb-height);
  width: var(--thumb-width);
  background: var(--thumb-background);
  border-radius: var(--thumb-radius);
  margin-top: var(--thumb-margin-top);
  cursor: pointer;
}
.InputRange::-ms-thumb {
  height: var(--thumb-height);
  width: var(--thumb-width);
  background: var(--thumb-background);
  border-radius: var(--thumb-radius);
  margin-top: var(--thumb-margin-top);
  cursor: pointer;
}
.InputRange::-webkit-slider-runnable-track {
  width: 100%;
  height: var(--track-height);
  background: var(--track-background);
  border-radius: var(--track-radius);
  border: 0.2px solid #010101;
  cursor: pointer;
}
.InputRange::-moz-range-track {
  width: 100%;
  height: var(--track-height);
  border-radius: var(--track-radius);
  border-radius: var(--radius-2);
  cursor: pointer;
}
.InputRange::-ms-track {
  width: 100%;
  height: var(--track-height);
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
  cursor: pointer;
}
.InputRange::-ms-fill-lower {
  background: var(--track-background);
  border-radius: var(--track-radius);
}
.InputRange::-ms-fill-upper {
  background: var(--track-background);
  border-radius: var(--track-radius);
}</style>
