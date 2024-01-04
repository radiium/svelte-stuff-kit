<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import { defaultPropsLink, type PropsLink } from './Link.props';

	type $$Props = PropsLink;

	export let elementRef: $$Props['elementRef'] = defaultPropsLink.elementRef;
	export let href: $$Props['href'] = defaultPropsLink.href;
	export let target: $$Props['target'] = defaultPropsLink.target;
	export let rel: $$Props['rel'] = defaultPropsLink.rel;
	export let size: $$Props['size'] = defaultPropsLink.size;
	export let variant: $$Props['variant'] = defaultPropsLink.variant;
	export let color: $$Props['color'] = defaultPropsLink.color;
	export let align: $$Props['align'] = defaultPropsLink.align;
	export let active: $$Props['active'] = defaultPropsLink.active;
	export let disabled: $$Props['disabled'] = defaultPropsLink.disabled;
	export let iconOnly: $$Props['iconOnly'] = defaultPropsLink.iconOnly;
	export let circle: $$Props['circle'] = defaultPropsLink.fullWidth;
	export let fullWidth: $$Props['fullWidth'] = defaultPropsLink.fullWidth;
	let { class: _class, style, ...restProps } = $$restProps;

	$: cssClass = clsx(
		_class,
		'link',
		`link-${variant}`,
		`link-size-${size}`,
		`link-${color}`,
		`link-align-${align}`,
		{
			'link-full-width': fullWidth,
			'link-active': active,
			'link-icon-only': iconOnly,
			'link-circle': circle
		}
	);

	$: attributes = {
		style,
		disabled: disabled || undefined,
		tabindex: 0,
		'data-color': color,
		'data-size': size,
		...restProps
	};
</script>

<a {...attributes} {href} {target} {rel} class={cssClass} bind:this={elementRef} on:click on:focus on:blur>
	<slot />
</a>

<style lang="scss">
	a.link {
		// CSS Vars
		--button-min-width: calc(var(--space-5) * 2);
		--button-width: unset;
		--button-height: var(--space-5);
		--button-padding: 0 var(--space-2);
		--button-border: none;
		--button-border-radius: var(--radius-3);
		--button-background: transparent;
		--button-background-hover: var(--accent-a6);
		--button-background-active: var(--accent-a7);
		--button-color: var(--accent-a12);
		--button-font-size: var(--font-size-1);
		--button-line-height: var(--line-height-1);
		--button-letter-spacing: var(--letter-spacing-1);
		--button-gap: var(--space-1);

		// Customizable
		min-width: var(--button-min-width);
		width: var(--button-width);
		height: var(--button-height);
		padding: var(--button-padding);
		border: var(--button-border);
		border-radius: var(--button-border-radius);
		background-color: var(--button-background);
		color: var(--button-color);
		font-size: var(--button-font-size);
		line-height: var(--button-line-height);
		letter-spacing: var(--button-letter-spacing);
		gap: var(--button-gap);

		// Common
		cursor: pointer;
		position: relative;
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		flex-shrink: 0;
		text-decoration: none;
		white-space: nowrap;
		user-select: none;
		font-weight: bold;
		transition: background-color linear 80ms;

		:global(svg) {
			height: 60%;
			width: auto;
			fill: var(--button-color);
		}

		// In group
		&.link-is-in-group {
			border-radius: 0;

			&:first-child {
				border-top-left-radius: var(--button-border-radius);
				border-bottom-left-radius: var(--button-border-radius);
			}
			&:last-child {
				border-top-right-radius: var(--button-border-radius);
				border-bottom-right-radius: var(--button-border-radius);
			}
		}

		// Sizes
		&.link-size-1 {
			--button-height: var(--space-5);
			--button-min-width: calc(var(--space-5) * 2);
			--button-padding: 0 var(--space-2);
			--button-border-radius: var(--radius-3);
			--button-gap: var(--space-1);

			--button-font-size: var(--font-size-1);
			--button-line-height: var(--line-height-1);
			--button-letter-spacing: var(--letter-spacing-1);

			&.link-icon-only {
				--button-min-width: var(--space-5);
				--button-width: var(--space-5);
				--button-padding: var(--space-0);
			}
		}
		&.link-size-2 {
			--button-height: var(--space-6);
			--button-min-width: calc(var(--space-6) * 2);
			--button-padding: 0 var(--space-2);
			--button-border-radius: var(--radius-3);
			--button-gap: var(--space-1);

			--button-font-size: var(--font-size-2);
			--button-line-height: var(--line-height-2);
			--button-letter-spacing: var(--letter-spacing-2);

			&.link-icon-only {
				--button-min-width: var(--space-6);
				--button-width: var(--space-6);
				--button-padding: var(--space-0);
			}
		}
		&.link-size-3 {
			--button-height: var(--space-7);
			--button-min-width: calc(var(--space-7) * 2);
			--button-padding: 0 var(--space-3);
			--button-border-radius: var(--radius-3);
			--button-gap: var(--space-3);

			--button-font-size: var(--font-size-3);
			--button-line-height: var(--line-height-3);
			--button-letter-spacing: var(--letter-spacing-3);

			&.link-icon-only {
				--button-min-width: var(--space-7);
				--button-width: var(--space-7);
				--button-padding: var(--space-1);
			}
		}
		&.link-size-4 {
			--button-height: var(--space-8);
			--button-min-width: calc(var(--space-8) * 2);
			--button-padding: 0 var(--space-4);
			--button-border-radius: var(--radius-3);
			--button-gap: var(--space-3);

			--button-font-size: var(--font-size-4);
			--button-line-height: var(--line-height-4);
			--button-letter-spacing: var(--letter-spacing-4);

			&.link-icon-only {
				--button-min-width: var(--space-8);
				--button-width: var(--space-8);
				--button-padding: var(--space-1);
			}
		}

		// Variants
		&.link-clear {
			--button-border: none;
			--button-color: var(--accent-a12);
			--button-background: transparent;
			--button-background-hover: var(--accent-a6);
			--button-background-active: var(--accent-a7);
		}
		&.link-outline {
			--button-border: 1px solid var(--accent-9);
			--button-color: var(--accent-a12);
			--button-background: transparent;
			--button-background-hover: var(--accent-a6);
			--button-background-active: var(--accent-a7);
		}
		&.link-soft {
			--button-border: none;
			--button-color: var(--accent-a12);
			--button-background: var(--accent-a6);
			--button-background-hover: var(--accent-a7);
			--button-background-active: var(--accent-a8);
		}
		&.link-solid {
			--button-border: none;
			--button-color: var(--contrast);
			--button-background: var(--accent-9);
			--button-background-hover: var(--accent-10);
			--button-background-active: var(--accent-11);
		}

		&.link-icon-only {
			&.link-circle {
				--button-border-radius: var(--radius-full);

				:global(svg) {
					height: 65%;
				}
			}
		}

		// Content
		&.link-align-start {
			justify-content: flex-start;
			text-align: start;
		}
		&.link-align-center {
			justify-content: center;
			text-align: center;
		}
		&.link-align-end {
			justify-content: flex-end;
			text-align: end;
		}
		&.link-full-width {
			width: 100%;
		}

		// States
		&:hover {
			background: var(--button-background-hover);

			&.link-link {
				text-decoration: underline;
			}
		}
		&:active,
		&.link-active {
			background: var(--button-background-active);
		}
		&:disabled {
			@include disabled;
		}
		&:focus-visible {
			@include input-box-shadow-focus;
		}
		&:visited {
			color: var(--button-color);

			:global(svg) {
				fill: var(--button-color);
			}
		}
	}
</style>
