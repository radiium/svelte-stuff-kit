export declare const marginKeys: readonly ["m", "mx", "my", "mt", "mr", "mb", "ml"];
export type MarginKey = (typeof marginKeys)[number];
export declare const marginValues: readonly ["auto", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
export type MarginValue = (typeof marginValues)[number];
export interface MarginProps {
    m?: MarginValue;
    mx?: MarginValue;
    my?: MarginValue;
    mt?: MarginValue;
    mr?: MarginValue;
    mb?: MarginValue;
    ml?: MarginValue;
}
