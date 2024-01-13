<script>import { clsx } from '../../utils/clsx';
import { defaultPropsCheckbox } from './Chekbox.props';
export let elementRef = defaultPropsCheckbox.elementRef;
export let size = defaultPropsCheckbox.size;
export let color = defaultPropsCheckbox.color;
export let error = defaultPropsCheckbox.error;
let { class: _class, style, checked, indeterminate, required, disabled, value, ...restProps } = $$restProps;
$: cssClass = clsx(_class, 'Checkbox', {
    [`Checkbox-size-${size}`]: size,
    [`Checkbox-color-${color}`]: color,
    'Checkbox-error': error
});
</script>

<div
	{style}
	class={cssClass}
	data-checkbox
	data-color={color}
	data-checked={checked || undefined}
	data-indeterminate={indeterminate || undefined}
	data-required={required || undefined}
	data-disabled={disabled || undefined}
>
	<input
		type="checkbox"
		autocomplete="off"
		{value}
		{required}
		{disabled}
		{...restProps}
		bind:this={elementRef}
		bind:checked
		bind:indeterminate
		on:input
		on:change
		on:focus
		on:blur
	/>

	<span class="Checkbox-indicator" />
</div>

<style>.Checkbox {
  position: relative;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  --checkbox-background: var(--gray-a3);
  --checkbox-background-checked: var(--solid-accent-1);
  --check-color: var(--contrast);
}
.Checkbox input {
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  opacity: 0;
  margin: 0;
}
.Checkbox .Checkbox-indicator {
  pointer-events: none;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 0;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: calc(var(--radius-3) / 1.5);
  background-color: var(--checkbox-background);
  box-shadow: inset 0 0 0 1px var(--gray-8);
}
.Checkbox .Checkbox-indicator:after {
  display: none;
  position: absolute;
  content: "";
  width: var(--check-width);
  height: var(--check-height);
  top: 50%;
  left: 50%;
  border: solid var(--check-color);
  transform: translate(-50%, -60%) rotate(45deg);
  border-width: 0 2px 2px 0;
}
.Checkbox.Checkbox-size-1 {
  --checkbox-size: calc(var(--space-4) * 0.875);
  --check-width: calc(var(--checkbox-size) / 3.5);
  --check-height: calc(var(--checkbox-size) / 2.5);
}
.Checkbox.Checkbox-size-2 {
  --checkbox-size: var(--space-4);
  --check-width: calc(var(--checkbox-size) / 3.5);
  --check-height: calc(var(--checkbox-size) / 2.5);
}
.Checkbox.Checkbox-size-3 {
  --checkbox-size: calc(var(--space-4) * 1.25);
  --check-width: calc(var(--checkbox-size) / 3.5);
  --check-height: calc(var(--checkbox-size) / 2.5);
}
.Checkbox[data-checked] .Checkbox-indicator {
  background-color: var(--checkbox-background-checked);
  box-shadow: none;
}
.Checkbox[data-checked] .Checkbox-indicator:after {
  display: block;
}
.Checkbox[data-checked][data-indeterminate] .Checkbox-indicator:after {
  transform: translate(-50%, -80%) rotate(0);
  border-width: 0 0 2px 0;
  width: calc(var(--space-4) / 2.5);
}
.Checkbox[data-disabled] {
  cursor: default !important;
  opacity: 0.5 !important;
  outline: none !important;
  pointer-events: none;
}
.Checkbox[data-disabled]:focus, .Checkbox[data-disabled]:focus-within, .Checkbox[data-disabled]:focus-visible {
  box-shadow: none !important;
  outline: none !important;
}
.Checkbox input:focus-visible ~ .Checkbox-indicator {
  box-shadow: var(--border-color-focus) 0px 0px 0px 1px;
  outline: none;
}</style>
