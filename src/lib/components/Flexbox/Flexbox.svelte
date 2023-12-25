<script lang="ts">
	import { clsx } from '../../utils/clsx';
	import { defaultPropsFlexbox, type PropsFlexbox } from './Flexbox.props';

	type $$Props = PropsFlexbox;
	export let elementRef: PropsFlexbox['elementRef'] = defaultPropsFlexbox.elementRef;
	export let as: PropsFlexbox['as'] = defaultPropsFlexbox.as;
	export let display: PropsFlexbox['display'] = defaultPropsFlexbox.display;
	export let direction: PropsFlexbox['direction'] = defaultPropsFlexbox.direction;
	export let justify: PropsFlexbox['justify'] = defaultPropsFlexbox.justify;
	export let alignItems: PropsFlexbox['alignItems'] = defaultPropsFlexbox.alignItems;
	export let wrap: PropsFlexbox['wrap'] = defaultPropsFlexbox.wrap;
	export let gap: PropsFlexbox['gap'] = defaultPropsFlexbox.gap;
	export let grow: PropsFlexbox['grow'] = defaultPropsFlexbox.grow;
	export let shrink: PropsFlexbox['shrink'] = defaultPropsFlexbox.shrink;
	let { class: _class, style, ...restProps } = $$restProps;

	$: cssClass = clsx(
		_class,
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

	$: attributes = {
		style,
		...restProps
	};
</script>

<svelte:element this={as} bind:this={elementRef} {...attributes} class={cssClass}>
	<slot />
</svelte:element>
