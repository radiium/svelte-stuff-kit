<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { clsx } from '../../utils/clsx';
	import { setContext } from 'svelte';
	import { ButtonGroupContextKey } from './Button.props';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let { class: _class, style, ...restProps } = $$restProps;

	$: cssClass = clsx(_class, `ButtonGroup`);
	$: attributes = {
		class: cssClass,
		style,
		role: 'group',
		...restProps
	};

	setContext(ButtonGroupContextKey, true);
</script>

<div {...attributes}>
	<slot />
</div>

<style lang="scss">
	div.ButtonGroup {
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
		border-radius: var(--radius-3);
		border: 1px solid white;
	}
</style>
