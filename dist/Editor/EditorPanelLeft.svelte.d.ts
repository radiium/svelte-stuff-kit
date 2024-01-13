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
export type EditorPanelLeftProps = typeof __propDef.props;
export type EditorPanelLeftEvents = typeof __propDef.events;
export type EditorPanelLeftSlots = typeof __propDef.slots;
export default class EditorPanelLeft extends SvelteComponent<EditorPanelLeftProps, EditorPanelLeftEvents, EditorPanelLeftSlots> {
}
export {};
