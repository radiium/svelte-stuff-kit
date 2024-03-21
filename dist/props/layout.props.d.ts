export declare const positionValues: readonly ["static", "relative", "absolute", "fixed", "sticky"];
export type PositionValue = (typeof positionValues)[number];
export declare const positionEdgeValues: readonly ["auto", "0", "50%", "100%"];
export type PositionEdgeValue = (typeof positionEdgeValues)[number];
export declare const widthHeightValues: readonly ["auto", "min-content", "max-content", "100%", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
export type WidthHeightValue = (typeof widthHeightValues)[number];
export declare const flexShrinkValues: readonly ["0", "1"];
export type FlexShrinkValue = (typeof flexShrinkValues)[number];
export declare const flexGrowValues: readonly ["0", "1"];
export type FlexGrowValue = (typeof flexGrowValues)[number];
export declare const layoutKeys: readonly ["position", "inset", "top", "right", "bottom", "left", "width", "height", "shrink", "grow"];
export type LayoutKey = (typeof layoutKeys)[number];
export interface LayoutProps {
    position?: PositionValue;
    inset?: PositionEdgeValue;
    top?: PositionEdgeValue;
    right?: PositionEdgeValue;
    bottom?: PositionEdgeValue;
    left?: PositionEdgeValue;
    width?: WidthHeightValue;
    height?: WidthHeightValue;
    shrink?: FlexShrinkValue;
    grow?: FlexGrowValue;
}
export declare function extractLayoutProps<T extends LayoutProps>(props: T): {
    position: "absolute" | "fixed" | "static" | "relative" | "sticky" | undefined;
    width: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "auto" | "100%" | "min-content" | "max-content" | undefined;
    height: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "auto" | "100%" | "min-content" | "max-content" | undefined;
    inset: "0" | "auto" | "50%" | "100%" | undefined;
    top: "0" | "auto" | "50%" | "100%" | undefined;
    bottom: "0" | "auto" | "50%" | "100%" | undefined;
    left: "0" | "auto" | "50%" | "100%" | undefined;
    right: "0" | "auto" | "50%" | "100%" | undefined;
    shrink: "0" | "1" | undefined;
    grow: "0" | "1" | undefined;
    rest: Omit<T, "top" | "right" | "bottom" | "left" | "width" | "height" | "position" | "grow" | "shrink" | "inset">;
};
