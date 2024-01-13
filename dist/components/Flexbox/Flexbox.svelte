<script>import { clsx } from '../../utils/clsx';
import { defaultPropsFlexbox } from './Flexbox.props';
export let elementRef = defaultPropsFlexbox.elementRef;
export let as = defaultPropsFlexbox.as;
export let display = defaultPropsFlexbox.display;
export let direction = defaultPropsFlexbox.direction;
export let justify = defaultPropsFlexbox.justify;
export let alignItems = defaultPropsFlexbox.alignItems;
export let wrap = defaultPropsFlexbox.wrap;
export let gap = defaultPropsFlexbox.gap;
export let grow = defaultPropsFlexbox.grow;
export let shrink = defaultPropsFlexbox.shrink;
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
