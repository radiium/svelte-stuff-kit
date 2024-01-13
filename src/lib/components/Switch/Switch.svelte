<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import { type PropsSwitch, defaultPropsSwitch } from './Switch.props';

	export let elementRef: PropsSwitch['elementRef'] = defaultPropsSwitch.elementRef;
	export let size: PropsSwitch['size'] = defaultPropsSwitch.size;
	export let color: PropsSwitch['color'] = defaultPropsSwitch.color;
	export let error: PropsSwitch['error'] = defaultPropsSwitch.error;
	let { class: _class, style, checked, required, disabled, value, ...restProps } = $$restProps;

	$: cssClass = clsx(_class, 'Switch', {
		[`Switch-size-${size}`]: size,
		[`Switch-color-${color}`]: color,
		'Switch-error': error
	});
</script>

<div
	{style}
	class={cssClass}
	data-checkbox
	data-color={color}
	data-checked={checked || undefined}
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
		on:input
		on:change
		on:focus
		on:blur
	/>

	<span class="Switch-indicator" />
</div>

<style lang="scss">
	.Switch {
		position: relative;
		width: var(--switch-width);
		height: var(--switch-height);

		input {
			width: var(--switch-width);
			height: var(--switch-height);
			opacity: 0;
			margin: 0;
		}

		.Switch-indicator {
			pointer-events: none;
			position: absolute;
			transform: translateY(-50%);
			top: 50%;
			left: 0;
			height: var(--switch-height);
			width: var(--switch-width);
			border-radius: var(--radius-2);
			background: var(--switch-background);
			box-shadow: inset 0 0 0 1px var(--gray-8);
			padding: var(--switch-padding);
			transition:
				background-color ease 0.2s,
				box-shadow ease 0.2s;

			&:after {
				content: '';
				display: block;
				height: var(--switch-thumb-size);
				width: var(--switch-thumb-size);
				background-color: var(--switch-check-color);
				border-radius: var(--radius-1);
				box-shadow: 0 0 0 1px var(--gray-a3);
				transition:
					background-color ease 0.2s,
					box-shadow ease 0.2s,
					transform ease 0.2s;
			}
		}

		// Colors
		--switch-background: var(--gray-a3);
		--switch-background-checked: var(--accent-9);
		--switch-check-color: white;

		// Sizes
		&.Switch-size-1 {
			--switch-padding: 3px;
			--switch-height: var(--space-4);
			--switch-width: calc(var(--switch-height) * 1.75);
			--switch-thumb-size: calc(var(--switch-height) - var(--switch-padding) * 2);
			--switch-thumb-translate: calc(var(--switch-width) - var(--switch-height));
		}
		&.Switch-size-2 {
			--switch-padding: 3px;
			--switch-height: calc(var(--space-5) * 5 / 6);
			--switch-width: calc(var(--switch-height) * 1.75);
			--switch-thumb-size: calc(var(--switch-height) - var(--switch-padding) * 2);
			--switch-thumb-translate: calc(var(--switch-width) - var(--switch-height));
		}
		&.Switch-size-3 {
			--switch-padding: 4px;
			--switch-height: var(--space-5);
			--switch-width: calc(var(--switch-height) * 1.75);
			--switch-thumb-size: calc(var(--switch-height) - var(--switch-padding) * 2);
			--switch-thumb-translate: calc(var(--switch-width) - var(--switch-height));
		}

		// States
		&[data-checked] {
			.Switch-indicator {
				background-color: var(--switch-background-checked);
				box-shadow: none;

				&:after {
					transform: translateX(var(--switch-thumb-translate));
					display: block;
				}
			}
		}

		&[data-disabled] {
			@include disabled;
		}

		input {
			&:focus-visible ~ .Switch-indicator {
				@include input-box-shadow-focus;
			}
		}
	}
</style>
