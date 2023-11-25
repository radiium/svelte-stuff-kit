<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import type { PropSizeInput, PropColor } from '../types';

	export let elementRef: HTMLInputElement | undefined = undefined;
	export let value: number | undefined = undefined;
	export let size: PropSizeInput = '2';
	export let color: PropColor = 'neutral';
	export let disabled: boolean = false;
	export let required: boolean = false;
	export let error: boolean = false;
	export let fullWidth: boolean = false;

	$: cssClass = clsx(
		$$restProps.class,
		'input-wrapper',
		`input-type-range`,
		`input-size-${size}`,
		`input-color-${color}`,
		{
			'input-disabled': disabled,
			'input-required': required,
			'input-error': error,
			'input-full-width': fullWidth
		}
	);

	$: attributes = {
		disabled: disabled || undefined,
		required: required || undefined,
		...$$restProps
	};
</script>

<div class={cssClass} data-accent-color={color}>
	<input
		{...attributes}
		type="range"
		bind:value
		bind:this={elementRef}
		on:input
		on:change
		on:focus
		on:blur
	/>
	<div class="input-highlight" />
</div>

<style lang="scss">
	.input-wrapper {
		flex-shrink: 0;
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: flex-start;
		min-width: calc(var(--input-size-m) * 2);
		gap: var(--space-2);
		height: var(--input-size-m);
		min-width: calc(var(--input-size-m) * 3);
		padding: 0 var(--space-2);

		&.input-full-width {
			width: 100%;
		}

		&.input-disabled {
			input {
				@include disabled;
			}
		}

		input {
			--thumb-width: var(--space-3);
			--thumb-height: calc(var(--input-size-m) - var(--space-2));
			--thumb-margin-top: calc(-1 * ((var(--thumb-height) - var(--space-3)) / 2));
			--track-height: var(--space-3);

			z-index: 1;
			position: relative;
			height: 100%;
			width: 100%;
			padding: 0;
			margin: 0;
			flex: 1 1 auto;
			color: var(--input-color);
			appearance: none;
			-webkit-appearance: none;
			-webkit-tap-highlight-color: transparent;
			border-width: 0;
			outline: none;
			font-family: inherit;
			text-overflow: ellipsis;
			background-color: transparent;
			cursor: pointer;

			&:disabled {
				@include disabled;
			}

			// States
			&:hover {
				~ .input-highlight {
					@include input-box-shadow-hover;
				}
			}

			&:active,
			&:focus,
			&:focus-visible {
				~ .input-highlight {
					@include input-box-shadow-focus;
				}
			}

			/// Reset
			&::-webkit-slider-thumb {
				-webkit-appearance: none;
			}
			&:focus {
				outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
			}
			&::-ms-track {
				width: 100%;
				cursor: pointer;
				/* Hides the slider so custom styles can be added */
				background: transparent;
				border-color: transparent;
				color: transparent;
			}

			/// thumb
			&::-webkit-slider-thumb {
				-webkit-appearance: none;
				height: var(--thumb-height);
				width: var(--thumb-width);
				background: var(--color-light);
				border: 1px solid var(--color-dark);
				border-radius: var(--radius-2);
				margin-top: var(--thumb-margin-top);
				cursor: pointer;
			}
			&::-moz-range-thumb {
				height: var(--thumb-height);
				width: var(--thumb-width);
				background: var(--color-light);
				border: 1px solid var(--color-dark);
				border-radius: var(--radius-2);
				margin-top: var(--thumb-margin-top);
				cursor: pointer;
			}
			&::-ms-thumb {
				height: var(--thumb-height);
				width: var(--thumb-width);
				background: var(--color-light);
				border: 1px solid var(--color-dark);
				border-radius: var(--radius-2);
				margin-top: var(--thumb-margin-top);
				cursor: pointer;
			}

			/// track
			&::-webkit-slider-runnable-track {
				width: 100%;
				height: var(--track-height);
				cursor: pointer;
				background: var(--color-primary);
				border-radius: 1.3px;
				border: 0.2px solid #010101;
			}
			&::-moz-range-track {
				width: 100%;
				height: var(--track-height);
				cursor: pointer;
				background: var(--color-primary);
				border-radius: var(--radius-2);
			}
			&::-ms-track {
				width: 100%;
				height: var(--track-height);
				cursor: pointer;
				background: transparent;
				border-color: transparent;
				border-width: 16px 0;
				color: transparent;
			}
			&::-ms-fill-lower {
				background: var(--color-primary);
				border-radius: var(--radius-2);
			}
			&::-ms-fill-upper {
				background: var(--color-primary);
				border-radius: var(--radius-2);
			}
			&:focus {
				&::-webkit-slider-runnable-track {
					background: var(--color-primary);
				}
				&::-ms-fill-upper {
					background: var(--color-primary);
				}
				&::-ms-fill-lower {
					background: var(--color-primary);
				}
			}
		}

		.input-highlight {
			z-index: 0;
			position: absolute;
			inset: 0 0 0 0;
			height: 100%;
			width: 100%;
			z-index: 0;
			border-radius: var(--radius-3);
			background: var(--input-background);
			@include input-box-shadow;
		}
	}
</style>
