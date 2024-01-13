<script>import { clsx } from '../../utils/clsx';
import { defaultPropsRadioButton } from './RadioButton.props';
export let elementRef = defaultPropsRadioButton.elementRef;
export let group = defaultPropsRadioButton.group;
export let size = defaultPropsRadioButton.size;
export let color = defaultPropsRadioButton.color;
export let error = defaultPropsRadioButton.error;
let { class: _class, style, checked, required, disabled, value, ...restProps } = $$restProps;
$: cssClass = clsx(_class, 'RadioButton', {
    [`RadioButton-size-${size}`]: size,
    [`RadioButton-color-${color}`]: color,
    'RadioButton-error': error
});
</script>

<div
	{style}
	class={cssClass}
	data-radio
	data-color={color}
	data-checked={checked || undefined}
	data-required={required || undefined}
	data-disabled={disabled || undefined}
>
	<input
		type="radio"
		autocomplete="off"
		{value}
		{checked}
		{required}
		{disabled}
		{...restProps}
		bind:this={elementRef}
		bind:group
		on:input
		on:change
		on:focus
		on:blur
	/>
	<span class="RadioButton-indicator" />
</div>

<style>.RadioButton {
  position: relative;
  width: var(--radio-size);
  height: var(--radio-size);
  --radio-background: var(--gray-a3);
  --radio-background-checked: var(--accent-9);
  --check-color: white;
}
.RadioButton input {
  width: var(--radio-size);
  height: var(--radio-size);
  opacity: 0;
  margin: 0;
}
.RadioButton .RadioButton-indicator {
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 0;
  height: var(--radio-size);
  width: var(--radio-size);
  background: var(--radio--background);
  box-shadow: inset 0 0 0 1px var(--gray-8);
  border-radius: 100%;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color ease 0.2s, box-shadow ease 0.2s;
}
.RadioButton .RadioButton-indicator:after {
  content: "";
  height: 100%;
  width: 100%;
  transform: scale(0.4);
  position: absolute;
  border-radius: 100%;
  background-color: transparent;
  transition: background-color ease 0.2s;
}
.RadioButton.RadioButton-size-1 {
  --radio-size: calc(var(--space-4) * 0.875);
  --check-width: calc(var(--radio-size) / 3.5);
  --check-height: calc(var(--radio-size) / 2.5);
}
.RadioButton.RadioButton-size-2 {
  --radio-size: var(--space-4);
  --check-width: calc(var(--radio-size) / 3.5);
  --check-height: calc(var(--radio-size) / 2.5);
}
.RadioButton.RadioButton-size-3 {
  --radio-size: calc(var(--space-4) * 1.25);
  --check-width: calc(var(--radio-size) / 3.5);
  --check-height: calc(var(--radio-size) / 2.5);
}
.RadioButton[data-checked] .Checkbox-indicator {
  background-color: var(--checkbox-background-checked);
  box-shadow: none;
}
.RadioButton[data-checked] .Checkbox-indicator:after {
  display: block;
}
.RadioButton[data-disabled] {
  cursor: default !important;
  opacity: 0.5 !important;
  outline: none !important;
  pointer-events: none;
}
.RadioButton[data-disabled]:focus, .RadioButton[data-disabled]:focus-within, .RadioButton[data-disabled]:focus-visible {
  box-shadow: none !important;
  outline: none !important;
}
.RadioButton:focus .RadioButton-indicator {
  box-shadow: var(--border-color-focus) 0px 0px 0px 1px;
  outline: none;
}
.RadioButton input:checked ~ .RadioButton-indicator {
  background-color: var(--radio-background-checked);
  box-shadow: none;
}
.RadioButton input:checked ~ .RadioButton-indicator:after {
  background-color: var(--check-color);
}
.RadioButton input:focus-visible ~ .RadioButton-indicator {
  box-shadow: var(--border-color-focus) 0px 0px 0px 1px;
  outline: none;
}</style>
