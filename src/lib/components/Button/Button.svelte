<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import type { PropAlign, PropColor, PropMode, PropSizeButton, PropTypeButton } from '../types';
	
	export let elementRef: HTMLButtonElement | HTMLAnchorElement | undefined = undefined;
	export let href: string = '';
	export let target: string = '_blank';
	export let type: PropTypeButton = 'button';
	export let mode: PropMode = 'solid';
	export let size: PropSizeButton = '2';
	export let color: PropColor = 'neutral';
	export let align: PropAlign = 'center';
	export let active: boolean = false;
	export let disabled: boolean = false;
	export let iconOnly: boolean = false;
	export let circle: boolean = false;
	export let fullWidth: boolean = false;

	$: cssClass = clsx(
		$$restProps.class,
		`btn-${mode}`,
		`btn-size-${size}`,
		`btn-${color}`,
		`btn-align-${align}`,
		{
			'btn-full-width': fullWidth,
			'btn-active': active,
			'btn-icon-only': iconOnly,
			'btn-circle': circle,
			'btn-link': !!href
		}
	);

	$: attributes = {
		disabled: disabled || undefined,
		active: active || undefined,
		tabindex: 0,
		role: 'button',
		'data-accent-color': color,
		...$$restProps
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

		border: var(--btn-border);
		color: var(--btn-color);
		background-color: var(--btn-background);
		transition: background-color linear 80ms;

		:global(svg) {
			height: 60%;
			width: auto;
			fill: var(--btn-color);
		}

		// Sizes
		&.btn-size-1 {
			height: var(--space-5);
			min-width: calc(var(--space-5) * 2);
			padding: 0 var(--space-2);
			border-radius: var(--radius-3);
			gap: var(--space-1);

			font-size: var(--font-size-1);
			line-height: var(--line-height-1);
			letter-spacing: var(--letter-spacing-1);

			&.btn-icon-only {
				min-width: var(--space-5);
				width: var(--space-5);
				padding: var(--space-0);
			}
		}
		&.btn-size-2 {
			height: var(--space-6);
			min-width: calc(var(--space-6) * 2);
			padding: 0 var(--space-2);
			border-radius: var(--radius-3);
			gap: var(--space-1);

			font-size: var(--font-size-2);
			line-height: var(--line-height-2);
			letter-spacing: var(--letter-spacing-2);

			&.btn-icon-only {
				min-width: var(--space-6);
				width: var(--space-6);
				padding: var(--space-0);
			}
		}
		&.btn-size-3 {
			height: var(--space-7);
			min-width: calc(var(--space-7) * 2);
			padding: 0 var(--space-3);
			border-radius: var(--radius-3);
			gap: var(--space-3);

			font-size: var(--font-size-3);
			line-height: var(--line-height-3);
			letter-spacing: var(--letter-spacing-3);

			&.btn-icon-only {
				min-width: var(--space-7);
				width: var(--space-7);
				padding: var(--space-1);
			}
		}
		&.btn-size-4 {
			height: var(--space-8);
			min-width: calc(var(--space-8) * 2);
			padding: 0 var(--space-4);
			border-radius: var(--radius-3);
			gap: var(--space-3);

			font-size: var(--font-size-4);
			line-height: var(--line-height-4);
			letter-spacing: var(--letter-spacing-4);

			&.btn-icon-only {
				min-width: var(--space-8);
				width: var(--space-8);
				padding: var(--space-1);
			}
		}

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
		&.btn-icon-only {
			&.btn-circle {
				border-radius: var(--radius-full);

				:global(svg) {
					height: 65%;
				}
			}
		}

		// Modes
		--border-width: 1px;
		--border-style: solid;

		&.btn-clear {
			--btn-border: none;
			--btn-color: var(--accent-a12);
			--btn-background: transparent;
			--btn-background-hover: var(--accent-a6);
			--btn-background-active: var(--accent-a7);
		}
		&.btn-outline {
			--btn-border: var(--border-width) var(--border-style) var(--accent-9);
			--btn-color: var(--accent-a12);
			--btn-background: transparent;
			--btn-background-hover: var(--accent-a6);
			--btn-background-active: var(--accent-a7);
		}
		&.btn-soft {
			--btn-border: none;
			--btn-color: var(--accent-a12);
			--btn-background: var(--accent-a6);
			--btn-background-hover: var(--accent-a7);
			--btn-background-active: var(--accent-a8);
		}
		&.btn-solid {
			--btn-border: none;
			--btn-color: var(--contrast);
			--btn-background: var(--accent-9);
			--btn-background-hover: var(--accent-10);
			--btn-background-active: var(--accent-11);
		}

		// States
		&:hover {
			background: var(--btn-background-hover);

			&.btn-link {
				text-decoration: underline;
			}
		}
		&:active,
		&.btn-active {
			background: var(--btn-background-active);
		}
		&:disabled {
			@include disabled;
		}
		&:focus-visible {
			@include input-box-shadow-focus;
		}
		&:visited {
			color: var(--btn-color);

			:global(svg) {
				fill: var(--btn-color);
			}
		}
	}
</style>
