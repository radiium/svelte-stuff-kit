import { SvelteComponent } from "svelte";
import { type PropsTextarea } from './Textarea.props';
declare const __propDef: {
    props: {
        [x: string]: any;
        elementRef?: PropsTextarea['elementRef'];
        value?: PropsTextarea['value'];
        size?: PropsTextarea['size'];
        color?: "neutral" | "primary" | "info" | "success" | "warning" | "danger" | undefined;
        error?: PropsTextarea['error'];
        fullWidth?: PropsTextarea['fullWidth'];
    };
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
export type TextareaProps = typeof __propDef.props;
export type TextareaEvents = typeof __propDef.events;
export type TextareaSlots = typeof __propDef.slots;
export default class Textarea extends SvelteComponent<TextareaProps, TextareaEvents, TextareaSlots> {
}
export {};
