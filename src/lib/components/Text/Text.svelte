<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import { defaultPropsText, type PropsText } from './Text.props';

	type $$Props = PropsText;
	export let elementRef: $$Props['elementRef'] = defaultPropsText.elementRef;
	export let as: $$Props['as'] = defaultPropsText.as;
	export let color: $$Props['color'] = defaultPropsText.color;
	export let size: $$Props['size'] = defaultPropsText.size;
	export let weight: $$Props['weight'] = defaultPropsText.weight;
	export let align: $$Props['align'] = defaultPropsText.align;
	export let disabled: $$Props['disabled'] = defaultPropsText.disabled;
	export let required: $$Props['required'] = defaultPropsText.required;
	let { class: _class, style, ...restProps } = $$restProps;

	$: cssClass = clsx(
		_class,
		'text-wrapper',
		`text-size-${size}`,
		`text-weight-${weight}`,
		`text-align-${align}`,
		{
			[`text-color-${color}`]: color,
			'text-required': required,
			'text-disabled': disabled
		}
	);

	$: attributes = {
		style,
		'data-color': color,
		...restProps
	};
</script>

<svelte:element this={as} {...attributes} class={cssClass} bind:this={elementRef}>
	<slot />
</svelte:element>

<style lang="scss">
	.text-wrapper {
		// Colors
		color: var(--accent-a11, var(--color));

		// Sizes
		&.text-size-1 {
			font-size: var(--font-size-1);
			line-height: var(--line-height-1);
			letter-spacing: var(--letter-spacing-1);
		}
		&.text-size-2 {
			font-size: var(--font-size-2);
			line-height: var(--line-height-2);
			letter-spacing: var(--letter-spacing-2);
		}
		&.text-size-3 {
			font-size: var(--font-size-3);
			line-height: var(--line-height-3);
			letter-spacing: var(--letter-spacing-3);
		}
		&.text-size-4 {
			font-size: var(--font-size-4);
			line-height: var(--line-height-4);
			letter-spacing: var(--letter-spacing-4);
		}
		&.text-size-5 {
			font-size: var(--font-size-5);
			line-height: var(--line-height-5);
			letter-spacing: var(--letter-spacing-5);
		}
		&.text-size-6 {
			font-size: var(--font-size-6);
			line-height: var(--line-height-6);
			letter-spacing: var(--letter-spacing-6);
		}
		&.text-size-7 {
			font-size: var(--font-size-7);
			line-height: var(--line-height-7);
			letter-spacing: var(--letter-spacing-7);
		}
		&.text-size-8 {
			font-size: var(--font-size-8);
			line-height: var(--line-height-8);
			letter-spacing: var(--letter-spacing-8);
		}
		&.text-size-9 {
			font-size: var(--font-size-9);
			line-height: var(--line-height-9);
			letter-spacing: var(--letter-spacing-9);
		}

		// Weight
		&.text-weight-light {
			font-weight: var(--font-weight-light);
		}
		&.text-weight-regular {
			font-weight: var(--font-weight-regular);
		}
		&.text-weight-medium {
			font-weight: var(--font-weight-medium);
		}
		&.text-weight-bold {
			font-weight: var(--font-weight-bold);
		}

		// Alignement
		&.text-align-start {
			text-align: start;
		}
		&.text-align-center {
			text-align: center;
		}
		&.text-align-end {
			text-align: end;
		}

		&.text-required {
			&:after {
				content: ' *';
				color: var(--color-red);
			}
		}

		&.text-disabled {
			opacity: 0.5 !important;
		}
	}
</style>
