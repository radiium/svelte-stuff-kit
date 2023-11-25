import type { DocPageData } from '../../types';
import CheckBoxSample from './CheckBoxSample.svelte';

export const docCheckbox: DocPageData = {
	id: 'checkbox',
	title: 'Checkbox',
	description: '',
	demoTitle: 'Examples',
	demoComponent: CheckBoxSample,
	props: [
		{
			name: 'elementRef',
			type: 'HTMLInputElement | undefined'
		},
		{
			name: 'value',
			type: 'string | undefined'
		},
		{
			name: 'checked',
			type: 'boolean',
			defaultValue: 'false'
		},
		{
			name: 'indeterminate',
			type: 'boolean',
			defaultValue: 'false'
		},
		{
			name: 'size',
			type: '"1" | "2" | "3"',
			defaultValue: '2'
		},
		{
			name: 'color',
			type: '"neutral" | "primary" | "info" | "success" | "warning" | "danger"',
			defaultValue: 'neutral'
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
		},
		{
			name: 'error',
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

export const sampleSize = `<script lang="ts">
    import { Flexbox, Checkbox } from 'svelte-stuff-kit';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Checkbox size="1">Size 1</Checkbox>
    <Checkbox size="2">Size 2</Checkbox>
    <Checkbox size="3">Size 3</Checkbox>
</Flexbox>`;

export const sampleColor = `<script lang="ts">
    import { Flexbox, Checkbox } from 'svelte-stuff-kit';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Checkbox checked color="neutral">Color neutral</Checkbox>
    <Checkbox checked color="primary">Color primary</Checkbox>
    <Checkbox checked color="info">Color info</Checkbox>
    <Checkbox checked color="success">Color success</Checkbox>
    <Checkbox checked color="warning">Color warning</Checkbox>
    <Checkbox checked color="danger">Color danger</Checkbox>
</Flexbox>`;

export const sampleWithoutLabel = `<script lang="ts">
    import { Checkbox } from 'svelte-stuff-kit';
</script>

<Checkbox/>
`;

export const sampleInCard = `<script lang="ts">
    import { Flexbox, Card, Checkbox } from 'svelte-stuff-kit';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Card as="label" role="button">
        <Checkbox >Checkbox in card 1</Checkbox>
    </Card>

    <Card as="label" role="button">
        <Checkbox>Checkbox in card 2</Checkbox>
    </Card>
</Flexbox>`;

export const sampleDisabled = `<script lang="ts">
    import { Flexbox, Checkbox } from 'svelte-stuff-kit';
</script>

<Flexbox  direction="column"  gap="3"alignItems="start">
    <Checkbox disabled />
    <Checkbox checked disabled />
</Flexbox>`;
