import type { PortalProps } from './Portal.types';

export const defaultPortalProps: PortalProps = {
	target: 'body'
};

export const docPortalProps = {
	target: {
		type: 'HTMLElement | string',
		default: defaultPortalProps.target
	}
};
