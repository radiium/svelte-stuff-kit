import { Sizes1To4 } from '../../constants.js';
export const defaultDialogProps = {
    isOpen: false,
    size: '3',
    closeOnBackdropClick: true,
    closeOnEscape: true,
    showCloseButton: true,
    blockScroll: true
};
export const docDialogPropsDefs = {
    props: [
        {
            name: 'isOpen',
            type: 'boolean',
            default: defaultDialogProps.isOpen
        },
        {
            name: 'size',
            type: 'enum',
            values: Sizes1To4,
            default: defaultDialogProps.size
        },
        {
            name: 'closeOnBackdropClick',
            type: 'boolean',
            default: defaultDialogProps.closeOnBackdropClick
        },
        {
            name: 'closeOnEscape',
            type: 'boolean',
            default: defaultDialogProps.closeOnEscape
        },
        {
            name: 'showCloseButton',
            type: 'boolean',
            default: defaultDialogProps.showCloseButton
        },
        {
            name: 'blockScroll',
            type: 'boolean',
            default: defaultDialogProps.blockScroll
        }
    ],
    slots: [
        {
            name: 'default'
        },
        {
            name: 'close-icon',
            description: 'Override close icon'
        }
    ],
    events: []
};
