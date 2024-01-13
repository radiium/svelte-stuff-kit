import { listen } from '../utils/listen';
/**
 * Listen long press on node
 *
 * @param node
 * @param params
 * @returns
 */
export function longpress(node, params) {
    let timer;
    function handlePress() {
        timer = window.setTimeout(() => {
            node.dispatchEvent(new CustomEvent('startlongpress'));
        }, params.duration);
    }
    function handleRelease() {
        clearTimeout(timer);
        node.dispatchEvent(new CustomEvent('endlongpress'));
    }
    const mousedownListener = listen(node, 'mousedown', handlePress);
    const mouseupListener = listen(node, 'mouseup', handleRelease);
    const touchstartListener = listen(node, 'touchstart', handlePress);
    const touchendListener = listen(node, 'touchend', handleRelease);
    return {
        update(newParams) {
            handleRelease();
            params = newParams;
        },
        destroy() {
            handleRelease();
            mousedownListener();
            mouseupListener();
            touchstartListener();
            touchendListener();
        }
    };
}
