<script lang="ts">
	import { Flexbox, RadioButton, Card } from '$lib/index';
	import { sampleInCard, sampleColor, sampleDisabled, sampleSize, sampleWithoutLabel } from './index';
	import DocBlocCode from '../../components/DocBlocCode.svelte';

	let groupSize;
	let groupCard;
</script>

<Flexbox direction="column" alignItems="start" gap="5">
	<DocBlocCode title="Size" code={sampleSize}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<RadioButton bind:group={groupSize} value="1" size="1">Size 1</RadioButton>
			<RadioButton bind:group={groupSize} value="2" size="2">Size 2</RadioButton>
			<RadioButton bind:group={groupSize} value="3" size="3">Size 3</RadioButton>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Color" code={sampleColor}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<RadioButton color="neutral">Color neutral</RadioButton>
			<RadioButton color="primary">Color primary</RadioButton>
			<RadioButton color="info">Color info</RadioButton>
			<RadioButton color="success">Color success</RadioButton>
			<RadioButton color="warning">Color warning</RadioButton>
			<RadioButton color="danger">Color danger</RadioButton>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Without label" code={sampleWithoutLabel}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<RadioButton />
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="In card" code={sampleInCard}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Card as="label" asButton>
				<RadioButton value={'1'} bind:group={groupCard}>Radio button in card 1</RadioButton>
			</Card>

			<Card as="label" asButton>
				<RadioButton value={'2'} bind:group={groupCard}>Radio button in card 2</RadioButton>
			</Card>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Disabled" code={sampleDisabled}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<RadioButton checked={false} disabled>Disabled</RadioButton>
			<RadioButton checked disabled>Disabled checked</RadioButton>
		</Flexbox>
	</DocBlocCode>
</Flexbox>
