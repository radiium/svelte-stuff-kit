import { SvelteComponent } from "svelte";
import { type PropsSelect } from './Select.props';
declare const __propDef: {
    props: PropsSelect;
    events: {
        input: Event;
        change: Event;
        focus: FocusEvent;
        blur: FocusEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            index: any;
            option: import("./Select.props").SelectOption;
        };
    };
};
export type SelectProps = typeof __propDef.props;
export type SelectEvents = typeof __propDef.events;
export type SelectSlots = typeof __propDef.slots;
export default class Select extends SvelteComponent<SelectProps, SelectEvents, SelectSlots> {
}
export {};
