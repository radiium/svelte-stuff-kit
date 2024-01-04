<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import { defaultPropsSelect, type PropsSelect } from './Select.props';

	type $$Props = PropsSelect;
	export let elementRef: $$Props['elementRef'] = defaultPropsSelect.elementRef;
	export let options: $$Props['options'] = defaultPropsSelect.options;
	export let value: $$Props['value'] = defaultPropsSelect.value;
	export let multiple: $$Props['multiple'] = defaultPropsSelect.multiple;
	export let size: $$Props['size'] = defaultPropsSelect.size;
	export let disabled: $$Props['disabled'] = defaultPropsSelect.disabled;
	export let required: $$Props['required'] = defaultPropsSelect.required;
	export let fullWidth: $$Props['fullWidth'] = defaultPropsSelect.fullWidth;
	let { class: _class, style, ...restProps } = $$restProps;

	$: cssClass = clsx(_class, `input-type-select`, `input-size-${size}`, {
		'input-disabled': disabled,
		'input-required': required,
		'input-multiple': multiple,
		'input-full-width': fullWidth
	});

	$: attributes = {
		style,
		disabled: disabled || undefined,
		required: required || undefined,
		...restProps
	};
</script>

{#if multiple}
	<!-- Select Multiple -->
	<select
		{...attributes}
		class={cssClass}
		size={4}
		multiple
		bind:value
		bind:this={elementRef}
		on:input
		on:change
		on:focus
		on:blur
	>
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
	<select
		{...attributes}
		class={cssClass}
		bind:value
		bind:this={elementRef}
		on:input
		on:change
		on:focus
		on:blur
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

<style lang="scss">
	select {
		border: none;
		border-radius: var(--radius-3);
		box-shadow: inset 0 0 0 1px var(--gray-8);
		color: var(--input-color);
		background-color: var(--input-background);
		display: inline-flex;
		font-size: var(--font-size-3);
		letter-spacing: normal;
		appearance: none;

		&[multiple] {
			height: auto !important;
			padding: 0;

			option {
				position: relative;
				display: inline-flex;
				align-items: center;
				padding: 0 var(--space-3) 0 var(--space-5);

				&:checked {
					color: var(--input-color);
					background-color: var(--gray-a6);

					&::before {
						content: '';
						position: absolute;
						left: 8px;
						border-width: 0 0 1px 1px;
						border-color: var(--color);
						border-style: solid;
						width: 7px;
						height: 5px;
						transform: rotate(-45deg);
					}
				}
			}
		}

		// Sizes
		&.input-size-1 {
			height: var(--space-5);
			min-width: calc(var(--space-9) * 3);
			padding: 0 var(--space-2);
			border-radius: var(--radius-3);

			font-size: var(--font-size-1);
			letter-spacing: var(--letter-spacing-1);

			&[multiple] {
				option {
					height: var(--space-5);
				}
			}
		}
		&.input-size-2 {
			height: var(--space-6);
			min-width: calc(var(--space-9) * 3);
			padding: 0 var(--space-2);
			border-radius: var(--radius-3);

			font-size: var(--font-size-2);
			letter-spacing: var(--letter-spacing-2);

			&[multiple] {
				option {
					height: var(--space-6);
				}
			}
		}
		&.input-size-3 {
			height: var(--space-7);
			min-width: calc(var(--space-9) * 3);
			padding: 0 var(--space-3);
			border-radius: var(--radius-3);

			font-size: var(--font-size-3);
			letter-spacing: var(--letter-spacing-3);

			&[multiple] {
				option {
					height: var(--space-7);
				}
			}
		}
		&.input-full-width {
			width: 100%;
		}

		// States
		&.input-disabled {
			@include disabled;
		}

		&:hover {
			box-shadow: inset 0 0 0 1px var(--gray-10);
		}
		&:focus,
		&:focus-visible {
			@include input-box-shadow-focus;
		}
	}
</style>
