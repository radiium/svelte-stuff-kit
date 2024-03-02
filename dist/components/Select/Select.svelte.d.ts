import { SvelteComponent } from "svelte";
import type { SelectProps } from './Select.types';
declare const __propDef: {
    props: SelectProps;
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
type SelectProps_ = typeof __propDef.props;
export { SelectProps_ as SelectProps };
export type SelectEvents = typeof __propDef.events;
export type SelectSlots = typeof __propDef.slots;
export default class Select extends SvelteComponent<SelectProps_, SelectEvents, SelectSlots> {
}
