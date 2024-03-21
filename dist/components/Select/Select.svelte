<script>import { clsx } from '../../utils/clsx.js';
import { defaultSelectProps } from './Select.props.js';
export let elementRef = defaultSelectProps.elementRef;
export let options = defaultSelectProps.options;
export let value = defaultSelectProps.value;
export let size = defaultSelectProps.size;
export let fullWidth = defaultSelectProps.fullWidth;
$: cssClass = clsx($$restProps.class, `Select`, {
    [`Select-size-${size}`]: size,
    'Select-full-width': fullWidth
});
</script>

{#if $$restProps.multiple}
    <!-- Select Multiple -->
    <select
        size={4}
        {...$$restProps}
        multiple
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
    >
        {#each options as option}
            <option value={option.value}>
                {option.label}
            </option>
        {/each}
    </select>
{:else}
    <!-- Select Single -->
    <select
        {...$$restProps}
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
    >
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

<style>.Select {
  border: none;
  border-radius: var(--radius-3);
  box-shadow: inset 0 0 0 1px var(--gray-8);
  color: var(--input-color);
  background-color: var(--input-background);
  display: inline-flex;
  font-size: var(--font-size-3);
  letter-spacing: normal;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  position: relative;
}
.Select[multiple] {
  height: auto !important;
  padding: 0 !important;
}
.Select[multiple] option {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0 var(--space-3) 0 var(--space-5);
}
.Select[multiple] option:checked {
  color: var(--input-color);
  background-color: var(--gray-a6);
}
.Select[multiple] option:checked::before {
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
.Select.Select-size-1 {
  height: var(--space-5);
  min-width: calc(var(--space-9) * 3);
  padding: 0 var(--space-2);
  border-radius: var(--radius-3);
  font-size: var(--font-size-1);
  letter-spacing: var(--letter-spacing-1);
}
.Select.Select-size-1[multiple] option {
  height: var(--space-5);
}
.Select.Select-size-2 {
  height: var(--space-6);
  min-width: calc(var(--space-9) * 3);
  padding: 0 var(--space-2);
  border-radius: var(--radius-3);
  font-size: var(--font-size-2);
  letter-spacing: var(--letter-spacing-2);
}
.Select.Select-size-2[multiple] option {
  height: var(--space-6);
}
.Select.Select-size-3 {
  height: var(--space-7);
  min-width: calc(var(--space-9) * 3);
  padding: 0 var(--space-3);
  border-radius: var(--radius-3);
  font-size: var(--font-size-3);
  letter-spacing: var(--letter-spacing-3);
}
.Select.Select-size-3[multiple] option {
  height: var(--space-7);
}
.Select.Select-full-width {
  width: 100%;
}
.Select:hover {
  box-shadow: inset 0 0 0 1px var(--gray-10);
}
.Select:focus, .Select:focus-visible {
  box-shadow: var(--border-color-focus) 0px 0px 0px 1px;
  outline: none;
}
.Select:disabled {
  cursor: default !important;
  opacity: 0.5 !important;
  outline: none !important;
  pointer-events: none;
}
.Select:disabled:focus, .Select:disabled:focus-within, .Select:disabled:focus-visible {
  box-shadow: none !important;
  outline: none !important;
}</style>
