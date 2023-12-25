<script lang="ts">
	import { Flexbox, Switch, Card } from '$lib/index';
	import { sampleInCard, sampleColor, sampleDisabled, sampleSize, sampleWithoutLabel } from './index';
	import DocBlocCode from '../../components/DocBlocCode.svelte';
</script>

<Flexbox direction="column" alignItems="start" gap="5">
	<DocBlocCode title="Size" code={sampleSize}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Switch size="1">Size 1</Switch>
			<Switch size="2">Size 2</Switch>
			<Switch size="3">Size 3</Switch>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Color" code={sampleColor}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Switch checked color="neutral">Color neutral</Switch>
			<Switch checked color="primary">Color primary</Switch>
			<Switch checked color="info">Color info</Switch>
			<Switch checked color="success">Color success</Switch>
			<Switch checked color="warning">Color warning</Switch>
			<Switch checked color="danger">Color danger</Switch>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Without label" code={sampleWithoutLabel}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Switch />
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="As card" code={sampleInCard}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Card as="label" role="button">
				<Switch>Switch in card 1</Switch>
			</Card>

			<Card as="label" role="button">
				<Switch>Switch in card 2</Switch>
			</Card>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Disabled" code={sampleDisabled}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Switch checked={false} disabled>Disabled</Switch>
			<Switch checked disabled>Disabled checked</Switch>
		</Flexbox>
	</DocBlocCode>
</Flexbox>
