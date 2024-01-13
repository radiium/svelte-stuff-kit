import { storable } from '../utils/storable';
export class EditorLayoutState {
    isPanelLeftOpen = false;
    isPanelRightOpen = false;
}
const STORAGE_KEY = 'LAYOUT';
const DEFAULT_VALUE = new EditorLayoutState();
const STORE = storable({
    key: STORAGE_KEY,
    initialValue: DEFAULT_VALUE
});
export const editorLayoutStore = {
    ...STORE,
    toggleLeft() {
        STORE.update((state) => {
            state.isPanelLeftOpen = !state.isPanelLeftOpen;
            return state;
        });
    },
    toggleRight() {
        STORE.update((state) => {
            state.isPanelRightOpen = !state.isPanelRightOpen;
            return state;
        });
    }
};
