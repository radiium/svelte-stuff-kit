<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import { defaultPropsTextarea, type PropsTextarea } from './Textarea.props';

	type $$Props = PropsTextarea;
	export let elementRef: PropsTextarea['elementRef'] = defaultPropsTextarea.elementRef;
	export let value: PropsTextarea['value'] = defaultPropsTextarea.value;
	export let size: PropsTextarea['size'] = defaultPropsTextarea.size;
	export let disabled: PropsTextarea['disabled'] = defaultPropsTextarea.disabled;
	export let required: PropsTextarea['required'] = defaultPropsTextarea.required;
	export let readonly: PropsTextarea['readonly'] = defaultPropsTextarea.readonly;
	export let error: PropsTextarea['error'] = defaultPropsTextarea.error;
	export let fullWidth: PropsTextarea['fullWidth'] = defaultPropsTextarea.fullWidth;
	let { class: _class, style, ...restProps } = $$restProps;

	$: cssClass = clsx(_class, 'input-wrapper', `input-size-${size}`, {
		'input-disabled': disabled,
		'input-required': required,
		'input-readonly': readonly,
		'input-error': error,
		'input-full-width': fullWidth
	});

	$: attributes = {
		style,
		disabled: disabled || undefined,
		required: required || undefined,
		readonly: readonly || undefined,
		spellcheck: false,
		rows: 3,
		...restProps
	};
</script>

<div class={cssClass}>
	<textarea {...attributes} bind:value bind:this={elementRef} on:input on:change on:focus on:blur />
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
		gap: var(--space-2);

		&.input-full-width {
			width: 100%;
		}

		&.input-disabled {
			cursor: default !important;
			opacity: 0.5 !important;
			outline: none !important;
			pointer-events: none;
		}

		// Sizes
		&.input-size-1 {
			min-width: calc(var(--space-9) * 3);
			padding: var(--space-1);
			border-radius: var(--radius-3);

			textarea {
				font-size: var(--font-size-1);
				letter-spacing: var(--letter-spacing-1);
			}
		}
		&.input-size-2 {
			min-width: calc(var(--space-9) * 3);
			padding: var(--space-2);
			border-radius: var(--radius-3);

			textarea {
				font-size: var(--font-size-2);
				letter-spacing: var(--letter-spacing-2);
			}
		}
		&.input-size-3 {
			min-width: calc(var(--space-9) * 3);
			padding: var(--space-3);
			border-radius: var(--radius-3);

			textarea {
				font-size: var(--font-size-3);
				letter-spacing: var(--letter-spacing-3);
			}
		}

		textarea {
			z-index: 1;
			flex: 1 1 auto;
			color: var(--input-color);
			appearance: none;
			border-width: 0;
			outline: none;
			font-family: inherit;
			text-overflow: ellipsis;
			background-color: transparent;
			position: relative;
			font-size: var(--font-size-3);
			letter-spacing: normal;
			resize: vertical;
			cursor: text;

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
