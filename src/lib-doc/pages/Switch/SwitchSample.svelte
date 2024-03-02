<script lang="ts">
	import { Flexbox, Switch, Card } from '$lib/index';
	import { sampleInCard, sampleColor, sampleDisabled, sampleSize, sampleWithLabel } from './index';
	import DocBlocCode from '../../components/DocBlocCode.svelte';
	import Text from '$lib/components/Text/Text.svelte';
</script>

<Flexbox direction="column" alignItems="start" gap="5">
	<DocBlocCode title="Size" code={sampleSize}>
		<Flexbox slot="demo" gap="3" alignItems="center">
			<Switch size="1" />
			<Switch size="2" />
			<Switch size="3" />
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Color" code={sampleColor}>
		<Flexbox slot="demo" gap="3" alignItems="center">
			<Switch checked color="neutral" />
			<Switch checked color="primary" />
			<Switch checked color="blue" />
			<Switch checked color="green" />
			<Switch checked color="yellow" />
			<Switch checked color="orange" />
			<Switch checked color="red" />
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="With label" code={sampleWithLabel}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Flexbox as="label" gap="2" alignItems="center">
				<Switch />
				<Text size="2">label</Text>
			</Flexbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="As card" code={sampleInCard}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<label for="switch1">
				<Card size="1">
					<Flexbox gap="2" alignItems="center">
						<Switch id="switch1" size="1" />
						<Text size="1">Switch in card 1</Text>
					</Flexbox>
				</Card>
			</label>

			<label for="switch2">
				<Card size="3">
					<Flexbox gap="2" alignItems="center">
						<Switch id="switch2" size="3" />
						<Text size="3">Switch in card 2</Text>
					</Flexbox>
				</Card>
			</label>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Disabled" code={sampleDisabled}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Flexbox as="label" gap="2" alignItems="center">
				<Switch size="1" disabled />
				<Text size="2" disabled>Disabled</Text>
			</Flexbox>

			<Flexbox as="label" gap="2" alignItems="center">
				<Switch size="1" disabled checked />
				<Text size="2" disabled>Disabled checked</Text>
			</Flexbox>
		</Flexbox>
	</DocBlocCode>
</Flexbox>
