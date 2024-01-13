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
export type EditorPanelRightProps = typeof __propDef.props;
export type EditorPanelRightEvents = typeof __propDef.events;
export type EditorPanelRightSlots = typeof __propDef.slots;
export default class EditorPanelRight extends SvelteComponent<EditorPanelRightProps, EditorPanelRightEvents, EditorPanelRightSlots> {
}
export {};
