import { layoutKeys } from './layout.props.js';
import { marginKeys } from './margin.props.js';
import { paddingKeys } from './padding.props.js';
export function extractPropsAlt(props) {
    // prettier-ignore
    const { position, inset, top, right, bottom, left, width, height, shrink, grow, m, mx, my, mt, mr, mb, ml, p, px, py, pt, pr, pb, pl, ...restProps } = props;
    // prettier-ignore
    return { position, inset, top, right, bottom, left, width, height, shrink, grow, m, mx, my, mt, mr, mb, ml, p, px, py, pt, pr, pb, pl, restProps };
}
export function buildPropsCssClass(props) {
    return Object.entries(props)
        .filter(([key, _]) => layoutKeys.includes(key) ||
        marginKeys.includes(key) ||
        paddingKeys.includes(key))
        .filter(([_, value]) => value !== null && value !== undefined)
        .reduce((acc, [key, value]) => {
        if (value.substring(0, 1) === '-') {
            acc.push(`-${key}-${value.replace('-', '')}`);
        }
        else {
            acc.push(`${key}-${props[key]}`);
        }
        return acc;
    }, [])
        .join(' ');
}
export function extractProps(props, keys) {
    return keys
        .reduce((acc, key) => {
        if (Object.prototype.hasOwnProperty.call(props, key)) {
            const value = props[key];
            if (value) {
                if (value.substring(0, 1) === '-') {
                    acc.push(`-${key}-${value.replace('-', '')}`);
                }
                else {
                    acc.push(`${key}-${props[key]}`);
                }
            }
            //delete props[key];
        }
        return acc;
    }, [])
        .join(' ');
}
export function cleanProps(props) {
    const keys = [...layoutKeys, ...marginKeys, ...paddingKeys];
    keys.forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(props, key)) {
            delete props[key];
        }
    });
    return props;
}
export function extractLayoutProps(props) {
    return extractProps(props, layoutKeys);
}
export function extractMarginProps(props) {
    return extractProps(props, marginKeys);
}
export function extractPaddingProps(props) {
    return extractProps(props, paddingKeys);
}
