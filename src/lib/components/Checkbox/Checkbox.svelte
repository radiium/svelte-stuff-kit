<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import type { PropColor, PropSizeInput } from '../types';

	export let elementRef: HTMLInputElement | undefined = undefined;
	export let value: string | undefined = undefined;
	export let checked: boolean = false;
	export let indeterminate: boolean = false;
	export let size: PropSizeInput = '2';
	export let color: PropColor = 'neutral';
	export let disabled: boolean = false;
	export let required: boolean = false;
	export let error: boolean = false;

	$: cssClass = clsx(
		$$restProps.class,
		'input-wrapper',
		'input-type-checkbox',
		`input-size-${size}`,
		`input-color-${color}`,
		{
			'input-checked': checked,
			'input-indeterminate': indeterminate,
			'input-disabled': disabled,
			'input-required': required,
			'input-error': error,
			'input-with-label': $$slots.default
		}
	);

	$: attributes = {
		disabled: disabled || undefined,
		required: required || undefined,
		...$$restProps
	};
</script>

<label class={cssClass} data-color={color} aria-checked={checked}>
	<input
		type="checkbox"
		{value}
		bind:checked
		bind:indeterminate
		bind:this={elementRef}
		on:input
		on:change
		on:focus
		on:blur
		{...attributes}
	/>
	<span class="input-checkmark" />

	{#if $$slots.default}
		<span class="input-label">
			<slot />
		</span>
	{/if}
</label>

<style lang="scss">
	.input-wrapper {
		position: relative;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		cursor: pointer;
		height: var(--line-height, var(--checkbox-size));

		&:not(.input-with-label) {
			width: var(--checkbox-size);
		}
		input {
			cursor: pointer;
			@include hidden;
			width: var(--checkbox-size);
			height: var(--checkbox-size);
		}

		.input-checkmark {
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
		&.input-indeterminate {
			.input-checkmark {
				&:after {
					transform: translate(-50%, -80%) rotate(0);
					border-width: 0 0 2px 0;
					width: calc(var(--space-4) / 2.5);
				}
			}
		}

		.input-label {
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
		&.input-size-1 {
			--checkbox-size: calc(var(--space-4) * 0.875); // var(--space-4);
			--check-width: calc(var(--checkbox-size) / 3.5);
			--check-height: calc(var(--checkbox-size) / 2.5);

			--label-padding: calc(var(--checkbox-size) + var(--space-2));
			--font-size: var(--font-size-1);
			--line-height: var(--line-height-1);
		}
		&.input-size-2 {
			--checkbox-size: var(--space-4); // var(--space-5);
			--check-width: calc(var(--checkbox-size) / 3.5);
			--check-height: calc(var(--checkbox-size) / 2.5);

			--label-padding: calc(var(--checkbox-size) + var(--space-2));
			--font-size: var(--font-size-2);
			--line-height: var(--line-height-2);
		}
		&.input-size-3 {
			--checkbox-size: calc(var(--space-4) * 1.25); // var(--space-6);
			--check-width: calc(var(--checkbox-size) / 3.5);
			--check-height: calc(var(--checkbox-size) / 2.5);

			--label-padding: calc(var(--checkbox-size) + var(--space-3));
			--font-size: var(--font-size-3);
			--line-height: var(--line-height-3);
		}

		// States
		&.input-disabled {
			cursor: default !important;
			opacity: 0.5 !important;
			outline: none !important;
			pointer-events: none;
		}

		&:focus-visible {
			outline: none;
		}

		input {
			&:focus-visible ~ .input-checkmark {
				@include input-box-shadow-focus;
			}
		}

		&:focus {
			.input-checkmark {
				@include input-box-shadow-focus;
			}
		}

		&.input-checked {
			.input-checkmark {
				background-color: var(--checkbox-background-checked);
				box-shadow: none;

				&:after {
					display: block;
				}
			}
		}
	}
</style>
