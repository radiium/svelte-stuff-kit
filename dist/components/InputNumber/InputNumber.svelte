<script>import { clsx } from '../..';
import { longpress } from '../../actions/longpress';
import { defaultPropsInputNumber } from './InputNumber.props';
export let elementRef = defaultPropsInputNumber.elementRef;
export let value = defaultPropsInputNumber.value;
export let step = defaultPropsInputNumber.step;
export let min = defaultPropsInputNumber.min;
export let max = defaultPropsInputNumber.max;
export let size = defaultPropsInputNumber.size;
export let color = defaultPropsInputNumber.color;
export let disabled = defaultPropsInputNumber.disabled;
export let required = defaultPropsInputNumber.required;
export let readonly = defaultPropsInputNumber.readonly;
let { class: _class, style, ...restProps } = $$restProps;
// Input css classes
let cssClass = '';
$: cssClass = clsx(_class, 'input-wrapper', `input-color-${color}`, `input-size-${size}`, {
    'input-disabled': disabled,
    'input-required': required,
    'input-readonly': readonly
});
$: attributes = {
    style,
    autocomplete: 'off',
    ...restProps
};
let intervalId = undefined;
function decrement() {
    if (disabled) {
        return;
    }
    initValue();
    if (typeof value === 'number' && typeof step === 'number') {
        if (typeof min === 'number') {
            value = Math.max(value - step, min);
        }
        else {
            value = value - step;
        }
    }
}
function decrementMouseDown() {
    clearIntervalId();
    intervalId = setInterval(() => {
        decrement();
    }, 100);
}
function increment() {
    if (disabled) {
        return;
    }
    initValue();
    if (typeof value === 'number' && typeof step === 'number') {
        if (typeof max === 'number') {
            value = Math.min(value + step, max);
        }
        else {
            value = value + step;
        }
    }
}
function incrementMouseDown() {
    clearIntervalId();
    intervalId = setInterval(() => {
        increment();
    }, 100);
}
function mouseUp() {
    clearIntervalId();
}
function initValue() {
    if (!value) {
        value = 0;
    }
}
function clearIntervalId() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
    }
}
</script>

<div class={cssClass}>
	<button
		tabindex="-1"
		use:longpress={{ duration: 600 }}
		on:startlongpress={decrementMouseDown}
		on:endlongpress={mouseUp}
		on:click={decrement}
		{disabled}>-</button
	>
	<input
		type="number"
		inputmode="numeric"
		class:disabled
		class:required
		class:readonly
		{disabled}
		{required}
		{readonly}
		{...attributes}
		{step}
		{min}
		{max}
		bind:value
		bind:this={elementRef}
		on:input
		on:change
		on:focus
		on:blur
	/>

	<button
		tabindex="-1"
		use:longpress={{ duration: 600 }}
		on:startlongpress={incrementMouseDown}
		on:endlongpress={mouseUp}
		on:click={increment}
		{disabled}>+</button
	>
</div>

<style>.input-wrapper {
  height: var(--input-size-m);
  width: calc(var(--input-size-m) * 4);
  padding: 0;
  border: none;
  border-radius: var(--radius-3);
  box-shadow: var(--border-color) 0px 0px 0px 1px;
  display: inline-flex;
  font-size: var(--font-size-3);
  letter-spacing: normal;
}
.input-wrapper:hover:not(.input-disabled) {
  box-shadow: var(--border-color-hover) 0px 0px 0px 1px;
  outline: none;
}
.input-wrapper button {
  height: var(--input-size-m);
  width: var(--input-size-m);
  margin: 0;
  border: none;
  background-color: rgba(var(--color-primary-contrast-rgb), 0.1);
  color: var(--input-color);
  font-size: var(--font-size-5);
  cursor: pointer;
}
.input-wrapper button:last-child {
  border-top-right-radius: var(--radius-3);
  border-bottom-right-radius: var(--radius-3);
}
.input-wrapper button:first-child {
  border-top-left-radius: var(--radius-3);
  border-bottom-left-radius: var(--radius-3);
}
.input-wrapper button:disabled {
  cursor: default !important;
  opacity: 0.5 !important;
  outline: none !important;
  pointer-events: none;
}
.input-wrapper button:disabled:focus, .input-wrapper button:disabled:focus-within, .input-wrapper button:disabled:focus-visible {
  box-shadow: none !important;
  outline: none !important;
}
.input-wrapper button:hover {
  background-color: rgba(var(--color-primary-contrast-rgb), 0.15);
}
.input-wrapper input {
  height: 100%;
  width: 50%;
  flex: 1 1 auto;
  border: none;
  margin: 0;
  background-color: var(--input-background);
  color: var(--input-color);
  padding: 0 var(--space-3);
  text-align: right;
}
.input-wrapper input:disabled {
  cursor: default !important;
  opacity: 0.5 !important;
  outline: none !important;
  pointer-events: none;
}
.input-wrapper input:disabled:focus, .input-wrapper input:disabled:focus-within, .input-wrapper input:disabled:focus-visible {
  box-shadow: none !important;
  outline: none !important;
}
.input-wrapper input:focus-visible {
  box-shadow: var(--border-color-focus) 0px 0px 0px 1px;
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}</style>
