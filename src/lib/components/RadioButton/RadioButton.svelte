<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import { defaultPropsRadioButton, type PropsRadioButton } from './RadioButton.props';

	type $$Props = PropsRadioButton;
	export let elementRef: $$Props['elementRef'] = defaultPropsRadioButton.elementRef;
	export let value: $$Props['value'] = defaultPropsRadioButton.value;
	export let checked: $$Props['checked'] = defaultPropsRadioButton.checked;
	export let group: $$Props['group'] = defaultPropsRadioButton.group;
	export let size: $$Props['size'] = defaultPropsRadioButton.size;
	export let color: $$Props['color'] = defaultPropsRadioButton.color;
	export let disabled: $$Props['disabled'] = defaultPropsRadioButton.disabled;
	export let required: $$Props['required'] = defaultPropsRadioButton.required;
	export let error: $$Props['error'] = defaultPropsRadioButton.error;
	let { class: _class, style, ...restProps } = $$restProps;

	$: cssClass = clsx(
		_class,
		'input-wrapper',
		`input-type-radio`,
		`input-size-${size}`,
		`input-color-${color}`,
		{
			'input-disabled': disabled,
			'input-required': required,
			'input-error': error,
			'input-with-label': $$slots.default
		}
	);

	$: attributes = {
		style,
		checked: checked,
		disabled: disabled || undefined,
		required: required || undefined,
		autocomplete: 'off',
		...restProps
	};
</script>

<label class={cssClass} data-color={color}>
	<input
		{...attributes}
		type="radio"
		{value}
		bind:group
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
		height: var(--line-height, var(--radio-size));

		&:not(.input-with-label) {
			width: var(--radio-size);
		}

		input {
			cursor: pointer;
			@include hidden;
			width: var(--radio-size);
			height: var(--radio-size);
		}

		.input-checkmark {
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
			transition:
				background-color ease 0.2s,
				box-shadow ease 0.2s;

			&:after {
				content: '';
				height: 100%;
				width: 100%;
				transform: scale(0.4);
				position: absolute;
				border-radius: 100%;
				background-color: transparent;
				transition: background-color ease 0.2s;
			}
		}

		.input-label {
			user-select: none;
			font-size: var(--font-size);
			line-height: var(--line-height);
			padding-left: var(--label-padding);
		}

		// Colors
		--radio-background: var(--gray-a3);
		--radio-background-checked: var(--accent-9);
		--check-color: white;

		// Sizes
		&.input-size-1 {
			--radio-size: calc(var(--space-4) * 0.875);
			--check-width: calc(var(--radio-size) / 3.5);
			--check-height: calc(var(--radio-size) / 2.5);

			--label-padding: calc(var(--radio-size) + var(--space-2));
			--font-size: var(--font-size-1);
			--line-height: var(--line-height-1);
		}
		&.input-size-2 {
			--radio-size: var(--space-4);
			--check-width: calc(var(--radio-size) / 3.5);
			--check-height: calc(var(--radio-size) / 2.5);

			--label-padding: calc(var(--radio-size) + var(--space-2));
			--font-size: var(--font-size-2);
			--line-height: var(--line-height-2);
		}
		&.input-size-3 {
			--radio-size: calc(var(--space-4) * 1.25);
			--check-width: calc(var(--radio-size) / 3.5);
			--check-height: calc(var(--radio-size) / 2.5);

			--label-padding: calc(var(--radio-size) + var(--space-3));
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
				background-color: var(--radio-background-checked);
				box-shadow: none;

				&:after {
					background-color: var(--check-color);
				}
			}

			&:focus-visible ~ .input-checkmark {
				@include input-box-shadow-focus;
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
