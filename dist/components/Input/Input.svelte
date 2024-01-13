<script>import { clsx } from '../../utils/clsx';
import { defaultPropsInput } from './Input.props';
export let elementRef = defaultPropsInput.elementRef;
export let value = defaultPropsInput.value;
export let type = defaultPropsInput.type;
export let size = defaultPropsInput.size;
export let align = defaultPropsInput.align;
export let error = defaultPropsInput.error;
export let fullWidth = defaultPropsInput.fullWidth;
let { class: _class, style, ...restProps } = $$restProps;
$: cssClass = clsx(_class, 'Input', {
    [`Input-size-${size}`]: size,
    [`Input-type-${type}`]: type,
    [`Input-align-${align}`]: align,
    'Input-full-width': fullWidth,
    'Input-error': error
});
$: attributes = {
    class: cssClass,
    style,
    spellcheck: false,
    autocomplete: 'off',
    ...restProps
};
const setType = (node) => {
    if (type) {
        node.type = type;
    }
};
</script>

<input
	bind:this={elementRef}
	bind:value
	on:input
	on:change
	on:focus
	on:blur
	on:keydown
	on:keypress
	on:keyup
	use:setType
	{...attributes}
/>

<style>input.Input {
  z-index: 1;
  position: relative;
  appearance: none;
  min-width: 0;
  box-sizing: border-box;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  border-width: 0;
  outline: none;
  font-family: inherit;
  text-overflow: ellipsis;
  color: var(--input-color);
  border-radius: var(--radius-3);
  background: var(--input-background);
  box-shadow: var(--border-color) 0px 0px 0px 1px;
  outline: none;
}
input.Input::-webkit-search-cancel-button {
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
input.Input::-webkit-calendar-picker-indicator {
  cursor: pointer;
}
input.Input.Input-size-1 {
  height: var(--space-5);
  padding: 0 var(--space-2);
  border-radius: var(--radius-3);
  gap: var(--space-1);
  font-size: var(--font-size-1);
  letter-spacing: var(--letter-spacing-1);
}
input.Input.Input-size-2 {
  height: var(--space-6);
  padding: 0 var(--space-2);
  border-radius: var(--radius-3);
  gap: var(--space-1);
  font-size: var(--font-size-2);
  letter-spacing: var(--letter-spacing-2);
}
input.Input.Input-size-3 {
  height: var(--space-7);
  padding: 0 var(--space-3);
  border-radius: var(--radius-3);
  gap: var(--space-3);
  font-size: var(--font-size-3);
  letter-spacing: var(--letter-spacing-3);
}
input.Input.Input-align-start {
  text-align: start;
}
input.Input.Input-align-center {
  text-align: center;
}
input.Input.Input-align-end {
  text-align: end;
}
input.Input.Input-full-width {
  width: 100%;
}
input.Input:hover {
  box-shadow: var(--border-color-hover) 0px 0px 0px 1px;
  outline: none;
}
input.Input:active, input.Input:focus, input.Input:focus-visible {
  box-shadow: var(--border-color-focus) 0px 0px 0px 1px;
  outline: none;
}
input.Input:disabled {
  cursor: default !important;
  opacity: 0.5 !important;
  outline: none !important;
  pointer-events: none;
}
input.Input:disabled:focus, input.Input:disabled:focus-within, input.Input:disabled:focus-visible {
  box-shadow: none !important;
  outline: none !important;
}
input.Input:readonly {
  cursor: default;
  outline: none !important;
  box-shadow: none !important;
}
input.Input.Input-error {
  box-shadow: var(--tomato-9) 0px 0px 0px 1px !important;
  background-color: var(--tomato-a2);
}

/* 
:root {
       --border-color: unset;
	--border-radius: unset;
	--border-style: unset;
	--border-width: unset;
	--background: unset;
	--color: unset;

	--highlight-color-focused: unset;
	--highlight-color-invalid: unset;
	--highlight-color-valid: unset;

	--padding-bottom: unset;
	--padding-end: unset;
	--padding-start: unset;
	--padding-top: unset;
	--placeholder-color: unset;
	--placeholder-font-style: unset;
	--placeholder-font-weight: unset;
	--placeholder-opacity: unset;
} */</style>
