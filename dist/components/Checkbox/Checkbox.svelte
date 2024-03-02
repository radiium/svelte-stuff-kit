<script>import { clsx } from '../../utils/clsx';
import { defaultCheckboxProps } from './Chekbox.props';
export let elementRef = defaultCheckboxProps.elementRef;
export let checked = defaultCheckboxProps.checked;
export let indeterminate = defaultCheckboxProps.indeterminate;
export let size = defaultCheckboxProps.size;
export let color = defaultCheckboxProps.color;
export let error = defaultCheckboxProps.error;
$: required = $$restProps.required;
$: disabled = $$restProps.disabled;
$: cssClass = clsx($$restProps.class, 'Checkbox', {
    [`Checkbox-size-${size}`]: size,
    [`Checkbox-color-${color}`]: color,
    'Checkbox-error': error
});
</script>

<input
	class={cssClass}
	{...$$restProps}
	data-color={color}
	data-size={size}
	data-checked={checked || undefined}
	data-indeterminate={indeterminate || undefined}
	type="checkbox"
	autocomplete="off"
	{required}
	{disabled}
	bind:checked
	bind:indeterminate
	bind:this={elementRef}
	on:input
	on:change
	on:focus
	on:blur
/>

<style>.Checkbox {
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  border: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: calc(var(--radius-3) / 1.5);
  background-color: var(--checkbox-background);
  box-shadow: inset 0 0 0 1px var(--gray-8);
  position: relative;
  --checkbox-background: var(--gray-a3);
  --checkbox-background-checked: var(--accent-9);
  --check-color: var(--contrast);
}
.Checkbox:after {
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
.Checkbox:checked {
  background-color: var(--checkbox-background-checked);
  box-shadow: none;
}
.Checkbox:checked:after {
  display: block;
}
.Checkbox:checked[data-indeterminate]:after {
  transform: translate(-50%, -80%) rotate(0);
  border-width: 0 0 2px 0;
  width: calc(var(--space-4) / 2.5);
}
.Checkbox[disabled] {
  cursor: default !important;
  opacity: 0.5 !important;
  outline: none !important;
  pointer-events: none;
}
.Checkbox[disabled]:focus, .Checkbox[disabled]:focus-within, .Checkbox[disabled]:focus-visible {
  box-shadow: none !important;
  outline: none !important;
}
.Checkbox:focus-visible {
  box-shadow: var(--border-color-focus) 0px 0px 0px 1px;
  outline: none;
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
}</style>
