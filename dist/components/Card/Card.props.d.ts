import type { CardProps } from './Card.types';
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
        values: readonly ["1", "2", "3", "4", "5"];
        default: "1" | "2" | "3" | "4" | "5" | undefined;
    } | {
        name: string;
        type: string;
        default: boolean | undefined;
        values?: undefined;
    })[];
    slots: {
        default: boolean;
    }[];
    events: never[];
};
