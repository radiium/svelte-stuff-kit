import { docSwitchProps } from '$lib/components/Switch/Switch.props';
import { packageName } from '../../../constants';
import type { DocPageData } from '../../types';
import SwitchSample from './SwitchSample.svelte';

export const docSwitch: DocPageData = {
	id: 'switch',
	title: 'Switch',
	demoTitle: 'Examples',
	demoComponent: SwitchSample,
	props: docSwitchProps,
	slots: [
		{
			default: true
		}
	]
};

export const sampleSize = `<script lang="ts">
    import { Flexbox, Switch } from '${packageName}';
</script>

<Flexbox gap="3" alignItems="center">
    <Switch size="1" />
    <Switch size="2" />
    <Switch size="3" />
</Flexbox>`;

export const sampleColor = `<script lang="ts">
    import { Flexbox, Switch } from '${packageName}';
</script>

<Flexbox gap="3" alignItems="center">
    <Switch checked color="neutral" />
    <Switch checked color="primary" />
    <Switch checked color="blue" />
    <Switch checked color="green" />
    <Switch checked color="yellow" />
    <Switch checked color="orange" />
    <Switch checked color="red" />
</Flexbox>`;

export const sampleWithLabel = `<script lang="ts">
    import { Switch, Text } from '${packageName}';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Flexbox as="label" gap="2" alignItems="center">
        <Switch />
        <Text size="2">label</Text>
    </Flexbox>
</Flexbox>`;

export const sampleInCard = `<script lang="ts">
    import { Flexbox, Card, Switch, Text } from '${packageName}';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Card as="label" size="1">
        <Flexbox gap="2" alignItems="center">
            <Switch size="1" />
            <Text size="1">Switch in card 1</Text>
        </Flexbox>
    </Card>

    <Card as="label" size="3">
        <Flexbox gap="2" alignItems="center">
            <Switch size="3" />
            <Text size="3">Switch in card 2</Text>
        </Flexbox>
    </Card>
</Flexbox>`;

export const sampleDisabled = `<script lang="ts">
    import { Flexbox, Switch, Text } from '${packageName}';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Flexbox as="label" gap="2" alignItems="center">
        <Switch size="1" disabled />
        <Text size="2" disabled>Disabled</Text>
    </Flexbox>

    <Flexbox as="label" gap="2" alignItems="center">
        <Switch size="1" disabled checked />
        <Text size="2" disabled>Disabled checked</Text>
    </Flexbox>
</Flexbox>`;
