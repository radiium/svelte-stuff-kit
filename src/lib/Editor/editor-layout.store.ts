import { storable } from '../utils/storable.js';

export class EditorLayoutState {
    public isPanelLeftOpen: boolean = false;
    public isPanelRightOpen: boolean = false;
}

const STORAGE_KEY = 'LAYOUT';
const DEFAULT_VALUE = new EditorLayoutState();
const STORE = storable<EditorLayoutState>({
    key: STORAGE_KEY,
    initialValue: DEFAULT_VALUE
});

export const editorLayoutStore = {
    ...STORE,
    toggleLeft() {
        STORE.update((state: EditorLayoutState) => {
            state.isPanelLeftOpen = !state.isPanelLeftOpen;
            return state;
        });
    },
    toggleRight() {
        STORE.update((state: EditorLayoutState) => {
            state.isPanelRightOpen = !state.isPanelRightOpen;
            return state;
        });
    }
};
