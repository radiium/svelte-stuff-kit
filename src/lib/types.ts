import type { Action } from '@sveltejs/kit';
import type { SvelteHTMLElements } from 'svelte/elements';

/**
 *
 */
export const Color = ['neutral', 'primary', 'info', 'success', 'warning', 'danger'] as const;
export const Variant = ['solid', 'soft', 'outline', 'clear'] as const;
export const StringSize = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
export const NumberSize = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export const Margin = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my'] as const;
export const Align = ['start', 'center', 'end'] as const;
export const Display = ['none', 'inline-flex', 'flex'] as const;
export const Justify = ['start', 'center', 'end', 'around', 'between', 'evenly', 'normal'] as const;
export const Direction = ['row', 'column', 'row-reverse', 'column-reverse'] as const;
export const AlignItems = ['start', 'center', 'end', 'baseline', 'stretch', 'normal'] as const;
export const Wrap = ['nowrap', 'wrap', 'wrap-reverse'] as const;
export const Gap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
export const Grow = ['0', '1'] as const;
export const Shrink = ['0', '1'] as const;
export const InputType = [
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

/**
 *
 */

// Primitive types
export type PropTypeString = string | undefined | null;
export type PropTypeBoolean = boolean | undefined | null;
export type PropTypeNumber = number | undefined | null;
// Custom types
export type PropTypeColor = (typeof Color)[number] | undefined | null;
export type PropTypeVariant = (typeof Variant)[number] | undefined | null;
export type PropTypeAlign = (typeof Align)[number] | undefined | null;
export type PropTypeUse = Action | Action[] | undefined | null;
export type PropTypeStyle = string | undefined | null;
export type PropTypeClass = string | undefined | null;
export type PropTypeDisplay = (typeof Display)[number] | undefined | null;
export type PropTypeJustify = (typeof Justify)[number] | undefined | null;
export type PropTypeDirection = (typeof Direction)[number] | undefined | null;
export type PropTypeAlignItems = (typeof AlignItems)[number] | undefined | null;
export type PropTypeWrap = (typeof Wrap)[number] | undefined | null;
export type PropTypeGap = (typeof Gap)[number] | undefined | null;
export type PropTypeGrow = (typeof Grow)[number] | undefined | null;
export type PropTypeShrink = (typeof Shrink)[number] | undefined | null;
export type PropTypeInputType = (typeof InputType)[number] | undefined | null;
export type PropTypeAs = keyof SvelteHTMLElements;
