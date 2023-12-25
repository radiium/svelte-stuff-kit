<script lang="ts">
	import { Flexbox, InputNumber, Text } from '$lib/index';
	import { sampleDisabled, sampleOptions, sampleSize } from './index';
	import DocBlocCode from '../../components/DocBlocCode.svelte';
</script>

<Flexbox direction="column" alignItems="start" gap="5">
	<DocBlocCode title="Size" code={sampleSize}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
            TODO...
			<Flexbox direction="column" alignItems="start" gap="2">
				<Text>Size 1</Text>
				<InputNumber size="1" />
			</Flexbox>

			<Flexbox direction="column" alignItems="start" gap="2">
				<Text>Size 2</Text>
				<InputNumber size="2" />
			</Flexbox>

			<Flexbox direction="column" alignItems="start" gap="2">
				<Text>Size 3</Text>
				<InputNumber size="3" />
			</Flexbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Options" code={sampleOptions}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Flexbox direction="column" alignItems="start" gap="2">
				<Text>min=0</Text>
				<InputNumber min={0} />
			</Flexbox>
			<Flexbox direction="column" alignItems="start" gap="2">
				<Text>max=10 value=5</Text>
				<InputNumber max={10} value={5} />
			</Flexbox>
			<Flexbox direction="column" alignItems="start" gap="2">
				<Text>step=5</Text>
				<InputNumber step={5} />
			</Flexbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Disabled" code={sampleDisabled}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<InputNumber disabled />
		</Flexbox>
	</DocBlocCode>
</Flexbox>
