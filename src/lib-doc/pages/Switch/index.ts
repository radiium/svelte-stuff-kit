import { docPropsSwitch } from '$lib/components/Switch/Switch.props';
import { packageName } from '../../../constants';
import type { DocPageData } from '../../types';
import SwitchSample from './SwitchSample.svelte';

export const docSwitch: DocPageData = {
	id: 'switch',
	title: 'Switch',
	demoTitle: 'Examples',
	demoComponent: SwitchSample,
	props: docPropsSwitch,
	slots: [
		{
			default: true
		}
	]
};

export const sampleSize = `<script lang="ts">
    import { Flexbox, Switch } from '${packageName}';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Switch size="1">Size 1</Switch>
    <Switch size="2">Size 2</Switch>
    <Switch size="3">Size 3</Switch>
</Flexbox>`;

export const sampleColor = `<script lang="ts">
    import { Flexbox, Switch } from '${packageName}';
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
    import { Switch } from '${packageName}';
</script>

<Switch/>
`;

export const sampleInCard = `<script lang="ts">
    import { Flexbox, Card, Switch } from '${packageName}';
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
    import { Flexbox, Switch } from '${packageName}';
</script>

<Flexbox  direction="column"  gap="3"alignItems="start">
    <Switch disabled />
    <Switch checked disabled />
</Flexbox>`;
