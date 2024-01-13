<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import { defaultPropsRadioButton, type PropsRadioButton } from './RadioButton.props';

	export let elementRef: PropsRadioButton['elementRef'] = defaultPropsRadioButton.elementRef;
	export let group: PropsRadioButton['group'] = defaultPropsRadioButton.group;
	export let size: PropsRadioButton['size'] = defaultPropsRadioButton.size;
	export let color: PropsRadioButton['color'] = defaultPropsRadioButton.color;
	export let error: PropsRadioButton['error'] = defaultPropsRadioButton.error;
	let { class: _class, style, checked, required, disabled, value, ...restProps } = $$restProps;

	$: cssClass = clsx(_class, 'RadioButton', {
		[`RadioButton-size-${size}`]: size,
		[`RadioButton-color-${color}`]: color,
		'RadioButton-error': error
	});
</script>

<div
	{style}
	class={cssClass}
	data-radio
	data-color={color}
	data-checked={checked || undefined}
	data-required={required || undefined}
	data-disabled={disabled || undefined}
>
	<input
		type="radio"
		autocomplete="off"
		{value}
		{checked}
		{required}
		{disabled}
		{...restProps}
		bind:this={elementRef}
		bind:group
		on:input
		on:change
		on:focus
		on:blur
	/>
	<span class="RadioButton-indicator" />
</div>

<style lang="scss">
	.RadioButton {
		position: relative;
		width: var(--radio-size);
		height: var(--radio-size);

		input {
			width: var(--radio-size);
			height: var(--radio-size);
			opacity: 0;
			margin: 0;
		}

		.RadioButton-indicator {
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

		// Colors
		--radio-background: var(--gray-a3);
		--radio-background-checked: var(--accent-9);
		--check-color: white;

		// Sizes
		&.RadioButton-size-1 {
			--radio-size: calc(var(--space-4) * 0.875);
			--check-width: calc(var(--radio-size) / 3.5);
			--check-height: calc(var(--radio-size) / 2.5);
		}
		&.RadioButton-size-2 {
			--radio-size: var(--space-4);
			--check-width: calc(var(--radio-size) / 3.5);
			--check-height: calc(var(--radio-size) / 2.5);
		}
		&.RadioButton-size-3 {
			--radio-size: calc(var(--space-4) * 1.25);
			--check-width: calc(var(--radio-size) / 3.5);
			--check-height: calc(var(--radio-size) / 2.5);
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
		}

		&[data-disabled] {
			@include disabled;
		}
		&:focus {
			.RadioButton-indicator {
				@include input-box-shadow-focus;
			}
		}
		input {
			&:checked ~ .RadioButton-indicator {
				background-color: var(--radio-background-checked);
				box-shadow: none;

				&:after {
					background-color: var(--check-color);
				}
			}

			&:focus-visible ~ .RadioButton-indicator {
				@include input-box-shadow-focus;
			}
		}
	}
</style>
