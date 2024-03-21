<script lang="ts">
    import { clsx } from '$lib/utils/clsx.js';
    import { longpress } from '../../actions/longpress.js';
    import { defaultInputNumberProps } from './InputNumber.props.js';
    import type { InputNumberProps } from './InputNumber.types.js';

    type $$Props = InputNumberProps;
    export let elementRef: $$Props['elementRef'] = defaultInputNumberProps.elementRef;
    export let value: $$Props['value'] = defaultInputNumberProps.value;
    export let step: $$Props['step'] = defaultInputNumberProps.step;
    export let min: $$Props['min'] = defaultInputNumberProps.min;
    export let max: $$Props['max'] = defaultInputNumberProps.max;
    export let size: $$Props['size'] = defaultInputNumberProps.size;
    export let color: $$Props['color'] = defaultInputNumberProps.color;
    export let disabled: $$Props['disabled'] = defaultInputNumberProps.disabled;
    export let required: $$Props['required'] = defaultInputNumberProps.required;
    export let readonly: $$Props['readonly'] = defaultInputNumberProps.readonly;
    let { class: _class, style, ...restProps } = $$restProps;

    // Input css classes
    let cssClass = '';
    $: cssClass = clsx($$restProps.class, 'InputNumber', {
        [`InputNumber-color-${color}`]: color,
        [`InputNumber-size-${size}`]: size,
        'input-disabled': disabled,
        'input-required': required,
        'input-readonly': readonly
    });

    $: attributes = {
        style,
        autocomplete: 'off',
        ...restProps
    };

    let intervalId: any = undefined;

    function decrement(): void {
        if (disabled) {
            return;
        }
        initValue();
        if (typeof value === 'number' && typeof step === 'number') {
            if (typeof min === 'number') {
                value = Math.max(value - step, min);
            } else {
                value = value - step;
            }
        }
    }

    function decrementMouseDown() {
        clearIntervalId();
        intervalId = setInterval(() => {
            decrement();
        }, 100);
    }

    function increment(): void {
        if (disabled) {
            return;
        }
        initValue();
        if (typeof value === 'number' && typeof step === 'number') {
            if (typeof max === 'number') {
                value = Math.min(value + step, max);
            } else {
                value = value + step;
            }
        }
    }
    function incrementMouseDown() {
        clearIntervalId();
        intervalId = setInterval(() => {
            increment();
        }, 100);
    }

    function mouseUp() {
        clearIntervalId();
    }

    function initValue(): void {
        if (!value) {
            value = 0;
        }
    }
    function clearIntervalId(): void {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = undefined;
        }
    }
</script>

<div class={cssClass}>
    <button
        tabindex="-1"
        use:longpress={{ duration: 600 }}
        on:startlongpress={decrementMouseDown}
        on:endlongpress={mouseUp}
        on:click={decrement}
        {disabled}>-</button
    >
    <input
        type="number"
        inputmode="numeric"
        class:disabled
        class:required
        class:readonly
        {disabled}
        {required}
        {readonly}
        {...attributes}
        {step}
        {min}
        {max}
        bind:value
        bind:this={elementRef}
        on:input
        on:change
        on:focus
        on:blur
    />

    <button
        tabindex="-1"
        use:longpress={{ duration: 600 }}
        on:startlongpress={incrementMouseDown}
        on:endlongpress={mouseUp}
        on:click={increment}
        {disabled}>+</button
    >
</div>

<style lang="scss">
    .InputNumber {
        height: var(--input-size-m);
        width: calc(var(--input-size-m) * 4);
        padding: 0;
        border: none;
        border-radius: var(--radius-3);
        box-shadow: var(--border-color) 0px 0px 0px 1px;
        display: inline-flex;
        font-size: var(--font-size-3);
        letter-spacing: normal;

        &:hover:not(.input-disabled) {
            @include input-box-shadow-hover;
        }

        button {
            height: var(--input-size-m);
            width: var(--input-size-m);
            margin: 0;
            border: none;
            background-color: rgba(var(--color-primary-contrast-rgb), 0.1);
            color: var(--input-color);
            font-size: var(--font-size-5);
            cursor: pointer;

            &:last-child {
                border-top-right-radius: var(--radius-3);
                border-bottom-right-radius: var(--radius-3);
            }

            &:first-child {
                border-top-left-radius: var(--radius-3);
                border-bottom-left-radius: var(--radius-3);
            }

            &:disabled {
                @include disabled;
            }

            &:hover {
                background-color: rgba(var(--color-primary-contrast-rgb), 0.15);
            }
        }

        input {
            height: 100%;
            width: 50%;
            flex: 1 1 auto;
            border: none;
            margin: 0;
            background-color: var(--input-background);
            color: var(--input-color);
            padding: 0 var(--space-3);
            text-align: right;

            &:disabled {
                @include disabled;
            }

            &:focus-visible {
                @include input-box-shadow-focus;
            }
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
