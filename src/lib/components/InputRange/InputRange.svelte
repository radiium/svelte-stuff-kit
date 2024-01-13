<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import { defaultPropsInputRange, type PropsInputRange } from './InputRange.props';

	export let elementRef: PropsInputRange['elementRef'] = defaultPropsInputRange.elementRef;
	export let size: PropsInputRange['size'] = defaultPropsInputRange.size;
	export let color: PropsInputRange['color'] = defaultPropsInputRange.color;
	export let error: PropsInputRange['error'] = defaultPropsInputRange.error;
	export let fullWidth: PropsInputRange['fullWidth'] = defaultPropsInputRange.fullWidth;
	let { class: _class, style, step, min, max, value, required, disabled, ...restProps } = $$restProps;

	$: cssClass = clsx(_class, 'InputRange', {
		[`InputRange-size-${size}`]: size,
		[`InputRange-color-${color}`]: color,
		'InputRange-error': error,
		'InputRange-full-width': fullWidth
	});

	$: attributes = {
		style,
		step,
		min,
		max,
		autocomplete: 'off',
		...restProps
	};
</script>

<div
	{style}
	class={cssClass}
	data-input-range
	data-color={color}
	data-value={value !== null && value !== undefined ? value : undefined}
	data-required={required || undefined}
	data-disabled={disabled || undefined}
>
	<input {...attributes} type="range" bind:value bind:this={elementRef} on:input on:change on:focus on:blur />
	<div class="InputRange-highlight" />
</div>

<style lang="scss">
	.InputRange {
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

		&.InputRange-full-width {
			width: 100%;
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
				~ .InputRange-highlight {
					@include input-box-shadow-hover;
				}
			}

			&:active,
			&:focus,
			&:focus-visible {
				~ .InputRange-highlight {
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

		&[data-disabled] {
			input {
				@include disabled;
			}
		}
		.InputRange-highlight {
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
