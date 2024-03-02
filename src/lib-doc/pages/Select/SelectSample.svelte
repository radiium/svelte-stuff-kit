<script lang="ts">
	import { Flexbox, Text, Select, Checkbox } from '$lib/index';
	import { sampleDisabled, sampleMultiple, sampleSize } from './index';
	import DocBlocCode from '../../components/DocBlocCode.svelte';

	const options = [
		{ label: 'opt 1', value: 'opt 1' },
		{ label: 'opt 2', value: 'opt 2' },
		{ label: 'opt 3', value: 'opt 3' },
		{ label: 'opt 4', value: 'opt 4' }
	];

	let isDisabled: boolean = false;
</script>

<Flexbox direction="column" alignItems="start" gap="5">
	<DocBlocCode title="Size" code={sampleSize}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Flexbox direction="column" alignItems="start" gap="2">
				<Text>Size 1</Text>
				<Select {options} size="1" />
			</Flexbox>

			<Flexbox direction="column" alignItems="start" gap="2">
				<Text>Size 2</Text>
				<Select {options} size="2" />
			</Flexbox>

			<Flexbox direction="column" alignItems="start" gap="2">
				<Text>Size 3</Text>
				<Select {options} size="3" />
			</Flexbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Multiple" code={sampleMultiple}>
		<Flexbox slot="demo" direction="column" gap="2" alignItems="start">
			<Select value={[]} {options} multiple />
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Disabled" code={sampleDisabled}>
		<Flexbox slot="demo" direction="column" gap="3" alignItems="start">
			<Flexbox direction="column" gap="2" alignItems="start">
				<Text>Toggle disabled</Text>
				<Checkbox bind:checked={isDisabled} />
			</Flexbox>
			{isDisabled}

			<Flexbox direction="column" gap="2" alignItems="start">
				<Text>Disabled</Text>
				<Select {options} disabled={isDisabled} />
			</Flexbox>

			<Flexbox direction="column" gap="2" alignItems="start">
				<Text>Multiple disabled</Text>
				<Select {options} value={[]} multiple disabled />
			</Flexbox>
		</Flexbox>
	</DocBlocCode>
</Flexbox>
