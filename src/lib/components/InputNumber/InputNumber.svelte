<script lang="ts">
	import { longpress } from '../../actions/longpress';
	import type { PropSizeInput } from '../types';

	export let elementRef: HTMLInputElement | undefined = undefined;
	export let size: PropSizeInput = '2';
	export let value: number | undefined = undefined;
	export let step: number = 1;
	export let min: number | undefined = undefined;
	export let max: number | undefined = undefined;
	export let disabled: boolean = false;
	export let required: boolean = false;
	export let readonly: boolean = false;

	// Input css classes
	let cssClass = '';
	$: cssClass = [
		'input-wrapper',
		`input-size-${size}`,
		disabled ? 'input-disabled' : '',
		required ? 'input-required' : '',
		readonly ? 'input-readonly' : '',
		$$restProps.class
	].join(' ');

	let intervalId: any = undefined;

	function decrement(): void {
		if (disabled) {
			return;
		}
		initValue();
		if (typeof value === 'number') {
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
		if (typeof value === 'number') {
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
		{...$$restProps}
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
	.input-wrapper {
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
