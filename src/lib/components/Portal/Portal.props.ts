export interface PropsPortal {
	target: HTMLElement | string;
}

export const defaultPropsPortal: PropsPortal = {
	target: 'body'
};

export const docPropsPortal = {
	target: {
		type: 'HTMLElement | string',
		default: defaultPropsPortal.target
	}
};
