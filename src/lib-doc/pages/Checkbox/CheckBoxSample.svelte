<script lang="ts">
	import { Card, Checkbox, Flexbox } from '$lib/index';
	import { sampleInCard, sampleColor, sampleDisabled, sampleSize, sampleWithoutLabel } from './index';
	import DocBlocCode from '../../components/DocBlocCode.svelte';
</script>

<Flexbox direction="column" alignItems="start" gap="5">
	<DocBlocCode title="Size" code={sampleSize}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Checkbox size="1">Size 1</Checkbox>
			<Checkbox size="2">Size 2</Checkbox>
			<Checkbox size="3">Size 3</Checkbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Color" code={sampleColor}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Checkbox checked color="neutral">Color neutral</Checkbox>
			<Checkbox checked color="primary">Color primary</Checkbox>
			<Checkbox checked color="info">Color info</Checkbox>
			<Checkbox checked color="success">Color success</Checkbox>
			<Checkbox checked color="warning">Color warning</Checkbox>
			<Checkbox checked color="danger">Color danger</Checkbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Without label" code={sampleWithoutLabel}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Checkbox />
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="In card" code={sampleInCard}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Card as="label" role="button">
				<Checkbox>Checkbox in card 1</Checkbox>
			</Card>

			<Card as="label" role="button">
				<Checkbox>Checkbox in card 2</Checkbox>
			</Card>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Disabled" code={sampleDisabled}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Checkbox checked={false} disabled>Disabled</Checkbox>
			<Checkbox checked disabled>Disabled checked</Checkbox>
		</Flexbox>
	</DocBlocCode>
</Flexbox>
