import { SvelteComponent } from "svelte";
import type { BadgeProps } from './Badge.types';
declare const __propDef: {
    props: BadgeProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
type BadgeProps_ = typeof __propDef.props;
export { BadgeProps_ as BadgeProps };
export type BadgeEvents = typeof __propDef.events;
export type BadgeSlots = typeof __propDef.slots;
export default class Badge extends SvelteComponent<BadgeProps_, BadgeEvents, BadgeSlots> {
}
