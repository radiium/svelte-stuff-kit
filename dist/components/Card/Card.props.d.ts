import type { CardProps } from './Card.types.js';
export declare const defaultCardProps: CardProps;
export declare const docCardPropsDefs: {
    props: ({
        name: string;
        type: string;
        values?: undefined;
        default?: undefined;
    } | {
        name: string;
        type: string;
        values: readonly ["0", "1", "2", "3", "4", "5"];
        default: "0" | "1" | "2" | "3" | "4" | "5" | undefined;
    })[];
    slots: {
        name: string;
    }[];
    events: never[];
};
