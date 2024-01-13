/**
 * addEventListener to a node and return removeEventListener callback
 *
 * @param node
 * @param event
 * @param handler
 * @param options
 * @returns
 */
export function listen(node, type, callback, // EventListenerOrEventListenerObject | null, // TODO fix type
options) {
    node.addEventListener(type, callback, options);
    return () => node.removeEventListener(type, callback, options);
}
