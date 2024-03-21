// credit: https://github.com/henrygd/trap-focus-svelte/blob/main/index.ts
import { listen } from '../utils/listen.js';
let stack = [];
/**
 * Traps focus within a wrapper element
 *
 * @param wrap
 * @param active
 * @returns
 */
function focusTrap(wrap, active = true) {
    // true if tabbing backwards with shift + tab
    let shiftTab = false;
    // set shiftTab to true if shift + tab is pressed
    const shiftTabListener = listen(document, 'keydown', (e) => {
        shiftTab = e.shiftKey && e.key == 'Tab';
    });
    // return  the first and last focusable children
    function getFirstAndLastFocusable() {
        const els = [...wrap.querySelectorAll('*')].filter((element) => element.tabIndex >= 0);
        return [els.at(0) ?? wrap, els.at(-1) ?? wrap];
    }
    // store document.activeElement to restore focus when untrapped
    let lastActiveElement;
    /** activates trap (adds to stack) and focuses inside */
    function addToStack() {
        stack.push(wrap);
        lastActiveElement = document.activeElement;
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
    const inCurrentTrap = (el) => stack.at(-1)?.contains(el);
    /** loop focus if leaving first of last focusable element in wrap */
    const focusOutListener = listen(wrap, 'focusout', (e) => {
        if (inCurrentTrap(wrap)) {
            const [firstFocusableEl, lastFocusableEl] = getFirstAndLastFocusable();
            if (e.target == firstFocusableEl && shiftTab) {
                lastFocusableEl.focus();
            }
            else if (e.target == lastFocusableEl && !shiftTab) {
                firstFocusableEl.focus();
            }
        }
    });
    /** moves focus back to wrap if something outside the wrap is focused */
    const focusListener = listen(document, 'focusin', (e) => {
        if (inCurrentTrap(wrap) && !inCurrentTrap(e.target)) {
            const [first, last] = getFirstAndLastFocusable();
            const focusEl = shiftTab ? last : first;
            focusEl.focus();
        }
    });
    return {
        /** Enables / disables trap */
        update(active) {
            if (active) {
                addToStack();
            }
            else {
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
