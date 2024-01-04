<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import { setContext } from 'svelte';

	let { class: _class, style, ...restProps } = $$restProps;

	$: cssClass = clsx(_class, `btn-group`);
	$: attributes = attributes = {
		role: 'group',
		style,
		...restProps
	};

	setContext('ButtonGroup', true);
</script>

<div class={cssClass} {...attributes}>
	<slot />
</div>

<style lang="scss">
	div.btn-group {
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
