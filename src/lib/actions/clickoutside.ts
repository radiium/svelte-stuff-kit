import type { ActionReturn } from 'svelte/action';

type Parameters = void;

type Attributes = {
	'on:clickoutside': (e: CustomEvent<HTMLElement>) => void;
};

export function clickoutside(node: HTMLElement): ActionReturn<Parameters, Attributes> {
	function handleClick(event: MouseEvent) {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			node.dispatchEvent(
				new CustomEvent<HTMLElement>('clickoutside', node as CustomEventInit<HTMLElement>)
			);
		}
	}

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
