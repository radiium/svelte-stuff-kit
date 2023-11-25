import type { DocPageData } from '../../types';
import SwitchSample from './SwitchSample.svelte';

export const docSwitch: DocPageData = {
	id: 'switch',
	title: 'Switch',
	demoTitle: 'Examples',
	demoComponent: SwitchSample,
	props: [
		{
			name: 'elementRef',
			type: 'HTMLSelectElement | undefined'
		},
		{
			name: 'value',
			type: 'any | undefined' // SelectOption
		},
		{
			name: 'checked',
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
    import { Flexbox, Switch } from 'svelte-stuff-kit';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Switch size="1">Size 1</Switch>
    <Switch size="2">Size 2</Switch>
    <Switch size="3">Size 3</Switch>
</Flexbox>`;

export const sampleColor = `<script lang="ts">
    import { Flexbox, Switch } from 'svelte-stuff-kit';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Switch checked color="neutral">Color neutral</Switch>
    <Switch checked color="primary">Color primary</Switch>
    <Switch checked color="info">Color info</Switch>
    <Switch checked color="success">Color success</Switch>
    <Switch checked color="warning">Color warning</Switch>
    <Switch checked color="danger">Color danger</Switch>
</Flexbox>`;

export const sampleWithoutLabel = `<script lang="ts">
    import { Switch } from 'svelte-stuff-kit';
</script>

<Switch/>
`;

export const sampleInCard = `<script lang="ts">
    import { Flexbox, Card, Switch } from 'svelte-stuff-kit';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Card as="label" role="button">
        <Switch value={'1'} bind:group={group1}>Radio button in card 1</Switch>
    </Card>

    <Card as="label" role="button">
        <Switch value={'2'} bind:group={group1}>Radio button in card 2</Switch>
    </Card>
</Flexbox>`;

export const sampleDisabled = `<script lang="ts">
    import { Flexbox, Switch } from 'svelte-stuff-kit';
</script>

<Flexbox  direction="column"  gap="3"alignItems="start">
    <Switch disabled />
    <Switch checked disabled />
</Flexbox>`;
