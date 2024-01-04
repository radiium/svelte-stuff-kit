import { docPropsRadioButton } from '$lib/components/RadioButton/RadioButton.props';
import { packageName } from '../../../constants';
import type { DocPageData } from '../../types';
import RadioButtonSample from './RadioButtonSample.svelte';

export const docRadioButton: DocPageData = {
	id: 'radio-button',
	title: 'Radio Button',
	demoTitle: 'Examples',
	demoComponent: RadioButtonSample,
	props: docPropsRadioButton,
	slots: [
		{
			default: true
		}
	]
};

export const sampleSize = `<script lang="ts">
    import { Flexbox, RadioButton } from '${packageName}';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <RadioButton size="1">Size 1</RadioButton>
    <RadioButton size="2">Size 2</RadioButton>
    <RadioButton size="3">Size 3</RadioButton>
</Flexbox>`;

export const sampleColor = `<script lang="ts">
    import { Flexbox, RadioButton } from '${packageName}';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <RadioButton color="neutral">Color neutral</RadioButton>
    <RadioButton color="primary">Color primary</RadioButton>
    <RadioButton color="info">Color info</RadioButton>
    <RadioButton color="success">Color success</RadioButton>
    <RadioButton color="warning">Color warning</RadioButton>
    <RadioButton color="danger">Color danger</RadioButton>
</Flexbox>`;

export const sampleWithoutLabel = `<script lang="ts">
    import { RadioButton } from '${packageName}';
</script>

<RadioButton/>
`;

export const sampleInCard = `<script lang="ts">
    import { Flexbox, Card, RadioButton } from '${packageName}';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Card as="label" role="button">
        <RadioButton value={'1'} bind:group={group1}>Radio button in card 1</RadioButton>
    </Card>

    <Card as="label" role="button">
        <RadioButton value={'2'} bind:group={group1}>Radio button in card 2</RadioButton>
    </Card>
</Flexbox>`;

export const sampleDisabled = `<script lang="ts">
    import { Flexbox, RadioButton } from '${packageName}';
</script>

<Flexbox  direction="column"  gap="3"alignItems="start">
    <RadioButton disabled />
    <RadioButton checked disabled />
</Flexbox>`;
