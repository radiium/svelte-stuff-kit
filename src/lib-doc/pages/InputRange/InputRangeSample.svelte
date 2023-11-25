<script lang="ts">
	import { Flexbox, InputRange, Text } from '$lib';
	import { sampleDisabled, sampleOptions, sampleSize } from '.';
	import DocBlocCode from '../../components/DocBlocCode.svelte';
</script>

<Flexbox direction="column" alignItems="start" gap="5">
	<DocBlocCode title="Size" code={sampleSize}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			TODO...
			<Flexbox direction="column" alignItems="start" gap="2">
				<Text>Size 1</Text>
				<InputRange size="1" />
			</Flexbox>

			<Flexbox direction="column" alignItems="start" gap="2">
				<Text>Size 2</Text>
				<InputRange size="2" />
			</Flexbox>

			<Flexbox direction="column" alignItems="start" gap="2">
				<Text>Size 3</Text>
				<InputRange size="3" />
			</Flexbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Options" code={sampleOptions}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Flexbox direction="column" alignItems="start" gap="2">
				<Text>min=-100 max=100</Text>
				<InputRange value={33} min={-100} max={100} />
			</Flexbox>
			<Flexbox direction="column" alignItems="start" gap="2">
				<Text>min=0 max=10</Text>
				<InputRange value={2} min={0} max={10} />
			</Flexbox>
			<Flexbox direction="column" alignItems="start" gap="2">
				<Text>step=25</Text>
				<InputRange value={25} step={25} />
			</Flexbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Disabled" code={sampleDisabled}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<InputRange disabled />
		</Flexbox>
	</DocBlocCode>
</Flexbox>
