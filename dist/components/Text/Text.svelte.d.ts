import { SvelteComponent } from "svelte";
import type { TextProps } from './Text.types.js';
declare const __propDef: {
    props: TextProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
type TextProps_ = typeof __propDef.props;
export { TextProps_ as TextProps };
export type TextEvents = typeof __propDef.events;
export type TextSlots = typeof __propDef.slots;
export default class Text extends SvelteComponent<TextProps_, TextEvents, TextSlots> {
}
