import { SvelteComponent } from "svelte";
import type { TextareaProps } from './Textarea.types.js';
declare const __propDef: {
    props: TextareaProps;
    events: {
        input: Event;
        change: Event;
        focus: FocusEvent;
        blur: FocusEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        keyup: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
type TextareaProps_ = typeof __propDef.props;
export { TextareaProps_ as TextareaProps };
export type TextareaEvents = typeof __propDef.events;
export type TextareaSlots = typeof __propDef.slots;
export default class Textarea extends SvelteComponent<TextareaProps_, TextareaEvents, TextareaSlots> {
}
