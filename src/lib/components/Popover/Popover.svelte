<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { fade, fly, type FlyParams } from 'svelte/transition';
	import {
		computePosition,
		flip as flipMiddleware,
		offset as offsetMiddleware,
		arrow as arrowMiddleware,
		type Placement,
		type Side,
		type Alignment,
		type Strategy
	} from '@floating-ui/dom';
	import { clickoutside } from '../../actions/clickoutside';
	import { focusTrap } from '../../actions/focus-trap';

	export let isOpen = false;
	export let backdrop = false;
	export let arrow = true;
	export let strategy: Strategy = 'absolute';
	export let placement: Placement = 'top';
	export let offset: number = 0;
	export let flip: boolean = true;
	export let transition: FlyParams = {
		opacity: 0,
		y: 10,
		duration: 200
	};

	let triggerRef: HTMLDivElement | undefined = undefined;
	let arrowRef: HTMLDivElement | undefined = undefined;
	let popoverRef: HTMLDivElement | undefined = undefined;

	let side: Side;
	let align: Alignment | 'center';

	function open(): void {
		isOpen = true;
	}

	function close(): void {
		isOpen = false;
	}

	function handlekeydown(evt: KeyboardEvent): void {
		if (evt.key === 'Escape') {
			close();
		}
	}

	afterUpdate(async () => {
		if (isOpen && triggerRef && popoverRef && ((arrow && arrowRef) || !arrow)) {
			const response = await computePosition(triggerRef, popoverRef, {
				strategy,
				placement,
				middleware: [
					offsetMiddleware(offset),
					flip && flipMiddleware(),
					arrow && arrowRef && arrowMiddleware({ element: arrowRef })
				]
			});

			side = response.placement.split('-')[0] as Side;
			align = (response.placement.split('-')[1] || 'center') as Alignment | 'center';

			Object.assign(popoverRef?.style, {
				left: `${response.x}px`,
				top: `${response.y}px`
			});

			if (response.middlewareData.arrow && arrow && arrowRef) {
				const arrowX = response.middlewareData.arrow?.x;
				const arrowY = response.middlewareData.arrow?.y;
				const staticSide: string = {
					top: 'bottom',
					right: 'left',
					bottom: 'top',
					left: 'right'
				}[side]!;

				Object.assign(arrowRef.style, {
					left: arrowX != null ? `${arrowX}px` : '',
					top: arrowY != null ? `${arrowY}px` : '',
					right: '',
					bottom: '',
					[staticSide]: '-5px'
				});
			}
		}
	});
</script>

<svelte:window on:keydown={handlekeydown} />

<div class="trigger-wrapper" bind:this={triggerRef}>
	<slot name="trigger" {isOpen} {open} {close} />
</div>

{#if isOpen}
	{#if backdrop}
		<div
			role="button"
			class="backdrop"
			tabindex="-1"
			in:fade={{ duration: 200 }}
			out:fade={{ duration: 0 }}
			on:click|self={close}
			on:keydown={handlekeydown}
		/>
	{/if}
	<div
		use:clickoutside
		use:focusTrap
		on:clickoutside={close}
		transition:fly={transition}
		bind:this={popoverRef}
		role="dialog"
		class="popover"
		data-popover
		data-state={isOpen ? 'open' : 'close'}
		data-side={side}
		data-align={align}
	>
		{#if arrow}
			<div bind:this={arrowRef} class="popover-arrow {side}" />
		{/if}
		<slot name="content" {close} />
	</div>
{/if}

<style lang="scss">
	[data-popover] {
		--popover-color: var(--color);
		--popover-background: var(--background-level-2);
		--popover-border-color: var(--border-color);
		--popover-border-radius: var(--radius-3);
	}

	.trigger-wrapper {
		position: relative;
	}

	.backdrop {
		position: fixed;
		z-index: 10000;
		inset: 0 0 0 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.4);
		cursor: pointer;
	}

	.popover {
		position: absolute;
		width: max-content;
		top: 0;
		left: 0;
		z-index: 10002;
		max-width: 32rem;
		padding: 1rem;
		color: var(--popover-color);
		background: var(--popover-background);
		border: 1px solid var(--popover-border-color);
		border-radius: var(--popover-border-radius);

		&[data-state='open'] {
			display: block;
		}

		&[data-state='close'] {
			display: none;
		}

		.popover-arrow {
			position: absolute;
			background: var(--popover-background);
			width: 10px;
			height: 10px;
			transform: rotate(45deg);
			z-index: -1;
			pointer-events: none;
			border-style: solid;
			border-color: var(--popover-border-color);

			&.top {
				border-width: 0 1px 1px 0;
			}
			&.bottom {
				border-width: 1px 0 0 1px;
			}
			&.left {
				border-width: 1px 1px 0 0;
			}
			&.right {
				border-width: 0 0 1px 1px;
			}
		}
	}
</style>
