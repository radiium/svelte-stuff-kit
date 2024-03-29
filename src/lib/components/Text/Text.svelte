<script lang="ts">
    import { clsx } from '../../utils/clsx.js';
    import { defaultTextProps } from './Text.props.js';
    import type { TextProps } from './Text.types.js';

    type $$Props = TextProps;
    export let elementRef: $$Props['elementRef'] = defaultTextProps.elementRef;
    export let as: $$Props['as'] = defaultTextProps.as;
    export let color: $$Props['color'] = defaultTextProps.color;
    export let size: $$Props['size'] = defaultTextProps.size;
    export let weight: $$Props['weight'] = defaultTextProps.weight;
    export let transform: $$Props['transform'] = defaultTextProps.transform;
    export let align: $$Props['align'] = defaultTextProps.align;
    export let wrap: $$Props['wrap'] = defaultTextProps.wrap;
    export let truncate: $$Props['truncate'] = defaultTextProps.truncate;
    export let disabled: $$Props['disabled'] = defaultTextProps.disabled;

    $: cssClass = clsx($$restProps.class, 'Text', {
        [`Text-size-${size}`]: size,
        [`Text-color-${color}`]: color,
        [`Text-weight-${weight}`]: weight,
        [`Text-align-${align}`]: align,
        [`Text-transform-${transform}`]: transform,
        [`Text-wrap-${wrap}`]: wrap,
        'Text-truncate': truncate,
        'Text-disabled': disabled
    });
</script>

<svelte:element
    this={as}
    {...$$restProps}
    data-color={color}
    data-size={size}
    class={cssClass}
    style={$$restProps.style}
    bind:this={elementRef}
>
    <slot />
</svelte:element>

<style lang="scss">
    .Text {
        // Colors
        color: var(--accent-a11, var(--color));

        // Sizes
        &.Text-size-1 {
            font-size: var(--font-size-1);
            line-height: var(--line-height-1);
            letter-spacing: var(--letter-spacing-1);
        }
        &.Text-size-2 {
            font-size: var(--font-size-2);
            line-height: var(--line-height-2);
            letter-spacing: var(--letter-spacing-2);
        }
        &.Text-size-3 {
            font-size: var(--font-size-3);
            line-height: var(--line-height-3);
            letter-spacing: var(--letter-spacing-3);
        }
        &.Text-size-4 {
            font-size: var(--font-size-4);
            line-height: var(--line-height-4);
            letter-spacing: var(--letter-spacing-4);
        }
        &.Text-size-5 {
            font-size: var(--font-size-5);
            line-height: var(--line-height-5);
            letter-spacing: var(--letter-spacing-5);
        }
        &.Text-size-6 {
            font-size: var(--font-size-6);
            line-height: var(--line-height-6);
            letter-spacing: var(--letter-spacing-6);
        }
        &.Text-size-7 {
            font-size: var(--font-size-7);
            line-height: var(--line-height-7);
            letter-spacing: var(--letter-spacing-7);
        }
        &.Text-size-8 {
            font-size: var(--font-size-8);
            line-height: var(--line-height-8);
            letter-spacing: var(--letter-spacing-8);
        }
        &.Text-size-9 {
            font-size: var(--font-size-9);
            line-height: var(--line-height-9);
            letter-spacing: var(--letter-spacing-9);
        }

        // Weight
        &.Text-weight-light {
            font-weight: var(--font-weight-light);
        }
        &.Text-weight-regular {
            font-weight: var(--font-weight-regular);
        }
        &.Text-weight-medium {
            font-weight: var(--font-weight-medium);
        }
        &.Text-weight-bold {
            font-weight: var(--font-weight-bold);
        }

        // Transform
        &.Text-transform-lowercase {
            text-transform: lowercase;
        }
        &.Text-transform-uppercase {
            text-transform: uppercase;
        }
        &.Text-transform-capitalize {
            text-transform: capitalize;
        }

        // Alignement
        &.Text-align-start {
            text-align: start;
        }
        &.Text-align-center {
            text-align: center;
        }
        &.Text-align-end {
            text-align: end;
        }

        // Wrap
        &.Text-wrap-wrap {
            white-space: normal;
        }
        &.Text-wrap-nowrap {
            white-space: nowrap;
        }
        &.Text-wrap-pretty {
            white-space: normal;
            text-wrap: pretty;
        }
        &.Text-wrap-balance {
            white-space: normal;
            text-wrap: balance;
        }

        &.Text-truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        &.Text-disabled {
            opacity: 0.5 !important;
        }
    }
</style>
