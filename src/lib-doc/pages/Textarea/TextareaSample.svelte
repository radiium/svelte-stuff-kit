<script lang="ts">
	import { Flexbox, Text, Textarea } from '$lib';
	import { sampleDisabled, sampleSize } from '.';
	import DocBlocCode from '../../components/DocBlocCode.svelte';
</script>

<Flexbox direction="column" gap="5">
	<DocBlocCode title="Size" code={sampleSize}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Flexbox direction="column" gap="2">
				<Text size="1">Input text size 1</Text>
				<Textarea type="text" placeholder="text" size="1" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text size="2">Input text size 2</Text>
				<Textarea type="text" placeholder="text" size="2" />
			</Flexbox>

			<Flexbox direction="column" gap="2">
				<Text size="3">Input text size 3</Text>
				<Textarea type="text" placeholder="text" size="3" />
			</Flexbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Disabled" code={sampleDisabled}>
		<Flexbox slot="demo" direction="column" gap="2" alignItems="start">
			<Textarea
				type="text"
				placeholder="text"
				value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				disabled
			/>
		</Flexbox>
	</DocBlocCode>
</Flexbox>
