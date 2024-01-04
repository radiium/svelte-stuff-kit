import { docPropsCheckbox } from '$lib/components/Checkbox/Chekbox.props';
import { packageName } from '../../../constants';
import type { DocPageData } from '../../types';
import CheckBoxSample from './CheckBoxSample.svelte';

export const docCheckbox: DocPageData = {
	id: 'checkbox',
	title: 'Checkbox',
	description: '',
	demoTitle: 'Examples',
	demoComponent: CheckBoxSample,
	props: docPropsCheckbox,
	slots: [
		{
			default: true
		}
	]
};

export const sampleSize = `<script lang="ts">
    import { Flexbox, Checkbox } from '${packageName}';
</script>

<Flexbox direction="column" gap="3" alignItems="start">
    <Checkbox size="1">Size 1</Checkbox>
    <Checkbox size="2">Size 2</Checkbox>
    <Checkbox size="3">Size 3</Checkbox>
</Flexbox>`;

export const sampleColor = `<script lang="ts">
    import { Flexbox, Checkbox } from '${packageName}';
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
    import { Checkbox } from '${packageName}';
</script>

<Checkbox/>
`;

export const sampleInCard = `<script lang="ts">
    import { Flexbox, Card, Checkbox } from '${packageName}';
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
    import { Flexbox, Checkbox } from '${packageName}';
</script>

<Flexbox  direction="column"  gap="3"alignItems="start">
    <Checkbox disabled />
    <Checkbox checked disabled />
</Flexbox>`;
