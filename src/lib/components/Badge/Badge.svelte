<script lang="ts">
    import { clsx } from '../../utils/clsx';
    import { defaultBadgeProps } from './Badge.props';
    import type { BadgeProps } from './Badge.types';

    type $$Props = BadgeProps;
    export let elementRef: $$Props['elementRef'] = undefined;
    export let size: $$Props['size'] = defaultBadgeProps.size;
    export let variant: $$Props['variant'] = defaultBadgeProps.variant;
    export let color: $$Props['color'] = defaultBadgeProps.color;
    export let disabled: $$Props['disabled'] = defaultBadgeProps.disabled;

    $: cssClass = clsx($$restProps.class, 'Badge', {
        [`Badge-size-${size}`]: size,
        [`Badge-color-${color}`]: color,
        [`Badge-${variant}`]: variant,
        'Badge-disabled': disabled
    });
</script>

<span
    {...$$restProps}
    bind:this={elementRef}
    data-color={color}
    data-size={size}
    class={cssClass}
    style={$$restProps.style}
>
    <slot />
</span>

<style lang="scss">
    .Badge {
        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        white-space: nowrap;
        font-weight: var(--font-weight-medium);
        flex-shrink: 0;
        line-height: 1;
        user-select: none;
        cursor: default;
        border: var(--badge-border);
        color: var(--badge-color);
        background-color: var(--badge-background);
        padding: var(--badge-padding);
        border-radius: var(--badge-border-radius);
        gap: var(--badge-gap);
        font-size: var(--badge-font-size);
        line-height: var(--badge-line-height);
        letter-spacing: var(--badge-letter-spacing);

        // Sizes
        &.Badge-size-1 {
            --badge-padding: calc(var(--space-1) / 2) var(--space-2);
            --badge-border-radius: var(--radius-3);
            --badge-gap: var(--space-1);
            --badge-font-size: var(--font-size-1);
            --badge-line-height: var(--line-height-1);
            --badge-letter-spacing: var(--letter-spacing-1);
        }
        &.Badge-size-2 {
            --badge-padding: calc(var(--space-1) * 1.5) var(--space-4);
            --badge-border-radius: var(--radius-3);
            --badge-gap: var(--space-2);
            --badge-font-size: var(--font-size-2);
            --badge-line-height: var(--line-height-2);
            --badge-letter-spacing: var(--letter-spacing-2);
        }

        // Variants
        &.Badge-outline {
            --badge-border: 1px solid var(--accent-9);
            --badge-color: var(--accent-a12);
            --badge-background: transparent;
        }
        &.Badge-soft {
            --badge-border: none;
            --badge-color: var(--accent-a12);
            --badge-background: var(--accent-a6);
        }
        &.Badge-solid {
            --badge-border: none;
            --badge-color: var(--contrast);
            --badge-background: var(--accent-9);
        }

        &.Badge-disabled {
            @include disabled;
        }
    }
</style>
