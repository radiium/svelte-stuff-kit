///
/// Props base
///

import type { ComponentType } from 'svelte';

// Colors
export const ColorUndefined = undefined;
export const ColorNeutral = 'neutral';
export const ColorPrimary = 'primary';
export const ColorInfo = 'info';
export const ColorSuccess = 'success';
export const ColorWarning = 'warning';
export const ColorDanger = 'danger';

// Sizes
export const Size1 = '1';
export const Size2 = '2';
export const Size3 = '3';
export const Size4 = '4';
export const Size5 = '5';
export const Size6 = '6';
export const Size7 = '7';
export const Size8 = '8';
export const Size9 = '9';

// Modes
export const ModeClear = 'clear';
export const ModeOutline = 'outline';
export const ModeSoft = 'soft';
export const ModeSolid = 'solid';

// Align
export const AlignStart = 'start';
export const AlignCenter = 'center';
export const AlignEnd = 'end';

// Weights
export const WeightLight = 'light';
export const WeightRegular = 'regular';
export const WeightMedium = 'medium';
export const WeightBold = 'bold';

///
/// Props commmon
///

export type PropColor =
	| typeof ColorNeutral
	| typeof ColorPrimary
	| typeof ColorInfo
	| typeof ColorSuccess
	| typeof ColorWarning
	| typeof ColorDanger;
export type PropMode =
	| typeof ModeClear //
	| typeof ModeOutline
	| typeof ModeSoft
	| typeof ModeSolid;

///
/// Props Button
///

export type PropTypeButton = 'button' | 'submit' | 'reset';
export type PropSizeButton =
	| typeof Size1 //
	| typeof Size2
	| typeof Size3
	| typeof Size4;
///
/// Props Input
///

export type PropTypeInput =
	| 'text'
	| 'number'
	| 'search'
	| 'password'
	| 'email'
	| 'tel'
	| 'url'
	| 'date'
	| 'datetime-local'
	| 'month'
	| 'time'
	| 'week';
export type PropSizeInput =
	| typeof Size1 //
	| typeof Size2
	| typeof Size3;

///
/// Props Text
///

export type PropSizeText =
	| typeof Size1
	| typeof Size2
	| typeof Size3
	| typeof Size4
	| typeof Size5
	| typeof Size6
	| typeof Size7
	| typeof Size8
	| typeof Size9;
export type PropColorText =
	| typeof ColorUndefined //
	| typeof ColorNeutral
	| typeof ColorPrimary
	| typeof ColorInfo
	| typeof ColorSuccess
	| typeof ColorWarning
	| typeof ColorDanger;
export type PropAlign =
	| typeof AlignStart //
	| typeof AlignCenter
	| typeof AlignEnd;
export type PropWeight =
	| typeof WeightLight //
	| typeof WeightRegular
	| typeof WeightMedium
	| typeof WeightBold;

///
/// Props Card
///

export type PropSizeCard =
	| typeof Size1 //
	| typeof Size2
	| typeof Size3
	| typeof Size4
	| typeof Size5;

///
/// Props Card
///

export type PropSizeModal =
	| typeof Size1 //
	| typeof Size2
	| typeof Size3
	| typeof Size4;

///
/// Props Select
///

export type SelectOption = {
	label: string;
	value: string | number;
	disabled?: boolean;
};

///
/// Props Select
///

export type FlexboxDisplay = 'none' | 'inline-flex' | 'flex';
export type FlexboxDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexboxJustify =
	| 'start'
	| 'center'
	| 'end'
	| 'around'
	| 'between'
	| 'evenly'
	| 'normal';
export type FlexboxAlignItems = 'start' | 'center' | 'end' | 'baseline' | 'stretch' | 'normal';
export type FlexboxWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexboxGap = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type FlexboxGrow = '0' | '1' | undefined;
export type FlexboxShrink = '0' | '1' | undefined;
