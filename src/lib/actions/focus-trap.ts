// credit: https://github.com/henrygd/trap-focus-svelte/blob/main/index.ts

import { listen } from '$lib/utils/listen.js';
import type { ActionReturn } from 'svelte/action';

type Parameters = boolean;
type Attributes = {
    active: boolean;
};

let stack: HTMLElement[] = [];

/**
 * Traps focus within a wrapper element
 *
 * @param wrap
 * @param active
 * @returns
 */
function focusTrap(wrap: HTMLElement, active = true): ActionReturn<Parameters, Attributes> {
    // true if tabbing backwards with shift + tab
    let shiftTab = false;

    // set shiftTab to true if shift + tab is pressed
    const shiftTabListener = listen(document, 'keydown', (e: KeyboardEvent) => {
        shiftTab = e.shiftKey && e.key == 'Tab';
    });

    // return  the first and last focusable children
    function getFirstAndLastFocusable() {
        const els = [...wrap.querySelectorAll<HTMLElement>('*')].filter(
            (element: HTMLElement) => element.tabIndex >= 0
        );
        return [els.at(0) ?? wrap, els.at(-1) ?? wrap] as HTMLElement[];
    }

    // store document.activeElement to restore focus when untrapped
    let lastActiveElement: HTMLElement;

    /** activates trap (adds to stack) and focuses inside */
    function addToStack() {
        stack.push(wrap);
        lastActiveElement = document.activeElement as HTMLElement;
        getFirstAndLastFocusable().at(0)?.focus();
    }
    /** deactivates trap (removes from stack) and restores focus to lastActiveElement */
    function removeFromStack() {
        stack = stack.filter((el) => el != wrap);
        lastActiveElement.focus();
    }

    // add to stack if active
    if (active) {
        addToStack();
    }

    /** true if element is in the trap most recently added to stack */
    const inCurrentTrap = (el: HTMLElement) => stack.at(-1)?.contains(el);

    /** loop focus if leaving first of last focusable element in wrap */
    const focusOutListener = listen(wrap, 'focusout', (e: FocusEvent) => {
        if (inCurrentTrap(wrap)) {
            const [firstFocusableEl, lastFocusableEl] = getFirstAndLastFocusable();
            if (e.target == firstFocusableEl && shiftTab) {
                lastFocusableEl.focus();
            } else if (e.target == lastFocusableEl && !shiftTab) {
                firstFocusableEl.focus();
            }
        }
    });

    /** moves focus back to wrap if something outside the wrap is focused */
    const focusListener = listen(document, 'focusin', (e: FocusEvent) => {
        if (inCurrentTrap(wrap) && !inCurrentTrap(e.target as HTMLElement)) {
            const [first, last] = getFirstAndLastFocusable();
            const focusEl = shiftTab ? last : first;
            focusEl.focus();
        }
    });

    return {
        /** Enables / disables trap */
        update(active: boolean) {
            if (active) {
                addToStack();
            } else {
                removeFromStack();
            }
        },
        /** Destroys trap and removes event listeners */
        destroy() {
            shiftTabListener();
            focusListener();
            focusOutListener();
            removeFromStack();
        }
    };
}

export { focusTrap };
