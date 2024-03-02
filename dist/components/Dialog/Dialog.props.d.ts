import type { DialogProps } from './Dialog.types';
export declare const defaultDialogProps: DialogProps;
export declare const docDialogProps: {
    isOpen: {
        type: string;
        default: boolean | undefined;
    };
    size: {
        type: string;
        values: readonly ["1", "2", "3", "4"];
        default: "1" | "2" | "3" | "4" | undefined;
    };
    closeOnBackdropClick: {
        type: string;
        default: boolean | undefined;
    };
    closeOnEscape: {
        type: string;
        default: boolean | undefined;
    };
    showCloseButton: {
        type: string;
        default: boolean | undefined;
    };
    blockScroll: {
        type: string;
        default: boolean | undefined;
    };
};
