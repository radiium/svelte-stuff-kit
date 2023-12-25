import type { Placement, Strategy } from '@floating-ui/dom';
import type { FlyParams } from 'svelte/transition';

export type PropsPortal = {
	target: HTMLElement | string;
};

export const defaultPropsPortal: PropsPortal = {
	target: 'body'
};
