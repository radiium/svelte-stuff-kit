import type { ActionReturn } from 'svelte/action';

type Parameters = {
	duration: number;
};

type Attributes = {
	'on:startlongpress': (e: CustomEvent<void>) => void;
	'on:endlongpress': (e: CustomEvent<void>) => void;
};

export function longpress(
	node: HTMLElement,
	params: Parameters
): ActionReturn<Parameters, Attributes> {
	let timer: number;

	function handlePress(): void {
		timer = window.setTimeout(() => {
			node.dispatchEvent(new CustomEvent('startlongpress'));
		}, params.duration);
	}

	function handleRelease(): void {
		clearTimeout(timer);
		node.dispatchEvent(new CustomEvent('endlongpress'));
	}

	node.addEventListener('mousedown', handlePress);
	node.addEventListener('mouseup', handleRelease);
	node.addEventListener('touchstart', handlePress);
	node.addEventListener('touchend', handleRelease);

	return {
		update(newParams: Parameters): void {
			handleRelease();
			params = newParams;
		},
		destroy(): void {
			handleRelease();
			node.removeEventListener('touchend', handleRelease);
			node.removeEventListener('touchstart', handlePress);
			node.removeEventListener('mouseup', handleRelease);
			node.removeEventListener('mousedown', handlePress);
		}
	};
}
