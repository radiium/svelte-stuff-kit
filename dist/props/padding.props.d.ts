export declare const paddingKeys: readonly ["p", "px", "py", "pt", "pr", "pb", "pl"];
export type PaddingKey = (typeof paddingKeys)[number];
export declare const paddingValues: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
export type PaddingValue = (typeof paddingValues)[number];
export interface PaddingProps {
    p?: PaddingValue;
    px?: PaddingValue;
    py?: PaddingValue;
    pt?: PaddingValue;
    pr?: PaddingValue;
    pb?: PaddingValue;
    pl?: PaddingValue;
}
