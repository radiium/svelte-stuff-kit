export const positionValues = ['static', 'relative', 'absolute', 'fixed', 'sticky'];
export const positionEdgeValues = ['auto', '0', '50%', '100%'];
// prettier-ignore
export const widthHeightValues = ['auto', 'min-content', 'max-content', '100%', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const flexShrinkValues = ['0', '1'];
export const flexGrowValues = ['0', '1'];
// prettier-ignore
export const layoutKeys = ['position', 'inset', 'top', 'right', 'bottom', 'left', 'width', 'height', 'shrink', 'grow'];
export function extractLayoutProps(props) {
    const { position, //
    width, height, inset, top, bottom, left, right, shrink, grow, ...rest } = props;
    return {
        position,
        width,
        height,
        inset,
        top,
        bottom,
        left,
        right,
        shrink,
        grow,
        rest
    };
}
