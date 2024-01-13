<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import { defaultPropsCheckbox, type PropsCheckbox } from './Chekbox.props';

	export let elementRef: PropsCheckbox['elementRef'] = defaultPropsCheckbox.elementRef;
	export let size: PropsCheckbox['size'] = defaultPropsCheckbox.size;
	export let color: PropsCheckbox['color'] = defaultPropsCheckbox.color;
	export let error: PropsCheckbox['error'] = defaultPropsCheckbox.error;
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

<style lang="scss">
	.Checkbox {
		position: relative;
		width: var(--checkbox-size);
		height: var(--checkbox-size);

		input {
			width: var(--checkbox-size);
			height: var(--checkbox-size);
			opacity: 0;
			margin: 0;
		}

		.Checkbox-indicator {
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

			&:after {
				display: none;
				position: absolute;
				content: '';
				width: var(--check-width);
				height: var(--check-height);
				top: 50%;
				left: 50%;
				border: solid var(--check-color);
				transform: translate(-50%, -60%) rotate(45deg);
				border-width: 0 2px 2px 0;
			}
		}

		// Colors
		--checkbox-background: var(--gray-a3);
		--checkbox-background-checked: var(--solid-accent-1);
		--check-color: var(--contrast);

		// Sizes
		&.Checkbox-size-1 {
			--checkbox-size: calc(var(--space-4) * 0.875); // var(--space-4);
			--check-width: calc(var(--checkbox-size) / 3.5);
			--check-height: calc(var(--checkbox-size) / 2.5);
		}
		&.Checkbox-size-2 {
			--checkbox-size: var(--space-4); // var(--space-5);
			--check-width: calc(var(--checkbox-size) / 3.5);
			--check-height: calc(var(--checkbox-size) / 2.5);
		}
		&.Checkbox-size-3 {
			--checkbox-size: calc(var(--space-4) * 1.25); // var(--space-6);
			--check-width: calc(var(--checkbox-size) / 3.5);
			--check-height: calc(var(--checkbox-size) / 2.5);
		}

		// States
		&[data-checked] {
			.Checkbox-indicator {
				background-color: var(--checkbox-background-checked);
				box-shadow: none;

				&:after {
					display: block;
				}
			}

			&[data-indeterminate] {
				.Checkbox-indicator {
					&:after {
						transform: translate(-50%, -80%) rotate(0);
						border-width: 0 0 2px 0;
						width: calc(var(--space-4) / 2.5);
					}
				}
			}
		}

		&[data-disabled] {
			@include disabled;
		}

		input {
			&:focus-visible ~ .Checkbox-indicator {
				@include input-box-shadow-focus;
			}
		}
	}
</style>
