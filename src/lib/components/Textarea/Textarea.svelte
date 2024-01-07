<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import { defaultPropsTextarea, type PropsTextarea } from './Textarea.props';

	export let elementRef: PropsTextarea['elementRef'] = defaultPropsTextarea.elementRef;
	export let value: PropsTextarea['value'] = defaultPropsTextarea.value;
	export let size: PropsTextarea['size'] = defaultPropsTextarea.size;
	export let color: PropsTextarea['color'] = defaultPropsTextarea.color;
	export let error: PropsTextarea['error'] = defaultPropsTextarea.error;
	export let fullWidth: PropsTextarea['fullWidth'] = defaultPropsTextarea.fullWidth;
	let { class: _class, style, ...restProps } = $$restProps;

	$: cssClass = clsx(_class, 'Textarea', {
		[`Textarea-color-${color}`]: color,
		[`Textarea-size-${size}`]: size,
		'Textarea-error': error,
		'Textarea-full-width': fullWidth
	});

	$: attributes = {
		class: cssClass,
		style,
		spellcheck: false,
		rows: 3,
		...restProps
	};
</script>

<textarea
	bind:this={elementRef}
	bind:value
	on:input
	on:change
	on:focus
	on:blur
	on:keydown
	on:keypress
	on:keyup
	{...attributes}
/>

<style lang="scss">
	.Textarea {
		flex-shrink: 0;
		box-sizing: border-box;
		position: relative;
		z-index: 1;
		appearance: none;
		border-width: 0;
		outline: none;
		cursor: text;
		font-family: inherit;
		text-overflow: ellipsis;
		font-size: var(--font-size-3);
		letter-spacing: normal;
		resize: vertical;
		color: var(--input-color);
		border-radius: var(--radius-3);
		background: var(--input-background);
		@include input-box-shadow;

		// Sizes
		&.Textarea-size-1 {
			min-width: calc(var(--space-9) * 3);
			padding: var(--space-1);
			border-radius: var(--radius-3);
			font-size: var(--font-size-1);
			letter-spacing: var(--letter-spacing-1);
		}
		&.Textarea-size-2 {
			min-width: calc(var(--space-9) * 3);
			padding: var(--space-2);
			border-radius: var(--radius-3);
			font-size: var(--font-size-2);
			letter-spacing: var(--letter-spacing-2);
		}
		&.Textarea-size-3 {
			min-width: calc(var(--space-9) * 3);
			padding: var(--space-3);
			border-radius: var(--radius-3);
			font-size: var(--font-size-3);
			letter-spacing: var(--letter-spacing-3);
		}

		// fullWidth
		&.Textarea-full-width {
			width: 100%;
		}

		// States
		&:hover {
			@include input-box-shadow-hover;
		}

		&:active,
		&:focus,
		&:focus-visible {
			@include input-box-shadow-focus;
		}

		&:disabled {
			@include disabled;
		}
	}
</style>
