<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import {
		computePosition,
		flip as flipMiddleware,
		offset as offsetMiddleware,
		arrow as arrowMiddleware,
		type Side,
		type Alignment
	} from '@floating-ui/dom';
	import { clickoutside } from '../../actions/clickoutside';
	import { focusTrap } from '../../actions/focus-trap';
	import { defaultPropsPopover, type PropsPopover } from './Popover.props';

	export let isOpen: PropsPopover['isOpen'] = defaultPropsPopover.isOpen;
	export let backdrop: PropsPopover['backdrop'] = defaultPropsPopover.backdrop;
	export let arrow: PropsPopover['arrow'] = defaultPropsPopover.arrow;
	export let strategy: PropsPopover['strategy'] = defaultPropsPopover.strategy;
	export let placement: PropsPopover['placement'] = defaultPropsPopover.placement;
	export let offset: PropsPopover['offset'] = defaultPropsPopover.offset;
	export let flip: PropsPopover['flip'] = defaultPropsPopover.flip;
	export let transitionOpacity: PropsPopover['transitionOpacity'] = defaultPropsPopover.transitionOpacity;
	export let transitionY: PropsPopover['transitionY'] = defaultPropsPopover.transitionY;
	export let transitionDuration: PropsPopover['transitionDuration'] = defaultPropsPopover.transitionDuration;

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
					offsetMiddleware(offset ?? 0),
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
		transition:fly={{
			opacity: transitionOpacity,
			y: transitionY,
			duration: transitionDuration
		}}
		bind:this={popoverRef}
		role="dialog"
		class="popover"
		active={isOpen}
		data-popover
		data-state={isOpen ? 'open' : 'close'}
		data-side={side}
		data-align={align}
	>
		{#if arrow}
			<div bind:this={arrowRef} class="popover-arrow {side}" />
		{/if}
		<slot name="content" {isOpen} {open} {close} />
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
