import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        start: {};
        title: {};
        end: {};
        toolbar: {};
        panelLeft: {
            isPanelLeftOpen: boolean;
        };
        content: {};
        panelRight: {
            isPanelRightOpen: boolean;
        };
        footer: {};
    };
};
export type EditorLayoutProps = typeof __propDef.props;
export type EditorLayoutEvents = typeof __propDef.events;
export type EditorLayoutSlots = typeof __propDef.slots;
export default class EditorLayout extends SvelteComponent<EditorLayoutProps, EditorLayoutEvents, EditorLayoutSlots> {
}
export {};
