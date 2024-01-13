/**
 * parse value
 *
 * @param mix
 * @returns
 */
function toVal(mix) {
    let k;
    let y;
    let str = '';
    if (typeof mix === 'string' || typeof mix === 'number') {
        str += mix;
    }
    else if (typeof mix === 'object') {
        if (Array.isArray(mix)) {
            for (k = 0; k < mix.length; k++) {
                if (mix[k]) {
                    if ((y = toVal(mix[k]))) {
                        str && (str += ' ');
                        str += y;
                    }
                }
            }
        }
        else {
            for (k in mix) {
                if (mix[k]) {
                    str && (str += ' ');
                    str += k;
                }
            }
        }
    }
    return str;
}
/**
 * A tiny (234B) utility for constructing className strings conditionally.
 * Credit: https://github.com/lukeed/clsx
 *
 * @param rest params
 * @returns
 */
export function clsx(...rest) {
    let i = 0;
    let tmp;
    let x;
    let str = '';
    while (i < arguments.length) {
        if ((tmp = rest[i++])) {
            if ((x = toVal(tmp))) {
                str && (str += ' ');
                str += x;
            }
        }
    }
    return str;
}
