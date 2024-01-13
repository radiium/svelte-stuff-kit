import { Sizes1To4 } from '../../types';
export interface PropsModal {
    isOpen?: boolean;
    size?: (typeof Sizes1To4)[number];
    closeOnBackdropClick?: boolean;
    closeOnEscape?: boolean;
    showCloseButton?: boolean;
    blockScroll?: boolean;
}
export declare const defaultPropsModal: PropsModal;
export declare const docPropsModal: {
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
