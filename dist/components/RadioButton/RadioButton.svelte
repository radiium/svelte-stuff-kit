<script>import { clsx } from '../../utils/clsx.js';
import { defaultRadioButtonProps } from './RadioButton.props.js';
export let elementRef = defaultRadioButtonProps.elementRef;
export let group = defaultRadioButtonProps.group;
export let value = defaultRadioButtonProps.value;
export let size = defaultRadioButtonProps.size;
export let color = defaultRadioButtonProps.color;
export let error = defaultRadioButtonProps.error;
$: cssClass = clsx($$restProps.class, 'RadioButton', {
    [`RadioButton-size-${size}`]: size,
    [`RadioButton-color-${color}`]: color,
    'RadioButton-error': error
});
</script>

<input
    {...$$restProps}
    data-color={color}
    data-size={size}
    class={cssClass}
    style={$$restProps.style}
    type="radio"
    {value}
    bind:group
    bind:this={elementRef}
    on:input
    on:change
    on:focus
    on:blur
    on:keydown
    on:keypress
    on:keyup
/>

<style>.RadioButton {
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  border: none;
  position: relative;
  width: var(--radio-size);
  height: var(--radio-size);
  background: var(--radio--background);
  box-shadow: inset 0 0 0 1px var(--gray-8);
  border-radius: 100%;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color ease 0.2s, box-shadow ease 0.2s;
  --radio-background: var(--gray-a3);
  --radio-background-checked: var(--accent-9);
  --check-color: white;
}
.RadioButton:after {
  width: var(--radio-size);
  height: var(--radio-size);
  content: "";
  transform: scale(0.4);
  position: absolute;
  border-radius: 100%;
  background-color: transparent;
  transition: background-color ease 0.2s;
}
.RadioButton[data-checked] {
  background-color: var(--checkbox-background-checked);
  box-shadow: none;
}
.RadioButton[data-checked]:after {
  display: block;
}
.RadioButton[disabled] {
  cursor: default !important;
  opacity: 0.5 !important;
  outline: none !important;
  pointer-events: none;
}
.RadioButton[disabled]:focus, .RadioButton[disabled]:focus-within, .RadioButton[disabled]:focus-visible {
  box-shadow: none !important;
  outline: none !important;
}
.RadioButton:checked {
  background-color: var(--radio-background-checked);
  box-shadow: none;
}
.RadioButton:checked:after {
  background-color: var(--check-color);
}
.RadioButton:focus {
  box-shadow: var(--border-color-focus) 0px 0px 0px 1px;
  outline: none;
}
.RadioButton:focus-visible {
  box-shadow: var(--border-color-focus) 0px 0px 0px 1px;
  outline: none;
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
}</style>
