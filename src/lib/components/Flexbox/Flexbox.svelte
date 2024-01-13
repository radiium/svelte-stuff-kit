<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import { defaultPropsFlexbox, type PropsFlexbox } from './Flexbox.props';

	type $$Props = PropsFlexbox;
	export let elementRef: $$Props['elementRef'] = defaultPropsFlexbox.elementRef;
	export let as: $$Props['as'] = defaultPropsFlexbox.as;
	export let display: $$Props['display'] = defaultPropsFlexbox.display;
	export let direction: $$Props['direction'] = defaultPropsFlexbox.direction;
	export let justify: $$Props['justify'] = defaultPropsFlexbox.justify;
	export let alignItems: $$Props['alignItems'] = defaultPropsFlexbox.alignItems;
	export let wrap: $$Props['wrap'] = defaultPropsFlexbox.wrap;
	export let gap: $$Props['gap'] = defaultPropsFlexbox.gap;
	export let grow: $$Props['grow'] = defaultPropsFlexbox.grow;
	export let shrink: $$Props['shrink'] = defaultPropsFlexbox.shrink;
	let { class: _class, style, ...restProps } = $$restProps;

	$: cssClass = clsx(_class, {
		[`display-${display}`]: display,
		[`flex-direction-${direction}`]: direction,
		[`flex-align-items-${alignItems}`]: alignItems,
		[`flex-justify-content-${justify}`]: justify,
		[`flex-wrap-${wrap}`]: wrap,
		[`gap-${gap}`]: gap,
		[`grow-${grow}`]: grow === '0' || grow === '1',
		[`shrink-${shrink}`]: shrink === '0' || shrink === '1'
	});

	$: attributes = {
		class: cssClass,
		style,
		...restProps
	};
</script>

<svelte:element this={as} bind:this={elementRef} {...attributes}>
	<slot />
</svelte:element>
