import type { PortalProps } from './Portal.types';

export const defaultPortalProps: PortalProps = {
    target: 'body'
};

export const docPortalPropsDefs = {
    props: [
        {
            name: 'target',
            type: 'HTMLElement | string'
        }
    ],
    slots: [],
    events: []
};
