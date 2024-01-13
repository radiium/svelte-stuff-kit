import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type EditorContentProps = typeof __propDef.props;
export type EditorContentEvents = typeof __propDef.events;
export type EditorContentSlots = typeof __propDef.slots;
export default class EditorContent extends SvelteComponent<EditorContentProps, EditorContentEvents, EditorContentSlots> {
}
export {};
