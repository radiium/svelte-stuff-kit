import { listen } from '../utils/listen.js';
/**
 * Listen click outside a node
 *
 * @param node
 * @returns
 */
export function clickoutside(node) {
    function handleClick(event) {
        if (node && !node.contains(event.target) && !event.defaultPrevented) {
            node.dispatchEvent(new CustomEvent('clickoutside', node));
        }
    }
    const clickListener = listen(document, 'click', handleClick, true);
    return {
        destroy() {
            clickListener();
        }
    };
}
