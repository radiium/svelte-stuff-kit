<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import { defaultPropsInput, type PropsInput } from './Input.props';

	export let elementRef: PropsInput['elementRef'] = defaultPropsInput.elementRef;
	export let value: PropsInput['value'] = defaultPropsInput.value;
	export let type: PropsInput['type'] = defaultPropsInput.type;
	export let size: PropsInput['size'] = defaultPropsInput.size;
	export let align: PropsInput['align'] = defaultPropsInput.align;
	export let disabled: PropsInput['disabled'] = defaultPropsInput.disabled;
	export let required: PropsInput['required'] = defaultPropsInput.required;
	export let readonly: PropsInput['readonly'] = defaultPropsInput.readonly;
	export let error: PropsInput['error'] = defaultPropsInput.error;
	export let fullWidth: PropsInput['fullWidth'] = defaultPropsInput.fullWidth;
	let { class: _class, style, ...restProps } = $$restProps;

	$: cssClass = clsx(
		_class,
		`input-size-${size}`,
		'input-wrapper',
		`input-type-${type}`,
		`input-align-${align}`,
		{
			'input-full-width': fullWidth,
			'input-disabled': disabled,
			'input-required': required,
			'input-readonly': readonly,
			'input-error': error
		}
	);

	$: attributes = {
		style,
		disabled: disabled || undefined,
		required: required || undefined,
		readonly: readonly || undefined,
		spellcheck: false,
		autocomplete: 'off',
		...restProps
	};

	const setType = (node: HTMLInputElement) => {
		if (type) {
			node.type = type;
		}
	};
</script>

<div data-input class={cssClass}>
	{#if $$slots.leading}
		<div class="input-leading">
			<slot name="leading" />
		</div>
	{/if}

	<input
		use:setType
		bind:value
		bind:this={elementRef}
		on:input
		on:change
		on:focus
		on:blur
		on:keydown
		{...attributes}
	/>

	{#if $$slots.trailing}
		<div class="input-trailing">
			<slot name="trailing" />
		</div>
	{/if}

	<div class="input-highlight" />
</div>

<style lang="scss">
	.input-wrapper {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: flex-start;
		gap: var(--space-2);
		min-width: 0;

		.input-leading,
		.input-trailing {
			z-index: 1;
			flex-shrink: 0;
			height: 100%;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			justify-content: flex-start;

			:global(svg) {
				height: 75%;
				width: auto;
				fill: var(--input-color);
			}
		}

		input {
			z-index: 1;
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
			position: relative;
			cursor: text;

			// Input type search
			&::-webkit-search-cancel-button {
				filter: invert(1);
				cursor: pointer;
				-webkit-appearance: none;
				appearance: none;
				height: 15px;
				width: 15px;
				background-size: 15px 15px;
				background-repeat: no-repeat;
				background-position: center;
				background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjEyMy4wNXB4IiBoZWlnaHQ9IjEyMy4wNXB4IiB2aWV3Qm94PSIwIDAgMTIzLjA1IDEyMy4wNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIzLjA1IDEyMy4wNTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTEyMS4zMjUsMTAuOTI1bC04LjUtOC4zOTljLTIuMy0yLjMtNi4xLTIuMy04LjUsMGwtNDIuNCw0Mi4zOTlMMTguNzI2LDEuNzI2Yy0yLjMwMS0yLjMwMS02LjEwMS0yLjMwMS04LjUsMGwtOC41LDguNQ0KCQljLTIuMzAxLDIuMy0yLjMwMSw2LjEsMCw4LjVsNDMuMSw0My4xbC00Mi4zLDQyLjVjLTIuMywyLjMtMi4zLDYuMSwwLDguNWw4LjUsOC41YzIuMywyLjMsNi4xLDIuMyw4LjUsMGw0Mi4zOTktNDIuNGw0Mi40LDQyLjQNCgkJYzIuMywyLjMsNi4xLDIuMyw4LjUsMGw4LjUtOC41YzIuMy0yLjMsMi4zLTYuMSwwLTguNWwtNDIuNS00Mi40bDQyLjQtNDIuMzk5QzEyMy42MjUsMTcuMTI1LDEyMy42MjUsMTMuMzI1LDEyMS4zMjUsMTAuOTI1eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=);
			}

			// Input type date/datetime-local/month/time/week
			&::-webkit-calendar-picker-indicator {
				cursor: pointer;
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

		// Sizes
		&.input-size-1 {
			height: var(--space-5);
			// min-width: calc(var(--space-9) * 3);
			padding: 0 var(--space-2);
			border-radius: var(--radius-3);
			gap: var(--space-1);

			input {
				font-size: var(--font-size-1);
				letter-spacing: var(--letter-spacing-1);
			}
		}
		&.input-size-2 {
			height: var(--space-6);
			// min-width: calc(var(--space-9) * 3);
			padding: 0 var(--space-2);
			border-radius: var(--radius-3);
			gap: var(--space-1);

			input {
				font-size: var(--font-size-2);
				letter-spacing: var(--letter-spacing-2);
			}
		}
		&.input-size-3 {
			height: var(--space-7);
			// min-width: calc(var(--space-9) * 3);
			padding: 0 var(--space-3);
			border-radius: var(--radius-3);
			gap: var(--space-3);

			input {
				font-size: var(--font-size-3);
				letter-spacing: var(--letter-spacing-3);
			}
		}
		&.input-align-start {
			input {
				text-align: start;
			}
		}
		&.input-align-center {
			input {
				text-align: center;
			}
		}
		&.input-align-end {
			input {
				text-align: end;
			}
		}
		&.input-full-width {
			width: 100%;
		}

		// States
		input {
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
		&:hover {
			.input-highlight {
				@include input-box-shadow-hover;
			}
		}
		&:focus-visible {
			outline: none;
		}
		&.input-disabled {
			@include disabled;
		}
		&.input-readonly {
			input {
				cursor: default;
			}

			.input-highlight {
				outline: none !important;
				box-shadow: none !important;
			}
		}
		&.input-error {
			.input-highlight {
				box-shadow: var(--tomato-9) 0px 0px 0px 1px !important;
				background-color: var(--tomato-a2);
			}
		}
	}
</style>
