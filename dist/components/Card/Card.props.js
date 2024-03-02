import { Sizes1To5 } from '../../constants';
export const defaultCardProps = {
    elementRef: undefined,
    size: '3',
    noPadding: false
};
export const docCardProps = {
    size: {
        type: 'enum',
        values: Sizes1To5,
        default: defaultCardProps.size
    },
    noPadding: {
        type: 'boolean',
        default: defaultCardProps.noPadding
    }
};
