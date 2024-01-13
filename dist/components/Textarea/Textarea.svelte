<script>import { clsx } from '../../utils/clsx';
import { defaultPropsTextarea } from './Textarea.props';
export let elementRef = defaultPropsTextarea.elementRef;
export let value = defaultPropsTextarea.value;
export let size = defaultPropsTextarea.size;
export let color = defaultPropsTextarea.color;
export let error = defaultPropsTextarea.error;
export let fullWidth = defaultPropsTextarea.fullWidth;
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

<style>.Textarea {
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
  box-shadow: var(--border-color) 0px 0px 0px 1px;
  outline: none;
}
.Textarea.Textarea-size-1 {
  min-width: calc(var(--space-9) * 3);
  padding: var(--space-1);
  border-radius: var(--radius-3);
  font-size: var(--font-size-1);
  letter-spacing: var(--letter-spacing-1);
}
.Textarea.Textarea-size-2 {
  min-width: calc(var(--space-9) * 3);
  padding: var(--space-2);
  border-radius: var(--radius-3);
  font-size: var(--font-size-2);
  letter-spacing: var(--letter-spacing-2);
}
.Textarea.Textarea-size-3 {
  min-width: calc(var(--space-9) * 3);
  padding: var(--space-3);
  border-radius: var(--radius-3);
  font-size: var(--font-size-3);
  letter-spacing: var(--letter-spacing-3);
}
.Textarea.Textarea-full-width {
  width: 100%;
}
.Textarea:hover {
  box-shadow: var(--border-color-hover) 0px 0px 0px 1px;
  outline: none;
}
.Textarea:active, .Textarea:focus, .Textarea:focus-visible {
  box-shadow: var(--border-color-focus) 0px 0px 0px 1px;
  outline: none;
}
.Textarea:disabled {
  cursor: default !important;
  opacity: 0.5 !important;
  outline: none !important;
  pointer-events: none;
}
.Textarea:disabled:focus, .Textarea:disabled:focus-within, .Textarea:disabled:focus-visible {
  box-shadow: none !important;
  outline: none !important;
}</style>
