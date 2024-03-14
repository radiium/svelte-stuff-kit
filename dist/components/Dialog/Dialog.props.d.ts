import type { DialogProps } from './Dialog.types';
export declare const defaultDialogProps: DialogProps;
export declare const docDialogPropsDefs: {
    props: ({
        name: string;
        type: string;
        default: boolean | undefined;
        values?: undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["1", "2", "3", "4"];
        default: "1" | "2" | "3" | "4" | undefined;
    })[];
    slots: never[];
    events: never[];
};
