export const defaultPortalProps = {
    target: 'body'
};
export const docPortalProps = {
    target: {
        type: 'HTMLElement | string',
        default: defaultPortalProps.target
    }
};
