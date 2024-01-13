import { computePosition, autoUpdate, flip as flipMiddleware, offset as offsetMiddleware, arrow as arrowMiddleware, hide as hideMiddleware, shift as shiftMiddleware, size as sizeMiddleware } from '@floating-ui/dom';
import { writable } from 'svelte/store';
const defaultProps = {
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
export function createFloating(props = {}) {
    let referenceEl;
    let floatingEl;
    let arrowEl = undefined;
    props = { ...defaultProps, ...props };
    const propsStore = writable(props);
    const openStore = writable(props.defaultOpen);
    const floatingStore = writable();
    // Utils
    function getSideAndAlignFromPlacement(placement) {
        const [side, align = 'center'] = placement.split('-');
        return [side, align];
    }
    function styleToString(style = {}) {
        return Object.keys(style).reduce((acc, key) => {
            if (!style[key])
                return acc;
            return `${acc} ${key}: ${style[key]};`;
        }, '');
    }
    function roundByDPR(value) {
        const dpr = window.devicePixelRatio || 1;
        return Math.round(value * dpr) / dpr;
    }
    function buildFloatingStyle(data) {
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
        }
        else {
            floatingStyle = {
                ...floatingStyle,
                left: `${x}px`,
                top: `${y}px`
            };
        }
        return styleToString(floatingStyle);
    }
    function buildArrowStyle(side, data, arrow) {
        if (!data.arrow || !arrow) {
            return '';
        }
        const arrowOffset = arrow ? arrow.offsetHeight / 2 : 0;
        const arrowX = data.arrow?.x;
        const arrowY = data.arrow?.y;
        const staticSide = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right'
        }[side];
        return styleToString({
            left: arrowX != null ? `${arrowX}px` : 'unset',
            top: arrowY != null ? `${arrowY}px` : 'unset',
            right: 'unset',
            bottom: 'unset',
            [staticSide]: `-${arrowOffset}px`
        });
    }
    function parseOptions(value) {
        return typeof value === 'boolean' ? undefined : value;
    }
    function buildMiddlewares(userMiddlewares = []) {
        const middlewares = [];
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
        return middlewares.map((m) => {
            return userMiddlewares.find((cM) => m.name === cM.name) ?? m;
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
    function initAutoUpdate() {
        if (props.autoUpdate && referenceEl && floatingEl) {
            return autoUpdate(referenceEl, floatingEl, updatePosition, parseOptions(props.autoUpdate) || {});
        }
        return () => { };
    }
    // Actions
    const referenceAction = (node) => {
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
    const floatingAction = (node) => {
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
    const arrowAction = (node) => {
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
