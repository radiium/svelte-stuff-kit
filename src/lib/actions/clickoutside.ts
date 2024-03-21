import { listen } from '$lib/utils/listen.js';
import type { ActionReturn } from 'svelte/action';

type Parameters = void;
type Attributes = {
    'on:clickoutside': (e: CustomEvent<HTMLElement>) => void;
};

/**
 * Listen click outside a node
 *
 * @param node
 * @returns
 */
export function clickoutside(node: HTMLElement): ActionReturn<Parameters, Attributes> {
    function handleClick(event: MouseEvent) {
        if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
            node.dispatchEvent(
                new CustomEvent<HTMLElement>('clickoutside', node as CustomEventInit<HTMLElement>)
            );
        }
    }

    const clickListener = listen(document, 'click', handleClick, true);

    return {
        destroy() {
            clickListener();
        }
    };
}
