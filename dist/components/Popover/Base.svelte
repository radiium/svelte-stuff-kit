<script>import { fade, fly, scale } from 'svelte/transition';
import { clickoutside } from '../../actions/clickoutside';
import { createFloating } from '../../actions/create-floating';
import { afterUpdate, onMount } from 'svelte';
import { expoOut } from 'svelte/easing';
export let defaultOpen = false;
export let backdrop = false;
export let arrow = true;
// export let arrowSize = true;
export let placement = 'top';
export let offset = 10;
export let transition = {
    // y: 4,
    duration: 300,
    easing: expoOut
};
// export let transitionIn: any = {
// 	start: 0.97,
// 	duration: 2000,
// 	easing: expoOut
// };
// export let transitionOut: any = {
// 	start: 0.97,
// 	duration: 150,
// 	easing: expoOut
// };
// export let transitionScale: ScaleParams = {
// 	start: 0.95,
// 	duration: 300,
// 	easing: expoOut
// };
// export let transitionScale: ScaleParams = {
// 	start: 0.95,
// 	duration: 300,
// 	easing: expoOut
// };
const { elements: { referenceAction, floatingAction, arrowAction }, states: { open, close, isOpen, onFloatingChange } } = createFloating({
    defaultOpen,
    placement,
    transform: false,
    offset,
    autoUpdate: false
});
function handlekeydown(evt) {
    if (evt.key === 'Escape') {
        close();
    }
}
let side;
let floatingStyle;
let arrowStyle;
onMount(() => {
    return onFloatingChange((floatingState) => {
        if (floatingState) {
            console.groupCollapsed('[BaseFloating]');
            console.log('defaultOpen', defaultOpen);
            console.log('backdrop', backdrop);
            console.log('arrow', arrow);
            console.log('placement', placement);
            console.log('offset', offset);
            console.log('floatingState', floatingState);
            console.groupEnd();
            side = floatingState.side;
            floatingStyle = floatingState.floatingStyle;
            arrowStyle = floatingState.arrowStyle;
        }
    });
});
</script>

<!-- Handle escape close -->
<svelte:window on:keydown={handlekeydown} />

<!-- Reference button -->
<div use:referenceAction class="reference">
    <slot name="trigger" isOpen={$isOpen} {open} {close} />
</div>

{#if $isOpen}
    <!-- Backfrop -->
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

    <!-- 	
		transition:fly={transition}
		transition:scale={transitionScale} 
		in:fly2={transitionIn} out:fly2={transitionOut}
	-->
    <!-- Floating -->
    <div class="floating-wrapper" transition:fade={transition}>
        <div
            use:floatingAction
            use:clickoutside
            style={floatingStyle}
            on:clickoutside={close}
            role="dialog"
            class="floating"
        >
            <slot name="content" />

            {#if arrow}
                <div use:arrowAction style={arrowStyle} class="popover-arrow {side}" />
            {/if}
        </div>
    </div>
{/if}

<style>.backdrop {
  position: fixed;
  z-index: 10000;
  inset: 0 0 0 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
}

.popover-arrow {
  position: absolute;
  background: var(--background-level-2);
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  z-index: -1;
  pointer-events: none;
  border-style: solid;
  border-color: var(--border-color);
}
.popover-arrow.top {
  border-width: 0 1px 1px 0;
}
.popover-arrow.bottom {
  border-width: 1px 0 0 1px;
}
.popover-arrow.left {
  border-width: 1px 1px 0 0;
}
.popover-arrow.right {
  border-width: 0 0 1px 1px;
}

.reference {
  display: inline-block;
}

.floating-wrapper {
  position: absolute;
  z-index: 1000000;
  transform-origin: center;
}

.floating {
  position: absolute;
  width: max-content;
  top: 0;
  left: 0;
  z-index: 9999999;
  max-width: 32rem;
  padding: 1rem;
  border-radius: 4px;
  color: var(--color);
  background: var(--background-level-2);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-3);
}</style>
