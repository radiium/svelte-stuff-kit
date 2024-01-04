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
export const Sizes0To1 = [size0, size1] as const;
export const Sizes1To3 = [size1, size2, size3] as const;
export const Sizes1To4 = [size1, size2, size3, size4] as const;
export const Sizes1To5 = [size1, size2, size3, size4, size5] as const;
export const Sizes1To9 = [size1, size2, size3, size4, size5, size6, size7, size8, size9] as const;
export const Sizes0To9 = [size0, size1, size2, size3, size4, size5, size6, size7, size8, size9] as const;

export const AsElements = ['button', 'submit', 'reset'] as const;
export const ButtonTypes = ['button', 'submit', 'reset'] as const;
export const Colors = ['neutral', 'primary', 'info', 'success', 'warning', 'danger'] as const;
export const Variants = ['solid', 'soft', 'outline', 'clear'] as const;
export const Weights = ['light', 'regular', 'medium', 'bold'] as const;
export const Margins = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my'] as const;
export const Paddings = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py'] as const;
export const Aligns = ['start', 'center', 'end'] as const;
export const Displays = ['none', 'inline-flex', 'flex'] as const;
export const Justifys = ['start', 'center', 'end', 'around', 'between', 'evenly', 'normal'] as const;
export const Directions = ['row', 'column', 'row-reverse', 'column-reverse'] as const;
export const AlignItems = ['start', 'center', 'end', 'baseline', 'stretch', 'normal'] as const;
export const Wraps = ['nowrap', 'wrap', 'wrap-reverse'] as const;
export const Gaps = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
export const Grows = ['0', '1'] as const;
export const Shrinks = ['0', '1'] as const;
export const InputTypes = [
	'number',
	'time',
	'text',
	'search',
	'password',
	'email',
	'tel',
	'url',
	'date',
	'datetime-local',
	'month',
	'week'
] as const;
