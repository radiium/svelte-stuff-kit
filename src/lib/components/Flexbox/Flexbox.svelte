<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { clsx } from '../../utils/clsx';
	import type {
		FlexboxAlignItems,
		FlexboxDirection,
		FlexboxDisplay,
		FlexboxGap,
		FlexboxGrow,
		FlexboxJustify,
		FlexboxShrink,
		FlexboxWrap
	} from '../types';

	export let elementRef: SvelteHTMLElements | undefined = undefined;
	export let as: keyof SvelteHTMLElements = 'div';

	export let display: FlexboxDisplay = 'flex';
	export let direction: FlexboxDirection = 'row';
	export let justify: FlexboxJustify = 'normal';
	export let alignItems: FlexboxAlignItems = 'normal';
	export let wrap: FlexboxWrap = 'nowrap';
	export let gap: FlexboxGap = '0';
	export let grow: FlexboxGrow | undefined = undefined;
	export let shrink: FlexboxShrink | undefined = undefined;
	export let height: string | undefined = undefined;
	export let width: string | undefined = undefined;

	$: cssClass = clsx(
		$$restProps.class,
		`display-${display}`,
		`flex-direction-${direction}`,
		`flex-align-items-${alignItems}`,
		`flex-justify-content-${justify}`,
		`flex-wrap-${wrap}`,
		`gap-${gap}`,
		{
			[`grow-${grow}`]: grow === '0' || grow === '1',
			[`shrink-${shrink}`]: shrink === '0' || shrink === '1'
		}
	);
</script>

<svelte:element this={as} bind:this={elementRef} style:height style:width {...$$restProps} class={cssClass}>
	<slot />
</svelte:element>
