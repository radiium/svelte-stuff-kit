import { SvelteComponent } from "svelte";
import type { CheckboxProps } from './Chekbox.types';
declare const __propDef: {
    props: CheckboxProps;
    events: {
        input: Event;
        change: Event;
        focus: FocusEvent;
        blur: FocusEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
type CheckboxProps_ = typeof __propDef.props;
export { CheckboxProps_ as CheckboxProps };
export type CheckboxEvents = typeof __propDef.events;
export type CheckboxSlots = typeof __propDef.slots;
export default class Checkbox extends SvelteComponent<CheckboxProps_, CheckboxEvents, CheckboxSlots> {
}
