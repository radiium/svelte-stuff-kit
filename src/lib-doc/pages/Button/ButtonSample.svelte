<script lang="ts">
	import MagnifyingGlass from 'phosphor-svelte/lib/MagnifyingGlass';
	import Trash from 'phosphor-svelte/lib/Trash';
	import { Button, Colors, Flexbox, Sizes1To4, Variants } from '$lib/index';
	import DocBlocCode from '../../components/DocBlocCode.svelte';
	// import {
	// 	sample1,
	// 	sampleAlign,
	// 	sampleColor,
	// 	sampleFullWidth,
	// 	sampleIcon,
	// 	sampleMode,
	// 	sampleSize
	// } from './index';

	const variants = Variants;
	const sizes = Sizes1To4;
	const colors = Colors;

	const sample1 = `<Button>button</Button>`;

	const sampleSize = `<Button size="4">button</Button>
<Button size="3">button</Button>
<Button size="2">button</Button>
<Button size="1">button</Button>
`;

	const sampleMode = `

    <Button variant="solid">button</Button>
    <Button variant="soft">button</Button>
    <Button variant="outline">button</Button>
    <Button variant="clear">button</Button>
`;

	const sampleColor = `
    <Button color="neutral">button</Button>
    <Button color="primary">button</Button>
    <Button color="blue">button</Button>
    <Button color="green">button</Button>
    <Button color="yellow">button</Button>
    <Button color="orange">button</Button>
    <Button color="red">button</Button>
`;

	const sampleIcon = `
    <Button variant="clear">
        <MagnifyingGlass />
        button
    </Button>
    <Button color="primary">
        button
        <MagnifyingGlass />
    </Button>
	<Button color="blue" variant="soft" iconOnly>
        <MagnifyingGlass />
    </Button>
	<Button color="primary" iconOnly>
        <MagnifyingGlass />
    </Button>
	<Button color="red" iconOnly circle>
        <Trash />
    </Button>
`;

	const sampleFullWidth = `
<Button fullWidth>Button</Button>
`;
	const sampleAlign = `
<Button align="start">Button</Button>
<Button align="center">Button</Button>
<Button align="end">Button</Button>
`;
</script>

<Flexbox direction="column" gap="5">
	<DocBlocCode title="Simple" code={sample1} language="svelte">
		<Button slot="demo" type="reset">Button</Button>
	</DocBlocCode>

	<DocBlocCode title="Size" code={sampleSize} language="svelte">
		<Flexbox slot="demo" alignItems="center" gap="3">
			<Button size="4">button</Button>
			<Button size="3">button</Button>
			<Button size="2">button</Button>
			<Button size="1">button</Button>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Mode" code={sampleMode}>
		<Flexbox slot="demo" alignItems="center" gap="3">
			<Button variant="solid">button</Button>
			<Button variant="soft">button</Button>
			<Button variant="outline">button</Button>
			<Button variant="clear">button</Button>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="Color" code={sampleColor}>
		<Flexbox slot="demo" alignItems="center" gap="3">
			<Button color="neutral">button</Button>
			<Button color="primary">button</Button>
			<Button color="blue">button</Button>
			<Button color="green">button</Button>
			<Button color="yellow">button</Button>
			<Button color="orange">button</Button>
			<Button color="red">button</Button>
		</Flexbox>
	</DocBlocCode>

	<DocBlocCode title="With icons" code={sampleIcon}>
		<Flexbox slot="demo" alignItems="center" gap="3">
			<Button variant="clear">
				<MagnifyingGlass />
				button
			</Button>
			<Button color="primary">
				button
				<MagnifyingGlass />
			</Button>

			<Button size="1" color="blue" iconOnly>
				<MagnifyingGlass />
			</Button>
			<Button size="3" color="yellow" variant="soft" iconOnly circle>
				<MagnifyingGlass />
			</Button>
			<Button size="4" color="red" iconOnly circle>
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
				{#each variants as variant}
					<Flexbox gap="3" wrap="wrap">
						<div>{variant}</div>
						{#each sizes as size}
							<Button {variant} {size} {color}>Button</Button>
						{/each}

						{#each sizes as size}
							<Button {variant} {size} {color} disabled>Button</Button>
						{/each}
					</Flexbox>
				{/each}

				<h5 class="no-m">Button {color} + iconOnly</h5>
				{#each variants as variant}
					<Flexbox gap="3" wrap="wrap">
						<div>{variant}</div>
						{#each sizes as size}
							<Button {variant} {size} {color} iconOnly>
								<MagnifyingGlass />
							</Button>
						{/each}

						{#each sizes as size}
							<Button {variant} {size} {color} iconOnly disabled>
								<MagnifyingGlass />
							</Button>
						{/each}
					</Flexbox>
				{/each}

				<h5 class="no-m">Button {color} + iconOnly + circle</h5>
				{#each variants as variant}
					<Flexbox gap="3">
						<div>{variant}</div>
						{#each sizes as size}
							<Button {variant} {size} {color} iconOnly circle>
								<MagnifyingGlass />
							</Button>
						{/each}

						{#each sizes as size}
							<Button {variant} {size} {color} iconOnly circle disabled>
								<MagnifyingGlass />
							</Button>
						{/each}
					</Flexbox>
				{/each}
			{/each}
		</Flexbox>
	</DocBlocCode>
</Flexbox>
