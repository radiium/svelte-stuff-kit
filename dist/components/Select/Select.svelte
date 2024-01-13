<script>import { clsx } from '../../utils/clsx';
import { defaultPropsSelect } from './Select.props';
export let elementRef = defaultPropsSelect.elementRef;
export let options = defaultPropsSelect.options;
export let value = defaultPropsSelect.value;
export let size = defaultPropsSelect.size;
export let fullWidth = defaultPropsSelect.fullWidth;
let { class: _class, style, multiple, ...restProps } = $$restProps;
$: cssClass = clsx(_class, `Select`, {
    [`Select-size-${size}`]: size,
    'Select-full-width': fullWidth
});
$: attributes = {
    class: cssClass,
    style,
    multiple,
    size: multiple ? 4 : undefined,
    ...restProps
};
</script>

{#if multiple}
	<!-- Select Multiple -->
	<select bind:this={elementRef} bind:value {...attributes} on:input on:change on:focus on:blur>
		{#each options as option, index}
			<option value={option.value}>
				<slot {index} {option}>
					{option.label}
				</slot>
			</option>
		{/each}
	</select>
{:else}
	<!-- Select Single -->
	<select bind:this={elementRef} bind:value {...attributes} on:input on:change on:focus on:blur>
		{#if !value}
			<option value="" disabled selected>-- Select an option --</option>
		{/if}
		{#each options as option}
			<option value={option.value}>
				{option.label}
			</option>
		{/each}
	</select>
{/if}

<!-- 
	a tester 
	https://codepen.io/STKNG/pen/GbVogZ
 -->

<style>select.Select {
  border: none;
  border-radius: var(--radius-3);
  box-shadow: inset 0 0 0 1px var(--gray-8);
  color: var(--input-color);
  background-color: var(--input-background);
  display: inline-flex;
  font-size: var(--font-size-3);
  letter-spacing: normal;
  appearance: none;
}
select.Select[multiple] {
  height: auto !important;
  padding: 0;
}
select.Select[multiple] option {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0 var(--space-3) 0 var(--space-5);
}
select.Select[multiple] option:checked {
  color: var(--input-color);
  background-color: var(--gray-a6);
}
select.Select[multiple] option:checked::before {
  content: "";
  position: absolute;
  left: 8px;
  border-width: 0 0 1px 1px;
  border-color: var(--color);
  border-style: solid;
  width: 7px;
  height: 5px;
  transform: rotate(-45deg);
}
select.Select.Select-size-1 {
  height: var(--space-5);
  min-width: calc(var(--space-9) * 3);
  padding: 0 var(--space-2);
  border-radius: var(--radius-3);
  font-size: var(--font-size-1);
  letter-spacing: var(--letter-spacing-1);
}
select.Select.Select-size-1[multiple] option {
  height: var(--space-5);
}
select.Select.Select-size-2 {
  height: var(--space-6);
  min-width: calc(var(--space-9) * 3);
  padding: 0 var(--space-2);
  border-radius: var(--radius-3);
  font-size: var(--font-size-2);
  letter-spacing: var(--letter-spacing-2);
}
select.Select.Select-size-2[multiple] option {
  height: var(--space-6);
}
select.Select.Select-size-3 {
  height: var(--space-7);
  min-width: calc(var(--space-9) * 3);
  padding: 0 var(--space-3);
  border-radius: var(--radius-3);
  font-size: var(--font-size-3);
  letter-spacing: var(--letter-spacing-3);
}
select.Select.Select-size-3[multiple] option {
  height: var(--space-7);
}
select.Select.Select-full-width {
  width: 100%;
}
select.Select:hover {
  box-shadow: inset 0 0 0 1px var(--gray-10);
}
select.Select:focus, select.Select:focus-visible {
  box-shadow: var(--border-color-focus) 0px 0px 0px 1px;
  outline: none;
}
select.Select:disabled {
  cursor: default !important;
  opacity: 0.5 !important;
  outline: none !important;
  pointer-events: none;
}
select.Select:disabled:focus, select.Select:disabled:focus-within, select.Select:disabled:focus-visible {
  box-shadow: none !important;
  outline: none !important;
}</style>
