import {
	computePosition,
	autoUpdate,
	flip as flipMiddleware,
	offset as offsetMiddleware,
	arrow as arrowMiddleware,
	hide as hideMiddleware,
	shift as shiftMiddleware,
	size as sizeMiddleware,
	type ReferenceElement,
	type FloatingElement,
	type ComputePositionConfig,
	type Middleware,
	type Placement,
	type OffsetOptions,
	type FlipOptions,
	type ArrowOptions,
	type ComputePositionReturn,
	type AutoUpdateOptions,
	type Strategy,
	type HideOptions,
	type ShiftOptions,
	type SizeOptions,
	type MiddlewareData
} from '@floating-ui/dom';
import type { ActionReturn } from 'svelte/action';
import { writable, type Unsubscriber } from 'svelte/store';

// Reference action types
export type ReferenceParameters = void;
export type ReferenceAttributes = Record<string, unknown>;
export type ReferenceActionReturn = ActionReturn<ReferenceParameters, ReferenceAttributes>;

// Floating action types
export type FloatingParameters = void;
export type FloatingAttributes = Record<string, unknown>;
export type FloatingActionReturn = ActionReturn<FloatingParameters, FloatingAttributes>;

// Arrow action types
export type ArrowParameters = void;
export type ArrowAttributes = Record<string, unknown>;
export type ArrowActionReturn = ActionReturn<ArrowParameters, ArrowAttributes>;

// Builder types
export type CreateFloatingProps = Partial<ComputePositionConfig> & {
	//
	defaultOpen: boolean;

	// Floating config
	strategy?: Strategy;
	placement?: Placement;

	// Autoupdate
	autoUpdate?: boolean | Partial<AutoUpdateOptions>;

	// Transform style instead top left
	transform?: boolean;

	// Middlewares
	offset?: boolean | OffsetOptions;
	flip?: boolean | FlipOptions;
	shift?: boolean | ShiftOptions;
	size?: boolean | SizeOptions;
	hide?: boolean | HideOptions;
	arrow?: boolean | ArrowOptions;
	customMiddleware?: Middleware[];
};

// State types
export type Side = 'top' | 'right' | 'bottom' | 'left';
export type Alignment = 'start' | 'center' | 'end';
export interface FloatingState extends ComputePositionReturn {
	side: Side;
	align: Alignment;
	floatingStyle: string;
	arrowStyle: string;
}

const defaultProps: CreateFloatingProps = {
	defaultOpen: false,
	strategy: 'absolute',
	placement: 'bottom',
	autoUpdate: false,
	transform: true,
	offset: 10,
	flip: true,
	size: false,
	shift: false,
	hide: false,
	arrow: true,
	customMiddleware: []
};

/**
 * Create floating actions for
 * - reference
 * - floating
 * - arrow
 *
 * @param props
 * @returns
 */
