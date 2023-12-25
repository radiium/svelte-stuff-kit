<script lang="ts">
	import { Flexbox, Text } from '$lib/index';
	import DocBlocCode from '../../components/DocBlocCode.svelte';
	import {
		sampleAlign,
		sampleColor,
		sampleDisabled,
		sampleRequired,
		sampleSize,
		sampleWeight
	} from './index';
</script>

<DocBlocCode title="Size" code={sampleSize}>
	<Flexbox slot="demo" direction="column" gap="3">
		<Text size="1">Super long text (size 1)</Text>
		<Text size="2">Super long text (size 2)</Text>
		<Text size="3">Super long text (size 3)</Text>
		<Text size="4">Super long text (size 4)</Text>
		<Text size="5">Super long text (size 5)</Text>
		<Text size="6">Super long text (size 6)</Text>
		<Text size="7">Super long text (size 7)</Text>
		<Text size="8">Super long text (size 8)</Text>
		<Text size="9">Super long text (size 9)</Text>
	</Flexbox>
</DocBlocCode>

<DocBlocCode title="Color" code={sampleColor}>
	<Flexbox slot="demo" direction="column" gap="3">
		<Text>Super long text (color undefined)</Text>
		<Text color="neutral">Super long text (color neutral)</Text>
		<Text color="primary">Super long text (color primary)</Text>
		<Text color="info">Super long text (color info)</Text>
		<Text color="success">Super long text (color success)</Text>
		<Text color="warning">Super long text (color warning)</Text>
		<Text color="danger">Super long text (color danger)</Text>
	</Flexbox>
</DocBlocCode>

<DocBlocCode title="Weight" code={sampleWeight}>
	<Flexbox slot="demo" direction="column" gap="3">
		<Text weight="light">Super long text (weight light)</Text>
		<Text weight="regular">Super long text (weight regular)</Text>
		<Text weight="medium">Super long text (weight medium)</Text>
		<Text weight="bold">Super long text (weight bold)</Text>
	</Flexbox>
</DocBlocCode>

<DocBlocCode title="Align" code={sampleAlign}>
	<Flexbox slot="demo" direction="column" gap="3">
		<Text align="start">Super long text (align start)</Text>
		<Text align="center">Super long text (align center)</Text>
		<Text align="end">Super long text (align end)</Text>
	</Flexbox>
</DocBlocCode>

<DocBlocCode title="Required" code={sampleRequired}>
	<Flexbox slot="demo" direction="column" gap="3">
		<Text required>Label required</Text>
	</Flexbox>
</DocBlocCode>

<DocBlocCode title="Disabled" code={sampleDisabled}>
	<Flexbox slot="demo" direction="column" gap="3">
		<Text disabled>Label disabled</Text>
	</Flexbox>
</DocBlocCode>
