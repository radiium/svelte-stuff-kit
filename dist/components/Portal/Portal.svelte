<script context="module">import { tick } from 'svelte';
import { get } from 'svelte/store';
/**
 * Usage: <div use:portal={'css selector'}> or <div use:portal={document.body}>
 */
export function portal(el, target = 'body') {
    let targetEl;
    async function update(newTarget) {
        target = newTarget;
        if (typeof target === 'string') {
            targetEl = document.querySelector(target);
            if (targetEl === null) {
                await tick();
                targetEl = document.querySelector(target);
            }
            if (targetEl === null) {
                throw new Error(`No element found matching css selector: "${target}"`);
            }
        }
        else if (target instanceof HTMLElement) {
            targetEl = target;
        }
        else {
            throw new TypeError(`Unknown portal target type: ${target === null ? 'null' : typeof target}. Allowed types: string (CSS selector) or HTMLElement.`);
        }
        const themeContext = useThemeContext();
        const currentTheme = get(themeContext.scheme);
        if (currentTheme) {
            targetEl.setAttribute('data-theme', currentTheme);
        }
        targetEl.appendChild(el);
        el.hidden = false;
    }
    function destroy() {
        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }
    update(target);
    return {
        update,
        destroy
    };
}
</script>

<script>import { defaultPortalProps } from './Portal.props.js';
import { useThemeContext } from '../../theme/theme.context.js';
export let target = defaultPortalProps.target;
</script>

<div use:portal={target} hidden>
    <slot />
</div>
