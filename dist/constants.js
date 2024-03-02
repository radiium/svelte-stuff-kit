export const size0 = '0';
export const size1 = '1';
export const size2 = '2';
export const size3 = '3';
export const size4 = '4';
export const size5 = '5';
export const size6 = '6';
export const size7 = '7';
export const size8 = '8';
export const size9 = '9';
export const Sizes0To1 = [size0, size1];
export const Sizes1To2 = [size1, size2];
export const Sizes1To3 = [size1, size2, size3];
export const Sizes1To4 = [size1, size2, size3, size4];
export const Sizes1To5 = [size1, size2, size3, size4, size5];
export const Sizes1To9 = [size1, size2, size3, size4, size5, size6, size7, size8, size9];
// prettier-ignore
export const Sizes0To9 = [size0, size1, size2, size3, size4, size5, size6, size7, size8, size9];
export const Colors = ['neutral', 'primary', 'blue', 'green', 'yellow', 'orange', 'red'];
export const Variants = ['solid', 'soft', 'outline', 'clear'];
export const VariantsBadge = ['solid', 'soft', 'outline'];
export const Weights = ['light', 'regular', 'medium', 'bold'];
export const Margins = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my'];
export const Paddings = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py'];
export const Aligns = ['start', 'center', 'end'];
export const Displays = ['none', 'inline-flex', 'flex'];
// prettier-ignore
export const Justifys = ['start', 'center', 'end', 'around', 'between', 'evenly', 'normal'];
export const Directions = ['row', 'column', 'row-reverse', 'column-reverse'];
export const AlignItems = ['start', 'center', 'end', 'baseline', 'stretch', 'normal'];
export const Wraps = ['nowrap', 'wrap', 'wrap-reverse'];
export const Gaps = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const Grows = ['0', '1'];
export const Shrinks = ['0', '1'];
// prettier-ignore
export const InputTypes = ['number', 'time', 'text', 'search', 'password', 'email', 'tel', 'url', 'date', 'datetime-local', 'month', 'week'];
export const TextTags = ['div', 'span', 'label', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
// prettier-ignore
const marginValues = ['auto', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9'];
export function extractMarginProps(props) {
    const { m, mx, my, mt, mr, mb, ml, ...rest } = props;
    return { m, mx, my, mt, mr, mb, ml, rest };
}
export function extractMarginPropsClass(props) {
    const allowed = ['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml'];
    return Object.keys(props)
        .filter((key) => allowed.includes(key))
        .map((key) => `${key}-${props[key]}`)
        .join(' ');
}
const paddingValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export function extractPaddingProps(props) {
    const { p, px, py, pt, pr, pb, pl, ...rest } = props;
    return { p, px, py, pt, pr, pb, pl, rest };
}
export function extractPaddingPropsClass(props) {
    const allowed = ['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl'];
    return Object.keys(props)
        .filter((key) => allowed.includes(key))
        .map((key) => `${key}-${props[key]}`)
        .join(' ');
}
const positionValues = ['static', 'relative', 'absolute', 'fixed', 'sticky'];
const positionEdgeValues = ['auto', '0', '50%', '100%'];
// prettier-ignore
const widthHeightValues = ['auto', 'min-content', 'max-content', '100%', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const flexShrinkValues = ['0', '1'];
const flexGrowValues = ['0', '1'];
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
        rest,
    };
}
export function cleanProps(props) {
    const copy = { ...props };
    delete copy.m;
    delete copy.mx;
    delete copy.my;
    delete copy.mt;
    delete copy.mr;
    delete copy.mb;
    delete copy.ml;
    delete copy.p;
    delete copy.px;
    delete copy.py;
    delete copy.pt;
    delete copy.pr;
    delete copy.pb;
    delete copy.pl;
    delete copy.position;
    delete copy.width;
    delete copy.height;
    delete copy.inset;
    delete copy.top;
    delete copy.bottom;
    delete copy.left;
    delete copy.right;
    delete copy.shrink;
    delete copy.grow;
    return copy;
}
