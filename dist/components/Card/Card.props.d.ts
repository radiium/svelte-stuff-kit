import type { CardProps } from './Card.types';
export declare const defaultCardProps: CardProps;
export declare const docCardProps: {
    size: {
        type: string;
        values: readonly ["1", "2", "3", "4", "5"];
        default: "1" | "2" | "3" | "4" | "5" | undefined;
    };
    noPadding: {
        type: string;
        default: boolean | undefined;
    };
};
