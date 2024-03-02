<script lang="ts">
	import { Card, Checkbox, Flexbox } from '$lib/index';
	import { sampleInCard, sampleColor, sampleDisabled, sampleSize, sampleWithLabel } from './index';
	import DocBlocCode from '../../components/DocBlocCode.svelte';
	import Text from '$lib/components/Text/Text.svelte';
</script>

<Flexbox direction="column" alignItems="start" gap="5">
	<DocBlocCode title="Size" code={sampleSize}>
		<Flexbox slot="demo" gap="3" alignItems="center">
			<Checkbox size="1" />
			<Checkbox size="2" />
			<Checkbox size="3" />
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Color" code={sampleColor}>
		<Flexbox slot="demo" gap="3" alignItems="center">
			<Checkbox checked color="neutral" />
			<Checkbox checked color="primary" />
			<Checkbox checked color="blue" />
			<Checkbox checked color="green" />
			<Checkbox checked color="yellow" />
			<Checkbox checked color="orange" />
			<Checkbox checked color="red" />
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="With label" code={sampleWithLabel}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Flexbox as="label" gap="2" alignItems="center">
				<Checkbox size="1" />
				<Text size="2">label</Text>
			</Flexbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="In card" code={sampleInCard}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<label for="chec1">
				<Card size="1">
					<Flexbox gap="2" alignItems="center">
						<Checkbox id="chec1" size="1" />
						<Text size="1">option</Text>
					</Flexbox>
				</Card>
			</label>

			<label for="chec2">
				<Card size="3">
					<Flexbox gap="2" alignItems="center">
						<Checkbox id="chec2" size="3" />
						<Text size="3">option</Text>
					</Flexbox>
				</Card>
			</label>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Disabled" code={sampleDisabled}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Flexbox as="label" gap="2" alignItems="center">
				<Checkbox size="1" disabled />
				<Text size="2" disabled>Disabled</Text>
			</Flexbox>

			<Flexbox as="label" gap="2" alignItems="center">
				<Checkbox size="1" disabled checked />
				<Text size="2" disabled>Disabled checked</Text>
			</Flexbox>
		</Flexbox>
	</DocBlocCode>
</Flexbox>
