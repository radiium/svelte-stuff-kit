<script>import { clsx } from '../../utils/clsx';
import { defaultPropsSwitch } from './Switch.props';
export let elementRef = defaultPropsSwitch.elementRef;
export let size = defaultPropsSwitch.size;
export let color = defaultPropsSwitch.color;
export let error = defaultPropsSwitch.error;
let { class: _class, style, checked, required, disabled, value, ...restProps } = $$restProps;
$: cssClass = clsx(_class, 'Switch', {
    [`Switch-size-${size}`]: size,
    [`Switch-color-${color}`]: color,
    'Switch-error': error
});
</script>

<div
	{style}
	class={cssClass}
	data-checkbox
	data-color={color}
	data-checked={checked || undefined}
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
		on:input
		on:change
		on:focus
		on:blur
	/>

	<span class="Switch-indicator" />
</div>

<style>.Switch {
  position: relative;
  width: var(--switch-width);
  height: var(--switch-height);
  --switch-background: var(--gray-a3);
  --switch-background-checked: var(--accent-9);
  --switch-check-color: white;
}
.Switch input {
  width: var(--switch-width);
  height: var(--switch-height);
  opacity: 0;
  margin: 0;
}
.Switch .Switch-indicator {
  pointer-events: none;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 0;
  height: var(--switch-height);
  width: var(--switch-width);
  border-radius: var(--radius-2);
  background: var(--switch-background);
  box-shadow: inset 0 0 0 1px var(--gray-8);
  padding: var(--switch-padding);
  transition: background-color ease 0.2s, box-shadow ease 0.2s;
}
.Switch .Switch-indicator:after {
  content: "";
  display: block;
  height: var(--switch-thumb-size);
  width: var(--switch-thumb-size);
  background-color: var(--switch-check-color);
  border-radius: var(--radius-1);
  box-shadow: 0 0 0 1px var(--gray-a3);
  transition: background-color ease 0.2s, box-shadow ease 0.2s, transform ease 0.2s;
}
.Switch.Switch-size-1 {
  --switch-padding: 3px;
  --switch-height: var(--space-4);
  --switch-width: calc(var(--switch-height) * 1.75);
  --switch-thumb-size: calc(var(--switch-height) - var(--switch-padding) * 2);
  --switch-thumb-translate: calc(var(--switch-width) - var(--switch-height));
}
.Switch.Switch-size-2 {
  --switch-padding: 3px;
  --switch-height: calc(var(--space-5) * 5 / 6);
  --switch-width: calc(var(--switch-height) * 1.75);
  --switch-thumb-size: calc(var(--switch-height) - var(--switch-padding) * 2);
  --switch-thumb-translate: calc(var(--switch-width) - var(--switch-height));
}
.Switch.Switch-size-3 {
  --switch-padding: 4px;
  --switch-height: var(--space-5);
  --switch-width: calc(var(--switch-height) * 1.75);
  --switch-thumb-size: calc(var(--switch-height) - var(--switch-padding) * 2);
  --switch-thumb-translate: calc(var(--switch-width) - var(--switch-height));
}
.Switch[data-checked] .Switch-indicator {
  background-color: var(--switch-background-checked);
  box-shadow: none;
}
.Switch[data-checked] .Switch-indicator:after {
  transform: translateX(var(--switch-thumb-translate));
  display: block;
}
.Switch[data-disabled] {
  cursor: default !important;
  opacity: 0.5 !important;
  outline: none !important;
  pointer-events: none;
}
.Switch[data-disabled]:focus, .Switch[data-disabled]:focus-within, .Switch[data-disabled]:focus-visible {
  box-shadow: none !important;
  outline: none !important;
}
.Switch input:focus-visible ~ .Switch-indicator {
  box-shadow: var(--border-color-focus) 0px 0px 0px 1px;
  outline: none;
}</style>
