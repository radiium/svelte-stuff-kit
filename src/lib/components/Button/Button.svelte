<script lang="ts">
	import { getContext } from 'svelte';
	import { clsx } from '../../utils/clsx';
	import { defaultPropsButton, type PropsButton } from './Button.props';

	type $$Props = PropsButton;

	export let elementRef: PropsButton['elementRef'] = defaultPropsButton.elementRef;
	export let href: PropsButton['href'] = defaultPropsButton.href;
	export let target: PropsButton['target'] = defaultPropsButton.target;
	export let type: PropsButton['type'] = defaultPropsButton.type;
	export let size: PropsButton['size'] = defaultPropsButton.size;
	export let mode: PropsButton['mode'] = defaultPropsButton.mode;
	export let color: PropsButton['color'] = defaultPropsButton.color;
	export let align: PropsButton['align'] = defaultPropsButton.align;
	export let active: PropsButton['active'] = defaultPropsButton.active;
	export let disabled: PropsButton['disabled'] = defaultPropsButton.disabled;
	export let iconOnly: PropsButton['iconOnly'] = defaultPropsButton.iconOnly;
	export let circle: PropsButton['circle'] = defaultPropsButton.fullWidth;
	export let fullWidth: PropsButton['fullWidth'] = defaultPropsButton.fullWidth;
	let { class: _class, style, ...restProps } = $$restProps;

	const isInGroup = getContext('ButtonGroup');

	$: cssClass = clsx(_class, `btn-${mode}`, `btn-size-${size}`, `btn-${color}`, `btn-align-${align}`, {
		'btn-is-in-group': isInGroup,
		'btn-full-width': fullWidth,
		'btn-active': active,
		'btn-icon-only': iconOnly,
		'btn-circle': circle,
		'btn-link': !!href
	});

	$: attributes = {
		style,
		disabled: disabled || undefined,
		active: active || undefined,
		tabindex: 0,
		'data-color': color,
		'data-size': size,
		...restProps
	};
</script>

{#if href}
	<a
		{...attributes}
		{href}
		{target}
		class={cssClass}
		bind:this={elementRef}
		on:click
		on:submit
		on:focus
		on:blur
	>
		<slot />
	</a>
{:else}
	<button {...attributes} {type} class={cssClass} bind:this={elementRef} on:click on:submit on:focus on:blur>
		<slot />
	</button>
{/if}

<style lang="scss">
	a,
	button {
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
		&.btn-is-in-group {
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
		&.btn-size-1 {
			--button-height: var(--space-5);
			--button-min-width: calc(var(--space-5) * 2);
			--button-padding: 0 var(--space-2);
			--button-border-radius: var(--radius-3);
			--button-gap: var(--space-1);

			--button-font-size: var(--font-size-1);
			--button-line-height: var(--line-height-1);
			--button-letter-spacing: var(--letter-spacing-1);

			&.btn-icon-only {
				--button-min-width: var(--space-5);
				--button-width: var(--space-5);
				--button-padding: var(--space-0);
			}
		}
		&.btn-size-2 {
			--button-height: var(--space-6);
			--button-min-width: calc(var(--space-6) * 2);
			--button-padding: 0 var(--space-2);
			--button-border-radius: var(--radius-3);
			--button-gap: var(--space-1);

			--button-font-size: var(--font-size-2);
			--button-line-height: var(--line-height-2);
			--button-letter-spacing: var(--letter-spacing-2);

			&.btn-icon-only {
				--button-min-width: var(--space-6);
				--button-width: var(--space-6);
				--button-padding: var(--space-0);
			}
		}
		&.btn-size-3 {
			--button-height: var(--space-7);
			--button-min-width: calc(var(--space-7) * 2);
			--button-padding: 0 var(--space-3);
			--button-border-radius: var(--radius-3);
			--button-gap: var(--space-3);

			--button-font-size: var(--font-size-3);
			--button-line-height: var(--line-height-3);
			--button-letter-spacing: var(--letter-spacing-3);

			&.btn-icon-only {
				--button-min-width: var(--space-7);
				--button-width: var(--space-7);
				--button-padding: var(--space-1);
			}
		}
		&.btn-size-4 {
			--button-height: var(--space-8);
			--button-min-width: calc(var(--space-8) * 2);
			--button-padding: 0 var(--space-4);
			--button-border-radius: var(--radius-3);
			--button-gap: var(--space-3);

			--button-font-size: var(--font-size-4);
			--button-line-height: var(--line-height-4);
			--button-letter-spacing: var(--letter-spacing-4);

			&.btn-icon-only {
				--button-min-width: var(--space-8);
				--button-width: var(--space-8);
				--button-padding: var(--space-1);
			}
		}

		// Modes
		&.btn-clear {
			--button-border: none;
			--button-color: var(--accent-a12);
			--button-background: transparent;
			--button-background-hover: var(--accent-a6);
			--button-background-active: var(--accent-a7);
		}
		&.btn-outline {
			--button-border: 1px solid var(--accent-9);
			--button-color: var(--accent-a12);
			--button-background: transparent;
			--button-background-hover: var(--accent-a6);
			--button-background-active: var(--accent-a7);
		}
		&.btn-soft {
			--button-border: none;
			--button-color: var(--accent-a12);
			--button-background: var(--accent-a6);
			--button-background-hover: var(--accent-a7);
			--button-background-active: var(--accent-a8);
		}
		&.btn-solid {
			--button-border: none;
			--button-color: var(--contrast);
			--button-background: var(--accent-9);
			--button-background-hover: var(--accent-10);
			--button-background-active: var(--accent-11);
		}

		&.btn-icon-only {
			&.btn-circle {
				--button-border-radius: var(--radius-full);

				:global(svg) {
					height: 65%;
				}
			}
		}

		// Content
		&.btn-align-start {
			justify-content: flex-start;
			text-align: start;
		}
		&.btn-align-center {
			justify-content: center;
			text-align: center;
		}
		&.btn-align-end {
			justify-content: flex-end;
			text-align: end;
		}
		&.btn-full-width {
			width: 100%;
		}

		// States
		&:hover {
			background: var(--button-background-hover);

			&.btn-link {
				text-decoration: underline;
			}
		}
		&:active,
		&.btn-active {
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
