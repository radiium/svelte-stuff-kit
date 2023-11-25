import type { DocPageData } from '../../types';
import TextSample from './TextSample.svelte';

export const docText: DocPageData = {
	id: 'text',
	title: 'Text',
	description: 'Common text element',
	demoTitle: 'Examples',
	demoComponent: TextSample,
	props: [
		{
			name: 'elementRef',
			type: 'SvelteHTMLElements | undefined'
		},
		{
			name: 'as',
			type: 'keyof SvelteHTMLElements',
			defaultValue: 'div'
		},
		{
			name: 'color',
			type: '"neutral" | "primary" | "info" | "success" | "warning" | "danger" | undefined'
		},
		{
			name: 'size',
			type: '"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"',
			defaultValue: '3'
		},
		{
			name: 'weight',
			type: '"light" | "regular" | "medium" | "bold"',
			defaultValue: 'regular'
		},
		{
			name: 'align',
			type: '"start" | "center" | "end"',
			defaultValue: 'start'
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: 'false'
		},
		{
			name: 'required',
			type: 'boolean',
			defaultValue: 'false'
		}
	],
	slots: [
		{
			default: true
		}
	]
};

export const sampleSize = `<script>
    import { Text } from 'svelte-stuff-kit';
</script>

<div>
    <Text size="1">Super long text (size 1)</Text>
    <Text size="2">Super long text (size 2)</Text>
    <Text size="3">Super long text (size 3)</Text>
    <Text size="4">Super long text (size 4)</Text>
    <Text size="5">Super long text (size 5)</Text>
    <Text size="6">Super long text (size 6)</Text>
    <Text size="7">Super long text (size 7)</Text>
    <Text size="8">Super long text (size 8)</Text>
    <Text size="9">Super long text (size 9)</Text>
</div>
`;

export const sampleColor = `<script lang="ts">
    import { Text } from 'svelte-stuff-kit';
</script>

<div>
    <Text>Super long text (color undefined)</Text>
    <Text color="neutral">Super long text (color neutral)</Text>
    <Text color="primary">Super long text (color primary)</Text>
    <Text color="info">Super long text (color info)</Text>
    <Text color="success">Super long text (color success)</Text>
    <Text color="warning">Super long text (color warning)</Text>
    <Text color="danger">Super long text (color danger)</Text>
</div>
`;

export const sampleWeight = `<script lang="ts">
    import { Text } from 'svelte-stuff-kit';
</script>

<div>
    <Text weight="light">Super long text (weight light)</Text>
    <Text weight="regular">Super long text (weight regular)</Text>
    <Text weight="medium">Super long text (weight medium)</Text>
    <Text weight="bold">Super long text (weight bold)</Text>
</div>
`;

export const sampleAlign = `<script lang="ts">
    import { Text } from 'svelte-stuff-kit';
</script>

<div>
    <Text align="start">Super long text (align start)</Text>
    <Text align="center">Super long text (align center)</Text>
    <Text align="end">Super long text (align end)</Text>
</div>
`;

export const sampleRequired = `<script lang="ts">
    import { Text } from 'svelte-stuff-kit';
</script>

<div>
    <Text required>Super long text</Text>
</div>
`;

export const sampleDisabled = `<script lang="ts">
    import { Text } from 'svelte-stuff-kit';
</script>

<div>
    <Text disabled>Super long text</Text>
</div>
`;
