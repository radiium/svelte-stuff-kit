import { SvelteComponent } from "svelte";
import { type PropsText } from './Text.props';
declare const __propDef: {
    props: PropsText;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TextProps = typeof __propDef.props;
export type TextEvents = typeof __propDef.events;
export type TextSlots = typeof __propDef.slots;
export default class Text extends SvelteComponent<TextProps, TextEvents, TextSlots> {
}
export {};
