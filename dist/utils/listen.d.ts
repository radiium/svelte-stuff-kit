/**
 * addEventListener to a node and return removeEventListener callback
 *
 * @param node
 * @param event
 * @param handler
 * @param options
 * @returns
 */
export declare function listen<T>(node: EventTarget, type: string, callback: any, // EventListenerOrEventListenerObject | null, // TODO fix type
options?: AddEventListenerOptions | boolean): () => void;
