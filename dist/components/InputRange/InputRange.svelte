<script>import { clsx } from '../../utils/clsx';
import { defaultPropsInputRange } from './InputRange.props';
export let elementRef = defaultPropsInputRange.elementRef;
export let size = defaultPropsInputRange.size;
export let color = defaultPropsInputRange.color;
export let error = defaultPropsInputRange.error;
export let fullWidth = defaultPropsInputRange.fullWidth;
let { class: _class, style, step, min, max, value, required, disabled, ...restProps } = $$restProps;
$: cssClass = clsx(_class, 'InputRange', {
    [`InputRange-size-${size}`]: size,
    [`InputRange-color-${color}`]: color,
    'InputRange-error': error,
    'InputRange-full-width': fullWidth
});
$: attributes = {
    style,
    step,
    min,
    max,
    autocomplete: 'off',
    ...restProps
};
</script>

<div
	{style}
	class={cssClass}
	data-input-range
	data-color={color}
	data-value={value !== null && value !== undefined ? value : undefined}
	data-required={required || undefined}
	data-disabled={disabled || undefined}
>
	<input {...attributes} type="range" bind:value bind:this={elementRef} on:input on:change on:focus on:blur />
	<div class="InputRange-highlight" />
</div>

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
  padding: 0 var(--space-2);
}
.InputRange.InputRange-full-width {
  width: 100%;
}
.InputRange input {
  --thumb-width: var(--space-3);
  --thumb-height: calc(var(--input-size-m) - var(--space-2));
  --thumb-margin-top: calc(-1 * ((var(--thumb-height) - var(--space-3)) / 2));
  --track-height: var(--space-3);
  z-index: 1;
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  flex: 1 1 auto;
  color: var(--input-color);
  appearance: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  border-width: 0;
  outline: none;
  font-family: inherit;
  text-overflow: ellipsis;
  background-color: transparent;
  cursor: pointer;
}
.InputRange input:disabled {
  cursor: default !important;
  opacity: 0.5 !important;
  outline: none !important;
  pointer-events: none;
}
.InputRange input:disabled:focus, .InputRange input:disabled:focus-within, .InputRange input:disabled:focus-visible {
  box-shadow: none !important;
  outline: none !important;
}
.InputRange input:hover ~ .InputRange-highlight {
  box-shadow: var(--border-color-hover) 0px 0px 0px 1px;
  outline: none;
}
.InputRange input:active ~ .InputRange-highlight, .InputRange input:focus ~ .InputRange-highlight, .InputRange input:focus-visible ~ .InputRange-highlight {
  box-shadow: var(--border-color-focus) 0px 0px 0px 1px;
  outline: none;
}
.InputRange input::-webkit-slider-thumb {
  -webkit-appearance: none;
}
.InputRange input:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}
.InputRange input::-ms-track {
  width: 100%;
  cursor: pointer;
  /* Hides the slider so custom styles can be added */
  background: transparent;
  border-color: transparent;
  color: transparent;
}
.InputRange input::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: var(--thumb-height);
  width: var(--thumb-width);
  background: var(--color-light);
  border: 1px solid var(--color-dark);
  border-radius: var(--radius-2);
  margin-top: var(--thumb-margin-top);
  cursor: pointer;
}
.InputRange input::-moz-range-thumb {
  height: var(--thumb-height);
  width: var(--thumb-width);
  background: var(--color-light);
  border: 1px solid var(--color-dark);
  border-radius: var(--radius-2);
  margin-top: var(--thumb-margin-top);
  cursor: pointer;
}
.InputRange input::-ms-thumb {
  height: var(--thumb-height);
  width: var(--thumb-width);
  background: var(--color-light);
  border: 1px solid var(--color-dark);
  border-radius: var(--radius-2);
  margin-top: var(--thumb-margin-top);
  cursor: pointer;
}
.InputRange input::-webkit-slider-runnable-track {
  width: 100%;
  height: var(--track-height);
  cursor: pointer;
  background: var(--color-primary);
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
.InputRange input::-moz-range-track {
  width: 100%;
  height: var(--track-height);
  cursor: pointer;
  background: var(--color-primary);
  border-radius: var(--radius-2);
}
.InputRange input::-ms-track {
  width: 100%;
  height: var(--track-height);
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
.InputRange input::-ms-fill-lower {
  background: var(--color-primary);
  border-radius: var(--radius-2);
}
.InputRange input::-ms-fill-upper {
  background: var(--color-primary);
  border-radius: var(--radius-2);
}
.InputRange input:focus::-webkit-slider-runnable-track {
  background: var(--color-primary);
}
.InputRange input:focus::-ms-fill-upper {
  background: var(--color-primary);
}
.InputRange input:focus::-ms-fill-lower {
  background: var(--color-primary);
}
.InputRange[data-disabled] input {
  cursor: default !important;
  opacity: 0.5 !important;
  outline: none !important;
  pointer-events: none;
}
.InputRange[data-disabled] input:focus, .InputRange[data-disabled] input:focus-within, .InputRange[data-disabled] input:focus-visible {
  box-shadow: none !important;
  outline: none !important;
}
.InputRange .InputRange-highlight {
  z-index: 0;
  position: absolute;
  inset: 0 0 0 0;
  height: 100%;
  width: 100%;
  z-index: 0;
  border-radius: var(--radius-3);
  background: var(--input-background);
  box-shadow: var(--border-color) 0px 0px 0px 1px;
  outline: none;
}</style>
