import { docRadioButtonProps } from '$lib/components/RadioButton/RadioButton.props';
import { packageName } from '../../../constants';
import type { DocPageData } from '../../types';
import RadioButtonSample from './RadioButtonSample.svelte';

export const docRadioButton: DocPageData = {
	id: 'radio-button',
	title: 'Radio Button',
	demoTitle: 'Examples',
	demoComponent: RadioButtonSample,
	props: docRadioButtonProps,
	slots: [
		{
			default: true
		}
	]
};

export const sampleSize = `<script lang="ts">
    import { Flexbox, RadioButton } from '${packageName}';
</script>

<Flexbox gap="3" alignItems="center">
    <RadioButton bind:group={groupSize} value="1" size="1" />
    <RadioButton bind:group={groupSize} value="2" size="2" />
    <RadioButton bind:group={groupSize} value="3" size="3" />
</Flexbox>`;

export const sampleColor = `<script lang="ts">
    import { Flexbox, RadioButton } from '${packageName}';
</script>

<Flexbox gap="3" alignItems="center">
    <RadioButton color="neutral" />
    <RadioButton color="primary" />
    <RadioButton color="blue" />
    <RadioButton color="green" />
    <RadioButton color="yellow" />
    <RadioButton color="orange" />
    <RadioButton color="red" />
</Flexbox>`;

export const sampleWithLabel = `<script lang="ts">
    import { Flexbox, RadioButton, Text } from '${packageName}';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Flexbox as="label" gap="2" alignItems="center">
        <RadioButton size="2" />
        <Text size="2">label</Text>
    </Flexbox>
</Flexbox>`;

export const sampleInCard = `<script lang="ts">
    import { Flexbox, Card, RadioButton, Text } from '${packageName}';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Card as="label" size="1">
        <Flexbox gap="2" alignItems="center">
            <RadioButton size="1" value={'2'} bind:group={groupCard} />
            <Text size="1">Radio button in card 1</Text>
        </Flexbox>
    </Card>

    <Card as="label" size="3">
        <Flexbox gap="2" alignItems="center">
            <RadioButton size="3" value={'2'} bind:group={groupCard} />
            <Text size="3">Radio button in card 2</Text>
        </Flexbox>
    </Card>
</Flexbox>`;

export const sampleDisabled = `<script lang="ts">
    import { Flexbox, RadioButton, Text } from '${packageName}';
    
    let groupDisabled = '2';
</script>

<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
    <Flexbox as="label" gap="2" alignItems="center">
        <RadioButton size="2" disabled bind:group={groupDisabled} value="1" />
        <Text size="2" disabled>Disabled</Text>
    </Flexbox>

    <Flexbox as="label" gap="2" alignItems="center">
        <RadioButton size="2" disabled bind:group={groupDisabled} value="2" />
        <Text size="2" disabled>Disabled checked</Text>
    </Flexbox>
</Flexbox>`;
