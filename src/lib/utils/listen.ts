/**
 * addEventListener to a node and return removeEventListener callback
 *
 * @param node
 * @param event
 * @param handler
 * @param options
 * @returns
 */
export function listen<T>(
	node: EventTarget,
	type: string,
	callback: any, // EventListenerOrEventListenerObject | null, // TODO fix type
	options?: AddEventListenerOptions | boolean
): () => void {
	node.addEventListener(type, callback, options);
	return () => node.removeEventListener(type, callback, options);
}
