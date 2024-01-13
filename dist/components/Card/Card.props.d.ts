import { Sizes1To5 } from '../../types';
import type { HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';
export interface PropsCard extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
    elementRef?: HTMLElement;
    as?: keyof SvelteHTMLElements;
    size?: (typeof Sizes1To5)[number];
    noPadding?: boolean;
}
export declare const defaultPropsCard: PropsCard;
export declare const docPropsCard: {
    size: {
        type: string;
        values: readonly ["1", "2", "3", "4", "5"];
        default: "1" | "2" | "3" | "4" | "5" | undefined;
    };
    as: {
        type: string;
        default: keyof SvelteHTMLElements | undefined;
    };
    noPadding: {
        type: string;
        default: boolean | undefined;
    };
};
