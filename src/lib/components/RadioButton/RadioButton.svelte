<script lang="ts">
    import { clsx } from '../../utils/clsx';
    import { defaultRadioButtonProps } from './RadioButton.props';
    import type { RadioButtonProps } from './RadioButton.types';

    type $$Props = RadioButtonProps;
    export let elementRef: $$Props['elementRef'] = defaultRadioButtonProps.elementRef;
    export let group: $$Props['group'] = defaultRadioButtonProps.group;
    export let size: $$Props['size'] = defaultRadioButtonProps.size;
    export let color: $$Props['color'] = defaultRadioButtonProps.color;
    export let error: $$Props['error'] = defaultRadioButtonProps.error;

    $: cssClass = clsx($$restProps.class, 'RadioButton', {
        [`RadioButton-size-${size}`]: size,
        [`RadioButton-color-${color}`]: color,
        'RadioButton-error': error
    });
</script>

<input
    {...$$restProps}
    data-color={color}
    data-size={size}
    class={cssClass}
    style={$$restProps.style}
    type="radio"
    bind:this={elementRef}
    bind:group
    on:input
    on:change
    on:focus
    on:blur
    on:keydown
    on:keypress
    on:keyup
/>

<style lang="scss">
    .RadioButton {
        -webkit-appearance: none;
        appearance: none;
        outline: none;
        border: none;
        position: relative;
        width: var(--radio-size);
        height: var(--radio-size);
        background: var(--radio--background);
        box-shadow: inset 0 0 0 1px var(--gray-8);
        border-radius: 100%;
        pointer-events: none;
        display: flex;
        justify-content: center;
        align-items: center;
        transition:
            background-color ease 0.2s,
            box-shadow ease 0.2s;

        &:after {
            width: var(--radio-size);
            height: var(--radio-size);
            content: '';
            transform: scale(0.4);
            position: absolute;
            border-radius: 100%;
            background-color: transparent;
            transition: background-color ease 0.2s;
        }

        // States
        &[data-checked] {
            background-color: var(--checkbox-background-checked);
            box-shadow: none;

            &:after {
                display: block;
            }
        }

        &[disabled] {
            @include disabled;
        }
        &:checked {
            background-color: var(--radio-background-checked);
            box-shadow: none;

            &:after {
                background-color: var(--check-color);
            }
        }
        &:focus {
            @include input-box-shadow-focus;
        }
        &:focus-visible {
            @include input-box-shadow-focus;
        }

        // Colors
        --radio-background: var(--gray-a3);
        --radio-background-checked: var(--accent-9);
        --check-color: white;

        // Sizes
        &.RadioButton-size-1 {
            --radio-size: calc(var(--space-4) * 0.875);
            --check-width: calc(var(--radio-size) / 3.5);
            --check-height: calc(var(--radio-size) / 2.5);
        }
        &.RadioButton-size-2 {
            --radio-size: var(--space-4);
            --check-width: calc(var(--radio-size) / 3.5);
            --check-height: calc(var(--radio-size) / 2.5);
        }
        &.RadioButton-size-3 {
            --radio-size: calc(var(--space-4) * 1.25);
            --check-width: calc(var(--radio-size) / 3.5);
            --check-height: calc(var(--radio-size) / 2.5);
        }
    }
</style>
