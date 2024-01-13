/**
 * Check if code running in browser or nodeJs
 *
 * @returns
 */
export const isBrowser = () => typeof window !== 'undefined' && typeof window.document !== 'undefined';
