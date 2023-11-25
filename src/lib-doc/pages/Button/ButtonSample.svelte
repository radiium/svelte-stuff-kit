<script lang="ts">
	import MagnifyingGlass from 'phosphor-svelte/lib/MagnifyingGlass';
	import Trash from 'phosphor-svelte/lib/Trash';
	import { Button, Flexbox, type PropColor, type PropMode, type PropSizeButton } from '$lib';
	import DocBlocCode from '../../components/DocBlocCode.svelte';
	import { sample1, sampleAlign, sampleColor, sampleFullWidth, sampleIcon, sampleMode, sampleSize } from '.';

	const modes: Array<PropMode> = ['solid', 'soft', 'outline', 'clear'];
	const sizes: Array<PropSizeButton> = ['1', '2', '3', '4'];
	const colors: Array<PropColor> = ['primary', 'neutral', 'info', 'success', 'warning', 'danger'];
</script>

<Flexbox direction="column" gap="5">
	<DocBlocCode title="Simple" code={sample1}>
		<Button slot="demo">Button</Button>
	</DocBlocCode>

	<DocBlocCode title="Size" code={sampleSize}>
		<Flexbox slot="demo" alignItems="center" gap="3">
			<Button size="4">button</Button>
			<Button size="3">button</Button>
			<Button size="2">button</Button>
			<Button size="1">button</Button>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Mode" code={sampleMode}>
		<Flexbox slot="demo" alignItems="center" gap="3">
			<Button mode="solid">button</Button>
			<Button mode="soft">button</Button>
			<Button mode="outline">button</Button>
			<Button mode="clear">button</Button>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Color" code={sampleColor}>
		<Flexbox slot="demo" alignItems="center" gap="3">
			<Button color="neutral">button</Button>
			<Button color="primary">button</Button>
			<Button color="info">button</Button>
			<Button color="success">button</Button>
			<Button color="warning">button</Button>
			<Button color="danger">button</Button>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="With icons" code={sampleIcon}>
		<Flexbox slot="demo" alignItems="center" gap="3">
			<Button mode="clear">
				<MagnifyingGlass />
				button
			</Button>
			<Button color="primary">
				button
				<MagnifyingGlass />
			</Button>

			<Button size="1" color="info" iconOnly>
				<MagnifyingGlass />
			</Button>
			<Button size="3" color="warning" mode="soft" iconOnly circle>
				<MagnifyingGlass />
			</Button>
			<Button size="4" color="danger" iconOnly circle>
				<Trash />
			</Button>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Full width" code={sampleFullWidth}>
		<Flexbox slot="demo" direction="column" gap="3">
			<Button fullWidth>Button</Button>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Align" code={sampleAlign}>
		<Flexbox slot="demo" direction="column" alignItems="start" gap="3">
			<Button align="start" fullWidth>Button</Button>
			<Button align="center" fullWidth>Button</Button>
			<Button align="end" fullWidth>Button</Button>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="All examples" code="">
		<Flexbox slot="demo" direction="column" gap="3">
			{#each colors as color}
				<h5>Button {color}</h5>
				{#each modes as mode}
					<Flexbox gap="3" wrap="wrap">
						<div>{mode}</div>
						{#each sizes as size}
							<Button {mode} {size} {color}>Button</Button>
						{/each}

						{#each sizes as size}
							<Button {mode} {size} {color} disabled>Button</Button>
						{/each}
					</Flexbox>
				{/each}

				<h5 class="no-m">Button {color} + iconOnly</h5>
				{#each modes as mode}
					<Flexbox gap="3" wrap="wrap">
						<div>{mode}</div>
						{#each sizes as size}
							<Button {mode} {size} {color} iconOnly>
								<MagnifyingGlass />
							</Button>
						{/each}

						{#each sizes as size}
							<Button {mode} {size} {color} iconOnly disabled>
								<MagnifyingGlass />
							</Button>
						{/each}
					</Flexbox>
				{/each}

				<h5 class="no-m">Button {color} + iconOnly + circle</h5>
				{#each modes as mode}
					<Flexbox gap="3">
						<div>{mode}</div>
						{#each sizes as size}
							<Button {mode} {size} {color} iconOnly circle>
								<MagnifyingGlass />
							</Button>
						{/each}

						{#each sizes as size}
							<Button {mode} {size} {color} iconOnly circle disabled>
								<MagnifyingGlass />
							</Button>
						{/each}
					</Flexbox>
				{/each}
			{/each}
		</Flexbox>
	</DocBlocCode>
</Flexbox>
