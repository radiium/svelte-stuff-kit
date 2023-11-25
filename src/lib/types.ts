export interface MarginsAttributes {
	m?: string | number;
	mt?: string | number;
	mb?: string | number;
	ml?: string | number;
	mr?: string | number;
	mx?: string | number;
	my?: string | number;
}

export interface ColorsAttributes {
	color: ColorType;
}

export interface DisabledAttributes {
	disabled: boolean;
}

export type ColorType =
	| 'neutral'
	| 'primary'
	| 'secondary'
	| 'info'
	| 'success'
	| 'warning'
	| 'danger';
