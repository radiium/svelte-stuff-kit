<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { clsx } from '../../utils/clsx.js';
    import { setContext } from 'svelte';
    import { ButtonGroupContextKey } from './Button.props.js';

    type $$Props = HTMLAttributes<HTMLDivElement>;
    $: cssClass = clsx($$restProps.class, `ButtonGroup`);

    setContext(ButtonGroupContextKey, true);
</script>

<div {...$$restProps} role="group" class={cssClass} style={$$restProps.style}>
    <slot />
</div>

<style lang="scss">
    .ButtonGroup {
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
        box-shadow: inset 0 0 0 1px var(--gray-8);
    }
</style>
