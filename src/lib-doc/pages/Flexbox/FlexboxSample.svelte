<script lang="ts">
	import { Flexbox } from '$lib/index';
	import { sampleAlign, sampleDirection, sampleGap, sampleJustify } from './index';
	import DocBlocCode from '../../components/DocBlocCode.svelte';
	import BlocsDemo from './BlocsDemo.svelte';
</script>

<Flexbox direction="column" gap="3">
	<DocBlocCode title="Gap" code={sampleGap}>
		<Flexbox slot="demo" direction="column" gap="3">
			<Flexbox>
				<BlocsDemo />
			</Flexbox>

			<Flexbox gap="1">
				<BlocsDemo />
			</Flexbox>

			<Flexbox gap="2">
				<BlocsDemo />
			</Flexbox>

			<Flexbox gap="3">
				<BlocsDemo />
			</Flexbox>

			<Flexbox gap="4">
				<BlocsDemo />
			</Flexbox>

			<Flexbox gap="5">
				<BlocsDemo />
			</Flexbox>

			<Flexbox gap="6">
				<BlocsDemo />
			</Flexbox>

			<Flexbox gap="7">
				<BlocsDemo />
			</Flexbox>

			<Flexbox gap="8">
				<BlocsDemo />
			</Flexbox>

			<Flexbox gap="9">
				<BlocsDemo />
			</Flexbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Direction" code={sampleDirection}>
		<Flexbox slot="demo" direction="column" gap="3">
			Row
			<Flexbox direction="row" gap="3">
				<BlocsDemo />
			</Flexbox>

			Row reverse
			<Flexbox direction="row-reverse" gap="3">
				<BlocsDemo />
			</Flexbox>

			Column
			<Flexbox direction="column" gap="3">
				<BlocsDemo />
			</Flexbox>

			Column reverse
			<Flexbox direction="column-reverse" gap="3">
				<BlocsDemo />
			</Flexbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Justify" code={sampleJustify}>
		<Flexbox slot="demo" direction="column" gap="3">
			Normal
			<Flexbox justify="normal" gap="3">
				<BlocsDemo />
			</Flexbox>

			Start
			<Flexbox justify="start" gap="3">
				<BlocsDemo />
			</Flexbox>

			Center
			<Flexbox justify="center" gap="3">
				<BlocsDemo />
			</Flexbox>

			End
			<Flexbox justify="end" gap="3">
				<BlocsDemo />
			</Flexbox>

			Around
			<Flexbox justify="around" gap="3">
				<BlocsDemo />
			</Flexbox>

			Between
			<Flexbox justify="between" gap="3">
				<BlocsDemo />
			</Flexbox>

			Evenly
			<Flexbox justify="evenly" gap="3">
				<BlocsDemo />
			</Flexbox>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Align items" code={sampleAlign}>
		<Flexbox slot="demo" direction="column" gap="3">
			Normal
			<Flexbox alignItems="normal" gap="3" style="height: 200px;">
				<BlocsDemo />
			</Flexbox>

			Start
			<Flexbox alignItems="start" gap="3" style="height: 200px;">
				<BlocsDemo />
			</Flexbox>

			Center
			<Flexbox alignItems="center" gap="3" style="height: 200px;">
				<BlocsDemo />
			</Flexbox>

			End
			<Flexbox alignItems="end" gap="3" style="height: 200px;">
				<BlocsDemo />
			</Flexbox>

			Baseline
			<Flexbox alignItems="baseline" gap="3" style="height: 200px;">
				<BlocsDemo />
			</Flexbox>

			Stretch
			<Flexbox alignItems="stretch" gap="3" style="height: 200px;">
				<BlocsDemo />
			</Flexbox>
		</Flexbox>
	</DocBlocCode>
</Flexbox>