export function createFloating(props: Partial<CreateFloatingProps> = {}) {
	let referenceEl: ReferenceElement;
	let floatingEl: FloatingElement;
	let arrowEl: HTMLElement | undefined = undefined;

	props = { ...defaultProps, ...props };
	const propsStore = writable<Partial<CreateFloatingProps>>(props);
	const openStore = writable<boolean>(props.defaultOpen);
	const floatingStore = writable<FloatingState>();

	// Utils

	function getSideAndAlignFromPlacement(placement: Placement): [Side, Alignment] {
		const [side, align = 'center'] = placement.split('-');
		return [side, align] as [Side, Alignment];
	}

	function styleToString(style: { [key: string]: string | undefined } = {}) {
		return Object.keys(style).reduce((acc: string, key: string) => {
			if (!style[key]) return acc;
			return `${acc} ${key}: ${style[key]};`;
		}, '');
	}

	function roundByDPR(value: number) {
		const dpr = window.devicePixelRatio || 1;
		return Math.round(value * dpr) / dpr;
	}

	function buildFloatingStyle(data: ComputePositionReturn): string {
		const x = roundByDPR(data.x);
		const y = roundByDPR(data.y);

		let floatingStyle = {
			position: props.strategy,
			left: '0',
			top: '0',
			transform: 'unset'
		};
		if (props.transform) {
			floatingStyle = {
				...floatingStyle,
				top: '0',
				left: '0',
				transform: `translate(${roundByDPR(x)}px,${roundByDPR(y)}px)`
			};
		} else {
			floatingStyle = {
				...floatingStyle,
				left: `${x}px`,
				top: `${y}px`
			};
		}

		return styleToString(floatingStyle);
	}

	function buildArrowStyle(side: Side, data: MiddlewareData, arrow?: HTMLElement): string {
		if (!data.arrow || !arrow) {
			return '';
		}

		const arrowOffset = arrow ? arrow.offsetHeight / 2 : 0;
		const arrowX = data.arrow?.x;
		const arrowY = data.arrow?.y;
		const staticSide: string = {
			top: 'bottom',
			right: 'left',
			bottom: 'top',
			left: 'right'
		}[side]!;

		return styleToString({
			left: arrowX != null ? `${arrowX}px` : 'unset',
			top: arrowY != null ? `${arrowY}px` : 'unset',
			right: 'unset',
			bottom: 'unset',
			[staticSide]: `-${arrowOffset}px`
		});
	}

	function parseOptions<T>(value?: boolean | T): T | undefined {
		return typeof value === 'boolean' ? undefined : value;
	}

	function buildMiddlewares(userMiddlewares: Middleware[] = []): Middleware[] {
		const middlewares: Middleware[] = [];

		if (props.offset || props.offset === 0) {
			middlewares.push(offsetMiddleware(parseOptions(props.offset)));
		}
		if (props.flip) {
			middlewares.push(flipMiddleware(parseOptions(props.flip)));
		}
		if (props.shift) {
			middlewares.push(shiftMiddleware(parseOptions(props.shift)));
		}
		if (props.size) {
			middlewares.push(sizeMiddleware(parseOptions(props.size)));
		}
		if (props.hide) {
			middlewares.push(hideMiddleware(parseOptions(props.hide)));
		}
		if (props.arrow && arrowEl) {
			middlewares.push(arrowMiddleware({ ...parseOptions(props.arrow), element: arrowEl }));
		}

		return middlewares.map((m: Middleware) => {
			return userMiddlewares.find((cM: Middleware) => m.name === cM.name) ?? m;
		});
	}

	// Update position

	const updatePosition = async () => {
		if (referenceEl && floatingEl) {
			const options = {
				strategy: props.strategy,
				placement: props.placement,
				middleware: buildMiddlewares(props.customMiddleware)
			};

			const response = await computePosition(referenceEl, floatingEl, options);

			const [side, align] = getSideAndAlignFromPlacement(response.placement);
			const floatingStyle = buildFloatingStyle(response);
			const arrowStyle = buildArrowStyle(side, response.middlewareData, arrowEl);

			floatingStore.set({
				...response,
				side,
				align,
				floatingStyle,
				arrowStyle
			});
		}
	};

	function initAutoUpdate(): () => void {
		if (props.autoUpdate && referenceEl && floatingEl) {
			return autoUpdate(referenceEl, floatingEl, updatePosition, parseOptions(props.autoUpdate) || {});
		}
		return () => {};
	}

	// Actions

	const referenceAction = (node: HTMLElement): ReferenceActionReturn => {
		console.log('[referenceAction] init');
		node.classList.add('reference');
		referenceEl = node;
		updatePosition();
		return {
			update: () => {
				console.log('[referenceAction] update');
			},
			destroy: () => {
				console.log('[referenceAction] destroy');
			}
		};
	};

	const floatingAction = (node: HTMLElement): FloatingActionReturn => {
		console.log('[floatingAction] init');
		node.classList.add('floating');
		floatingEl = node;
		updatePosition();
		const destroyAutoUpdate = initAutoUpdate();
		return {
			update: () => {
				console.log('[floatingAction] update');
			},
			destroy: () => {
				console.log('[floatingAction] destroy');
				destroyAutoUpdate();
			}
		};
	};

	const arrowAction = (node: HTMLElement): ArrowActionReturn => {
		console.log('[arrowAction] init');
		node.classList.add('arrow');
		arrowEl = node;
		updatePosition();
		return {
			update: () => {
				console.log('[arrowAction] update');
			},
			destroy: () => {
				console.log('[arrowAction] destroy');
			}
		};
	};

	return {
		elements: {
			referenceAction,
			floatingAction,
			arrowAction
		},
		states: {
			open: () => openStore.set(true),
			close: () => openStore.set(false),
			isOpen: { subscribe: openStore.subscribe },
			onFloatingChange: floatingStore.subscribe
		}
	};
}
