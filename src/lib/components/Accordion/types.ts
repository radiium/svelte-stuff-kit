export type AccordionStore = false | (() => void);

export type AccordionContext = {
	setCurrent(fn: () => void): void;
};
