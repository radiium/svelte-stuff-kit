<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import type { PropColor, PropSizeInput } from '../types';

	export let elementRef: HTMLInputElement | undefined = undefined;
	export let value: string | undefined = undefined;
	export let checked: boolean = false;
	export let size: PropSizeInput = '2';
	export let color: PropColor = 'neutral';
	export let disabled: boolean = false;
	export let required: boolean = false;
	export let error: boolean = false;

	$: cssClass = clsx(
		$$restProps.class,
		'input-wrapper',
		`input-type-switch`,
		`input-size-${size}`,
		`input-color-${color}`,
		{
			'input-checked': checked,
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
		{...attributes}
		type="checkbox"
		{value}
		bind:checked
		bind:this={elementRef}
		on:input
		on:change
		on:focus
		on:blur
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
		height: var(--line-height, var(--switch-height));

		&:not(.input-with-label) {
			width: var(--switch-width);
		}

		input {
			cursor: pointer;
			@include hidden;
			width: var(--switch-width);
			height: var(--switch-height);
		}

		.input-checkmark {
			box-sizing: border-box;
			position: absolute;
			transform: translateY(-50%);
			top: 50%;
			left: 0;
			height: var(--switch-height);
			width: var(--switch-width);
			padding: var(--switch-padding);
			overflow: hidden;
			border-radius: var(--radius-2);
			background: var(--background);
			box-shadow: inset 0 0 0 1px var(--gray-8);
			pointer-events: none;
			transition:
				background-color ease 0.2s,
				box-shadow ease 0.2s;

			&:after {
				content: '';
				display: block;
				height: var(--switch-thumb-size);
				width: var(--switch-thumb-size);
				background-color: var(--check-color);
				border-radius: var(--radius-1);
				box-shadow: 0 0 0 1px var(--gray-a3);
				transition:
					background-color ease 0.2s,
					box-shadow ease 0.2s,
					transform ease 0.2s;
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
			font-size: var(--font-size);
			line-height: var(--line-height);
			user-select: none;
			padding-left: var(--label-padding);
		}

		// Colors
		--background: var(--gray-a3);
		--background-checked: var(--accent-9);
		--check-color: white;

		// Sizes
		&.input-size-1 {
			--switch-padding: 3px;
			--switch-height: var(--space-4);
			--switch-width: calc(var(--switch-height) * 1.75);
			--switch-thumb-size: calc(var(--switch-height) - var(--switch-padding) * 2);
			--switch-thumb-translate: calc(var(--switch-width) - var(--switch-height));

			--label-padding: calc(var(--switch-width) + var(--space-2));
			--font-size: var(--font-size-1);
			--line-height: var(--line-height-1);
		}
		&.input-size-2 {
			--switch-padding: 3px;
			--switch-height: calc(var(--space-5) * 5 / 6);
			--switch-width: calc(var(--switch-height) * 1.75);
			--switch-thumb-size: calc(var(--switch-height) - var(--switch-padding) * 2);
			--switch-thumb-translate: calc(var(--switch-width) - var(--switch-height));

			--label-padding: calc(var(--switch-width) + var(--space-2));
			--font-size: var(--font-size-2);
			--line-height: var(--line-height-2);
		}
		&.input-size-3 {
			--switch-padding: 4px;
			--switch-height: var(--space-5);
			--switch-width: calc(var(--switch-height) * 1.75);
			--switch-thumb-size: calc(var(--switch-height) - var(--switch-padding) * 2);
			--switch-thumb-translate: calc(var(--switch-width) - var(--switch-height));

			--label-padding: calc(var(--switch-width) + var(--space-3));
			--font-size: var(--font-size-3);
			--line-height: var(--line-height-3);
		}

		// States
		&:focus {
			.input-checkmark {
				@include input-box-shadow-focus;
			}
		}
		input {
			&:checked ~ .input-checkmark {
				background-color: var(--background-checked);
				box-shadow: none;

				&:after {
					transform: translateX(var(--switch-thumb-translate));
					box-shadow: none;
				}
			}

			&:focus-visible ~ .input-checkmark {
				@include input-box-shadow-focus;
			}
		}
		&.input-checked {
			.input-checkmark {
				background-color: var(--background-checked);
				box-shadow: none;

				&:after {
					display: block;
					box-shadow: none;
				}
			}
		}
		&.input-disabled {
			cursor: default !important;
			opacity: 0.5 !important;
			outline: none !important;
			pointer-events: none;
		}
	}
</style>
