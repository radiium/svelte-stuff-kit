import { docCheckboxProps } from '$lib/components/Checkbox/Chekbox.props';
import { packageName } from '../../../constants';
import type { DocPageData } from '../../types';
import CheckBoxSample from './CheckBoxSample.svelte';

export const docCheckbox: DocPageData = {
	id: 'checkbox',
	title: 'Checkbox',
	description: '',
	demoTitle: 'Examples',
	demoComponent: CheckBoxSample,
	props: docCheckboxProps,
	slots: [
		{
			default: true
		}
	]
};

export const sampleSize = `<script lang="ts">
    import { Flexbox, Checkbox } from '${packageName}';
</script>

<Flexbox gap="3" alignItems="center">
    <Checkbox size="1" />
    <Checkbox size="2" />
    <Checkbox size="3" />
</Flexbox>`;

export const sampleColor = `<script lang="ts">
    import { Flexbox, Checkbox } from '${packageName}';
</script>

<Flexbox gap="3" alignItems="center">
    <Checkbox checked color="neutral" />
    <Checkbox checked color="primary" />
    <Checkbox checked color="blue" />
    <Checkbox checked color="green" />
    <Checkbox checked color="yellow" />
    <Checkbox checked color="orange" />
    <Checkbox checked color="red" />
</Flexbox>`;

export const sampleWithLabel = `<script lang="ts">
    import { Checkbox, Text } from '${packageName}';
</script>

<Flexbox as="label" gap="2" alignItems="center">
    <Checkbox size="1" />
    <Text size="2">label</Text>
</Flexbox>`;

export const sampleInCard = `<script lang="ts">
    import { Flexbox, Card, Checkbox, Text } from '${packageName}';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Card as="label" size="1">
        <Flexbox gap="2" alignItems="center">
            <Checkbox size="1" />
            <Text size="1">option</Text>
        </Flexbox>
    </Card>

    <Card as="label" size="3">
        <Flexbox gap="2" alignItems="center">
            <Checkbox size="3" />
            <Text size="3">option</Text>
        </Flexbox>
    </Card>
</Flexbox>`;

export const sampleDisabled = `<script lang="ts">
    import { Flexbox, Checkbox, Text } from '${packageName}';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Flexbox as="label" gap="2" alignItems="center">
        <Checkbox size="1" disabled />
        <Text size="2" disabled>Disabled</Text>
    </Flexbox>

    <Flexbox as="label" gap="2" alignItems="center">
        <Checkbox size="1" disabled checked />
        <Text size="2" disabled>Disabled checked</Text>
    </Flexbox>
</Flexbox>`;
