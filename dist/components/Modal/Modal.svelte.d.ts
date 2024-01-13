import { SvelteComponent } from "svelte";
import { type PropsModal } from './Modal.props';
declare const __propDef: {
    props: {
        [x: string]: any;
        isOpen?: PropsModal['isOpen'];
        size?: PropsModal['size'];
        closeOnBackdropClick?: PropsModal['closeOnBackdropClick'];
        closeOnEscape?: PropsModal['closeOnEscape'];
        showCloseButton?: PropsModal['showCloseButton'];
        blockScroll?: PropsModal['blockScroll'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        content: {};
        footer: {};
    };
};
export type ModalProps = typeof __propDef.props;
export type ModalEvents = typeof __propDef.events;
export type ModalSlots = typeof __propDef.slots;
export default class Modal extends SvelteComponent<ModalProps, ModalEvents, ModalSlots> {
}
export {};
