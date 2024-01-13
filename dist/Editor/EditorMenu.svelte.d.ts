import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EditorMenuProps = typeof __propDef.props;
export type EditorMenuEvents = typeof __propDef.events;
export type EditorMenuSlots = typeof __propDef.slots;
export default class EditorMenu extends SvelteComponent<EditorMenuProps, EditorMenuEvents, EditorMenuSlots> {
}
export {};
