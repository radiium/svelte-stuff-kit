<script context="module">"use strict";
let allModal = [];
const addModal = (modal) => {
    if (modal) {
        allModal.push(modal);
    }
};
const removeModal = (modal) => {
    if (modal) {
        allModal = allModal.filter((m) => m !== modal);
    }
};
const lastModal = () => {
    return allModal && allModal.length > 0 ? allModal[allModal.length - 1] : undefined;
};
</script>

<script>import X from 'phosphor-svelte/lib/X';
import { fade, scale } from 'svelte/transition';
import { isBrowser } from '../../utils/is-browser';
import { focusTrap } from '../../actions/focus-trap';
import { clsx } from '../../utils/clsx';
import Button from '../Button/Button.svelte';
import { defaultPropsModal } from './Modal.props';
export let isOpen = defaultPropsModal.isOpen;
export let size = defaultPropsModal.size;
export let closeOnBackdropClick = defaultPropsModal.closeOnBackdropClick;
export let closeOnEscape = defaultPropsModal.closeOnEscape;
export let showCloseButton = defaultPropsModal.showCloseButton;
export let blockScroll = defaultPropsModal.blockScroll;
let { class: _class, style, ...restProps } = $$restProps;
let modalRef;
$: {
    if (isOpen) {
        addModal(modalRef);
        if (blockScroll) {
            disableScroll();
        }
    }
    else {
        removeModal(modalRef);
        if (blockScroll) {
            enableScroll();
        }
    }
}
const handlekeydown = (event) => {
    if (closeOnEscape) {
        if (event.key === 'Escape') {
            close();
        }
    }
};
const open = () => {
    console.log('[Modal] open');
    isOpen = true;
};
const close = () => {
    console.log('[Modal] close');
    isOpen = false;
};
const onBackdropClick = () => {
    console.log('[Modal] onClickBackdrop');
    if (closeOnBackdropClick) {
        close();
    }
};
let scrollTop;
let scrollLeft;
function disableScroll() {
    if (isBrowser()) {
        scrollTop = window.scrollY || window.document.documentElement.scrollTop;
        (scrollLeft = window.scrollX || window.document.documentElement.scrollLeft),
            (window.onscroll = function () {
                window.scrollTo({
                    left: scrollLeft,
                    top: scrollTop
                });
            });
    }
}
function enableScroll() {
    if (isBrowser()) {
        window.onscroll = function () { };
    }
}
$: cssClass = clsx(_class, `modal-wrapper`, `modal-size-${size}`);
</script>

<svelte:window on:keydown={handlekeydown} />

{#if isOpen}
	<div class={cssClass} bind:this={modalRef} id={modalRef?.id}>
		<div
			role="button"
			class="backdrop"
			tabindex="-1"
			on:click={onBackdropClick}
			on:keydown={handlekeydown}
			transition:fade={{
				duration: 250
			}}
		/>

		<div
			role="dialog"
			class="content-wrapper"
			aria-modal="true"
			active={isOpen}
			transition:scale={{
				start: 0.9,
				duration: 200,
				opacity: 0
			}}
			use:focusTrap
		>
			{#if showCloseButton}
				<Button
					iconOnly
					circle
					variant="clear"
					size="1"
					class="modal-close-btn"
					on:click={() => (isOpen = false)}
				>
					<X />
				</Button>
			{/if}

			{#if $$slots.header}
				<header>
					<slot name="header" />
				</header>
			{/if}

			{#if $$slots.content}
				<div class="content">
					<slot name="content" />
				</div>
			{/if}

			{#if $$slots.footer}
				<footer>
					<slot name="footer" />
				</footer>
			{/if}
		</div>
	</div>
{/if}

<style>.modal-wrapper {
  z-index: 10000;
  position: fixed;
  overflow: auto;
  width: 100%;
  height: 100%;
  inset: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal-wrapper .backdrop {
  z-index: 10001;
  position: fixed;
  overflow: hidden;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  inset: 0px;
  border: none;
  background: rgba(0, 0, 0, 0.4);
}
.modal-wrapper .content-wrapper {
  z-index: 10002;
  min-width: 30rem;
  max-width: 72vw;
  position: relative;
  color: var(--color);
  background: var(--background-level-0);
  border-radius: var(--modal-border-radius);
  padding: var(--modal-padding);
  margin: var(--space-8) auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  box-shadow: var(--border-color) 0px 0px 0px 1px;
  outline: none;
}
.modal-wrapper .content-wrapper header {
  width: 100%;
}
.modal-wrapper .content-wrapper .content {
  width: 100%;
  max-height: 50vh;
  overflow: auto;
}
.modal-wrapper .content-wrapper footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-3);
}
.modal-wrapper :global(.modal-close-btn) {
  position: absolute;
  top: var(--space-2);
  right: var(--space-2);
}
.modal-wrapper.modal-size-1 {
  --modal-padding: var(--space-3);
  --modal-border-radius: var(--radius-4);
}
.modal-wrapper.modal-size-2 {
  --modal-padding: var(--space-4);
  --modal-border-radius: var(--radius-4);
}
.modal-wrapper.modal-size-3 {
  --modal-padding: var(--space-5);
  --modal-border-radius: var(--radius-5);
}
.modal-wrapper.modal-size-4 {
  --modal-padding: var(--space-6);
  --modal-border-radius: var(--radius-5);
}</style>
