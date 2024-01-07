<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import { defaultPropsCheckbox, type PropsCheckbox } from './Chekbox.props';

	export let elementRef: PropsCheckbox['elementRef'] = defaultPropsCheckbox.elementRef;
	export let value: PropsCheckbox['value'] = defaultPropsCheckbox.value;
	export let checked: PropsCheckbox['checked'] = defaultPropsCheckbox.checked;
	export let indeterminate: PropsCheckbox['indeterminate'] = defaultPropsCheckbox.indeterminate;
	export let size: PropsCheckbox['size'] = defaultPropsCheckbox.size;
	export let color: PropsCheckbox['color'] = defaultPropsCheckbox.color;
	export let disabled: PropsCheckbox['disabled'] = defaultPropsCheckbox.disabled;
	export let required: PropsCheckbox['required'] = defaultPropsCheckbox.required;
	export let error: PropsCheckbox['error'] = defaultPropsCheckbox.error;
	let { class: _class, style, ...restProps } = $$restProps;

	$: cssClass = clsx(_class, 'Checkbox', {
		[`Checkbox-size-${size}`]: size,
		[`Checkbox-color-${color}`]: color,
		'Checkbox-checked': checked,
		'Checkbox-indeterminate': indeterminate,
		'Checkbox-disabled': disabled,
		'Checkbox-required': required,
		'Checkbox-error': error,
		'Checkbox-with-label': $$slots.default
	});

	$: attributes = {
		style,
		disabled: disabled || undefined,
		required: required || undefined,
		...restProps
	};
</script>

<label data-checkbox class={cssClass} data-color={color} {...attributes}>
	<input
		type="checkbox"
		autocomplete="off"
		{value}
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

	<span class="Checkbox-checkmark" />

	{#if $$slots.default}
		<span class="Checkbox-label">
			<slot />
		</span>
	{/if}
</label>

<style lang="scss">
	.Checkbox {
		position: relative;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		cursor: pointer;
		height: var(--line-height, var(--checkbox-size));

		&:not(.Checkbox-with-label) {
			width: var(--checkbox-size);
		}
		input {
			cursor: pointer;
			@include hidden;
			width: var(--checkbox-size);
			height: var(--checkbox-size);
		}

		.Checkbox-checkmark {
			position: absolute;
			overflow: hidden;
			top: 50%;
			left: 0;
			border-radius: calc(var(--radius-3) / 1.5);
			background-color: var(--checkbox-background);
			box-shadow: inset 0 0 0 1px var(--gray-8);
			transform: translateY(-50%);
			pointer-events: none;
			height: var(--checkbox-size);
			width: var(--checkbox-size);

			&:after {
				content: '';
				width: var(--check-width);
				height: var(--check-height);
				position: absolute;
				display: none;
				top: 50%;
				left: 50%;
				border: solid var(--check-color);
				transform: translate(-50%, -60%) rotate(45deg);
				border-width: 0 2px 2px 0;
				/* transition: background-color ease 0.2s; */
			}
		}
		&.Checkbox-indeterminate {
			.input-checkmark {
				&:after {
					transform: translate(-50%, -80%) rotate(0);
					border-width: 0 0 2px 0;
					width: calc(var(--space-4) / 2.5);
				}
			}
		}

		.Checkbox-label {
			user-select: none;
			font-size: var(--font-size);
			line-height: var(--line-height);
			padding-left: var(--label-padding);
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

			--label-padding: calc(var(--checkbox-size) + var(--space-2));
			--font-size: var(--font-size-1);
			--line-height: var(--line-height-1);
		}
		&.Checkbox-size-2 {
			--checkbox-size: var(--space-4); // var(--space-5);
			--check-width: calc(var(--checkbox-size) / 3.5);
			--check-height: calc(var(--checkbox-size) / 2.5);

			--label-padding: calc(var(--checkbox-size) + var(--space-2));
			--font-size: var(--font-size-2);
			--line-height: var(--line-height-2);
		}
		&.Checkbox-size-3 {
			--checkbox-size: calc(var(--space-4) * 1.25); // var(--space-6);
			--check-width: calc(var(--checkbox-size) / 3.5);
			--check-height: calc(var(--checkbox-size) / 2.5);

			--label-padding: calc(var(--checkbox-size) + var(--space-3));
			--font-size: var(--font-size-3);
			--line-height: var(--line-height-3);
		}

		// States
		&.Checkbox-disabled {
			cursor: default !important;
			opacity: 0.5 !important;
			outline: none !important;
			pointer-events: none;
		}

		&:checkbox-visible {
			outline: none;
		}

		input {
			&:focus-visible ~ .Checkbox-checkmark {
				@include input-box-shadow-focus;
			}
		}

		&:focus {
			.Checkbox-checkmark {
				@include input-box-shadow-focus;
			}
		}

		&.Checkbox-checked {
			.Checkbox-checkmark {
				background-color: var(--checkbox-background-checked);
				box-shadow: none;

				&:after {
					display: block;
				}
			}
		}
	}
</style>
